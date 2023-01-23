import React from 'react'
import s from "./Faq.module.scss"

export const Faq = () => {
    return <section className={s.faq}>
        <div className="container">
            <h2 className="section-headline">Faq (frequently asked questions)</h2>
            <div className={s.card}>
                <div className={s.card_items}>
                    <h4>How to register an account?</h4>
                    <p>
                        To become part of our team, you need to create a personal account by filling out a simple registration form
                        with reliable data
                    </p>
                </div>
                <div className={s.card_items}>
                    <h4>How to get a bonus?</h4>
                    <p>
                        To receive a bonus, open the tab "Bonuses" in your account and click on "Get bonus".
                        This kind of bonus is random from 1 Gh/s to 5 Gh/s every 6 hours
                    </p>
                </div>
                <div className={s.card_items}>
                    <h4>What coins can be mined?</h4>
                    <p>
                        Users can mine Litecoin, Binance Coin, Tron and Dogecoin. All these coins can be mined simultaneously by
                        distributing power in your personal account
                    </p>
                </div>
                <div className={s.card_items}>
                    <h4>What is the minimum withdrawal amount?</h4>
                    <p>
                        The minimum amount to withdraw funds from your account is 0.043 LTC, 0.012 BNB, 75 TRX and 35 DOGE
                    </p>
                </div>
            </div>
            <div className={s.card_items}>
                <button className={`btn-gradient ${s.btn}`}>Read more</button>
            </div>
        </div>
    </section>
}