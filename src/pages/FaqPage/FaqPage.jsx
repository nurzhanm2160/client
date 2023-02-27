import React, {useState} from 'react';
import s from "./FaqPage.module.scss"
import {questions} from "./faqData/faqData";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import AccountQuestions from "./faqData/components/AccountQuestions";

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
                        {questions.account.map(items => <AccountQuestions key={items.id} id={items.id}
                                                                          answer={items.answer}
                                                                          question={items.question}
                                                                          show={items.show}/>)}
                    </div>
                </div>
                <div className={s.diposit}>
                    <h2 className={s.title}>Deposit and withdrawal of funds</h2>
                    <div className={s.questions_block}>
                        {questions.deposit.map(items => <AccountQuestions key={items.id} id={items.id}
                                                                          answer={items.answer}
                                                                          question={items.question}
                                                                          show={items.show}/>)}
                    </div>
                </div>
                <div className={s.accountLast}>
                    <h2 className={s.title}>Account</h2>
                    <div className={s.questions_block}>
                        {questions.lastAccount.map(items => <AccountQuestions key={items.id} id={items.id}
                                                                          answer={items.answer}
                                                                          question={items.question}
                                                                          show={items.show}/>)}
                    </div>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default FaqPage;