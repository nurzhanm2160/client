import React from 'react';
import s from "./DashNavbar.module.scss"
import {NavLink} from "react-router-dom";
import logo from "../../assets/img/Logotype.png"

const DashNavbar = () => {
    return (
        <div className={s.nav}>
            <div>
                <img src={logo}/>
            </div>
            <p>Dashboard</p>
            <nav>
                <div className="mb-3 mt-5"><NavLink to="/dashboard/mining" className={s.item}>MINING</NavLink></div>
                <div className="mb-3"><NavLink to="/dashboard/deposit" className={s.item}>DEPOSIT</NavLink></div>
                <div className="mb-3"><NavLink to="/dashboard/affiliate" className={s.item}>AFFILIATE</NavLink></div>
                <div><NavLink to="/dashboard/bonuses" className={s.item}>BONUSES</NavLink></div>
            </nav>
        </div>
    )
}

export default DashNavbar;