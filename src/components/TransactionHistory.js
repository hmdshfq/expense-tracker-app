import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project Income 
                    <span>$1,000</span>
                    <button>X</button>
                </li>
                <li className="minus">
                    Project salaries 
                    <span>-$500</span>
                    <button>X</button>
                </li>
            </ul>
        </div>
    )
}
