import React from 'react'
import {CardPlan} from './CardPlan/CardPlan'
import s from "./Price.module.scss"
import {plans} from "./CardPlan/plansData/plansData";


export const Price = () => {
    return <section className={s.price}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <h2 className="section-headline">PRICES</h2>
                    <p className="section-subhead">Choose ideal plan for yourself!</p>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                    <button className={s.btn1}>STANDART</button>
                    <button className={s.btn2}>ULTIMATE</button>
                </div>
            </div>

            <div className="row mt-5 d-flex justify-content-center">
                {plans.map(plan =>
                    <div className="col-lg-3">
                        <CardPlan plan={plan}/>
                    </div>
                )}
            </div>
        </div>
    </section>
}