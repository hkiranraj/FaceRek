import React from 'react';

export default ({ promotions }) => {
    if (!promotions) {
        return <div>No Promotions/Offers</div>
    } else {
        return (
            <ul className="m-0">
                <li>Ponotion Name</li>
                <li>Ponotion Name</li>
                <li>Ponotion Name</li>
            </ul>
        )
    }
}