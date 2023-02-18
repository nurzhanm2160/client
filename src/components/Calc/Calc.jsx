import React, {useState} from "react";
import s from "./Calc.module.scss"
import img1 from "../../assets/img/coins/1.svg"
import img2 from "../../assets/img/coins/2.svg"
import img3 from "../../assets/img/coins/3.svg"
import img4 from "../../assets/img/coins/4.svg"
import usd from "../../assets/img/coins/USD ICON.png"
import mining from "../../assets/img/maining.svg"

const Calc = () => {
    const [coin, setCoin] = useState(img1)
    const [coinIsActive, setCoinIsActive] = useState(1)
    const [amountIsActive, setAmountIsActive] = useState(1)



    return (
        <div className={`container ${s.calc}`}>
            <div className={s.calculator_block}>
                <h2 className="section-headline">create your contract</h2>
                <div className={s.coins_block}>
                    <div className="d-flex align-items-center"><span>select coin:</span></div>
                    <div className={s.coins}>
                        <div className={s.coin}
                             style={coinIsActive === 1 ? {background: "white"} : null}
                             onClick= {() => {setCoinIsActive(1); setCoin(img1)}}>
                            <img src={img1}/>
                        </div>
                        <div className={s.coin}
                             style={coinIsActive === 2 ? {background: "white"} : null}
                             onClick={() => {setCoinIsActive(2); setCoin(img2)}}>
                            <img src={img2}/>
                        </div>
                        <div className={s.coin}
                             style={coinIsActive === 3 ? {background: "white"} : null}
                             onClick={() => {setCoinIsActive(3); setCoin(img3)}}>
                            <img src={img3}/>
                        </div>
                        <div className={s.coin}
                             style={coinIsActive === 4 ? {background: "white"} : null}
                             onClick={() => {setCoinIsActive(4); setCoin(img4)}}>
                            <img src={img4}/>
                        </div>
                    </div>
                </div>
                <div className={s.amount_block}>
                    <div className="d-flex align-items-center"><span>amount of day:</span></div>
                    <div className={s.amounts}>
                        <div className={s.amount}
                             style={amountIsActive === 1 ? {background: "white"} : null}
                             onClick={() => setAmountIsActive(1)}>
                            <span className="fw-bold" style={amountIsActive === 1 ? {color: "#F0B90B"} : null}>30</span>
                        </div>
                        <div className={s.amount}
                             style={amountIsActive === 2 ? {background: "white"} : null}
                             onClick={() => setAmountIsActive(2)}>
                            <span className="fw-bold" style={amountIsActive === 2 ? {color: "#F0B90B"} : null}>60</span>
                        </div>
                        <div className={s.amount}
                             style={amountIsActive === 3 ? {background: "white"} : null}
                             onClick={() => setAmountIsActive(3)}>
                            <span className="fw-bold" style={amountIsActive === 3 ? {color: "#F0B90B"} : null}>90</span>
                        </div>
                        <div className={s.amount}
                             style={amountIsActive === 4 ? {background: "white"} : null}
                             onClick={() => setAmountIsActive(4)}>
                            <span className="fw-bold" style={amountIsActive === 4 ? {color: "#F0B90B"} : null}>180</span>
                        </div>
                    </div>
                </div>
                <div className={s.invest_block}>
                    <div className="d-flex align-items-center"><span>Coins to invest:</span></div>
                    <div className={s.invest}>
                        <img src={coin}/>
                        <input value="102,9654 BNB"/>
                    </div>
                </div>
                <div className={s.usd_block}>
                    <div className="d-flex align-items-center"><span>usd to invest:</span></div>
                    <div className={s.usd}>
                        <img src={usd}/>
                        <input value="25000,00 USD"/>
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
                <button className="btn-gradient">REGISTER CONTRACT</button>
                <p>This site is protected by hCaptcha and its <a href="#">Privacy Policy</a> and <a href="#">Terms of Service apply.</a></p>
            </div>
        </div>
    )
}

export default Calc
