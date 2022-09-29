import React, { useEffect, useState } from "react";
import NewsItem from "../../components/newsitems/NewsItem";
import Spinner from "../../components/spinner/Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
import Pagination from "../../components/pagination/Pagination";
import NavBar from "../../components/navbar/NavBar";
import "./news.css";
import moment from "moment/moment";
import Calendar from '../../components/calender/Calender';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(10);
  // const [totalResults, setTotalResults] = useState(0)
  const current = moment().format("dddd, MMMM Do YYYY");
  //   const date =

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    setPage(page + 1);
    // let data = await fetch(url);
    props.setProgress(30);
    // let parsedData = await data.json()
    props.setProgress(70);
    // setArticles(parsedData.articles)
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
      <div className="navbar-brand">
        <h1 className="brand">The Times News </h1>
        <div className="date-time">
         <h6 className="today-paper">Today's Paper </h6>
          <h6 className="date">{current}</h6>
        </div>
      </div>
      <NavBar />
      <h2
        className="headline"
        style={{ margin: "30px 0px", marginTop: "30px", color: "revert-layer" }}
      >
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      {/* <InfiniteScroll
                    dataLength={articles.length}
                    // next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    // loader={<Spinner/>}
                > 
                </InfiniteScroll> */}
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Pagination />
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

// useEffect((currentPage)=>{
//     setLoading(true)
//     const fetchMoreData = async () => {
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//     setPage(page+1)
//     let data = await fetch(url);
//     let page=currentPage;
//     let {hits,nbpages} = data;
//     setArticles(hits)
//     setPage(nbpages);
//     let parsedData = await data.json()
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//   };
//   fetchMoreData();
// },[currentPage]);

// const fetchMoreData = async () => {
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//     setPage(page+1)
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
//   };
