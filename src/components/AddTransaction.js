import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction, transactions } = useContext(GlobalContext);

  const transaction = {
    id: transactions.map((transaction) => transaction.id + 1),
    text: text,
    amount: +amount,
  };

  const handleError = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => handleError(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={() => addTransaction(transaction)}>
          Add transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
