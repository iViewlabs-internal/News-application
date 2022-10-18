import React from "react";
import "./HomeSection.css";
import bgImage from "../../assets/video/content.mp4";
import content from "../../assets/video/news.mp4";

const HomeSection = () => {
  return (
    <div className="container background-color">
      <div className="home-section-data">
        <div className="content">
          <h1> Enjoy on Your laptop</h1>
          <p>
            Good news is rare this days, and everything glittering ounce of it
            should be cherished and hoarded and worshiped and fondled like a
            priceless diamond.
          </p>
        </div>
        <div>
          <video
            className="img-home"
            source
            src={bgImage}
            autoPlay
            loop
            muted
            type="video/mp4"
          />
        </div>
      </div>
      <div className="home-section-data">
        <div>
          <video
            className="img-home2"
            source
            src={content}
            autoPlay
            loop
            muted
            type="video/mp4"
          />
        </div>
        <div className="content2">
          <h1> Enjoy Your News</h1>
          <p>
            Non-violence is the greatest force at the disposal of mankind.It is
            mightier than the mightiest weapon of destruction devised by the
            ingenuity of man.
          </p>
          <p className="writer">-Mahatma Gandhi</p>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide image-slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/4560150/pexels-photo-4560150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/10464468/pexels-photo-10464468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/939706/pexels-photo-939706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
