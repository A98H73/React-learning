import ExpenseItems from "./components/Expenses/ExpenseItems";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css";
import ExpenseForm from "./components/Expenses/NewExpenses/ExpenseForm";
import NewExpenses from "./components/Expenses/NewExpenses/NewExpenses";

function App() {
  let expenses = [
    { id: "t1", title: "Car ", pricer: 677222, date: new Date(2021, 10, 11) },
    { id: "t2", title: "Bike ", pricer: 87678, date: new Date(2011, 12, 11) },
    { id: "t3", title: "Truck ", pricer: 768657, date: new Date(2014, 9, 11) },
    { id: "t4", title: "Tank ", pricer: 7668686, date: new Date(2019, 7, 11) },
  ];

  const addExpenseHandler = (addExpenseDate) => {
    console.log("It's reach to App.js");
  };

  return (
    <div>
      <h2>Let's get started bro!</h2>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseItems
          title={expenses[0].title}
          datevalue={expenses[0].date}
          price={expenses[0].pricer}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[1].title}
          datevalue={expenses[1].date}
          price={expenses[1].pricer}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[2].title}
          datevalue={expenses[2].date}
          price={expenses[2].pricer}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[3].title}
          datevalue={expenses[3].date}
          price={expenses[3].pricer}
        ></ExpenseItems>
      </Card>
    </div>
  );
}

export default App;
