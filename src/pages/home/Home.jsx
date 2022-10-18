import React from "react";
import "./Home.css";
import RegisterModal from "../../modals/register/RegisterModal";
import LoginModal from "../../modals/login/LoginModal";
import HomeSection from "../../components/homeSection/HomeSection";
import brand from "../../assets/brand1.png";
const Home = () => {
  return (
    <div>
      <div className="bg-img-home">
        <div className="px-4 py-4 heading">
          <div>
            <img className="xyz" src={brand} />
          </div>
          <div className="about-news">
            <h3>Welcome back!</h3>
            <p className="news-data">Where news never gets old </p>
          </div>
          <ul className="model-ul login-form">
            <li
              className="login"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Login
            </li>
            <li
              className="register"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2"
            >
              Register
            </li>
          </ul>
        </div>
      </div>

      {/* modal component for login */}

      <LoginModal />

      {/* modal code for register */}

      <RegisterModal />
      <HomeSection />
    </div>
  );
};

export default Home;
