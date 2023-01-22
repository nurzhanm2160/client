import React from 'react';
import s from "./DashHeader.module.scss"
import {NavLink} from "react-router-dom";

const DashHeader = () => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-7 d-flex align-items-center">
                        <div className={s.title}>
                            <span className="fs-2">Welcome NICKNAME</span>
                            <span>Time on server 00:00 01.01.2022</span>
                        </div>
                    </div>
                    <div className={`col-lg-5 ${s.account}`}>
                        <NavLink to="/#" className={s.confirmed}>PROFILE IS CONFIRMED</NavLink>
                        <NavLink to="/#" className={`btn-gradient ${s.logout}`}>LOGOUT</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashHeader;