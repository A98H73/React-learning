import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* HERE WE USE "{{}}" OUTER BRACKET IS FOR SHOWING O/P DYNAMICALLY AND INNER IS TO RUN JA JS CODE */}
        <div
          className="char-bar_fill"
          style={{ height: barFillHeight, backgroundColor: "navy" }}
        ></div>
      </div>
      <div className="char-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
