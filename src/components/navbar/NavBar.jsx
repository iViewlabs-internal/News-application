import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchData, searchQuery } from "../../redux/action/action";
import config from "../../config/config.json";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const store = useSelector((state) => state);
  const query = store.searchReducer.searchQuery;
  const date = store.searchReducer.setDate;
  const sortby = store.searchReducer.setSortBy;

  const logout = () => {
    localStorage.removeItem("");
    navigate("/");
  };
  const handleChange = (e) => {
    dispatch(searchQuery(e.target.value));
  };
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
    <div>
      <div className="div-header mt-3">
        <nav className="navbar fixed-position navbar-expand-lg pd-5 navbar-dark bg-dark ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div
              className="collapse navbar-collapse d-flex navbar-data"
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
                <li>
                  <div className="btn-group dropdown ">
                    <button
                      className="btn btn-secondary dropdown-toggle me-4 icon-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <CgProfile className="profile-icon" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/profile"
                          className="dropdown-item"
                          id="lg-btn"
                        >
                          Profile
                        </Link>
                        <a
                          className="dropdown-item"
                          onClick={logout}
                          id="lg-btn"
                        >
                          LogOut
                        </a>
                      </li>
                    </ul>
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
