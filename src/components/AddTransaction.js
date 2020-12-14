import React, { useState } from 'react'

export const AddTransaction = () => {

    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form action="">
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        id="description" 
                        placeholder="Details of transaction" 
                        value={ description }
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transaction-amount">Transaction Amount</label>
                    <input 
                        type="text" 
                        id="transaction-amount" 
                        placeholder="Enter the transaction amount" 
                        value={ transactionAmount }
                        onChange={(event) => setTransactionAmount(event.target.value)}
                    />
                </div>  
                <button>Add Transaction </button>              
            </form>
        </div>
    );
}
