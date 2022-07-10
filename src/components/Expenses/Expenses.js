import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (items) => items.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangedFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />

      {/* NOW WE CAN PRINT FILTERED OUT EXPENSES */}

      {/* {finalExpenses} */}
      {/* KOI BHI JAVASCRIPT(Dynamic work) VALA KAM JSX VALE PART MEIN KRNE K LIYE {} KA USE KARO */}
      {/* HERE WE HAVE HARDCODED THE LIST OF ALL EXPENSES

      <ExpenseItems
        title={props.expenses[0].title}
        datevalue={props.expenses[0].date}
        price={props.expenses[0].pricer}
      ></ExpenseItems>
      <ExpenseItems
        title={props.expenses[1].title}
        datevalue={props.expenses[1].date}
        price={props.expenses[1].pricer}
      ></ExpenseItems>
      <ExpenseItems
        title={props.expenses[2].title}
        datevalue={props.expenses[2].date}
        price={props.expenses[2].pricer}
      ></ExpenseItems>
      <ExpenseItems
        title={props.expenses[3].title}
        datevalue={props.expenses[3].date}
        price={props.expenses[3].pricer}
      ></ExpenseItems> */}
    </Card>
  );
}

export default Expenses;
