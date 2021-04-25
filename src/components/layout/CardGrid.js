import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
const CardGrid = ({ cardGrid }) => {
  return (
    <div className="card">
      <h2 className="card__title">{cardGrid.title}</h2>
      <div className="card__container">
        <a href={cardGrid.link1}>
          <div className="card__image-container">
            <img className="card__image" src={cardGrid.img1} alt="" />
          </div>
          <span className="card__optionName">{cardGrid.option1}</span>
        </a>
        <a href={cardGrid.link2}>
          <div className="card__image-container">
            <img className="card__image" src={cardGrid.img2} alt="" />
          </div>
          <span className="card__optionName">{cardGrid.option2}</span>
        </a>
        <a href={cardGrid.link3}>
          <div className="card__image-container">
            <img className="card__image" src={cardGrid.img3} alt="" />
          </div>
          <span className="card__optionName">{cardGrid.option3}</span>
        </a>
        <a href={cardGrid.link4}>
          <div className="card__image-container">
            <img className="card__image" src={cardGrid.img4} alt="" />
          </div>
          <span className="card__optionName">{cardGrid.option4}</span>
        </a>
      </div>
      <div>
        <Link className="card__link" to={cardGrid.ver_mas}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default CardGrid;
