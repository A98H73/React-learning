import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let finalExpenses = (
    <p className="expenses-list__fallback">No Expenses Here</p>
  );

  if (props.items.length > 0) {
    // DYNAMICALLY SHOWING THE LIST OF ITEMS USING "FUNCTION MAP()" OF JS
    // HERE NOW WE ARE SHOWING FILTERED EXPENSES

    finalExpenses = props.items.map((items) => (
      <ExpenseItems
        key={items.id} // HERE "KEY" IS ADDED SO THAT EACH ELEMENT OF ARRAY CAN BE IDENTIFIED
        title={items.title}
        datevalue={items.date}
        price={items.pricer}
      ></ExpenseItems>
    ));
  }

  return <ul className="expenses-list">{finalExpenses}</ul>;
};

export default ExpensesList;
