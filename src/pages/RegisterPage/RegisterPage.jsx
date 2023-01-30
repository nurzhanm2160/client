import React from 'react';
import s from "./RegisterPage.module.scss"
import {NavLink} from "react-router-dom";
import img from "../../assets/img/login/login-img.png";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {registerThunk} from "../../redux/auth-slice";
import {useDispatch} from "react-redux";

const RegisterPage = () => {
    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        const {login, password} = data
        dispatch(registerThunk({login, password}))
    }

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={`container ${s.register}`}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <span className={s.title}>REGISTER</span>
                            <span className={s.description}>Register now and get  <span
                                className={s.badge}>180 Vh/s</span> for free!</span>
                        </div>
                        <div className="row">
                            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                                <div><input type="text"
                                            placeholder="Enter your EMail address" {...register("login", {required: true})}/>
                                </div>
                                <div><input type="password"
                                            placeholder="Enter your password" {...register("password", {required: true})}/>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <button className="btn-gradient">REGISTER</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row mt-4">
                            <NavLink to="/login" className={s.link}>
                                <span className={s.log_link}>Already have an account? Sign in!</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <img className={s.img} src={img}/>
                    </div>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default RegisterPage;