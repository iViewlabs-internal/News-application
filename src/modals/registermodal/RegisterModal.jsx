import React from "react";
import "./RegisterModel.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  // const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    alert(
      "You gets register Successfully . Now you Can Login with your Credentials!"
    );
    window.location.href = "/";
    // navigate("/");
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop2"
      tabIndex="-1"
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
            > 
            </button>
          </div>
          <div className="register-form px-3 py-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  name="username"
                  type="text"
                  placeholder="Your Username"
                  {...register("username")}
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                />

                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
                <br />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="text"
                  placeholder="Your Email"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />

                <div className="invalid-feedback">{errors.email?.message}</div>
                <br />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />

                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
                <br />
              </div>

              <div className="form-group">
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                />

                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
                <br />
              </div>
              <div className="form-group">
                <button onClick={onSubmit} className="register-button" >
                  Register
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterModal;
