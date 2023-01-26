import React from 'react';
import s from "./Bonuses.module.scss"
import DashHeader from "../DashHeader/DashHeader";
import {referralItems} from "./referralData/referralData";

const Bonuses = () => (
        <div className={s.bonuses}>
            <div className="container">
                <header>
                    <DashHeader/>
                </header>
                <div className="row">
                    <div className={s.bounty}>
                        <div className={s.info}>
                            <div>
                                <h2 className="section-headline">BOUNTY:</h2>
                                <span>
                                YouTube review campaign <br/>Earn from 20VH/s to 8000 VH/s for each YouTube review of shorta!<br/><br/>
                                    <p className={s.pl}>·  Your channel must be public.</p>
                                    <p className={s.pl}>·  You must have at least 100 subscribers.</p>
                                    <p className={s.pl}>·  Somewhere in the title name use the word (shorta.cc)</p>
                                    <p className={s.pl}>·  Your review must be original. It’s forbidden to copy content, text, visuals etc. from  other reviews in any format.</p>
                                    <p className={s.pl}>·  We can reject your review for various reasons: bla bla bla</p>
                                    <p className={s.pl}>·  Somewhere in the title name use the word (shorta.cc)</p>
                                Telegram support: <br/>t.me/shortacc
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className={s.referral}>
                        <div className={s.referral_block}>
                            <div className={s.title}>
                                <span className="section-headline">referral fees:</span>
                            </div>
                            <table className={s.table}>
                                <tr>
                                    <th>Type</th>
                                    <th>Time</th>
                                    <th>Power</th>
                                    <th>Comment</th>
                                </tr>
                                {referralItems.map(item =>
                                    <tr>
                                        <td>{item.type}</td>
                                        <td>{item.time.toLocaleString()}</td>
                                        <td>{item.power} VH/s</td>
                                        <td>{item.comment}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
;

export default Bonuses;

