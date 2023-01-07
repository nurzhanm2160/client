import React from 'react'
import { CardPlan } from './CardPlan/CardPlan'

const plans = [
    {
        id: 1,
        title: 'Free',
        days: '180 days',
        vhs: 0,
        colors: '#0577F2',
        description: ['2% per day', '180 VH/s bonus'],
        free: true
    },
    {
        id: 2,
        title: 'SILVER',
        days: '180 days',
        vhs: 40,
        colors: '#4568DC',
        description: ['2% per day', '180 VH/s bonus'],
        free: false,
        price: 1
    },
    {
        id: 3,
        title: 'PLATINUM',
        days: '180 days',
        vhs: 1000,
        colors: '#4568DC',
        description: ['2% per day', '180 VH/s bonus'],
        free: false,
        price: 25
    },
    {
        id: 4,
        title: 'AURUM',
        days: '180 days',
        vhs: 10000,
        colors: '#E79470',
        description: ['2% per day', '180 VH/s bonus'],
        free: false,
        price: 25
    },
]

export const Price = () => {
    return <section class="s-prices">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <h2 class="section-headline">PRICES</h2>
                    <p class="section-subhead">Choose ideal plan for yourself!</p>
                </div>
                <div class="col-lg-8 d-flex align-items-center">
                    <button class="btn btn-primary mr-5">Standart</button>
                    <button class="btn btn-outline btn-outline-red">Ultimate</button>
                </div>
            </div>

            <div class="row mt-5">
                {plans.map(plan => 
                    <div class="col-lg-3">
                        <CardPlan plan={plan} />
                    </div>
                )}
                
                {/* <div class="col-lg-3" *ngFor="let plan of plans">
                    <card-plan [plan]="plan"></card-plan>
                </div> */}
            </div>

        </div>
    </section>
}