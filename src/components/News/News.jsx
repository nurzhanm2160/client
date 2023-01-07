import React from 'react'

import news1 from '../../assets/img/news/1.jpg'
import news2 from '../../assets/img/news/2.jpg'
import news3 from '../../assets/img/news/3.jpg'

const newsItems = [
    {
        id: 1,
        coverImage: news1,
        title: 'Added automated withdraw',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum ex quis lacus vehicula, et aliquam lorem interdum. Aliquam et consectetur nisl, eu porttitor ipsum. ',
        date: new Date('2022-4-14')
    },
    {
        id: 2,
        coverImage: news2,
        title: 'Binance accepting us!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum ex quis lacus vehicula, et aliquam lorem interdum. Aliquam et consectetur nisl, eu porttitor ipsum. ',
        date: new Date('2022-6-11')
    },
    {
        id: 3,
        coverImage: news3,
        title: 'Lorem ipsum HUOBI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum ex quis lacus vehicula, et aliquam lorem interdum. Aliquam et consectetur nisl, eu porttitor ipsum. ',
        date: new Date('2022-2-15')
    },
]

export const News = () => {
    return <section class="s-news">
        <div class="container">
            <h2 class="section-headline">Recent news</h2>
            <div class="news-wrapper">
                <div class="row">
                    {newsItems.map(item => 
                        <div class="col-lg-4" key={item.id}>
                            <a href="#" onclick="javascript: void(0)" class="news-items">
                                <span class="news-items__img">
                                    <img src={item.coverImage} alt={item.title} />
                                </span>
                                <div class="news-items__content">
                                    <h5 class="news-items__title">{item.title}</h5>
                                    <p class="news-items__description">{item.description}</p>
                                    <span class="news-items__date">Date: {item.date.toLocaleDateString("en-US")}</span>
                                </div>
                            </a>
                        </div>
                    )}
                    
                </div>
            </div>

        </div>
    </section>
}