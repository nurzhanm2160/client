import React from 'react';
import s from "./RegisterPage.module.scss"
import {NavLink} from "react-router-dom";
import img from "../../assets/img/login/login-img.png";
import {useForm} from "react-hook-form";

function RegisterPage(props) {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        alert(data)
    }

    return (
        <div className={s.register}>
            <div className="container">
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
        </div>
    );
}

export default RegisterPage;