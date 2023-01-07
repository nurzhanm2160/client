import React from 'react'

import lamp from '../../assets/img/icons/lamp-icon.svg'
import chart from '../../assets/img/icons/chart-icon.svg'
import withdraw from '../../assets/img/icons/withdraw-icon.svg'
import bonus from '../../assets/img/icons/bonus-icon.svg'

const adventagesItems = [
    {
        icon: lamp,
        title: 'Innovations',
        description: 'Shorta provides users with the most advanced technologies for mining cryptocurrencies at affordable prices.'
    },
    {
        icon: chart,
        title: 'Make profit every day',
        description: 'Get 3% per day with a deposit of only 25$. You can also increase income by receiving bonuses and inviting people with your ref link.'
    },
    {
        icon: withdraw,
        title: 'Withdrawal without deposit',
        description: 'The user who has not made a deposit and has collected the minimum amount for withdrawal is allowed to withdraw after ~ 60 days.'
    },
    {
        icon: bonus,
        title: 'Bonus system',
        description: 'Regardless of the investment plan, each user can receive a random bonus for the selected coin every six hours.'
    }
]

export const Advantages = () => {
    return <div class="s-advantages">
	<div class="container">
		<h2 class="section-headline">Our advantages</h2>
		<p class="section-subhead">When you choose Shorta to build your online mining farm, you get a lot of opportunities for earning and multiplying capital in record time!</p>

		<div class="advantages-wrapper">
			{/* <!--	Items	--> */}
			<div class="row">
                {adventagesItems.map(item => 
                    <div class="col-lg-3">
                        <div class="advantages-item">
                            <div class="advantages-item__icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4 class="advantages-item__title">{item.title}</h4>
                            <div class="advantages-item__description">{item.description}</div>
                        </div>
                        {/* <!-- /.advantages-item --> */}
                    </div>
                )}
				{/* <div class="col-lg-3" *ngFor="let item of advantagesItems">
					<div class="advantages-item">
						<div class="advantages-item__icon">
							<img [src]="item.icon" [alt]="item.title">
						</div>
						<h4 class="advantages-item__title">{{item.title}}</h4>
						<div class="advantages-item__description">{{item.description}}</div>
					</div>
				</div> */}
			</div>
		</div>
		{/* <!--	Items End	--> */}
	</div>
</div>
// <!-- /.s-advantages -->
}