import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";
const Card = ({ card }) => {
  return (
    <div className="card">
      <div>
        <h2 className="card__title">{card.title}</h2>
      </div>
      <div className="card__image-container">
        <Link to="">
          <img className="card__image" src={card.img} alt="" />
        </Link>
      </div>
      <div>
        <Link className="card__link" to="">
          {card.link}
        </Link>
      </div>
    </div>
  );
};

export default Card;
