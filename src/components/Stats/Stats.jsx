import React from 'react'
import s from "./Starts.module.scss"

import binance from '../../assets/img/binance.png'
import paykassa from "../../assets/img/paykassa.png"
import trustpilot from '../../assets/img/trustpilot.png'

export const Stats = () => {
    return (
        <section className={s.status}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <h2 className="section-headline">realtime STATS OF OUR PROJECT</h2>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className={s.items}>
                                    <strong>91</strong>
                                    <p>days in work</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={s.items}>
                                    <strong>584,134</strong>
                                    <p>active users</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className={s.items}>
                                    <strong>$223,328</strong>
                                    <p>was invested</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={s.items}>
                                    <strong>$676,765</strong>
                                    <p>paid out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row ">
                            <h2 className="section-headline">WE TRUST</h2>
                        </div>
                        <div className="row">
                            <div className={s.partners_items}>
                                <img src={binance} alt="binance"/>
                                <img src={paykassa} alt="paykassa"/>
                                <img src={trustpilot} alt="trustpilot"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}