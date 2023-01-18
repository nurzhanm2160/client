import React from 'react'
import s from "./Transactions.module.scss"

import coin1 from '../../assets/img/coins/1.svg'
import coin2 from '../../assets/img/coins/2.svg'
import coin3 from '../../assets/img/coins/3.svg'
import coin4 from '../../assets/img/coins/4.svg'

export const Transactions = () => {
    return <div className={s.transactions}>
        <div className="container">
            <h2 className={`section-headline ${s.section_headline}`}>Recent transactions</h2>
            <div className={s.table_block}>
                <table className={s.table}>
                    <tr>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>TXID</th>
                        <th>TYPE</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={s.amount}>
                                <div className={s.amount_img}>
                                    <img src={coin1} alt="BTC"/>
                                </div>
                                <span className="fw-bold">84.000000000 BNB</span>
                            </div>
                        </td>
                        <td><span>2022-07-07 19:19:14</span></td>
                        <td><span>489fd0fd......465061fbc25eab54d76af</span></td>
                        <td>
                            <div className="d-flex justify-content-end w-100">
                                <span className={`bg-success ${s.badge}`}>DEPOSIT</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={s.amount}>
                                <div className={s.amount_img}>
                                    <img src={coin2} alt="BTC"/>
                                </div>
                                <span className="fw-bold">84.000000000 BNB</span>
                            </div>
                        </td>
                        <td>2022-07-07 19:19:14</td>
                        <td>489fd0fd......465061fbc25eab54d76af</td>
                        <td>
                            <div className="d-flex justify-content-end w-100">
                                <span className={`bg-success ${s.badge}`}>DEPOSIT</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={s.amount}>
                                <div className={s.amount_img}>
                                    <img src={coin3} alt="BTC"/>
                                </div>
                                <span className="fw-bold">84.000000000 BNB</span>
                            </div>
                        </td>
                        <td>2022-07-07 19:19:14</td>
                        <td>489fd0fd......465061fbc25eab54d76af</td>
                        <td>
                            <div className="d-flex justify-content-end w-100">
                                <span className={`bg-success ${s.badge}`}>DEPOSIT</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={s.amount}>
                                <div className={s.amount_img}>
                                    <img src={coin4} alt="BTC"/>
                                </div>
                                <span className="fw-bold">84.000000000 BNB</span>
                            </div>
                        </td>
                        <td>2022-07-07 19:19:14</td>
                        <td>489fd0fd......465061fbc25eab54d76af</td>
                        <td>
                            <div className="d-flex justify-content-end w-100">
                                <span className={`bg-danger ${s.badge}`}>WITHDRAW</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
}