import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchData, searchQuery } from "../../redux/action/action";
import config from "../../config/config.json";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const store = useSelector((state) => state);
  const query = store.searchReducer.searchQuery;
  const date = store.searchReducer.setDate;
  const sortby = store.searchReducer.setSortBy;

  const handleChange = (e) => {
    dispatch(searchQuery(e.target.value));
  };
  const fetchRequest = async () => {
    const data = await fetch(
      `${config.SERVER_URL}/everything?q=${query}&pageSize=10&from=${date}&sortBy=${sortby}&language=en&apiKey=fc3c8738bf944c53983892a0fe000474`
    );
    const dataJ = await data.json();
    const result = dataJ.articles;
    dispatch(searchData(result));
    navigate("/search");
  };

  return (
    <div>
      <div className="div-header mt-3">
        <nav className="navbar fixed-position navbar-expand-lg pd-5 navbar-dark bg-dark ">
          <div className="container">
            <div
              className="collapse navbar-collapse d-flex"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav_menu ml-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link" to="/general">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li>
                  <div className="search-page">
                    <input
                      type="text"
                      name="search"
                      className="search-bar"
                      placeholder="Search what you want!"
                      onChange={handleChange}
                    />
                    <button onClick={fetchRequest} className="search-btn">
                      Search
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
