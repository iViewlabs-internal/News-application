import React, { Link, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import NavBar from "../navbar/NavBar";
import "./editProfile.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const Back = () => {
    navigate("/home");
  };

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <NavBar />

      <section className="h-100 user">
        <button className="reset-back" onClick={Back}>
          <i class="fa-solid fa-arrow-left"></i> Back{" "}
        </button>
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.pexels.com/photos/265642/pexels-photo-265642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Sample photo"
                      className="img-fluid img-pwd"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">User Profile</h3>

                      <div className="row">
                        <div className=" mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              id="form3Example1m"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Example1m">
                              First name
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example97"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example97">
                          Email ID
                        </label>
                      </div>

                      <button
                        className="btn btn-light btn-lg reset"
                        // onclick={navigate("/ResetPassword")}
                      >
                        Reset Password
                      </button>

                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          className="btn btn-light btn-lg reset"
                        >
                          Clear
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2 reset"

                        >
                          Submit form
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
    </>
  );
};

export default EditProfile;
