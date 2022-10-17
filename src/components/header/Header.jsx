import React from "react";
import moment from "moment/moment";
import "./header.css";

const Header = () => {
  const current = moment().format("dddd, MMMM Do YYYY");

  return (
    <div className="navbar-brand">
      <h1 className="brand">The Times News </h1>
      <div className="date-time">
        <h6 className="today-paper">Today's Paper </h6>
        <h6 className="date-header">{current}</h6>
      </div>
    </div>
  );
};
export default Header;
