import React, {useEffect} from 'react'
import './Header.module.scss'
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss"
import logo from "../../assets/img/Logotype.png"
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux/auth-slice";
import axios from "axios";
import {API} from "../../api/api";

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            dispatch(authActions.login(true))
        }
    }, [isAuth]);

    API.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
            console.log('сработал intercepter')
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    const logoutHandle = async () => {
        const refresh_token = localStorage.getItem('refresh_token');
        // API.post('auth/logout/', {refresh_token}, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Token ${localStorage.getItem('access_token')}`
        //     },
        // })
        //     .then(response => {
        //         // handle success
        //         localStorage.clear()
        //         // window.location.href = '/login'
        //     })
        //     .catch(error => {
        //         // handle error
        //         console.log(error);
        //     });
        try {
            const result = await API.get('auth/my-profile/')
            console.log(result)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className={s.wrapper}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 d-flex justify-content-center">
                        <NavLink to="/" className="text-decoration-none">
                            <img src={logo}/>
                        </NavLink>
                    </div>
                    <div className="col-lg-7">
                        <nav className="nav">
                            <NavLink to="/prices" className = { navData => navData.isActive ? s.active : s.nav_link }>PRICE</NavLink>
                            <NavLink to="/about_us" className = { navData => navData.isActive ? s.active : s.nav_link }>ABOUT US</NavLink>
                            <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.nav_link }>NEWS</NavLink>
                            <NavLink to="/contacts" className = { navData => navData.isActive ? s.active : s.nav_link }>CONTACTS</NavLink>
                            <NavLink to="/specials" className = { navData => navData.isActive ? s.active : s.nav_link }>SPECIALS</NavLink>
                            <NavLink to="/faq" className = { navData => navData.isActive ? s.active : s.nav_link }>FAQ</NavLink>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className={s.account}>
                            {isAuth ?
                                <div
                                    className={`btn-gradient ${s.register}`}
                                    onClick={() => logoutHandle()}
                                >
                                    LOGOUT
                                </div>
                                :
                                <>
                                    <NavLink to="/login" className="text-decoration-none"><div className={s.login}>Login</div></NavLink>
                                    <NavLink to="/register" className="text-decoration-none"><div className={`btn-gradient ${s.register}`}>Register</div></NavLink>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header