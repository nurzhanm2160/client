import React, {useEffect, useState} from 'react';
import s from "./DashHeader.module.scss"
import {getUserData, logout} from "../../redux/user-slice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const DashHeader = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.user.email)
    const isAuth = useSelector(state => state.user.isAuth)
    const time = new Date().toLocaleString("ru-RU", {timeZone: "Europe/Amsterdam"})
    const [currentTime, setCurrentTime] = useState(time)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        dispatch(getUserData())
        setInterval(updateTime, 1000)
    }, [])

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])


    const updateTime = () => {
        let time = new Date().toLocaleString("ru-RU", {timeZone: "Europe/Paris"})
        setCurrentTime(time)
    }


    return (
        <div className={`row ${s.header}`}>
            <div className="col-lg-10 d-flex align-items-center">
                <div className={s.title}>
                    <span className="fs-2">Welcome {email}</span>
                    <span>Time on server {currentTime}</span>
                </div>
            </div>
            <div className={`col-lg-2 ${s.account}`}>
                <button
                    onClick={() => handleLogout()}
                    className="btn-gradient"
                >
                    LOGOUT
                </button>
            </div>
        </div>
    )
}

export default DashHeader;