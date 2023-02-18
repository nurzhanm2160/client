import React, {useEffect} from 'react'
import s from "./Starts.module.scss"

import binance from '../../assets/img/binance.png'
import paykassa from "../../assets/img/paykassa.png"
import trustpilot from '../../assets/img/trustpilot.png'
import {useDispatch, useSelector} from "react-redux";
import {getDepositsSum, getUsersCount, getWithdrawsSum} from "../../redux/deposit-slice";

export const Stats = () => {
    const dispatch = useDispatch()
    const usersCount = useSelector(state => state.deposit.usersCount)
    const depositsSum = useSelector(state => state.deposit.depositsSum)
    const withDrawsSum = useSelector(state => state.deposit.withDrawsSum)

    useEffect(() => {
        dispatch(getUsersCount())
        dispatch(getDepositsSum())
        dispatch(getWithdrawsSum())
    }, [])

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
                                    <strong>{usersCount}</strong>
                                    <p>active users</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className={s.items}>
                                    <strong>${depositsSum}</strong>
                                    <p>was invested</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={s.items}>
                                    <strong>${withDrawsSum}</strong>
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