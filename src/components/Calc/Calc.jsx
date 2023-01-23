import React, {useEffect, useRef, useState} from "react";
import s from "./Calc.module.scss"
import img1 from "../../assets/img/coins/1.svg"
import img2 from "../../assets/img/coins/2.svg"
import img3 from "../../assets/img/coins/3.svg"
import img4 from "../../assets/img/coins/4.svg"

const Calc = () => {

    const [coin, setCoin] = useState(img1)


    return (
        <div className={s.calc}>
            <div className={s.calc_block}>
                <div className={s.pick}>
                    <div className={s.bg}>f</div>
                    <img onClick={() => {
                        setCoin(img1)
                    }} src={img1} alt="btc"/>
                    <img onClick={() => setCoin(img2)} src={img2} alt="lit"/>
                    <img onClick={() => setCoin(img3)} src={img3} alt="fdc"/>
                    <img onClick={() => setCoin(img4)} src={img4} alt="fdx"/>
                </div>
                <div>
                    <img className="cursor-none" src={coin}/>
                </div>
            </div>
        </div>
    )
}

export default Calc
