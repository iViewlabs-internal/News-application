import React from "react";
import moment from "moment/moment";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  const current = moment().format("dddd, MMMM Do YYYY");
  let signupData = localStorage.getItem("name").toUpperCase();
  const logout = () => {
    localStorage.removeItem("");
    navigate("/");
  };
 

  return (
    <div className="navbar-brand">
      <h1 className="brand">The Times News </h1>
      <div className="date-time">
        <h6 className="today-paper">Today's Paper </h6>
        <h6 className="date">{current}</h6>
        <div class="btn-group dropdown">
        
          <button
            class="btn btn-secondary dropdown-toggle me-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {signupData}
            <CgProfile />
          </button>
          <ul class="dropdown-menu">
            <li>
              <Link to='/editProfile' class="dropdown-item" >
                Edit profile
              </Link>
              <a class="dropdown-item" href="#" onClick={logout} id="lg-btn">
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;


