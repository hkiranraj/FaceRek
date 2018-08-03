import React from 'react';

export default ( props ) => {
    return (
        <div className="col-sm-12 col-md-6 mt-2">
            <div className="card mb-3 shadow-sm">
                <div className="card-header font-weight-bold">{props.title}</div>
                <div className={`card-body ${props.cardBdyCls}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}