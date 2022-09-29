import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchData, searchQuery } from "../../redux/action/action";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("");
        navigate("/");
    
    // localStorage.clear(); 
    // sessionStorage.clear(); 
    // navigate("/");
  };

  const store = useSelector((state) => state);
  const query = store.searchReducer.searchQuery;
  const date = store.searchReducer.setDate;
  const sortby = store.searchReducer.setSortBy;
  // console.log(query)
  // console.log(store)
  console.log(sortby);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(searchQuery(e.target.value));
  };
  const fetchRequest = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&pageSize=10&from=${date}&sortBy=${sortby}&apiKey=ef3fec39b4ce4bab9cad045d876f47be`
    );
    const dataJ = await data.json();
    const result = dataJ.articles;
    // console.log(result);
    dispatch(searchData(result));
    navigate("/search");
  };
  const pressed = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&pageSize=10&from=${date}&sortBy=publishedAt&apiKey=ef3fec39b4ce4bab9cad045d876f47be`
    );
    const dataJ = await data.json();
    const result = dataJ.articles;
    // console.log(result);
    dispatch(searchData(result));
    navigate("/search");
  };

  return (
    <div className="div-header mt-3">
      <nav className="navbar navbar-expand-lg pd-5 navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
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
                    onChange={handleChange}
                    onKeyDown={pressed}
                  />
                  <button onClick={fetchRequest} className="search-btn">
                    Search
                  </button>
                </div>
              </li>
              <li>
                <Link to="/">
                  <button onClick={logout} className="logout-btn">
                    Log out
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
