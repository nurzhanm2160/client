import React from 'react';
import s from "./LoginPage.module.scss"
import img from "../../assets/img/login/login-img.png"
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";


const LoginPage = () => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={`container ${s.login}`}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <span className={s.title}>LOGIN</span>
                            <span className={s.description}>Login to get all the best benefits of our project!</span>
                        </div>
                        <div className="row">
                            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                                <div><input type="text"
                                            placeholder="Enter your EMail address" {...register("login", {required: true})}/>
                                </div>
                                <div><input type="text"
                                            placeholder="Enter your password" {...register("password", {required: true})}/>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <button className="btn-gradient">SIGN IN</button>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-lg-end">
                                        <span>Forgot password?</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row mt-4">
                            <NavLink to="/register" className={s.link}>
                                <span className={s.reg_link}>Already don’t have an account? Register!</span>
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

export default LoginPage;