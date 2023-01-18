import React from 'react';
import s from "./FaqPage.module.scss"
import {questions} from "./faqData/faqData";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const FaqPage = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={`container ${s.faq}`}>
                <h2 className="section-headline">Faq (frequently asked questions)</h2>
                <div className={s.account}>
                    <h2 className={s.title}>Account</h2>
                    <div className={s.questions_block}>
                        {questions.account.map(items =>
                            <div className={s.items}>
                                <span className="text-white fw-bold fs-2 text-uppercase">{items.question}</span>
                                <span className="text-white fs-4">{items.answer}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={s.diposit}>
                    <h2 className={s.title}>Deposit and withdrawal of funds</h2>
                    <div className={s.questions_block}>
                        {questions.deposit.map(items =>
                            <div className={s.items}>
                                <span className="text-white fw-bold fs-2 text-uppercase">{items.question}</span>
                                <span className="text-white fs-4">{items.answer}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={s.accountLast}>
                    <h2 className={s.title}>Account</h2>
                    <div className={s.questions_block}>
                        {questions.lastAccount.map(items =>
                            <div className={s.items}>
                                <span className="text-white fw-bold fs-2 text-uppercase">{items.question}</span>
                                <span className="text-white fs-4">{items.answer}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default FaqPage;