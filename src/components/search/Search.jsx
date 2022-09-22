import React, { useState, useEffect } from "react";
import "./Search.css";
// import NewsItem from "../../components/newsitems/NewsItem";

const Search = (topic) => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("")

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
        `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=ef3fec39b4ce4bab9cad045d876f47be`
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
     <div>
      {
        articles &&  
        articles.map(item => console.log(item))
      }
     </div>
    </>
  );
};
export default Search;
