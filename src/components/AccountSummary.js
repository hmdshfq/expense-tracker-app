import React from 'react'

export const AccountSummary = () => {
    return (
        <div className="income-expense-container">
            <div>
                <h4>Income</h4>
                <p className="green">$0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="red">$0.00</p>
            </div>
        </div>
    )
}
