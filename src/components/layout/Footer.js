import React from "react";

import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <a href="#home" className="footer__link">
        <div className="footer__button">Volver arriba</div>
      </a>
      <div className="footer__container">
        <h4>Creado por:</h4>
        <h3>Jorge Fraga Cal</h3>
      </div>
    </div>
  );
};

export default Footer;
