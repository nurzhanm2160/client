import React from 'react';
import s from "./Mining.module.scss"
import {miningItems} from "./miningData/miningData"
import maining from "../../assets/img/icons/maining.svg";


const Mining = () => {
    return (
        <div className={s.mining}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {miningItems.coins.map(item =>
                        <div className="col-lg-3 bg-gradient">
                            <div className={s.head}>
                                <img src={item.img}/>
                                <span>{item.coin}</span>
                                <p>{item.earned}</p>
                                <span className={s.badge}>{item.power}</span>
                            </div>
                            <div className={s.average}>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Mining;