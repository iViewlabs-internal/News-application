import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginModal.css";

const LoginModals = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const navigate = useNavigate(); 
  const log = () => {
    if (logEmail === "" && logPassword === "") {
      alert("Bad Try! Please Enter your Email and Password. ");
    } else if (logEmail === "") {
      alert("Email is missing");
    } else if (logPassword === "") {
      alert("Password is missing");
    } else if (
      logEmail !== localStorage.getItem("email") &&
      logPassword === localStorage.getItem("password")
    ) {
      alert("Incorrect Email");
    } else if (
      logEmail === localStorage.getItem("email") &&
      logPassword !== localStorage.getItem("password")
    ) {
      setLogPassword("");
      alert("Incorrect Password");
    } else if (
      logEmail === localStorage.getItem("email") &&
      logPassword === localStorage.getItem("password")
    ) {
      setLogEmail("");
      setLogPassword("");

      navigate("/home");
    } else {
      setLogEmail("");
      setLogPassword("");
      alert("incorrect Credentials");
    }
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="fs-4">Login</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <>
            <form className="login-form px-3 py-3" onSubmit={log}>
              <div className="form-group">
                <input
                  className="emailID"
                  type="email"
                  placeholder="Your Email"
                  value={logEmail}
                  onChange={(e) => {
                    setLogEmail(e.target.value);
                  }}
                />
                <br />
              </div>
              <br />
              <div className="form-group">
                <input
                  className="password-txt"
                  name="form__input"
                  type="password"
                  placeholder="Your Password"
                  value={logPassword}
                  onChange={(e) => {
                    setLogPassword(e.target.value);
                  }}
                />
                <br />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="login-button">
                  Login
                </button>
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default LoginModals;
