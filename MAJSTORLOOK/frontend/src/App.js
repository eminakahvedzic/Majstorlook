import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search"
import MyProfile from "./pages/myprofile";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myprofile" element={<MyProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
