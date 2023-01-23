import React from 'react';
import s from "./ErrorPage.module.scss"
import {NavLink} from "react-router-dom";
import img from "../../assets/img/error-404.png";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const ErrorPage = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <div className={`container ${s.error}`}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <h2 className="section-headline text-danger">ERROR 404</h2>
                            <h2 className="section-headline">page not found</h2>
                            <span className="section-subhead">You will be automatically redirect to the dashboard in 3 seconds</span>
                        </div>
                        <div className="row mt-4">
                            <NavLink to="/">
                                <button className={`btn-gradient ${s.button}`}>MANE PAGE</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <img className={s.img} src={img}/>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default ErrorPage;