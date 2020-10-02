import React from "react";
import "./StateDisplay.scss";
import states from "../../states";


const StateDisplay = ({ stateData }) => {
  return (
    <div className="StateDisplay">
      <h1>{states[stateData.state]}</h1>
      <p className="last-updated">
        <span>Data last updated: </span>
        {"Test Text"}
      </p>
      <p className="total-tested">
        <span>Total Tested: </span>
        {"Test Text"}
      </p>
      <p className="total-positive">
        <span>Positive Tests</span>
        {"Test Text"}
      </p>
      <p className="total-negative">
        <span>Negative Tests</span>
        {"Test Text"}
      </p>
      <p className="total-hospitalized">
        <span>Currently Hospitalized: </span>
        {"Test Text"}
      </p>
      <p className="total-recovered">
        <span>Recovered: </span>
        {"Test Text"}
      </p>
      <p className="total-deaths">
        <span>Total Deaths: </span>
        {"Test Text"}
      </p>
      <p className="total-icu">
        <span>In ICU </span>
        {"Test Text"}
      </p>
    </div>
  );
};

export default StateDisplay;
