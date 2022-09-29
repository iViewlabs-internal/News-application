import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import NewsItem from "../../components/newsitems/NewsItem";
import { setDate, setSortBy } from "../../redux/action/action";
import "./searchPage.css";

const SearchPage = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const data = store.searchReducer.searchData;
  const date = store.searchReducer.setDate;
  console.log(date);

  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <div className="filter-page">
          <div className="filter">
            <h1>Date:</h1>
            <input
              type="date"
              onChange={(e) => dispatch(setDate(e.target.value))}
            />
          </div>
          <div className="filter">
            <select onChange={(e) => dispatch(setSortBy(e.target.value))}>
              <option value=" ">Sort By Relevance</option>
              <option value="relevancy">relevancy</option>
              <option value="popularity">popularity</option>
              <option value="publishedAt">publishedAt</option>
            </select>
          </div>
          
        </div>
        <div className="row">
          {data?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
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
    </>
  );
};

export default SearchPage;
