import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/myprofile.css";
import { FaStar } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div className="my-profile-page">
      <Navbar />

      <div className="profile-container">
        <div className="profile-info">
          <div className="left-div">
            <img
              src="https://thumbs.dreamstime.com/b/professional-business-woman-smiling-outdoor-close-up-portrait-55472495.jpg"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-text">
              <div className="profile-name">Selma Bešlić</div>
              <div className="profile-username">@selmabeslic</div>
            </div>
          </div>

          <div className="right-div">
            <div className="profile-details">
              <div className="profile-detail">
                <span className="detail-label">Lokacija:</span> <p>Sarajevo</p>
              </div>
              <div className="profile-detail">
                <span className="detail-label">Spol:</span> <p>Zensko</p>
              </div>
              <div className="profile-detail">
                <span className="detail-label">Profil kreiran:</span>{" "}
                <p>2021</p>
              </div>
            </div>
            <div className="profile-gumb">
              <button className="orange-button">Wishlist</button>
              <button className="blue-button">Uredi info</button>
            </div>
          </div>
        </div>

        <div className="profile-reviews">
          <div className="utoku-section">
            <h2 className="section-title">U toku</h2>
            <div className="profile-item">
              <img
                src="https://i.imgur.com/gO8lobF.png"
                alt="Majstor MEHO"
                className="item-image"
              />
              <div className="majstor-details">
                <div className="majstor-title">MAJSTOR MEHO</div>
                <div className="majstor-rating">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
                <div className="item-title">22/12/22 - 24/12/22</div>
              </div>
            </div>
            {/* Repeat the above div for other "U toku" items */}
          </div>

          {/* <div className="profile-section">
            <h2 className="section-title">Zavrseni</h2>
            <div className="profile-item">
              <img
                src="https://i.imgur.com/gO8lobF.png"
                alt="Majstor"
                className="item-image"
              />
              <div className="item-details">
                <div className="item-title">MAJSTOR</div>
                <div className="item-rating">
                  <FaStar /> <FaStar /> <FaStar /> ☆ ☆
                </div>
                <div className="item-dates">22/12/22 - 24/12/22</div>
              </div>
            </div>

          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyProfile;
