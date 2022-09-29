import React, { useEffect, useMemo, useState } from "react";
import NewsItem from "../../components/newsitems/NewsItem";
import Spinner from "../../components/spinner/Spinner";
import PropTypes from "prop-types";
import NavBar from "../../components/navbar/NavBar";
import "./news.css";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/Pagination";

let PageSize = 9;

const News = (props) => {
  const fetchUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCDwD92x8C0v7SUGxvkaJWxC2rg6XSme8uJrHpjGnU47DNmzUnH00FhXtFVzQa7rhdxg&usqp=CAU";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(8);

  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return articles.slice(firstPageIndex, lastPageIndex);
  }, [articles, currentPage]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`;
    setLoading(true);
    setPage(page + 1);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    // setTotalResults(parsedData.totalResults)
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  return (
    <>
    <div className="bg-img"
        style={{ backgroundImage: `url(${fetchUrl})`, opacity: "revert", height:"100%",width:"100%" }}>
      <Header />
      <NavBar />
      
        <h2
          className="headline"
          style={{
            margin: "30px 0px",
            marginTop: "30px",
            color: "revert-layer",
          }}
        >
          Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>

        {loading && <Spinner />}
        <div className="container">
          <div className="row">
            {currentTableData.map((element) => {
              return (
                <>
                  <div className="col-md-4 " key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="page">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={articles.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};
News.defaultProps = {
  country: "in",
  // pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  // pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
