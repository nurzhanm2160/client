import React from 'react';
import s from "./ContactsPage.module.scss"
import {Stats} from "../../components/Stats/Stats";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const ContactsPage = (props) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className={`container ${s.contacts}`}>
                <div className={s.email}>
                    <h2 className="section-headline">Contacts</h2>
                    <p className="section-subhead">We will answer to all your questions</p>
                    <a href="SHORTA-CC@PROTONMAIL.COM" className={s.email_link}>SHORTA-CC@PROTONMAIL.COM</a>
                    <p className="section-subhead">Response time up to 24 hours</p>
                </div>
                <Stats/>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default ContactsPage;