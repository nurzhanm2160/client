import React, {useRef, useState} from 'react';
import s from "../../FaqPage.module.scss";
import arrowDown from "../../../../assets/img/news/down-arrow.png"
import minus from "../../../../assets/img/news/minus-button.png"

const AccountQuestions = ({id, answer, question, show}) => {

    const [shows, setShows] = useState(show)

    const handleClick = (e) => {
        setShows(!shows)
    }

    return (
        <div className={s.items}>
            <div className="d-flex align-items-center">
                <span onClick={handleClick} className="text-white fw-bold fs-2 text-uppercase w-100">{question}</span>
                {!shows ? <img onClick={handleClick} src={arrowDown} alt="arrow"/> : <img onClick={handleClick} src={minus} alt="arrow"/>}
            </div>
            {shows ? <span className="text-white fs-4">{answer}</span> : null}
        </div>
    )
}

export default AccountQuestions;