import React from 'react'
import { Header } from '../../components/Header/Header'

import "./Headerpage.scss"

import discount from '../../assets/img/icons/discount-icon.svg'
import affiliate from '../../assets/img/icons/affiliate-icon.svg'
import litecoin from '../../assets/img/icons/litecoin-icon.svg'
import gift from '../../assets/img/icons/gift-icon.svg'
import { Footer } from '../../components/Footer/Footer'
import { Video } from '../../components/Video/Video'
import { Price } from '../../components/Price/Price'
import { Advantages } from '../../components/Advantages/Advantages'
import { News } from '../../components/News/News'
import { Transactions } from '../../components/Transactions/Transactions'
import { Faq } from '../../components/Faq/Faq'
import { Calculator } from '../../components/Calculator/Calculator'

const headerItems = [
    {
        iconLink: discount,
        title: 'Up to 6% per day',
        description: 'High level of income up to 6% per day without restrictions on the maximum deposit amount.'
    },
    {
        iconLink: affiliate,
        title: 'Two-level affiliate',
        description: 'Get 12% + 3 VH/s for first-level partners +1 VH/s for each new referral and 2% for second-level partners.'
    },
    {
        iconLink: litecoin,
        title: 'Quick withdrawals',
        description: 'Payment of funds without commission is made immediately after the user has made a request.'
    },
    {
        iconLink: gift,
        title: 'Free bonuses',
        description: 'A random bonus for all users every six hours and the system of rewards for cooperation.'
    }
]

export const Homepage = () => {
    return (
        <>
            <Header />
            <header className="main-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header-left">
                                <h1>SHORTA.CC</h1>
                                <p className="header-text">Cloud mining platform for BNB, TRX, LTC and DOGE</p>
                                <form >
                                    <div className="d-flex align-items-center justify-content-lg-between">
                                        <input type="email" className="input" placeholder="Enter your Email address" formControlName="email" />
                                        <button className="btn btn-gradient" type="submit">Register</button>

                                        {/* TODO: Реализовать вывод ошибок */}

                                    </div>
                                </form>
                                <p className="header-sub">
                                    This site is protected by hCaptcha and its <a href="#">Privacy Policy</a> and
                                    <a href="#">Terms of Service</a> apply.
                                </p>

                                <h4 className="header-title">Register now and get <span className="badge badge-error">$4.5</span> for free!</h4>

                            </div>
                            {/* <!-- /.header-left --> */}
                        </div>
                        <div className="col-lg-5 offset-1">
                            <div className="header-right">
                                <div className="row">
                                    <div className="col-lg-6">
                                        {headerItems.map(item => (
                                            <div className="header-right__item" key={item.title}>
                                                <div className="icon"><img src={item.iconLink} alt={item.title} /></div>
                                                <h4 className="title">{item.title}</h4>
                                                <p className="description">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.header-right --> */}
                        </div>
                    </div>
                </div>
            </header>
            <Video />
            <Price />
            <Advantages />
            <News />
            <Transactions />
            <Faq />
            <Calculator />
            <Footer />
        </>
    )
}