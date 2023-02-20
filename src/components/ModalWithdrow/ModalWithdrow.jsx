import React, {useState} from 'react';
import s from "./ModalWithdrow.module.scss"
import close from "../../assets/img/Vector.png";
import {useDispatch} from "react-redux";
import {withdraw} from "../../redux/deposit-slice";

const ModalWithdraw = ({withdrowModalActive, setWithdrowModalActive, coin, system}) => {

    const dispatch = useDispatch()

    const [amountValue, setAmountValue] = useState("");
    const [addressValue, setAddressValue] = useState("");

    const withdrawHandler = () => {
        const amount = parseInt(amountValue)
        dispatch(withdraw({number: addressValue, amount, system, currency: coin}))

    }

    const pasteAmountValue = () => {
        navigator.clipboard.readText()
            .then(text => {
                setAmountValue(text)
            })
    }

    const pasteAddressValue = () => {
        navigator.clipboard.readText()
            .then(text => {
                setAddressValue(text)
            })
    }

    return (
        <div className={withdrowModalActive ? s.active : s.withdrow_modal}
             onClick={() => setWithdrowModalActive(false)}>
            <div className={withdrowModalActive ? s.modal_content_active : s.modal_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.head}>
                    <div>
                        <span className="section-headline pt-4">WITHDRAW</span>
                        <span className={`section-headline ${s.span}`}>WITHDRAW coin:<br/>{coin}</span>
                    </div>
                    <div className={s.close}>
                        <img onClick={() => setWithdrowModalActive(false)} src={close}/>
                    </div>
                </div>
                <div className={`row pt-2 ${s.form}`}>
                    <span className="section-headline">WITHDRAW coin amount:</span>
                    <div className="col-lg-8">
                        <input onChange={e => setAmountValue(e.target.value)} value={amountValue}/>
                    </div>
                    <div className="col-lg-4">
                        <button onClick={pasteAmountValue}
                                className="btn-gradient">PASTE
                        </button>
                    </div>
                </div>
                <div className={`row pt-4 ${s.form}`}>
                    <span className="section-headline">Payment address:</span>
                    <div className="col-lg-8">
                        <input onChange={e => setAddressValue(e.target.value)} value={addressValue}/>
                    </div>
                    <div className="col-lg-4">
                        <button onClick={pasteAddressValue} className="btn-gradient">PASTE</button>
                    </div>
                    <div className="col">
                        <button onClick={() => withdrawHandler()}
                                className="btn-gradient">WITHDRAW
                        </button>
                    </div>
                </div>
                <div className={`row ${s.qr}`}>
                        <span className={`section-headline`}>
                            Blockchain transaction need time. Track the status of your transaction on the Checkout page.
                            Our support ready to help you, but first of all we check explorer too.
                        </span>
                </div>
            </div>
        </div>
    )
}

export default ModalWithdraw;