import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItems(props) {
  // Now we will be using setState for Variable to show tthe changes( Transitions) for them

  console.log("testing");
  let [title, setTitle] = useState(props.title); // We can use "const" as well since const OBJECT OR ARRAY properties or ITEMS can be updated or removed

  const clickHandler = () => {
    //  Updating the Value

    //setTitle(" Get Updated");

    // Updating the Value with timer

    setTimeout(() => {
      changeSt(title);
    }, 3000);
    console.log("CLICKED");
    console.log(title);
  };

  const changeSt = (title) => {
    console.log("Called Me!");
    if (title === "Car") setTitle("Bus");
    else if (title === "Bus") setTitle("Car");
  };

  return (
    <li>
      <Card className="expense-item">
        {/* Here We can have same name for dateVal and datevalue as well */}
        <ExpenseDate dateVal={props.datevalue} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">Price {props.price} Rs</div>
        </div>

        <button onClick={clickHandler}> Default</button>
      </Card>
    </li>
  );
}

export default ExpenseItems;
