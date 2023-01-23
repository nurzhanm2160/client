import React from 'react';
import s from "./Specials.module.scss"
import UsersTable from "../../components/UsersTable/UsersTable";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const Specials = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={`container ${s.specials}`}>
                <div className={s.title}>
                    <h2 className="section-headline">special #1</h2>
                    <p className="section-subhead text-uppercase mt-5">Get up to <span
                        className={s.badge}>$1000</span> to
                        the balance!</p>
                    <div className="mt-5">
                        <h3 className="text-white fw-bold">Dear participants of the Shorta project!</h3>
                        <p>Our team announces the launch of the fourth contest in which
                            all registered users can take part. Get the maximum number of points.
                        </p>
                    </div>
                </div>
                <div className={s.equals}>
                    <span>When depositing from $1 to $99: 1 usd = 1 point of your deposit</span>
                    <span>When depositing from $100 to $999: 1 usd = 1.1 point of your deposit</span>
                    <span>When depositing from $1000 to $9999: 1 usd = 1.2 point of your deposit</span>
                    <span>When depositing from $10000: 1 usd = 1.3 point of your deposit.</span>
                </div>
                <div className={s.description}>
                    <p>Users who take the leading positions will receive a reward in the amount from $100 to $1000 to
                        the
                        account balance in terms of VH. Deposits from $1 and above are taken into account!<br/><br/>

                        The pool volume is the sum of all deposits users from $1 from the start of the
                        contest!<br/><br/>

                        The contest has already started and will last until June 29, 00:00 UTC+0</p>
                </div>
                <div className={s.total}>
                    <div className={s.items}>
                        <strong className="w-100 d-flex justify-content-center">$5250</strong>
                        <p className="w-100 d-flex justify-content-center">total giveaway</p>
                    </div>
                </div>
                <div className={`row  ${s.time}`}>
                    <div className={`col-lg-3 ${s.time_items}`}>
                        <div>
                            <strong className="d-flex justify-content-center w-100">00</strong>
                            <p>DAYS</p>
                        </div>
                    </div>
                    <strong className={s.middleware}>:</strong>
                    <div className={`col-lg-3 ${s.time_items}`}>
                        <div>
                            <strong className="d-flex justify-content-center w-100">00</strong>
                            <p>hours</p>
                        </div>
                    </div>
                    <strong className={s.middleware}>:</strong>
                    <div className={`col-lg-3 ${s.time_items}`}>
                        <div>
                            <strong className="d-flex justify-content-center w-100">00</strong>
                            <p>minutes</p>
                        </div>
                    </div>
                    <strong className={s.middleware}>:</strong>
                    <div className={`col-lg-3 ${s.time_items}`}>
                        <div>
                            <strong className="d-flex justify-content-center w-100">00</strong>
                            <p>seconds</p>
                        </div>
                    </div>
                </div>
                <UsersTable/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Specials;