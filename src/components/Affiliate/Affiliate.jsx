import React, {useState, useEffect} from 'react';
import s from "./Affiliate.module.scss"
import DashHeader from "../DashHeader/DashHeader";
import {useClipboard} from "use-clipboard-copy";
import affiliate from "../../assets/img/icons/affiliane.png"
import unpower from "../../assets/img/icons/unpower.png"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getAllReferrals, checkAuth } from "../../redux/user-slice"

const Affiliate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.user.isAuth)
    // const userId = useSelector(state => state.user.userId)
    const referral_code = useSelector(state => state.user.referral_code)
    const first_level_referrals = useSelector(state => state.user.first_level_referrals)
    const second_level_referrals = useSelector(state => state.user.second_level_referrals)

    const [copy, setCopy] = useState(false)
    const clipboard = useClipboard({
        onSuccess() {
            setCopy(true)
        }
    })

    useEffect(() => {
        // dispatch(checkAuth())
        dispatch(getAllReferrals())
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (!isAuth) {
                navigate('/login')
            }
        }, 3000)
        return
    }, [isAuth])

    return (
        <div className={s.affiliate}>
            <div className="container">
                <header>
                    <DashHeader/>
                </header>
                <div className="row">
                    <div className={s.wrapper}>
                        <div className={s.info}>
                            <div>
                                <h2 className="section-headline">affiliate bonus program:</h2>
                                <span>
                                        Get 1 VH/s for each registration of a new referral, 12% + 3 VH/s for each new
                                        deposit of referrals of the first level
                                        and 2% for each new deposit of referrals second level.
                                    </span>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <h2 className="section-headline">Your unique affiliate link:</h2>
                                    <span>Use this link to invite new members and earn cryptocurrency.</span>
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col-lg-10 p-2">
                                    <input ref={clipboard.target} className={s.link}
                                           value={`http://localhost:3000/register?code=${referral_code}`}/>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-center p-2">
                                    <button onClick={clipboard.copy} className={`btn-gradient ${s.copy}`}>
                                        {copy ? "COPIED" : "COPY"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${s.level}`}>
                            <div className="col-lg-4">
                                <div className={s.card}>
                                    <div className={s.head} style={{background: "#E79470"}}>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-block fs-4">Level 1</span>
                                            <img src={affiliate} alt="affiliate"/>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="d-block fs-4">Affiliate</span>
                                            <span className={s.badge} style={{color: "#E79470"}}>12% each</span>
                                        </div>
                                    </div>
                                    <div className={s.persons}>{first_level_referrals.length} person invited</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className={s.card}>
                                    <div className={s.head} style={{background: "#720ADB"}}>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-block fs-4">Level 2</span>
                                            <img src={affiliate} alt="affiliate"/>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="d-block fs-4">Affiliate</span>
                                            <span className={s.badge} style={{color: "#720ADB"}}>2% each</span>
                                        </div>
                                    </div>
                                    <div className={s.persons}>{second_level_referrals.length} person invited</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className={s.card}>
                                    <div className={s.head} style={{background: "#0577F2"}}>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-block fs-4">0 VH/s</span>
                                            <img src={unpower} alt="affiliate"/>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="d-block fs-4">Power bonus recieved</span>
                                        </div>
                                    </div>
                                    <div className={s.persons}><NavLink to="/faq">Read more in FAQ</NavLink></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Affiliate;