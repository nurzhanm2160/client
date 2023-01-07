import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className="wrapper">
            <main className="main">
                <div className="top-line">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <NavLink to="/" className="top-line__brand">Shorta.</NavLink>
                            </div>
                            <div className="col-md-7">
                                <nav className="top-line__nav">
                                    <NavLink to="/prices" className="nav-link">Prices</NavLink>
                                    <NavLink to="/about_us" className="nav-link">ABOUT US</NavLink>
                                    <NavLink to="/news" className="nav-link">NEWS</NavLink>
                                    <NavLink to="/contacts" className="nav-link">CONTACTS</NavLink>
                                    <NavLink to="/specials" className="nav-link">SPECIALS</NavLink>
                                    <NavLink to="/faq" className="nav-link">FAQ</NavLink>
                                </nav>
                            </div>
                            <div className="col-md-3">
                                <div className="top-line__account">
                                    <NavLink to="/login" className="btn btn-outline-white">Login</NavLink>
                                    <NavLink to="/register" className="btn btn-gradient"><span>Register</span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}