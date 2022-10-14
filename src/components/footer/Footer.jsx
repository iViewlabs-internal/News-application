import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {year} from "../../utils";
const Footer = () => {
  return (
    <>
      {" "}
      <div className="bg-warning">
        {" "}
        <div className="container d-flex justify-content-between pt-5 pb-4 footer">
          {" "}
          <div className="w-25">
            
            <p>
              {" "}
              “The good news is we have everything we need to leave fossil fuels in the ground. All we need is for you to join the rest of the world to bring about a cleaner, more stable, and peaceful future.”{" "}
            </p>
          </div>{" "}
          <div className="d-flex flex-column">
          
            <div className="pt-3 fw-semibold fs-6">TOP CATEGORIES</div>{" "}
            
            <div className="pt-3 fw-semibold fs-6">General</div>{" "}
            <div className="pt-3 fw-semibold fs-6">Sports</div>{" "}
            <div className="pt-3 fw-semibold fs-6">Business</div>{" "}
           
          </div>{" "}
          <div className="d-flex flex-column">
          
      
            <div className="pt-3 fw-semibold fs-6">Entertainment</div>{" "}
            <div className="pt-3 fw-semibold fs-6">Technology</div>{" "}
            <div className="pt-3 fw-semibold fs-6">Health</div>{" "}
            <div className="pt-3 fw-semibold fs-6">Science</div>{" "}
          </div>{" "}
          <div className="d-flex flex-column">
            {" "}
            <div className="pt-3 fw-semibold fs-6">
              About Times News
            </div>{" "}
            <div className="pt-3 fw-semibold fs-6">Contact Us</div>{" "}
            <div className="pt-3 fw-semibold fs-6">FAQs</div>{" "}
          </div>{" "}
          <div className="d-flex flex-column pt-4">
            {" "}
            <div className="d-flex flex-row justify-content-between">
              {" "}
              <i className="fa-brands fa-twitter"></i>{" "}
              <i className="fa-brands fa-facebook"></i>{" "}
              <i className="fa-brands fa-google-plus-g"></i>{" "}
              <i className="fa-brands fa-linkedin"></i>{" "}
            </div>{" "}
            <div className="d-flex flex-row justify-content-between pt-4">
              {" "}
              <div className="d-flex flex-column">
                {" "}
                <div>
                  {" "}
                  <i className="fa-solid fa-mobile-screen pt-2"></i>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <i className="fa-solid fa-mobile pt-2"></i>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <i className="fa-solid fa-envelope pt-2"></i>{" "}
                </div>{" "}
              </div>{" "}
              <div className="ps-3">
                {" "}
                <div className="pt-1">Ghana</div>{" "}
                <div className="pt-1">+23 - 567-890</div>{" "}
                <div className="pt-1">company@gmail.com</div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bg-dark d-flex justify-content-center align-items-center">
        {" "}
        <p className="text-light mt-3">
          {" "}
          Copyright &#169; {year} Iview Labs Pvt Ltd. All Rights Reserved{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
};
export default Footer;


