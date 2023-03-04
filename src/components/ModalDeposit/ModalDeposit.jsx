import React, {useState} from 'react';
import s from "./ModalDeposit.module.scss"
import close from "../../assets/img/Vector.png"
import {useClipboard} from "use-clipboard-copy";
import {
    ErrorModalMessage,
    InfoModalMessage,
    SuccessModalMessage,
    WarningModalMessage
} from "../DepositMessages/DepositMessages/DepositMessages";
import {useSelector} from "react-redux";

const ModalDeposit = ({coinAmount, coinName, depositModalActive, setDepositModalActive, coin}) => {

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
                    <span className={`section-headline ${s.title}`}>Deposite</span>
                    <img src={close} alt="close" onClick={() => setDepositModalActive(false)}/>
                </div>
                <div className={s.description}>
                    <span className={s.span}>Payment coin:<br/>{coinName}</span>
                    <span className={s.span}>Get power (with current exchange rate):<br/>1 000 VH/s</span>
                </div>
                <div className={s.forms}>
                    <div>
                        <span>Payment coin amount:</span>
                        <div className={s.form}>
                            <input className={s.input} ref={clipboardAmount.target} value={coinAmount}/>
                            <button className={`btn-gradient ${s.button}`}
                                    onClick={clipboardAmount.copy}>{copyAmount ? "COPIED" : "COPY"}</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span>Payment address:</span>
                        <div className={s.form}>
                            <input className={s.input} ref={clipboardAddress.target} value={wallet}/>
                            <button className={`btn-gradient ${s.button}`}
                                    onClick={clipboardAddress.copy}>{copyAddress ? "COPIED" : "COPY"}</button>
                        </div>
                    </div>
                </div>
                <div className={s.info}>
                    Blockchain transaction need time. Track the status of your transaction on the Checkout page.
                    Our support ready to help you, but first of all we check explorer too.
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