import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -10 },
    { id: 2, text: "Salary", amount: 4000 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
