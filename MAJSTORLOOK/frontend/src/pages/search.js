import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PriceFilter from "../components/price-filter";

import "../styles/search.css";
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [includeImages, setIncludeImages] = useState(false);

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };
  const handleIncludeImagesChange = () => {
    setIncludeImages(!includeImages);
  };
  const generateRatingStars = (rating) => {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return (
      <div className="search-rating">
        {filledStars}
        {emptyStars}
      </div>
    );
  };

  const searchGridItems = [
    {
      id: 1,
      imageUrl: "https://i.imgur.com/ZMpO9Yd.png",
      text: "MAJSTOR MEHO",
      rating: 5,
      price: "$$$",
    },
    {
      id: 2,
      imageUrl: "https://i.imgur.com/ZMpO9Yd.png",
      text: "MAJSTOR IBRO",
      rating: 4,
      price: "$$$",
    },
    {
      id: 3,
      imageUrl: "https://i.imgur.com/ZMpO9Yd.png",
      text: "MAJSTOR MIRSO",
      rating: 5,
      price: "$$$$",
    },
    {
      id: 4,
      imageUrl: "https://i.imgur.com/ZMpO9Yd.png",
      text: "MAJSTOR DIN",
      rating: 4,
      price: "$$$$",
    },
    {
      id: 5,
      imageUrl: "https://i.imgur.com/ZMpO9Yd.png",
      text: "MAJSTOR AVDO",
      rating: 5,
      price: "$$$",
    },
    {
      id: 6,
      imageUrl: "https://i.imgur.com/ZMpO9Yd.png",
      text: "MAJSTOR LJUBO",
      rating: 5,
      price: "$$$",
    },
  ];

  const tabContents = {
    Kategorije: [
      "Elektricar",
      "Bravar",
      "Zidar",
      "Zavarivac",
      "Keramicar",
      "Vodoinstalater",
      "Tesar",
      "Ostalo",
    ],
    "Kanton/Regija": ["Svi", "Sarajevo", "Tuzlanski", "Zenicko-dobojski"],
    Cijena: <PriceFilter />,
    "Dodatni filteri": [
      <label
        key="includeImagesLabel"
        className={`tab-option ${
          activeTab === "Dodatni filteri" ? "tab-option-checkbox" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={includeImages}
          onChange={handleIncludeImagesChange}
          onClick={(e) => e.stopPropagation()}
          className="checkbox-filter"
        />
        Sa unesenom slikom
      </label>,
    ],
  };

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <div className="background-grey">
          <div className="content">
            <h1 className="moto">Da svaki šaraf 'nađe svoje mjesto</h1>
            <div className="search-container">
              <div className="search-bar">
                <div className="search-icon">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  className="search-input-searchpage"
                  placeholder="Unesite ime majstora, kategoriju ili posao koji treba obaviti..."
                />
              </div>
              <button className="pretrazi-search">Pretraži!</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="left-div">
            <h2>Filteri</h2>
            <div className="menu">
              {Object.keys(tabContents).map((tab) => (
                <div
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => handleTabClick(tab)}
                >
                  <div className="tab-header">
                    <div className="tab-title">{tab}</div>
                    <div className="tab-chevron">
                      {activeTab === tab ? "▲" : "▼"}
                    </div>
                  </div>
                  {activeTab === tab && tab !== "Cijena" && (
                    <div className="tab-options">
                      {tabContents[tab].map((option) => (
                        <div key={option} className="tab-option">
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === tab && tab === "Cijena" && (
                    <div className="tab-options">{tabContents[tab]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="right-div">
            <h2>Pretraga za: Zidar</h2>
            <div className="searchgrid">
              {searchGridItems.map((searchitem) => (
                <div className="searchgrid-item" key={searchitem.id}>
                  <img src={searchitem.imageUrl} alt={searchitem.text} />
                  <div className="searchitem-details">
                    <h3>{searchitem.text}</h3>
                    {generateRatingStars(searchitem.rating)}
                    <div className="searchgrid-item-price">
                      {searchitem.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
