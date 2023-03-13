import React from 'react'
import maining from '../../../assets/img/icons/maining.svg'
import s from "./CardPlan.module.scss"
import {NavLink} from "react-router-dom";


export const CardPlan = ({plan}) => {
    return (
        <div className={s.card}>
            <div className={s.card_header} style={{background: plan.colors}}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4>{plan.title}</h4>
                    <div><img src={maining} alt={plan.title}/></div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div><span>{plan.vhs} VH/s</span></div>
                    <div className={s.badge}><span style={{color: plan.colors}}>{plan.days}</span><span style={{color: plan.colors}}>days</span></div>
                </div>
            </div>
            <div className={s.card_body}>
                {plan.description.map(desc => <p>{desc}</p>)}
                <NavLink to="/register" className={s.btn}>
                    {plan.free && <button type="button" className="btn-gradient d-flex justify-content-center">Start free</button>}
                    {!plan.free && <button type="button" className="btn-gradient"><span>{plan.price}$</span>Buy</button>}
                </NavLink>

            </div>
            {/* <!-- /.card-body --> */}
        </div>
    )
}