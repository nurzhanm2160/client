import React from 'react';
import s from "./Mining.module.scss"
import {miningItems} from "./miningData/miningData"
import DashHeader from "../DashHeader/DashHeader";


const Mining = () => {
    return (
        <>
            <div className="container">
                <header>
                    <DashHeader/>
                </header>
                <div className={`row ${s.powers}`}>
                    {miningItems.coins.map(item =>
                        <div className="col-lg-3">
                            <div className={s.power}>
                                <div className={s.head}>
                                    <div className={s.logo}>
                                        <img src={item.img}/>
                                        <span>{item.coin}</span>
                                    </div>
                                    <span>{item.earned}</span>
                                    <span className={s.badge}>{item.power}</span>
                                </div>
                                <div className={s.average}>
                                    <span>Average of power:</span>
                                </div>
                                <div className={s.earned}>
                                    <span>YOU EARNED:</span>
                                    <span>{item.earned}</span>
                                </div>
                                <div className={s.deposit}>
                                    <button className="btn-gradient">DEPOSIT</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Mining;