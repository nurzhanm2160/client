import s from "./DepositMessages.module.scss"
import closeImg from "../../../assets/img/miningPage/ModalMessages/close.png"
import successImg from "../../../assets/img/miningPage/ModalMessages/success.png"
import infoImg from "../../../assets/img/miningPage/ModalMessages/info.png"
import warningImg from "../../../assets/img/miningPage/ModalMessages/warning.png"
import errorImg from "../../../assets/img/miningPage/ModalMessages/error.png"

export const SuccessModalMessage = ({successModalMessageActive, setSuccessModalMessageActive}) => {
    return (
        <div className={successModalMessageActive ? s.success_active : s.success_message}
             onClick={() => setSuccessModalMessageActive(false)}>
            <div className={successModalMessageActive ? s.success_content_active : s.success_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.success_items}>
                    <img src={successImg} alt="success"/>
                    <span className={s.message_title}>Success!</span>
                    <span className={s.message}>Lorem ipsum sit dolor amet ave mio </span>
                    <img className={s.close} src={closeImg} alt="close"
                         onClick={() => setSuccessModalMessageActive(false)}/>
                </div>
            </div>
        </div>
    )
}

export const InfoModalMessage = ({infoModalMessageActive, setInfoModalMessageActive}) => {
    return (
        <div className={infoModalMessageActive ? s.info_active : s.info_message}
             onClick={() => setInfoModalMessageActive(false)}>
            <div className={infoModalMessageActive ? s.info_content_active : s.info_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.info_items}>
                    <img src={infoImg} alt="info"/>
                    <span className={s.message_title}>Info!</span>
                    <span className={s.message}>Lorem ipsum sit dolor amet ave mio </span>
                    <img className={s.close} src={closeImg} alt="close"
                         onClick={() => setInfoModalMessageActive(false)}/>
                </div>
            </div>
        </div>
    )
}

export const WarningModalMessage = ({warningModalMessageActive, setWarningModalMessageActive}) => {
    return (
        <div className={warningModalMessageActive ? s.warning_active : s.warning_message}
             onClick={() => setWarningModalMessageActive(false)}>
            <div className={warningModalMessageActive ? s.warning_content_active : s.warning_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.warning_items}>
                    <img src={warningImg} alt="warning"/>
                    <span className={s.message_title}>Warning!</span>
                    <span className={s.message}>Lorem ipsum sit dolor amet ave mio </span>
                    <img className={s.close} src={closeImg} alt="close"
                         onClick={() => setWarningModalMessageActive(false)}/>
                </div>
            </div>
        </div>
    )
}

export const ErrorModalMessage = ({errorModalMessageActive, setErrorModalMessageActive}) => {
    return (
        <div className={errorModalMessageActive ? s.error_active : s.error_message}
             onClick={() => setErrorModalMessageActive(false)}>
            <div className={errorModalMessageActive ? s.error_content_active : s.error_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.error_items}>
                    <img src={errorImg} alt="error"/>
                    <span className={s.message_title}>Error!</span>
                    <span className={s.message}>Lorem ipsum sit dolor amet ave mio </span>
                    <img className={s.close} src={closeImg} alt="close"
                         onClick={() => setErrorModalMessageActive(false)}/>
                </div>
            </div>
        </div>
    )
}


export const RegisterSuccessful = ({registerSuccessful, setRegisterSuccessful}) => {
    return (
        <div className={registerSuccessful ? s.success_active : s.success_message}
             onClick={() => setRegisterSuccessful(false)}>
            <div className={registerSuccessful ? s.success_content_active : s.success_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.success_items}>
                    <img src={successImg} alt="error"/>
                    <span className={s.message_title}>Error!</span>
                    <span className={s.message}>You have successfully registered </span>
                    <img className={s.close} src={closeImg} alt="close"
                         onClick={() => setRegisterSuccessful(false)}/>
                </div>
            </div>
        </div>
    )
}


export const RegisterError = ({registerError, setRegisterError}) => {
    return (
        <div className={registerError ? s.error_active : s.error_message}
             onClick={() => setRegisterError(false)}>
            <div className={registerError ? s.error_content_active : s.error_content}
                 onClick={e => e.stopPropagation()}>
                <div className={s.error_items}>
                    <img src={errorImg} alt="error"/>
                    <span className={s.message_title}>Error!</span>
                    <span className={s.message}>Try again or enter different details</span>
                    <img className={s.close} src={closeImg} alt="close"
                         onClick={() => setRegisterError(false)}/>
                </div>
            </div>
        </div>
    )
}