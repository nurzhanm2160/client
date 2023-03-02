import React, {useEffect, useState} from "react";
import s from "./Calc.module.scss"
import img1 from "../../assets/img/coins/1.svg"
import img2 from "../../assets/img/coins/2.svg"
import img3 from "../../assets/img/coins/3.svg"
import img4 from "../../assets/img/coins/4.svg"
import usd from "../../assets/img/coins/USD ICON.png"
import mining from "../../assets/img/maining.svg"
import {useDispatch, useSelector} from "react-redux";
import {deposit} from "../../redux/deposit-slice";
import ModalDeposit from "../ModalDeposit/ModalDeposit";
import {useNavigate} from "react-router-dom";
import loadingImg from "../../assets/img/spinner.svg"
import {
    getBitcoinExchange,
    getDogecoinExchange,
    getLitecoinExchange,
    getTronExchange
} from "../../redux/exchange-slice";


const Calc = () => {
    const isDeposit = useSelector(state => state.deposit.isDeposit)
    const loading = useSelector(state => state.deposit.loading)

    const bitcoinExchange = useSelector(state => state.exchange.bitcoinExchange)
    const litecoinExchange = useSelector(state => state.exchange.litecoinExchange)
    const dogecoinExchange = useSelector(state => state.exchange.dogeExchange)
    const tronExchange = useSelector(state => state.exchange.tronExchange)

    const [coin, setCoin] = useState(img1)
    const [coinIsActive, setCoinIsActive] = useState(1)
    const [amountIsActive, setAmountIsActive] = useState(1)
    const [usdAmount, setUsdAmount] = useState(0)
    const [coinAmount, setCoinAmount] = useState(0)
    const [coinName, setCoinName] = useState("BTC")
    const [system, setSystem] = useState("BITCOIN")
    const [rate, setRate] = useState(bitcoinExchange)
    const [term, setTerm] = useState(30)
    const [depositModalActive, setDepositModalActive] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getBitcoinExchange())
        dispatch(getTronExchange())
        dispatch(getLitecoinExchange())
        dispatch(getDogecoinExchange())
    }, [])

// Listen to changes in coinName and update USD amount based on new coin rate
    useEffect(() => {
        if (coinName === "BTC") {
            setRate(bitcoinExchange)
        } else if (coinName === "LTC") {
            setRate(litecoinExchange)
        } else if (coinName === "TRX") {
            setRate(tronExchange)
        } else if (coinName === "DOGE") {
            setRate(dogecoinExchange)
        }
        setUsdAmount(coinAmount * rate)
    }, [coinName])

// Listen to changes in USD amount and update coin amount based on new USD value
    useEffect(() => {
        setCoinAmount(usdAmount / rate)
    }, [usdAmount])

    const depositHandler = () => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/login')
        } else {
            dispatch(deposit({ amount: coinAmount, system, currency: coinName, term }))
            setDepositModalActive(true)
        }
    }

    const handleCoinAmountChange = (e) => {
        setCoinAmount(e.target.value)
        setUsdAmount(e.target.value * rate)
    }

    const handleUsdAmountChange = (e) => {
        setUsdAmount(e.target.value)
        setCoinAmount(e.target.value / rate)
    }

    const coinChangeHandler = (coinNumber, img, coinName, system) => {
        setCoinIsActive(coinNumber)
        setCoin(img)
        setCoinName(coinName)
        setSystem(system)
    }

    return (
        <>
            <div className={`container ${s.calc}`}>
                <div className={s.calculator_block}>
                    {system}
                    <h2 className="section-headline">create your contract</h2>
                    <div className={s.coins_block}>
                        <div className="d-flex align-items-center"><span>select coin:</span></div>
                        <div className={s.coins}>
                            <div className={s.coin}
                                 style={coinIsActive === 1 ? {background: "white"} : null}
                                 onClick={() => coinChangeHandler(1, img1, "BTC", "BITCOIN")}>
                                <img src={img1} alt="coin"/>
                            </div>
                            <div className={s.coin}
                                 style={coinIsActive === 2 ? {background: "white"} : null}
                                 onClick={() => coinChangeHandler(2, img2, "DOGE", "DOGECOIN")}>
                                <img src={img2} alt="coin"/>
                            </div>
                            <div className={s.coin}
                                 style={coinIsActive === 3 ? {background: "white"} : null}
                                 onClick={() => coinChangeHandler(3, img3, "LTC", "LITECOIN")}>
                                <img src={img3} alt="coin"/>
                            </div>
                            <div className={s.coin}
                                 style={coinIsActive === 4 ? {background: "white"} : null}
                                 onClick={() => coinChangeHandler(4, img4, "TRX", "TRON")}>
                                <img src={img4} alt="coin"/>
                            </div>
                        </div>
                    </div>
                    <div className={s.amount_block}>
                        <div className="d-flex align-items-center"><span>amount of day:</span></div>
                        <div className={s.amounts}>
                            <div className={s.amount}
                                 style={amountIsActive === 1 ? {background: "white"} : null}
                                 onClick={() => {
                                     setAmountIsActive(1);
                                     setTerm(30)
                                 }}>
                                <span className="fw-bold"
                                      style={amountIsActive === 1 ? {color: "#F0B90B"} : null}>30</span>
                            </div>
                            <div className={s.amount}
                                 style={amountIsActive === 2 ? {background: "white"} : null}
                                 onClick={() => {
                                     setAmountIsActive(2);
                                     setTerm(60)
                                 }}>
                                <span className="fw-bold"
                                      style={amountIsActive === 2 ? {color: "#F0B90B"} : null}>60</span>
                            </div>
                            <div className={s.amount}
                                 style={amountIsActive === 3 ? {background: "white"} : null}
                                 onClick={() => {
                                     setAmountIsActive(3);
                                     setTerm(90)
                                 }}>
                                <span className="fw-bold"
                                      style={amountIsActive === 3 ? {color: "#F0B90B"} : null}>90</span>
                            </div>
                            <div className={s.amount}
                                 style={amountIsActive === 4 ? {background: "white"} : null}
                                 onClick={() => {
                                     setAmountIsActive(4);
                                     setTerm(120)
                                 }}>
                                <span className="fw-bold"
                                      style={amountIsActive === 4 ? {color: "#F0B90B"} : null}>180</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.invest_block}>
                        <div className="d-flex align-items-center"><span>Coins to invest:</span></div>
                        <div className={s.invest}>
                            <img src={coin} alt="coinImage"/>
                            {/*<input*/}
                            {/*    {...register("coinInput", {required: true})}*/}
                            {/*    type="number"*/}
                            {/*    value={`${coinAmount}`}*/}
                            {/*    onChange={(e) => setCoinAmount(e.target.value)}*/}
                            {/*/>*/}
                            <input type="text" value={coinAmount} onChange={handleCoinAmountChange}/>
                        </div>
                    </div>
                    <div className={s.usd_block}>
                        <div className="d-flex align-items-center"><span>usd to invest:</span></div>
                        <div className={s.usd}>
                            <img src={usd} alt="usd"/>
                            {/*<input*/}
                            {/*    {...register("usdInput", {required: true})}*/}
                            {/*    type="number"*/}
                            {/*    value={`${usdAmount}`}*/}
                            {/*    onChange={e => setUsdAmount(e.target.value)}/>*/}
                            <input value={usdAmount} onChange={handleUsdAmountChange}/>
                        </div>
                    </div>
                </div>
                <div className={s.count_block}>
                    <h2 className="section-headline">You will earn:</h2>
                    <div className={s.plan}>
                        <span className={`fw-bold ${s.count_titles}`}>PLAN</span>
                        <span className={s.badge}>6% per day</span>
                        <span className={s.badgeImg}><img src={mining} alt="mining"/></span>
                    </div>
                    <div className={s.power}>
                        <span className={`fw-bold ${s.count_titles}`}>POWER</span>
                        <span className={s.badge}>1 000 000 VH/s</span>
                    </div>
                    <div className={s.contract}>
                        {loading ? <img src={loadingImg} alt="loading"/> :
                            <button
                                disabled={!coinAmount}
                                className={!coinAmount ? s.disabled : "btn-gradient"}
                                onClick={() => depositHandler()}>
                                DEPOSIT
                            </button>}
                    </div>
                </div>
            </div>
            {isDeposit && <ModalDeposit
                depositModalActive={depositModalActive}
                setDepositModalActive={setDepositModalActive}
                coin={coinName}
            />}
        </>

    )
}

export default Calc
