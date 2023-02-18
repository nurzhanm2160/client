import React, {useEffect, useState} from 'react'
import './Header.module.scss'
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss"
import logo from "../../assets/img/Logotype.png"
import {useDispatch, useSelector} from "react-redux";
import {getUserData, logoutThunk} from "../../redux/auth-slice";
import {FiMenu, FiX} from "react-icons/fi";


const Header = () => {
    const [hamburger, setHamburger] = useState(false)
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    console.log('isAuth', isAuth)

    useEffect(() => {
        if (!isAuth) {
            return
        }
        dispatch(getUserData())
    }, [isAuth])


    const logoutHandle = async () => {
        const refreshToken = localStorage.getItem('refresh_token');
        dispatch(logoutThunk({refreshToken}))
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
                            <NavLink to="/about_us" className={navData => navData.isActive ? s.active : s.nav_link}>ABOUT
                                US</NavLink>
                            <NavLink to="/contacts"
                                     className={navData => navData.isActive ? s.active : s.nav_link}>CONTACTS</NavLink>
                            <NavLink to="/specials"
                                     className={navData => navData.isActive ? s.active : s.nav_link}>SPECIALS</NavLink>
                            <NavLink to="/faq"
                                     className={navData => navData.isActive ? s.active : s.nav_link}>FAQ</NavLink>
                        </nav>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center">
                        <div className={s.account}>
                            {isAuth
                                ?
                                <button className={`btn-gradient ${s.register}`} onClick={logoutHandle}>
                                    LOGOUT
                                </button>
                                :
                                <>
                                    <NavLink to="/login" className="text-decoration-none">
                                        <div className={s.login}>Login</div>
                                    </NavLink>
                                    <NavLink to="/register" className="text-decoration-none">
                                        <div className={`btn-gradient ${s.register}`}>Register</div>
                                    </NavLink>
                                </>
                            }
                        </div>
                        <div className={s.mobile}>
                            {hamburger
                                ? <FiMenu onClick={() => setHamburger(false)} size={30}/>
                                : <FiX onClick={() => setHamburger(true)} size={30}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header