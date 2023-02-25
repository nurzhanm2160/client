import React, {useEffect, useState} from 'react';
import s from "./RegisterPage.module.scss"
import {NavLink, useSearchParams} from "react-router-dom";
import img from "../../assets/img/login/login-img.png";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {registerThunk} from "../../redux/user-slice";
import {useDispatch, useSelector} from "react-redux";
import {
    RegisterError,
    RegisterSuccessful,
} from "../../components/DepositMessages/DepositMessages/DepositMessages";

const RegisterPage = () => {
    const loading = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)
    const success = useSelector(state => state.user.success)
    const [registerSuccessful, setRegisterSuccessful] = useState(false)
    const [registerError, setRegisterError] = useState(false)
    const dispatch = useDispatch()
    let [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get('code') || ''
    const {register, handleSubmit, formState: {errors}} = useForm()


    useEffect(() => {
        if (error) {
            setRegisterError(true)
        } else if (success) {
            setRegisterSuccessful(true)
        }
    }, [error, success])


    const onSubmit = (data) => {
        const {login, password} = data
        dispatch(registerThunk({login, password, code}))
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
                                <div className="mb-3"><input style={errors.login ? {borderColor: "red"} : null} type="email"
                                            placeholder="Enter your EMail address" {...register("login", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}/>
                                    {errors.login ? <div className="text-danger fw-bold">{errors.login.message}</div> : null}
                                </div>
                                <div><input className="mb-4" type="password"
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
                        <img className={s.img} src={img} alt="img"/>
                    </div>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
            <RegisterSuccessful registerSuccessful={registerSuccessful}
                                setRegisterSuccessful={setRegisterSuccessful}/>
            <RegisterError registerError={registerError}
                           setRegisterError={setRegisterError}/>
        </>
    );
}

export default RegisterPage;