import React from "react";
import "./StateDisplay.scss";
import states from "../../states";
import moment from "moment";

const StateDisplay = ({ stateData }) => {
  return (
    <div className="StateDisplay">
      <h1>{states[stateData.state]}</h1>
      <p className="last-updated">
        <span>Data last updated: </span>
        {moment(stateData.dateModified).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <p className="total-tested">
        <span>Total Tested: </span>
        {stateData.totalTestResults}
      </p>
      <p className="total-positive">
        <span>Positive Tests</span>
        {stateData.positive}
      </p>
      <p className="total-negative">
        <span>Negative Tests</span>
        {stateData.negative}
      </p>
      <p className="total-hospitalized">
        <span>Currently Hospitalized: </span>
        {stateData.hospitalizedCurrently || "No Data"}
      </p>
      <p className="total-recovered">
        <span>Recovered: </span>
        {stateData.recovered || "No Data"}
      </p>
      <p className="total-deaths">
        <span>Total Deaths: </span>
        {stateData.death}
      </p>
      <p className="total-icu">
        <span>In ICU </span>
        {stateData.inIcuCurrently || "No Data"}
      </p>
    </div>
  );
};

export default StateDisplay;
