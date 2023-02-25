import React, {useEffect, useState} from 'react'
import s from "./Transactions.module.scss"

import coin1 from '../../assets/img/coins/1.svg'
import coin2 from '../../assets/img/coins/2.svg'
import coin3 from '../../assets/img/coins/3.svg'
import coin4 from '../../assets/img/coins/4.svg'
import {useDispatch, useSelector} from "react-redux";
import {getAllTransaction} from "../../redux/deposit-slice";

export const Transactions = () => {

    const transactions = useSelector(state => state.deposit.transactions)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTransaction())
    },[])


    const coinImg = transactions.map(t => {
        if(t.currency ==="DOGE"){
            return coin1
        }else if (t.currency ==="BTC"){
            return coin2
        }else if (t.currency ==="LTC"){
            return coin3
        }else if (t.currency ==="TRX"){
            return coin4
        }
    })


    return <div className={s.transactions}>
        <div className="container">
            <h2 className={`section-headline ${s.section_headline}`}>Recent transactions</h2>
            <div className={s.table_block}>
                <table className={s.table}>
                    <tr>
                        <th>Amount</th>
                        <th>Payment ID</th>
                        <th>TYPE</th>
                    </tr>
                    {transactions.map(t =>
                        <tr>
                            <td>
                                <div className={s.amount}>
                                    <div className={s.amount_img}><img src={coinImg} alt="coins"/></div>
                                    <span className="fw-bold">{t.amount}</span>
                                </div>
                            </td>
                            <td className={s.id}>
                                <div>
                                    <span>{t.payment_id}</span>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex w-100">
                                    <div className={s.badge}>{t.transaction_type}</div>
                                </div>
                            </td>
                        </tr>)}
                </table>
            </div>
        </div>
    </div>
}