import React, {useEffect} from 'react';
import s from "./Bonuses.module.scss"
import DashHeader from "../DashHeader/DashHeader";
import {referralItems} from "./referralData/referralData";
import {useDispatch, useSelector} from "react-redux";
import {getAllReferrals} from "../../redux/user-slice";

const Bonuses = () => {
    const dispatch = useDispatch()
    const first_level_referrals = useSelector(state => state.user.first_level_referrals)
    const second_level_referrals = useSelector(state => state.user.second_level_referrals)
    const referralsItems = [...first_level_referrals, ...second_level_referrals]

    useEffect(() => {
        dispatch(getAllReferrals())
    }, [])

    return (
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
                                YouTube review campaign <br/>Earn from 20VH/s to 8000 VH/s for each YouTube review of Bitrox Mining!<br/><br/>
                                    <p className={s.pl}>·  Your channel must be public.</p>
                                    <p className={s.pl}>·  You must have at least 100 subscribers.</p>
                                    <p className={s.pl}>·  Somewhere in the title name use the word (Bitrox Mining)</p>
                                    <p className={s.pl}>·  Your review must be original. It’s forbidden to copy content, text, visuals etc. from  other reviews in any format.</p>
                                    <p className={s.pl}>·  We can reject your review for various reasons: bla bla bla</p>
                                    <p className={s.pl}>·  Somewhere in the title name use the word (Bitrox Mining)</p>
                                Telegram support: <br/><a href="https://t.me/bitroxmining" className="fs-5">t.me/bitroxmining</a>
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
                                    <th>Email</th>
                                    <th>referral code</th>
                                </tr>
                                {referralsItems.map(referral =>
                                    <tr>
                                        <td>registration</td>
                                        <td>{referral.email}</td>
                                        <td>{referral.referral_code}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonuses

