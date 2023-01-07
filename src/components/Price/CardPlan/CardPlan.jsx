import React from 'react'
import maining from '../../../assets/img/icons/maining.svg'

export const CardPlan = ({plan}) => {
    return <div class="card">
        <div class="card-header" style={{background: plan.colors}}>
            <div class="d-flex align-items-center justify-content-between mb-2">
                <h4 class="title">{plan.title}</h4>
                <div class="icon"><img src={maining} alt={plan.title} /></div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <div class="subtitle">{plan.vhs} VH/s</div>
                <div class="badge badge-white" style={{color: plan.colors}}>{plan.days}</div>
            </div>
        </div>
        <div class="card-body">
            {plan.description.map(desc => <p>{desc}</p>)}
            {/* <p *ngFor="let desc of plan.description">{{desc}}</p> */}
            {plan.free && <button type="button" class="btn btn-gradient">Start free</button> }
            {!plan.free && <button type="button" class="btn btn-gradient">{plan.price}$ Buy</button>}
        </div>
	{/* <!-- /.card-body --> */}
    </div>
}