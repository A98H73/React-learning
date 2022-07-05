import "./NewExpenses.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpenses;
