import React, {useEffect, useState} from 'react';
import s from "./Mining.module.scss"
import DashHeader from "../DashHeader/DashHeader";
import {useDispatch, useSelector} from "react-redux";
import {getUserWallets} from "../../redux/user-slice";
import {convertWalletData} from "../../utils/convertWalletData";
import ModalWithdraw from "../ModalWithdrow/ModalWithdrow";

const Mining = () => {
    const [depositModalActive, setDepositModalActive] = useState(false)
    const [withdrawModalActive, setWithdrawModalActive] = useState(false)
    const [withdrawCoin, setWithdrawCoin] = useState('')
    const [system, setSystem] = useState("")

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

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(getUserWallets())
        }, 10000)

        return () => clearInterval(timer)
    }, [])

    const withDrawModelHandler = (coin, system) => {
        setWithdrawCoin(coin)
        setSystem(system)
        setWithdrawModalActive(true)
    }


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
                                {/*<div className={s.deposit}>*/}
                                {/*    <button onClick={()=> setDepositModalActive(true)} className="btn-gradient">DEPOSIT</button>*/}
                                {/*</div>*/}
                                <div className={s.withdrow}>
                                    <button onClick={() => withDrawModelHandler(item.coin, item.system)}>WITHDRAW
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/*<ModalDeposit depositModalActive={depositModalActive} setDepositModalActive={setDepositModalActive}/>*/}
                    <ModalWithdraw
                        withdrowModalActive={withdrawModalActive}
                        setWithdrowModalActive={setWithdrawModalActive}
                        coin={withdrawCoin}
                        system={system}
                    />
                </div>
            </div>
        </>
    )
}

export default Mining;