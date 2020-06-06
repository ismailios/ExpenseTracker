import React, { useContext } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalContext";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
}

export default TransactionList;
