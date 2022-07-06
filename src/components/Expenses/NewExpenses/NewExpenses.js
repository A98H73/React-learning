import "./NewExpenses.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(ExpenseData);

    // Calling onAddExpense Function here to pas the data

    props.onAddExpense(ExpenseData);
  };
  return (
    <div className="new-expense">
      {/* Below is custom component EXPENSEFORM and custom property "onSaveExpenseData" */}

      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
