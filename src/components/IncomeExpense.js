import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  let income = 0;
  let expense = 0;
  for (const item of amounts) {
    if (item > 0) {
      income += item;
    } else {
      expense += item;
    }
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Math.abs(income.toFixed(2))}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(expense.toFixed(2))}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpense;
