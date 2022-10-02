import React from "react";
import "./newsitem.css";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, source } = props;
  return (
    <>
      <div>
        <div className="main-card my-4">
          <div className="card body">
            <div className="news-item"> {source} </div>
            <div className="card-body">
              <img
                src={
                  !imageUrl
                    ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                    : imageUrl
                }
                className="card-img-top"
                alt="Xiaomi Mobile"
                style={{ height: "30vh" }}
              />
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {!description.length ? "lorem" : description.slice(0, 100)}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author}{" "}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark text-center"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsItem;