import './App.css';
import NavBar from './components/navbar/NavBar';
import News from './pages/news/News';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Home from './pages/home/Home';

const App=()=>{
  const pageSize = 5;
  const apiKey = 'ef3fec39b4ce4bab9cad045d876f47be'
  //const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress] = useState(0);
  // const [isLoggedin, setIsLoggedin] = useState(false);

  // const login = () => {
  //     localStorage.removeItem('');
  //     setIsLoggedin(false);
  
  //   }
  // const logout = () => {
  //     localStorage.removeItem('');
  //     setIsLoggedin(false);
  
  //   }

  return (
     <div>
     
      <BrowserRouter>
      {/* <NavBar/> */}
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
        <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category="business"/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category="health"/>}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category="sports"/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category="science"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category="technology"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category="entertainment"/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;

