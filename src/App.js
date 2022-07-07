import React, { useState } from "react";

import NewExpenses from "./components/Expenses/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSES = [
  { id: "t1", title: "Car ", pricer: 677222, date: new Date(2021, 10, 8) },
  { id: "t2", title: "Bike ", pricer: 87678, date: new Date(2011, 12, 9) },
  { id: "t3", title: "Truck ", pricer: 768657, date: new Date(2014, 9, 10) },
  { id: "t4", title: "Tank ", pricer: 7668686, date: new Date(2019, 7, 11) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (addExpense) => {
    console.log("It's reached to App.js");
    console.log(addExpense);
    // We have 2 Methods

    // M1
    // setExpenses(addExpense, ...DUMMY_EXPENSES); // BUT as we know IT'S NOT A GOOD PRACTICE

    // M2

    // Here "prevExpenses" take the Snapshot of previous Expenses and with "..." SPREAD OPERATOR we add new and prev one
    setExpenses((prevExpenses) => {
      console.log("Now see this:");
      console.log(prevExpenses);

      const res = [addExpense, ...prevExpenses];
      //console.log(res);
      return res;
    });
  };

  return (
    <div>
      <h2>Let's get started bro!</h2>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
