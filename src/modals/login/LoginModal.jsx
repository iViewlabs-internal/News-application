import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./loginModal.css";
const LoginModal = () => {
  const navigate = useNavigate();

  const log = (data) => {
    if (
      data.email !== localStorage.getItem("email") &&
      data.password === localStorage.getItem("password")
    ) {
      alert("Incorrect Email");
    } else if (
      data.email === localStorage.getItem("email") &&
      data.password !== localStorage.getItem("password")
    ) {
      alert("Incorrect Password");
    } else if (
      data.email === localStorage.getItem("email") &&
      data.password === localStorage.getItem("password")
    ) {
      navigate("/home");
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
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
            <h1 className="fs-3">Login</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <>
            <div className="login-form px-3 py-3">
              <form onSubmit={handleSubmit(log)}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email")}
                    className={`form-control emailID ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    name="form__input"
                    type="password"
                    placeholder="Your Password"
                    {...register("password")}
                    className={`form-control password-txt ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>
                

                <Link to="/Resetpassword" className="f-pwd">
                  <h4 className="forgot-pwd">Forgot Password?</h4>
                </Link>
                <br />
                <div className="form-group">
                  <button type="submit" onClick={log} className="login-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
