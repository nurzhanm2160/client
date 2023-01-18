import React from 'react';
import s from "./ConfirmPage.module.scss"
import {NavLink} from "react-router-dom";
import img from "../../assets/img/Telegram.png";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const ConfirmPage = () =>{

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={`container ${s.confirm}`}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <h2 className="section-headline text-primary">THUNK YOU!</h2>
                            <h2 className="section-headline">EMAIL CONFIRMED</h2>
                            <span className="section-subhead">You will be automatically redirect to the dashboard in 3 seconds</span>
                        </div>
                        <div className="row mt-4">
                            <NavLink to="/dashboard">
                                <button className={`btn-gradient ${s.button}`}>GO TO DASHBOARD</button>
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

export default ConfirmPage;