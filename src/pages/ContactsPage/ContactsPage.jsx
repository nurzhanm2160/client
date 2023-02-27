import React from 'react';
import s from "./ContactsPage.module.scss"
import {Stats} from "../../components/Stats/Stats";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const ContactsPage = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className={`container ${s.contacts}`}>
                <div className={s.email}>
                    <h2 className="section-headline">Contacts</h2>
                    <p className="section-subhead">We will answer to all your questions</p>
                    <div className={s.email_inf}>
                        <p className="section-subhead fs-2">You can send an email: </p>
                        <a href="mailto:ceo@bitroxmining.com" className="fs-2">ceo@bitroxmining.com</a>
                    </div>
                    <div className={s.telegram_inf}>
                        <p className="section-subhead fs-2">You can send an Telegram: </p>
                        <a href="https://t.me/bitroxmining" className="fs-2">t.me/bitroxmining</a>
                    </div>
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