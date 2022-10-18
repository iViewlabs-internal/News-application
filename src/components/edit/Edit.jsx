import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Edit.css";
const Edit = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();
  const handleUpdate = () => {
    if (!name || !email) {
      alert("Field is empty Please fill it.");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      navigate("/profile");
    }
  };
  return (
    <div className="card-body p-md-5 text-black">
      <h3 className="mb-5 text-uppercase">Edit Profile</h3>

      <div className="row">
        <div className=" mb-4">
          <div className="form-outline">
            <h2> Name :</h2>
            <input
              type="text"
              value={name}
              placeholder="Enter Name"
              id="form3Example1m"
              className="form-control form-control-lg"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <h2> Email :</h2>
            <input
              type="text"
              value={email}
              placeholder="Enter Email "
              id="form3Example97"
              className="form-control form-control-lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="d-flex justify-content-end pt-3">
              <button
                className="btn btn-lg ms-2 bg-primary update-btn"
                type="button"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
