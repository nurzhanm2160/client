import React from 'react'
import {newsItems} from "./newsData/newsData";
import s from "./News.module.scss"


export const News = () => {
    return <section className={s.news}>
        <div className="container">
            <div className="row">
                <h2 className="section-headline text-center">Recent news</h2>
            </div>
                <div className={s.news_wrapper}>
                <div className="row">
                    {newsItems.map(item => 
                        <div className="col-lg-4" key={item.id}>
                            <a href="#"  className={s.news_items}>
                                <span className={s.img}>
                                    <img src={item.coverImage} alt={item.title} />
                                </span>
                                <div className={s.content}>
                                    <h5 className={s.title}>{item.title}</h5>
                                    <p className={s.description}>{item.description}</p>
                                    <span className={s.date}>Date: {item.date.toLocaleString()}</span>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>

        </div>
    </section>
}