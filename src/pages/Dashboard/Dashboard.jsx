import React, {useEffect} from "react";
import s from "./Dashboard.module.scss"
import {Route, Routes} from "react-router-dom";
import Mining from "../../components/Mining/Mining";
import Bonuses from "../../components/Bonuses/Bonuses";
import DashNavbar from "../../components/DashNavbar/DashNavbar";
import Affiliate from "../../components/Affiliate/Affiliate";
import Deposit from "../../components/Deposit/Deposit";
import DashHeader from "../../components/DashHeader/DashHeader";

function Dashboard() {

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        }
        // TODO: сделать try catch. И слать запрос за данными для dashboard
    }, [])
    return (
        <div className={s.dashboard}>
            <div className="row">
                <div className="col-lg-3">
                    <DashNavbar/>
                </div>
                <div className="col-lg-9">
                    <DashHeader/>
                    <Routes>
                        <Route path="/mining" element={<Mining/>}/>
                        <Route path="/deposit" element={<Deposit/>}/>
                        <Route path="/affiliate" element={<Affiliate/>}/>
                        <Route path="/bonuses" element={<Bonuses/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
