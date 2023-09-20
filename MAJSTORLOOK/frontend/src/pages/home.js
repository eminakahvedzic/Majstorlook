import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.css";
import { FaSearch } from "react-icons/fa";
import MyCarousel from "../components/carousel";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const items = [
    {
      id: 1,
      imageUrl: "https://i.imgur.com/ZMpO9Yd.png",
      text: "MAJSTOR MEHO",
      rating: 5,
      price: "$$$",
    },

    {
      id: 2,
      imageUrl: "https://i.imgur.com/JAkymoK.png",
      text: "MAJSTOR IBRO",
      rating: 4,
      price: "$$$",
    },
    {
      id: 3,
      imageUrl: "https://i.imgur.com/JAkymoK.png",
      text: "MAJSTOR MIRSO",
      rating: 5,
      price: "$$$$",
    },
    {
      id: 4,
      imageUrl: "https://i.imgur.com/JAkymoK.png",
      text: "MAJSTOR DIN",
      rating: 4,
      price: "$$$$",
    },
    {
      id: 5,
      imageUrl: "https://i.imgur.com/JAkymoK.png",
      text: "MAJSTOR AVDO",
      rating: 5,
      price: "$$$",
    },
  ];
  const generateRatingStars = (rating) => {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return (
      <div className="rating">
        {filledStars}
        {emptyStars}
      </div>
    );
  };
  const firstItem = items.find((item) => item.id === 1);
  const otherItems = items.filter((item) => item.id !== 1);

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <div className="background">
          <div className="content">
            <h1 className="moto">Da svaki šaraf 'nađe svoje mjesto</h1>
            <div className="search-bar">
              <div className="search-icon">
                <FaSearch />
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Unesite ime majstora, kategoriju ili posao koji treba obaviti..."
              />
            </div>
            <button
              className="pretrazi"
              onClick={() => {
                navigate("/search");
              }}
            >
              Pretraži!
            </button>
          </div>
        </div>
        <div className="CarouselDiv">
          <h2 className="divTitle">Kategorije</h2>
          <MyCarousel />
        </div>
        <div className="featured-section">
          <div className="featured-content">
            <div className="featured-text">
              <h2>Izdvojeno</h2>
              <p>
                Pogledajte izdvojene majstore za različite usluge koje nudimo.
                Naši stručnjaci su pažljivo odabrani i spremni su da vam pomognu
                u različitim zadacima. Od građevinskih majstora do električara,
                pronađite kvalifikovane profesionalce za sve vaše potrebe.
                Pregledajte njihove profile i ocjene kako biste osigurali da
                dobijete najbolju uslugu. Izdvojeni majstori čekaju da vam
                pomognu da ostvarite svoje projekte i popravke
              </p>
            </div>
            <div className="featured-button">
              <button className="gray-button">Vidi sve</button>
            </div>
          </div>
        </div>
        <div className="flex-container">
          <div className="first-item">
            <img
              src={firstItem.imageUrl}
              alt="Majstor"
              width="372"
              height="403"
            />
            <div className="item-details">
              <div className="text-content">
                <div className="item-text">{firstItem.text}</div>
                <div className="item-price">{firstItem.price}</div>
              </div>
              <div className="rating-stars">
                {generateRatingStars(firstItem.rating)}
              </div>
            </div>
          </div>
          <div className="flex-item grid-item">
            <div className="grid-container">
              {otherItems.map((item) => (
                <div className="grid-item other-item" key={item.id}>
                  <img
                    src={item.imageUrl}
                    alt="Majstor"
                    width="372"
                    height="158"
                  />
                  <div className="item-details">
                    <div className="text-content">
                      <div className="item-text">{item.text}</div>
                      <div className="item-price">{item.price}</div>
                    </div>
                    <div className="rating-stars">
                      {generateRatingStars(item.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-us">
          <h2 className="about-us-title">O nama</h2>
          <p className="about-us-text1">
            Majstorlook je online platforma koja vam pomaže pronaći najbolje
            majstore u vašem gradu. Naš cilj je olakšati vam proces traženja
            majstora za različite vrste poslova, kao što su popravke,
            renovacije, i druge usluge.
          </p>
          <p className="about-us-text2">
            Naša zajednica majstora je pažljivo odabrana i pruža širok spektar
            usluga. Bez obzira trebate li električara, vodoinstalatera, tesara
            ili bilo kojeg drugog majstora, Majstorlook vam omogućava da
            pronađete stručnjaka koji će zadovoljiti vaše potrebe.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
