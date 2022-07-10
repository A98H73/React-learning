import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // We can use "FOR IN" loop if its an OBJECT, but since "props.expenses" is an ARRAY, so we use "FOR OF" loop

  for (const exp of props.expenses) {
    const expenseMonth = exp.date.getMonth();
    chartDataPoints[expenseMonth].value = exp.pricer;
  }
  return <Chart dataPoints={chartDataPoints}></Chart>;
}

export default ExpensesChart;
