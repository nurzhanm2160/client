import React, {useEffect} from "react";
import s from "./Dashboard.module.scss"
import {Route, Routes} from "react-router-dom";
import Mining from "../../components/Mining/Mining";
import Bonuses from "../../components/Bonuses/Bonuses";
import DashNavbar from "../../components/DashNavbar/DashNavbar";
import Affiliate from "../../components/Affiliate/Affiliate";
import Deposit from "../../components/Deposit/Deposit";
import {Footer} from "../../components/Footer/Footer";
import {useNavigate} from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/login')
        }
        // TODO: сделать try catch. И слать запрос за данными для dashboard
    }, [])
    return (
        <div className={s.dashboard}>
            <div className="row">
                <div className="col-lg-3">
                    <DashNavbar/>
                </div>
                <div className={`col-lg-9 ${s.content}`}>
                    <Routes>
                        <Route path="/mining" element={<Mining/>}/>
                        <Route path="/bonuses" element={<Bonuses/>}/>
                        <Route path="/affiliate" element={<Affiliate/>}/>
                        <Route path="/deposit" element={<Deposit/>}/>
                    </Routes>
                </div>
            </div>
            <div className="row align-items-end">
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Dashboard
