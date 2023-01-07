import React from 'react'

import binance from '../../assets/img/binance.png'
import paykassa from "../../assets/img/paykassa.png"
import trustpilot from '../../assets/img/trustpilot.png'

export const Stats = () => {
    return <section class="s-stats">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <h2 class="section-headline">realtime STATS OF OUR PROJECT</h2>
                    <div class="stats-wrapper">
                        <div class="stats-item">
                            <strong>91</strong>
                            <p>days in work</p>
                        </div>
                        <div class="stats-item">
                            <strong>584,134</strong>
                            <p>active users</p>
                        </div>
                        <div class="stats-item">
                            <strong>$223,328</strong>
                            <p>was invested</p>
                        </div>
                        <div class="stats-item">
                            <strong>$676,765</strong>
                            <p>paid out</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="partners">
                        <h2 class="section-headline">We trust</h2>
                        <div class="stats-partners">
                            <div class="stats-partners__items">
                                <img src={binance} alt="Binance" />
                            </div>
                            <div class="stats-partners__items">
                                <img src={paykassa} alt="PayKassa" />
                            </div>
                            <div class="stats-partners__items">
                                <img src={trustpilot} alt="TrustPilot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}