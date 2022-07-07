import "./NewExpenses.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = { id: Math.random().toString(), ...enteredExpenseData };
    console.log(ExpenseData);

    // Calling onAddExpense Function here to pass the data

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
