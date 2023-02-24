import React from 'react';
import s from "./Deposit.module.scss"
import DashHeader from "../DashHeader/DashHeader";
import Calc from "../Calc/Calc";

const Deposit = () => {
    return (
        <div className={s.deposit}>
            <div className="container">
                <head>
                    <title>Deposits</title>
                </head>
                <header>
                    <DashHeader/>
                </header>
                <div className="row">
                    <Calc />
                </div>
                {/*<div className="row">*/}
                {/*    <div className={s.contracts}>*/}
                {/*        <div className={s.contracts_block}>*/}
                {/*            <div className={s.title}>*/}
                {/*                <span className="section-headline">ACTIVE CONTRACTS:</span>*/}
                {/*            </div>*/}
                {/*            <table className={s.table}>*/}
                {/*                <tr>*/}
                {/*                    <th>Deposit</th>*/}
                {/*                    <th>Expires</th>*/}
                {/*                    <th>Power</th>*/}
                {/*                    <th>Status</th>*/}
                {/*                </tr>*/}
                {/*                {depositData.map(item =>*/}
                {/*                    <tr>*/}
                {/*                        <td>*/}
                {/*                            <div className={s.amount}>*/}
                {/*                                <img src={coin} alt="coin"/>*/}
                {/*                                <span className="fw-bold">{item.deposit} USD</span>*/}
                {/*                            </div>*/}
                {/*                        </td>*/}
                {/*                        <td>{item.date.toLocaleString()}</td>*/}
                {/*                        <td>{item.power} VH/s</td>*/}
                {/*                        <td>{item.status*/}
                {/*                            ? <button className="bg-success">ACTIVE</button>*/}
                {/*                            : <button className="bg-danger">EXPIRED</button>*/}
                {/*                        }*/}
                {/*                        </td>*/}
                {/*                    </tr>*/}
                {/*                )}*/}
                {/*            </table>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Deposit;