import React from 'react'

import coin1 from '../../assets/img/coins/1.svg'
import coin2 from '../../assets/img/coins/2.svg'
import coin3 from '../../assets/img/coins/3.svg'
import coin4 from '../../assets/img/coins/4.svg'
import coin5 from '../../assets/img/coins/5.svg'
import maining from '../../assets/img/maining.svg'


const calculatorCoinsItems = [
    {
        id: 1,
        image: coin1,
        title: 'Bnb Coin',
        active: true,
    },
    {
        id: 2,
        image: coin2,
        title: 'Doge Coin',
        active: false,
    },
    {
        id: 3,
        image: coin3,
        title: 'Lite Coin',
        active: false,
    },
    {
        id: 4,
        image: coin4,
        title: 'Tron',
        active: false,
    },
]

const calculatorDayItems = [
    {
        id: 1,
        day: 30,
        active: true
    },
    {
        id: 2,
        day: 60,
        active: false
    },
    {
        id: 3,
        day: 90,
        active: false
    },
    {
        id: 4,
        day: 180,
        active: false
    },
]

export const Calculator = () => {

    const selectCoin = (coinsItems) => {
		this.calculatorCoinsItems.forEach((item) => {
			item.active = false
			coinsItems.active = true
		})
	}

	const selectDay = (day) => {
		this.calculatorDayItems.forEach((item) => {
			item.active = false
			day.active = true
		})
	}

    return <section class="s-faq section">
        <div class="container">
            <h2 class="section-headline">Calculator</h2>

            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <h4>Create your contract</h4>
                        <div class="items-wrapper">
                            <div class="items">
                                <h5>Select coin:</h5>
                                <ul class="items-nav gradient">
                                    {calculatorCoinsItems.map(item => <li class="active">
                                        <img src={item.image} alt={item.title} />
                                    </li> )}
                                </ul>
                            </div>
                            <div class="items">
                                <h5>Amount of day:</h5>
                                <ul class="items-nav yellow">
                                    {calculatorDayItems.map(day => 
                                        <li class="active">
                                            {day.day}
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div class="items">
                                <h5>Coins to invest:</h5>
                                <div class="input-items d-flex align-items-center">
                                    <div class="input-items__icon">
                                        <img src={coin1} alt="Coins" />
                                    </div>
                                    <input type="number" class="input" placeholder="102,9654 BNB" />
                                </div>
                            </div>
                            <div class="items">
                                <h5>usd to invest:</h5>
                                <div class="input-items d-flex align-items-center">
                                    <div class="input-items__icon">
                                        <img src={coin5} alt="USD" />
                                    </div>
                                    <input type="number" class="input" placeholder="102,9654 BNB" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">

                    <div class="card results-wrapper">
                        <h4>You will earn:</h4>
                        <div class="results-items">
                            <h5>PLAN</h5>
                            <div class="d-flex align-items-center">
                                <div class="results-label">6% per day</div>
                                <div class="results-label"><img src={maining} alt="Maining" /></div>
                            </div>
                        </div>
                        <div class="results-items">
                            <h5>Power</h5>
                            <div class="d-flex align-items-center">
                                <div class="results-label">1 000 000 VH/s</div>
                            </div>
                        </div>
                        <div class="results-items">
                            <h5>PROFIT</h5>
                            <div class="d-flex align-items-center">
                                <div class="results-label">1 000 000 VH/s</div>
                            </div>
                        </div>

                        <div class="btn-wrapper">
                            <a href="#" class="btn btn-gradient">REGISTER CONTRACT</a>
                        </div>

                        <div class="terms">
                            <p>This site is protected by hCaptcha and its<br/> <a href="#">Privacy Policy</a> and <a href="#">Terms of
                                Service</a> apply.</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- /.row --> */}

        </div>
    </section>
}