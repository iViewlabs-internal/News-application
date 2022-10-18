import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import NewsItem from "../../components/newsItems/NewsItem";
import { setDate, setSortBy } from "../../redux/action/action";
import "./searchPage.css";
import { searchData } from "../../redux/action/action";
import config from "../../config/config.json";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

let PageSize = 6;

const SearchPage = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = store.searchReducer.searchData;
  const query = store.searchReducer.searchQuery;
  const date = store.searchReducer.setDate;
  const sortby = store.searchReducer.setSortBy;
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [data, currentPage]);

  const fetchRequest = async () => {
    const data = await fetch(
      `${config.SERVER_URL}/everything?q=${query}&pageSize=10&from=${date}&sortBy=${sortby}&language=en&apiKey=ef3fec39b4ce4bab9cad045d876f47be`
    );
    const dataJ = await data.json();
    const result = dataJ.articles;
    dispatch(searchData(result));
    navigate("/search");
  };
  return (
    <>
      <div className={data?.length === 0 ? "bg-img" : "bg-image"}>
        <Header />
        <NavBar />

        <div className="container">
          <div className="filter-page">
            {data?.length !== 0 && query?.length !== 0 ? (
              <h1 className="search-query">
                Search Result For "
                <span className="search-query-name">{query}</span>"
              </h1>
            ) : (
              ""
            )}
            <div className="filter">
              <input
                className="date"
                type="date"
                onChange={(e) => dispatch(setDate(e.target.value))}
              />
            </div>
            <div className="filter">
              <select
                className="sortBy"
                onChange={(e) => dispatch(setSortBy(e.target.value))}
              >
                <option value=" ">Sort By Relevance</option>
                <option value="relevancy">relevancy</option>
                <option value="popularity">popularity</option>
                <option value="publishedAt">publishedAt</option>
              </select>
            </div>
            <div>
              <button className="apply m-lg-2" onClick={fetchRequest}>
                Apply
              </button>
            </div>
          </div>
          <div className="row search-data">
            {data?.length === 0 ? (
              <h2 className="search-query" id="data-not-found">
                DATA NOT FOUND FOR "
                <span className="search-query-name">{query}</span>"
              </h2>
            ) : (
              ""
            )}
            {currentTableData &&
              currentTableData?.map((element) => {
                return (
                  <div className="container-fluid col-md-4" key={element.url}>
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
                );
              })}
          </div>
          <div className="page">
            {console.log(data, currentPage, PageSize)}
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data?.length || 0}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
