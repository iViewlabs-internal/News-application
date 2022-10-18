import React from "react";
import { Link } from "react-router-dom";
import "./profileData.css";

const ProfileData = (props) => {
  return (
    <div className="card-body p-md-5 text-black">
      <h3 className="mb-5 text-uppercase">User Profile</h3>

      <div className="row">
        <div className=" mb-4">
          <div className="form-outline">
            <h2> {props.signupData} </h2>
          </div>
        </div>
      </div>

      <div className="form-outline mb-4">
        <h2>{localStorage.getItem("email")}</h2>
      </div>

      <div className="d-flex justify-content-end pt-3">
        <Link to="/edit-profile">
          <button className="btn btn-light btn-lg reset">Edit</button>
        </Link>
        <Link to="/ResetPassword">
          <button className="btn btn-light btn-lg reset">Reset Password</button>
        </Link>
        {/* <button
        type="button"
        className="btn btn-lg ms-2 reset"
      >
        Submit form
      </button> */}
      </div>
    </div>
  );
};

export default ProfileData;
