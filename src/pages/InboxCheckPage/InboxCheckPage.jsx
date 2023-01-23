import React from 'react';
import s from "./InboxCheckPage.module.scss"
import {NavLink} from "react-router-dom";
import img from "../../assets/img/Telegram.png";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const InboxCheckPage = () =>{

    return (
        <>
            <header>
                <Header />
            </header>
            <div className={`container ${s.check}`}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <h2 className="section-headline text-primary">THUNK YOU!</h2>
                            <h2 className="section-headline">check your inbox</h2>
                            <span className="section-subhead">We’ve sent you a email with password and login of the platform</span>
                        </div>
                        <div className="row mt-4">
                            <NavLink to="/">
                                <button className={`btn-gradient ${s.button}`}>GO TO MAINE PAGE</button>
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

export default InboxCheckPage;