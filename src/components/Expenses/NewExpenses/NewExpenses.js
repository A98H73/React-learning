import "./NewExpenses.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = () => {
  const saveExpenseDataHandlerData = (enteredExpenseData) => {
    const ExpenseData = { ...enteredExpenseData, id: Math.random().toString() };
  };
  return (
    <div className="new-expense">
      {/* Below is custom component EXPENSEFORM and custom property "onSaveExpenseData" */}

      <ExpenseForm onSaveExpenseData />
    </div>
  );
};

export default NewExpenses;
