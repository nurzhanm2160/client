import React, {useEffect} from 'react';
import s from "./LoginPage.module.scss"
import img from "../../assets/img/login/login-img.png"
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../redux/user-slice"
import {useNavigate} from "react-router-dom";



const LoginPage = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit} = useForm()

    const onSubmit = async (formData) => {
        const {login, password} = formData
        dispatch(loginThunk({login, password}))
    }

    useEffect(() => {
        if (isAuth) {
            navigate("/dashboard/affiliate")
        }
    }, [isAuth])

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={`container ${s.login}`}>
                <div className="row align-items-center">
                    <div className={`col-lg-6 ${s.form_block}`}>
                        <div>
                            <div className="row">
                                <span className={s.title}>LOGIN</span>
                                <span className={s.description}>Login to get all the best benefits of our project!</span>
                            </div>
                            <div className="row">
                                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                                    <div><input type="email"
                                                placeholder="Enter your EMail address" {...register("login", {required: true})}/>
                                    </div>
                                    <div><input type="password"
                                                placeholder="Enter your password" {...register("password", {required: true})} />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn-gradient w-1/2">SIGN IN</button>
                                            <span className="w-1/2">Forgot password?</span>
                                    </div>
                                </form>
                            </div>
                            <div className="row mt-4">
                                <NavLink to="/register" className={s.link}>
                                    <span className={s.reg_link}>Already don’t have an account? Register!</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-6 d-flex justify-content-end`}>
                        <img className={s.img} src={img} alt="Login" />
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