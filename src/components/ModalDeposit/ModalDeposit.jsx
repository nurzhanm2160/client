import React, {useState} from 'react';
import s from "./ModalDeposit.module.scss"
import close from "../../assets/img/Vector.png"
import qr from "../../assets/img/miningPage/qr.png"
import {useClipboard} from "use-clipboard-copy";
import {
    ErrorModalMessage,
    InfoModalMessage,
    SuccessModalMessage,
    WarningModalMessage
} from "../DepositMessages/DepositMessages/DepositMessages";
import {useSelector} from "react-redux";

const ModalDeposit = ({depositModalActive, setDepositModalActive, coin}) => {

    const [copyAmount, setCopyAmount] = useState(false)
    const [copyAddress, setCopyAddress] = useState(false)
    const [successModalMessageActive, setSuccessModalMessageActive] = useState(false)
    const [infoModalMessageActive, setInfoModalMessageActive] = useState(false)
    const [warningModalMessageActive, setWarningModalMessageActive] = useState(false)
    const [errorModalMessageActive, setErrorModalMessageActive] = useState(false)
    // const [depositAmount, setDepositAmount] = useState(0)
    // const [paymentAddress, setPaymentAddress] = useState("")

    const amount = useSelector(state => state.deposit.amount)
    const wallet = useSelector(state => state.deposit.wallet)

    const clipboardAmount = useClipboard({
        onSuccess() {
            setCopyAmount(true)
        }
    })
    const clipboardAddress = useClipboard({
        onSuccess() {
            setCopyAddress(true)
        }
    })

    return (
        <div className={depositModalActive ? s.active : s.deposit_modal} onClick={() => setDepositModalActive(false)}>
            <div className={depositModalActive ? s.modal_content_active : s.modal_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.head}>
                    <div>
                        <span className="section-headline pt-4">DEPOSIT</span>
                        <span className={`section-headline ${s.span}`}>Payment coin:<br/>{coin}</span>
                        <span className={`section-headline ${s.span}`}>Get power (with current exchange rate):<br/>1 000 VH/s</span>
                    </div>
                    <div className={s.close}>
                        <img onClick={() => setDepositModalActive(false)} src={close} alt="close"/>
                    </div>
                </div>
                <div className={`row pt-2 ${s.form}`}>
                    <span className="section-headline">Payment coin amount:</span>
                    <div className="col-lg-8">
                        <input ref={clipboardAmount.target} value={amount}/>
                    </div>
                    <div className="col-lg-4">
                        <button onClick={clipboardAmount.copy}
                                className={`btn-gradient ${s.copy}`}>{copyAmount ? "COPIED" : "COPY"}</button>
                    </div>
                </div>
                <div className={`row pt-4 ${s.form}`}>
                    <span className="section-headline">Payment address:</span>
                    <div className="col-lg-8">
                        <input ref={clipboardAddress.target} value={wallet}/>
                    </div>
                    <div className="col-lg-4">
                        <button onClick={clipboardAddress.copy}
                                className={`btn-gradient ${s.copy}`}>{copyAddress ? "COPIED" : "COPY"}</button>
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
                        <img src={qr} alt="qr"/>
                    </div>
                </div>
            </div>
            <SuccessModalMessage successModalMessageActive={successModalMessageActive}
                                 setSuccessModalMessageActive={setSuccessModalMessageActive}/>
            <InfoModalMessage infoModalMessageActive={infoModalMessageActive}
                              setInfoModalMessageActive={setInfoModalMessageActive}/>
            <WarningModalMessage warningModalMessageActive={warningModalMessageActive}
                                 setWarningModalMessageActive={setWarningModalMessageActive}/>
            <ErrorModalMessage errorModalMessageActive={errorModalMessageActive}
                               setErrorModalMessageActive={setErrorModalMessageActive}/>
        </div>
    )
}

export default ModalDeposit;