import React from "react";
import "./Home.css";
import RegisterModal from "../../modals/register/RegisterModal";
import LoginModal from "../../modals/login/LoginModal";

const Home = () => {
  return (
    <div>
      <div className="bg-img-home">
        <div className="heading">
          <div className="pt-4 mx-5 title">
            <h1 className="fw-bolder">The Times News</h1>
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
    </div>
  );
};

export default Home;