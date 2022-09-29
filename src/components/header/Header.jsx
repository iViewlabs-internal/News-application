import React from "react";
import moment from "moment/moment";
// import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
  const fetchUrl="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
  const current = moment().format("dddd, MMMM Do YYYY");

  // const store = useSelector((state) => state);

  // const data = store.searchReducer.searchData;

  let signupData = localStorage.getItem("name").toUpperCase();

  return (

    <div className="navbar-brand">
      <h1 className="brand">The Times News </h1>
      <div className="date-time">
        <h6 className="today-paper">Today's Paper </h6>
        <h6 className="date">{current}</h6>
        <h4 className="profile"> {signupData}</h4>
        <img src={fetchUrl} className="image" alt="profile img"/>
      </div>
    </div>
  );
};
export default Header;
