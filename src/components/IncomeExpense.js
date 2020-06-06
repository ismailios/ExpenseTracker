import React from "react";

function IncomeExpense() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+$0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -$0.00
        </p>
      </div>
    </div>
  );
}

export default IncomeExpense;
