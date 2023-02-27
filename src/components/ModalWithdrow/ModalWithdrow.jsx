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
                    <span className={`section-headline ${s.title}`}>Withdrow</span>
                    <img src={close} alt="close" onClick={() => setWithdrowModalActive(false)}/>
                </div>
                <div className={s.description}>
                    <span className={s.span}>Withdrow coin:<br/>TRX (TRС20)</span>
                </div>
                <div className={s.forms}>
                    <div>
                        <span>WITHDRAW coin amount:</span>
                        <div className={s.form}>
                            <input className={s.input} onChange={e => setAmountValue(e.target.value)} value={amountValue}/>
                            <button onClick={pasteAmountValue}
                                    className={`btn-gradient ${s.button}`}>PASTE
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span>Payment address:</span>
                        <div className={s.form}>
                            <input className={s.input} onChange={e => setAddressValue(e.target.value)} value={addressValue}/>
                            <button onClick={pasteAddressValue} className={`btn-gradient ${s.button}`}>PASTE</button>
                        </div>
                    </div>
                </div>
                <div className={s.withdrow}>
                    <button className="btn-gradient" onClick={withdrawHandler}>Withdrow</button>
                </div>
                <div className={s.info}>
                    Blockchain transaction need time. Track the status of your transaction on the Checkout page.
                    Our support ready to help you, but first of all we check explorer too.
                </div>
            </div>
        </div>
    )
}

export default ModalWithdraw;