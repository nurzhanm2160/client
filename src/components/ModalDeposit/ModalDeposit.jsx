import React from 'react';
import s from "./ModalDeposit.module.scss"
import close from "../../assets/img/Vector.png"
import qr from "../../assets/img/miningPage/qr.png"

const ModalDeposit = ({active, setActive}) => {
    return (
        <div className={active ? s.active : s.modal} onClick={() => setActive(false)}>
            <div className={active ? s.modal_content_active : s.modal_content} onClick={e => e.stopPropagation()}>
                <div className={s.head}>
                    <div>
                        <span className="section-headline pt-4">DEPOSIT</span>
                        <span className={`section-headline ${s.span}`}>Payment coin:<br/>TRX (TRС20)</span>
                        <span className={`section-headline ${s.span}`}>Get power (with current exchange rate):<br/>1 000 VH/s</span>
                    </div>
                    <div className={s.close}>
                        <img onClick={() => setActive(false)} src={close}/>
                    </div>
                </div>
                <div className={`row pt-2 ${s.form}`}>
                    <span className="section-headline">Payment coin amount:</span>
                    <div className="col-lg-8">
                        <input value="405.95"/>
                    </div>
                    <div className="col-lg-4">
                        <button className={`btn-gradient ${s.copy}`}>COPY</button>
                    </div>
                </div>
                <div className={`row pt-4 ${s.form}`}>
                    <span className="section-headline">Payment address:</span>
                    <div className="col-lg-8">
                        <input value="TQcPUM1xRdvRXEAi7uXPPRFSuzgUN66vfo"/>
                    </div>
                    <div className="col-lg-4">
                        <button className={`btn-gradient ${s.copy}`}>COPY</button>
                    </div>
                </div>
                <div className={`row pt-4 ${s.qr}`}>
                    <div className="col-lg-8">
                        <span className={`section-headline`}>
                            Blockchain transaction need time. Track the status of your transaction on the Checkout page.
                            Our support ready to help you, but first of all we check explorer too.
                        </span>
                    </div>
                    <div className="col-lg-4">
                        <img src={qr}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDeposit;