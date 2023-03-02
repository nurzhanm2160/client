import React from 'react';
import s from "./Title.module.scss";
import {headerItems} from "./itemsData/ItemsData";
import {NavLink} from "react-router-dom";


const Title = () => {
    return (
        <div className={`container ${s.title}`}>
            <div className={s.header}>
                <div className={s.header_block}>
                    <div className={s.header_items}>
                        <h1>BITROX Mining</h1>
                        <p className={s.header_text}>Cloud mining platform for BNB, TRX, LTC and DOGE</p>
                        <div className={s.form}>
                            <input placeholder="Enter your EMail adress"/>
                            <NavLink to="/register"><button className="btn-gradient">REGISTER</button></NavLink>
                        </div>
                        <span>Register now and get<span className={s.badge}>$4.5</span>for free!</span>
                    </div>
                </div>
            </div>
            <div className={s.items_block}>
                <div className={s.items}>
                    <div>
                        {headerItems.items1.map(item => (
                            <div className={s.child}>
                                <div className={s.item} key={item.title}>
                                    <div className={s.icon}><img src={item.iconLink} alt={item.title}/></div>
                                    <h4 className='text-white'>{item.title}</h4>
                                    <p className={s.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {headerItems.items2.map(item => (
                            <div className={s.child}>
                                <div className={s.item} key={item.title}>
                                    <div className={s.icon}><img src={item.iconLink} alt={item.title}/></div>
                                    <h4 className='text-white'>{item.title}</h4>
                                    <p className={s.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;

