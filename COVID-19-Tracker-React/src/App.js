import React, { useEffect, useState } from "react";
import "./App.css";
import USAMap from "react-usa-map";
import Model from "./components/Model/Model";
import Header from "./components/Header/Header";
import { getCovidStatesData, getCovidUSData } from "./services/covidApi";

function App() {
  const [activeState, setActiveState] = useState(null);
  const [covidUSData, setCovidUSData] = useState(null);
  const [covidStatesData, setCovidStatesData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [modelOpen, toggleModelOpen] = useState(false);

  useEffect(() => {
    getCovidStatesData().then(setCovidStatesData).catch(setFetchError);
    getCovidUSData().then(setCovidUSData).catch(setFetchError);
  }, []);

  const statesCustomConfig = () => {
    const generateHexColorForState = (stateCode) => {
      const hexValue =
          255;

      return `rgb(220, ${hexValue}, ${hexValue}`;
    };

    return covidUSData && covidStatesData
      ? {
          AL: {
            fill: `${generateHexColorForState("AL")})`,
          },
          AK: {
            fill: `${generateHexColorForState("AK")})`,
          },
          AS: {
            fill: `${generateHexColorForState("AS")})`,
          },
          AZ: {
            fill: `${generateHexColorForState("AZ")})`,
          },
          AR: {
            fill: `${generateHexColorForState("AR")})`,
          },
          CA: {
            fill: `${generateHexColorForState("CA")})`,
          },
          CO: {
            fill: `${generateHexColorForState("CO")})`,
          },
          CT: {
            fill: `${generateHexColorForState("CT")})`,
          },
          DE: {
            fill: `${generateHexColorForState("DE")})`,
          },
          DC: {
            fill: `${generateHexColorForState("DC")})`,
          },

          FL: {
            fill: `${generateHexColorForState("FL")})`,
          },
          GA: {
            fill: `${generateHexColorForState("DC")})`,
          },
          GU: {
            fill: `${generateHexColorForState("GU")})`,
          },
          HI: {
            fill: `${generateHexColorForState("HI")})`,
          },
          ID: {
            fill: `${generateHexColorForState("ID")})`,
          },
          IL: {
            fill: `${generateHexColorForState("IL")})`,
          },
          IN: {
            fill: `${generateHexColorForState("IN")})`,
          },
          IA: {
            fill: `${generateHexColorForState("IA")})`,
          },
          KS: {
            fill: `${generateHexColorForState("KS")})`,
          },
          KY: {
            fill: `${generateHexColorForState("KY")})`,
          },
          LA: {
            fill: `${generateHexColorForState("LA")})`,
          },
          ME: {
            fill: `${generateHexColorForState("ME")})`,
          },
          MD: {
            fill: `${generateHexColorForState("MD")})`,
          },
          MA: {
            fill: `${generateHexColorForState("MA")})`,
          },
          MI: {
            fill: `${generateHexColorForState("MI")})`,
          },
          MN: {
            fill: `${generateHexColorForState("MN")})`,
          },
          MS: {
            fill: `${generateHexColorForState("MS")})`,
          },
          MO: {
            fill: `${generateHexColorForState("MO")})`,
          },
          MT: {
            fill: `${generateHexColorForState("MT")})`,
          },
          NE: {
            fill: `${generateHexColorForState("NE")})`,
          },
          NV: {
            fill: `${generateHexColorForState("NV")})`,
          },
          NH: {
            fill: `${generateHexColorForState("NH")})`,
          },
          NJ: {
            fill: `${generateHexColorForState("NJ")})`,
          },
          NM: {
            fill: `${generateHexColorForState("NM")})`,
          },
          NY: {
            fill: `${generateHexColorForState("NY")})`,
          },
          NC: {
            fill: `${generateHexColorForState("NC")})`,
          },
          ND: {
            fill: `${generateHexColorForState("ND")})`,
          },
          MP: {
            fill: `${generateHexColorForState("MP")})`,
          },
          OH: {
            fill: `${generateHexColorForState("OH")})`,
          },
          OK: {
            fill: `${generateHexColorForState("OK")})`,
          },
          OR: {
            fill: `${generateHexColorForState("OR")})`,
          },
          PA: {
            fill: `${generateHexColorForState("PA")})`,
          },
          PR: {
            fill: `${generateHexColorForState("PR")})`,
          },
          RI: {
            fill: `${generateHexColorForState("RI")})`,
          },
          SC: {
            fill: `${generateHexColorForState("SC")})`,
          },
          SD: {
            fill: `${generateHexColorForState("SD")})`,
          },
          TN: {
            fill: `${generateHexColorForState("TN")})`,
          },
          TX: {
            fill: `${generateHexColorForState("TX")})`,
          },
          UT: {
            fill: `${generateHexColorForState("UT")})`,
          },
          VT: {
            fill: `${generateHexColorForState("VT")})`,
          },
          VI: {
            fill: `${generateHexColorForState("VI")})`,
          },
          VA: {
            fill: `${generateHexColorForState("VA")})`,
          },
          WA: {
            fill: `${generateHexColorForState("WA")})`,
          },
          WV: {
            fill: `${generateHexColorForState("WV")})`,
          },
          WI: {
            fill: `${generateHexColorForState("WI")})`,
          },
          WY: {
            fill: `${generateHexColorForState("WY")})`,
          },
        }
      : {};
  };

  const handleMapClick = (event) => {
    if (covidStatesData) {
      const stateData = covidStatesData.find(
        (o) => o.state === event.target.dataset.name
      );
      setActiveState(stateData);
      toggleModelOpen((open) => !open);
    }
  };

  return (
    <div className="App">
      <Header />
      <USAMap
        className="Map"
        customize={statesCustomConfig()}
        onClick={handleMapClick}
      />
      <Model
        activeState={activeState}
        modelOpen={modelOpen}
        toggleOpen={toggleModelOpen}
      />
    </div>
  );
}

export default App;
