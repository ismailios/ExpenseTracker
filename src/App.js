import React from "react";

import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import IncomeExpense from "./components/IncomeExpense";

import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
