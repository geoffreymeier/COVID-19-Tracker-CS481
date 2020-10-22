import React from "react";
import StateDisplay from "../StateDisplay/StateDisplay";
import "./Model.scss";

const Model = ({ activeState, toggleOpen, modelOpen }) => {
  console.log(activeState);
  return (
    <div className={`Model ${!modelOpen && "hidden"}`}>
      <button
        className="close-button"
        onClick={() => toggleOpen((open) => !open)}
      >
        X
      </button>
      {activeState ? (
        <StateDisplay stateData={activeState} />
      ) : (
        <div className="no-state-info">
          <h1>Unable to get COVID-19 data.</h1>
        </div>
      )}
    </div>
  );
};

export default Model;
