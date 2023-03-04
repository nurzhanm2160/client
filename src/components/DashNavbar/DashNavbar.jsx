import React, {useEffect} from 'react';
import s from "./DashNavbar.module.scss"
import {NavLink} from "react-router-dom";
import logo from "../../assets/img/Logotype.png"
import miningImg from "../../assets/img/dashboardNav/maining.svg"
import depositImg from "../../assets/img/dashboardNav/depositeLogo.png"
import affiliateImg from "../../assets/img/dashboardNav/affiliateLogo.png"
import bonusesImg from "../../assets/img/dashboardNav/bonusesLogo.png"


const DashNavbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.header}>
                <div className={s.logo}>
                    <NavLink to="/"><img src={logo} alt="dashLogo"/></NavLink>
                </div>
                <div>
                    <p>Dashboard</p>
                </div>
            </div>
            <nav>
                <NavLink to="/dashboard/mining"
                         className={navData => navData.isActive ? s.active : s.item}>
                    <img src={miningImg} alt="mining"/>
                    <span>MINING</span>
                </NavLink>
                <NavLink to="/dashboard/deposit"
                         className={navData => navData.isActive ? s.active : s.item}>
                    <img src={depositImg} alt="deposit"/>
                    <span>DEPOSIT</span>
                </NavLink>
                <NavLink to="/dashboard/affiliate"
                         className={navData => navData.isActive ? s.active : s.item}>
                    <img src={affiliateImg} alt="affiliate"/>
                    <span>AFFILIATE</span>
                </NavLink>
                <NavLink to="/dashboard/bonuses"
                         className={navData => navData.isActive ? s.active : s.item}>
                    <img src={bonusesImg} alt="bonuses"/>
                    <span>BONUSES</span>
                </NavLink>
            </nav>
        </div>
    )
}

export default DashNavbar;