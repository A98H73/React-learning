import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangedFilter={filterChangeHandler}
      ></ExpensesFilter>
      {/* DYNAMICALLY SHOWING THE LIST OF ITEMS USING "FUNCTION MAPS()" OF JS */}
      {console.log("Inside Expenses page:")}
      {console.log(props.expenses)}
      {props.expenses.map((items) => (
        <ExpenseItems
          key={items.id} // HERE "KEY" IS ADDED SO THAT EACH ELEMENT OF ARRAY CAN BE IDENTIFIED
          title={items.title}
          datevalue={items.date}
          price={items.pricer}
        ></ExpenseItems>
      ))}

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
