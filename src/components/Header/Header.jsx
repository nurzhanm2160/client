import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 d-flex justify-content-center">
                        <NavLink to="/" className="text-decoration-none">
                            <div className="brand">Shorta.</div>
                        </NavLink>
                    </div>
                    <div className="col-lg-7">
                        <nav className="nav">
                            <NavLink to="/prices" className="text-decoration-none"><div className="nav-link">PRICE</div></NavLink>
                            <NavLink to="/about_us" className="nav-link">ABOUT US</NavLink>
                            <NavLink to="/news" className="nav-link">NEWS</NavLink>
                            <NavLink to="/contacts" className="nav-link">CONTACTS</NavLink>
                            <NavLink to="/specials" className="nav-link">SPECIALS</NavLink>
                            <NavLink to="/faq" className="nav-link">FAQ</NavLink>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="account">
                            <NavLink to="/login" className="text-decoration-none"><div className="login">Login</div></NavLink>
                            <NavLink to="/register" className="text-decoration-none"><div className="register btn-gradient">Register</div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header