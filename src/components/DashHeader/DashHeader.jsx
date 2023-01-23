import React from 'react';
import s from "./DashHeader.module.scss"

const DashHeader = () => {
    return (
        <div className={`row ${s.header}`}>
            <div className="col-lg-10 d-flex align-items-center">
                <div className={s.title}>
                    <span className="fs-2">Welcome NICKNAME</span>
                    <span>Time on server 00:00 01.01.2022</span>
                </div>
            </div>
            <div className={`col-lg-2 ${s.account}`}>
                <button className="btn-gradient">LOGOUT</button>
            </div>
        </div>
    )
}

export default DashHeader;