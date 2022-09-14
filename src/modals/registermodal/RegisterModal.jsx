import React from "react";
// import { useState } from "react";
import "./RegisterModel.css";
const RegisterModal = () => {
  // const [name, setName] = useState("");

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="fs-4">Register</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="register-form px-3 py-3">
              <div className="form-group ">
                <input
                  className="input-field"
                  Name="form__input"
                  type="text"
                  placeholder="UserName"
                />
              </div>
              <br />
            <div className="form-group">
              <input
                className="input-field"
                Name="form__input"
                type="email"
                placeholder="Email"
              />
            </div>
            <br />

            <div className="form-group">
              <input
                className="input-field"
                Name="form__input"
                type="password"
                placeholder="Password"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                className="input-field"
                Name="form__input"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <br />
            <div class="form-group">
              <button className="register-button" type="submit">
                Submit
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
