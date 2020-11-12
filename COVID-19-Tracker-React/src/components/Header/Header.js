import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <h1>USA COVID-19 Tracker</h1>
      <h2>Click on a State to view individual COVID-19 data.</h2>
      <h4>
        COVID-19 Tracking Data provided by
        <a href="http://covidtracking.com"> covidtracking.com</a>.
      </h4>
    </header>
  );
};

export default Header;
