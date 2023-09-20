import React from "react";
import "../styles/Footer.css";


const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer">
        <div className="footer-item">
          <img
            src="https://i.imgur.com/gO8lobF.png"
            alt="Address"
            width="110"
            height="65"
          />
          <p>Hamdije Čemerlića 35, 71000 Sarajevo, Bosna i Hercegovina</p>
        </div>
        <div className="footer-item">
          <h4>GLAVNI MENI</h4>
          <ul>
            <li>
              <a href="#">Početna</a>
            </li>
            <li>
              <a href="#">Kategorije</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Pomoć</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h4>MAJSTORLOOK</h4>
          <ul>
            <li>
              <a href="#">O nama</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h4>NAŠ TIM</h4>
          <ul>
            <li>
              {" "}
              <a href="#">Mi</a>
            </li>
            <li>
              {" "}
              <a href="#">Historija</a>
            </li>
            <li>
              {" "}
              <a href="#">Moto</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h4>PRONAĐI NAS NA</h4>
          <ul>
            <li>
              {" "}
              <a href="#">Facebook</a>
            </li>
            <li>
              {" "}
              <a href="#">Twitter</a>
            </li>
            <li>
              {" "}
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <span class="copyright-symbol">©</span>
        <span class="company-name">Majstorlook</span>
      </div>
    </div>
  );
};

export default Footer;
