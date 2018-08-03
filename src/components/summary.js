import React from 'react';


export default () => {
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Total Customers
                <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Customers in Shop
                <span className="badge badge-success badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Customer Existed
                <span className="badge badge-warning badge-pill">1</span>
            </li>
        </ul>
    )
}