import React from 'react';
import s from "./Title.module.scss";
import {headerItems} from "./itemsData/ItemsData";


const Title = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className={s.header_block}>
                        <div className="row">
                            <div className="row-cols-md-1">
                                <h1>SHORTA.CC</h1>
                                <p className={s.header_text}>Cloud mining platform for BNB, TRX, LTC and
                                    DOGE</p>
                            </div>
                            <div className="row">
                                <form className={s.form}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <input type="email" className="input"
                                                   placeholder="Enter your Email address"/>
                                        </div>
                                        <div className="col-lg-4">
                                            <button className={`btn-gradient ${s.register}`}>REGISTER</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <p className={s.header_sub}>
                                    This site is protected by hCaptcha and its <a href="#">Privacy
                                    Policy</a> and <a
                                    href="#">Terms of Service</a> apply.
                                </p>
                            </div>
                            <div className="row">
                                <h4 className="text-white">Register now and get <span
                                    className={s.badge}>$4.5</span> for free!</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={s.header_block}>
                        <div className="row justify-content-center">
                            {headerItems.items1.map(item => (
                                <div className={`col-lg-6 ${s.item}`} key={item.title}>
                                    <div className={s.icon}><img src={item.iconLink}
                                                                 alt={item.title}/></div>
                                    <h4 className={s.title}>{item.title}</h4>
                                    <p className={s.description}>{item.description}</p>
                                </div>
                            ))}
                            {headerItems.items2.map(item => (
                                <div className={`col-lg-6 ${s.item}`} key={item.title}>
                                    <div className={s.icon}><img src={item.iconLink}
                                                                 alt={item.title}/></div>
                                    <h4 className={s.title}>{item.title}</h4>
                                    <p className={s.description}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;