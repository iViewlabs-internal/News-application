import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/Header";
import NavBar from "../../../components/navbar/NavBar";
import Edit from "../../../components/edit/Edit"
const EditProfile = () => {
  const navigate = useNavigate();   
 
  const Back = () => {
    navigate("/home");
  };
  
  return (
    <>
      <Header />
      <NavBar />

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
                      src="https://images.pexels.com/photos/265642/pexels-photo-265642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Sample"
                      className="img-fluid img-pwd"
                    />
                  </div>
                  <div className="col-xl-6">
                  <Edit/>
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
