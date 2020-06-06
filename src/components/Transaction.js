import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <ul className="list">
      <li className={sign === "-" ? "minus" : "plus"} key={transaction.id}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </ul>
  );
}

export default Transaction;
