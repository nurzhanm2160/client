import React, {useEffect, useState} from 'react';
import s from "./Mining.module.scss"
// import {miningItems} from "./miningData/miningData"
import DashHeader from "../DashHeader/DashHeader";
import ModalDeposit from "../ModalDeposit/ModalDeposit";
import {useDispatch, useSelector} from "react-redux";
import {getUserWallets} from "../../redux/user-slice";
import {convertWalletData} from "../../utils/convertWalletData";
import ModalWithdrow from "../ModalWithdrow/ModalWithdrow";


const Mining = () => {
    const [depositModalActive, setDepositModalActive] = useState(false)
    const [withdrowModalActive, setWithdrowModalActive] = useState(false)
    const dispatch = useDispatch()
    const userWallets = useSelector(state => state.user.userWallets)
    const filteredBTC = userWallets.filter(wallet => wallet.coin === "BTC")
    const filteredLTC = userWallets.filter(wallet => wallet.coin === "LTC")
    const filteredTRX = userWallets.filter(wallet => wallet.coin === "TRX")
    const filteredDOGE = userWallets.filter(wallet => wallet.coin === "DOGE")

    const BTC = convertWalletData(filteredBTC, "BTC")
    const LTC = convertWalletData(filteredLTC, "LTC")
    const TRX = convertWalletData(filteredTRX, "TRX")
    const DOGE = convertWalletData(filteredDOGE, "DOGE")

    const miningItems = [].concat(BTC, LTC, TRX, DOGE)
    console.log(miningItems)


    useEffect(() => {
        dispatch(getUserWallets())
    }, [])


    return (
        <>
            <div className="container">
                <header>
                    <DashHeader/>
                </header>
                <div className={`row ${s.powers}`}>
                    {miningItems.map(item =>
                        <div className="col-lg-3">
                            <div className={s.power}>
                                <div className={s.head}>
                                    <div className={s.logo}>
                                        <img src={item.img} alt="coin"/>
                                        <span>{item.coin}</span>
                                    </div>
                                    <span>{item.deposit_income}</span>
                                    <span className={s.badge}>{item.vhs_power} VHS</span>
                                </div>
                                <div className={s.earned}>
                                    <span>YOU EARNED:</span>
                                    <span>{item.deposit_income}</span>
                                </div>
                                <div className={s.deposit}>
                                    <button onClick={()=> setDepositModalActive(true)} className="btn-gradient">DEPOSIT</button>
                                </div>
                                <div className={s.withdrow}>
                                    <button onClick={()=> setWithdrowModalActive(true)}>WITHDRAW</button>
                                </div>
                            </div>
                        </div>
                    )}
                    <ModalDeposit depositModalActive={depositModalActive} setDepositModalActive={setDepositModalActive}/>
                    <ModalWithdrow withdrowModalActive={withdrowModalActive} setWithdrowModalActive={setWithdrowModalActive}/>
                </div>
            </div>
        </>
    )
}

export default Mining;