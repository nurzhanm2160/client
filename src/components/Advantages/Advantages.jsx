import React from 'react'
import s from "./Advantages.module.scss"
import {advantagesItems} from "./advantagesData/advantagesData"


export const Advantages = () => {
    return (
        <div className={s.advantages}>
            <div className="container">
                <div className="row">
                    <h2 className="section-headline">Our advantages</h2>
                    <p className="section-subhead">When you choose Bitrox to build your online mining farm, you get a
                        lot of
                        opportunities for earning and multiplying capital in record time!</p>
                </div>
                <div className={s.advantages_wrapper}>
                    <div className={s.items}>
                        {advantagesItems.map(item =>
                            <div className={s.advantages_item}>
                                <div className={s.icon}>
                                    <img src={item.icon} alt={item.title}/>
                                </div>
                                <h4>{item.title}</h4>
                                <div className={s.description}>{item.description}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}