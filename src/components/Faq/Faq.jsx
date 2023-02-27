import React, {useState} from 'react'
import s from "./Faq.module.scss"
import {NavLink} from "react-router-dom";
import arrowDown from "../../assets/img/news/down-arrow.png"
import minus from "../../assets/img/news/minus-button.png"

export const Faq = () => {
    const [t1, setT1] = useState(false)
    const [t2, setT2] = useState(false)
    const [t3, setT3] = useState(false)
    const [t4, setT4] = useState(false)


    return <section className={s.faq}>
        <div className="container">
            <h2 className="section-headline">Faq (frequently asked questions)</h2>
            <div className={s.card}>
                <div className={s.card_items}>
                    <div className="d-flex align-items-center">
                        <h4 onClick={() => setT1(!t1)}>How to register an account?</h4>
                        {!t1 ? <img onClick={() => setT1(!t1)} src={arrowDown} alt="arrow"/> : <img onClick={() => setT1(!t1)} src={minus} alt="arrow"/>}
                    </div>
                    {t1 ? <p>
                        To become part of our team, you need to create a personal account by filling out a simple registration form
                        with reliable data
                    </p> : null}
                </div>
                <div className={s.card_items}>
                    <div className="d-flex align-items-center">
                        <h4 onClick={() => setT2(!t2)}>How to get a bonus?</h4>
                        {!t2 ? <img onClick={() => setT2(!t2)} src={arrowDown} alt="arrow"/> : <img onClick={() => setT2(!t2)} src={minus} alt="arrow"/>}
                    </div>
                    {t2 ? <p>
                        To receive a bonus, open the tab "Bonuses" in your account and click on "Get bonus".
                        This kind of bonus is random from 1 VH/s to 5 VH/s every 6 hours
                    </p> : null}
                </div>
                <div className={s.card_items}>
                    <div className="d-flex align-items-center">
                        <h4 onClick={() => setT3(!t3)}>What coins can be mined?</h4>
                        {!t3 ? <img onClick={() => setT3(!t3)} src={arrowDown} alt="arrow"/> : <img onClick={() => setT3(!t3)} src={minus} alt="arrow"/>}
                    </div>
                    {t3 ? <p>
                        Users can mine Litecoin, Binance Coin, Tron and Dogecoin. All these coins can be mined simultaneously by
                        distributing power in your personal account
                    </p> : null }
                </div>
                <div className={s.card_items}>
                    <div className="d-flex align-items-center">
                        <h4 onClick={() => setT4(!t4)}>What is the minimum withdrawal amount?</h4>
                        {!t4 ? <img onClick={() => setT4(!t4)} src={arrowDown} alt="arrow"/> : <img onClick={() => setT4(!t4)} src={minus} alt="arrow"/>}
                    </div>
                    {t4 ? <p>
                        The minimum amount to withdraw funds from your account is 0.043 LTC, 0.012 BNB, 75 TRX and 35 DOGE
                    </p>: null}
                </div>
            </div>
            <div className={s.card_items}>
                <NavLink to="faq"><button className={`btn-gradient ${s.btn}`}>Read more</button></NavLink>
            </div>
        </div>
    </section>
}