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

    setTitle(" Get Updated");

    console.log("CLICKED");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* Here We can have same name for dateVal and datevalue as well */}
      <ExpenseDate dateVal={props.datevalue} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Price {props.price} Rs</div>
      </div>
      <button onClick={clickHandler}> Default</button>
    </Card>
  );
}

export default ExpenseItems;
