import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const navigate = useNavigate();
  const Back = () => {
    navigate("/");
  };
  const reset = () => {
    if (
      oldPassword.length === 0 ||
      newPassword.length === 0 ||
      confirmNewPassword.length === 0
    ) {
      alert("please fill the fields properly");
    } 
    else if (oldPassword === localStorage.getItem("password")) {
      if (newPassword === confirmNewPassword) {
        localStorage.setItem("password", newPassword);
        alert("You gets reset Successfully .");
        navigate("/");
      } else {
        alert("your password is not matching");
      }
    }
    else if(oldPassword!==localStorage.getItem("password")){
      alert("please confirm your old password")
    }
  };

  return (
    <div>
      <section className="h-100 user">
        <button className="reset-back" onClick={Back}>
          <i className="fa-solid fa-arrow-left"></i> Back{" "}
        </button>
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://img.freepik.com/free-vector/access-control-system-abstract-concept-vector-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-passphrase-pin-verification-abstract-metaphor_335657-5746.jpg?w=740&t=st=1665480439~exp=1665481039~hmac=681e4aed576c0610097a83cf43e5bbd9da1137739664ddae65b22d180f89e4cc"
                      alt="Sample photo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Reset Password</h3>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          value={oldPassword}
                          placeholder="Enter old Password"
                          onChange={(e) => {
                            setOldPassword(e.target.value);
                          }}
                          id="form3Example97"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example97">
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example97"
                          placeholder="Enter new Password"
                          value={newPassword}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example97">
                          New Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          value={confirmNewPassword}
                          placeholder="Confirm Password"
                          onChange={(e) => {
                            setConfirmNewPassword(e.target.value);
                          }}
                          id="form3Example97"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example97">
                          Confirm Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-end pt-3 ">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2 reset"
                          onClick={reset}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
