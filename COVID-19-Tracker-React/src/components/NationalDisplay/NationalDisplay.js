import React from "react";
import "./NationalDisplay.scss";
import CountUp from "react-countup";

const NationalDisplay = ({ data }) => {
  return (
    <div className="NationalDisplay">
      <h1>Nationwide Data</h1>
      {data ? (
        <div>
          <p>
            <label>Total Test Results:</label>
            <CountUp duration={3} end={data.totalTestResults}></CountUp>
          </p>
          <p>
            <label>Total Positive:</label>
            <CountUp duration={3} end={data.positive}></CountUp>
          </p>
          <p>
            <label>Total Negative:</label>
            <CountUp duration={3} end={data.negative}></CountUp>
          </p>
          <p>
            <label>Total Hospitalized:</label>
            <CountUp duration={3} end={data.hospitalized}></CountUp>
          </p>
          <p>
            <label>Total Deaths:</label>
            <CountUp duration={3} end={data.death}></CountUp>
          </p>
        </div>
      ) : (
        <h1>Unable to get COVID-19 data.</h1>
      )}
    </div>
  );
};

export default NationalDisplay;
