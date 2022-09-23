import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = (topic) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  console.log(query)

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        // `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=fc3c8738bf944c53983892a0fe000474`
      );
      const articles = await response.json();
      console.log(articles)
      setArticles(articles.articles);

    } catch (error) {
      console.error(error);
    }
  };
  console.log(articles)

  return (
    <>
     <div>
        <input
          className="search-page"
          placeholder="Search topic"
          name="topic"
          value={query}
          onChange={handleChange}
          onKeyDown={fetchArticles}
          />
          <button onClick={fetchArticles} className="search-btn">Search</button>        
     </div>
     {/* <div>
      {
        articles &&  
        articles.map(item => console.log(item))
      }
     </div> */}
    </>
  );
};
export default Search;
