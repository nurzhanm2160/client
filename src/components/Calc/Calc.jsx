import React, {useState} from "react";
import s from "./Calc.module.scss"
import img1 from "../../assets/img/coins/1.svg"
import img2 from "../../assets/img/coins/2.svg"
import img3 from "../../assets/img/coins/3.svg"
import img4 from "../../assets/img/coins/4.svg"
import usd from "../../assets/img/coins/USD ICON.png"
import mining from "../../assets/img/maining.svg"
import {useDispatch, useSelector} from "react-redux";
import {deposit} from "../../redux/deposit-slice";
import ModalWithdraw from "../ModalWithdrow/ModalWithdrow";
import ModalDeposit from "../ModalDeposit/ModalDeposit";

const Calc = () => {
    const [coin, setCoin] = useState(img1)
    const [coinIsActive, setCoinIsActive] = useState(1)
    const [amountIsActive, setAmountIsActive] = useState(1)
    const [usdAmount, setUSDAmount] = useState("")
    const [coinAmount, setCoinAmount] = useState("")
    const [coinName, setCoinName] = useState("DOGE")
    const [system, setSystem] = useState("DOGECOIN")
    const [term, setTerm] = useState(30)

    const isDeposit = useSelector(state => state.deposit.isDeposit)

    const [depositModalActive, setDepositModalActive] = useState(false)
    const dispatch = useDispatch()

    const depositHandler = () => {
        dispatch(deposit({amount: coinAmount, system, currency: coinName, term}))
        setDepositModalActive(true)
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
                    <h2 className="section-headline">create your contract</h2>
                    <div className={s.coins_block}>
                        <div className="d-flex align-items-center"><span>select coin:</span></div>
                        <div className={s.coins}>
                            <div className={s.coin}
                                 style={coinIsActive === 1 ? {background: "white"} : null}
                                 onClick= {() => coinChangeHandler(1, img1, "BNB", "BITCOIN")}>
                                <img src={img1}/>
                            </div>
                            <div className={s.coin}
                                 style={coinIsActive === 2 ? {background: "white"} : null}
                                 onClick={() => coinChangeHandler(2, img2, "DOGE", "DOGECOIN")}>
                                <img src={img2}/>
                            </div>
                            <div className={s.coin}
                                 style={coinIsActive === 3 ? {background: "white"} : null}
                                 onClick={() => coinChangeHandler(3, img3, "LTC", "BITCOIN")}>
                                <img src={img3}/>
                            </div>
                            <div className={s.coin}
                                 style={coinIsActive === 4 ? {background: "white"} : null}
                                 onClick={() => coinChangeHandler(4, img4, "TRX", "BITCOIN")}>
                                <img src={img4}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.amount_block}>
                        <div className="d-flex align-items-center"><span>amount of day:</span></div>
                        <div className={s.amounts}>
                            <div className={s.amount}
                                 style={amountIsActive === 1 ? {background: "white"} : null}
                                 onClick={() => {setAmountIsActive(1); setTerm(30)}}>
                                <span className="fw-bold" style={amountIsActive === 1 ? {color: "#F0B90B"} : null}>30</span>
                            </div>
                            <div className={s.amount}
                                 style={amountIsActive === 2 ? {background: "white"} : null}
                                 onClick={() => {setAmountIsActive(2); setTerm(60)}}>
                                <span className="fw-bold" style={amountIsActive === 2 ? {color: "#F0B90B"} : null}>60</span>
                            </div>
                            <div className={s.amount}
                                 style={amountIsActive === 3 ? {background: "white"} : null}
                                 onClick={() => {setAmountIsActive(3); setTerm(90)}}>
                                <span className="fw-bold" style={amountIsActive === 3 ? {color: "#F0B90B"} : null}>90</span>
                            </div>
                            <div className={s.amount}
                                 style={amountIsActive === 4 ? {background: "white"} : null}
                                 onClick={() => {setAmountIsActive(4); setTerm(120)}}>
                                <span className="fw-bold" style={amountIsActive === 4 ? {color: "#F0B90B"} : null}>180</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.invest_block}>
                        <div className="d-flex align-items-center"><span>Coins to invest:</span></div>
                        <div className={s.invest}>
                            <img src={coin} alt="coinImage"/>
                            <input
                                value={`${coinAmount}`}
                                onChange={(e) => setCoinAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={s.usd_block}>
                        <div className="d-flex align-items-center"><span>usd to invest:</span></div>
                        <div className={s.usd}>
                            <img src={usd}/>
                            <input
                                value={`${usdAmount}`}
                                onChange={(e) => setUSDAmount(e.target.value)}/>
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
                    <div className={s.profit}>
                        <span className={`fw-bold ${s.count_titles}`}>PROFIT</span>
                        <span className={s.badge}>$45 000,00</span>
                    </div>
                    <button
                        className="btn-gradient"
                        onClick={() => depositHandler()}
                    >
                        REGISTER CONTRACT
                    </button>
                    <p>This site is protected by hCaptcha and its <a href="#">Privacy Policy</a> and <a href="#">Terms of Service apply.</a></p>
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
