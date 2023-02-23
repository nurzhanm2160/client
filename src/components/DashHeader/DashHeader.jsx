import React, {useEffect} from 'react';
import s from "./DashHeader.module.scss"
import {getUserData, logout} from "../../redux/user-slice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const DashHeader = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.user.email)
    const isAuth = useSelector(state => state.user.isAuth)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        dispatch(getUserData())
    }, [])

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
        return
    }, [isAuth])

    return (
        <div className={`row ${s.header}`}>
            <div className="col-lg-10 d-flex align-items-center">
                <div className={s.title}>
                    <span className="fs-2">Welcome {email}</span>
                    <span>Time on server 00:00 01.01.2022</span>
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