import React from 'react'
import maining from '../../../assets/img/icons/maining.svg'

export const CardPlan = ({plan}) => {
    return <div className="card">
        <div className="card-header" style={{background: plan.colors}}>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="title">{plan.title}</h4>
                <div className="icon"><img src={maining} alt={plan.title} /></div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="subtitle">{plan.vhs} VH/s</div>
                <div className="badge badge-white" style={{color: plan.colors}}>{plan.days}</div>
            </div>
        </div>
        <div className="card-body">
            {plan.description.map(desc => <p>{desc}</p>)}
            {/* <p *ngFor="let desc of plan.description">{{desc}}</p> */}
            {plan.free && <button type="button" className="btn btn-gradient">Start free</button> }
            {!plan.free && <button type="button" className="btn btn-gradient">{plan.price}$ Buy</button>}
        </div>
	{/* <!-- /.card-body --> */}
    </div>
}