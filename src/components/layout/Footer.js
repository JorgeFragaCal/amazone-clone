import React from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Link to={{ hash: "#home" }} className="footer__link">
        <div className="footer__button">Volver arriba</div>
      </Link>
      <div className="footer__container">
        <h4>Creado por:</h4>
        <h3>Jorge Fraga Cal</h3>
      </div>
    </div>
  );
};

export default Footer;
