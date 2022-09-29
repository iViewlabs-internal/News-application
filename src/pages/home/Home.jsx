import React from "react";
import "./Home.css";
import RegisterModal from "../../modals/registermodal/RegisterModal";
import LoginModal from "../../modals/loginmodal/LoginModal";

const Home = () => {
  const fetchedUrl =
    "https://images.pexels.com/photos/3095621/pexels-photo-3095621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      <div
        className="bg-img"
        style={{ backgroundImage: `url(${fetchedUrl})`, opacity: "revert" }}
      >
        <div className="heading">
          <div className="pt-4 mx-5">
            <h2>The Times News</h2>
          </div>
          <ul className="model-ul">
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
