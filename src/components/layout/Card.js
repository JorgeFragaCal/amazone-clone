import React from "react";
import "../styles/Card.css";
const Card = ({ card }) => {
  return (
    <div className="card">
      <div>
        <h2 className="card__title">{card.title}</h2>
      </div>
      <div className="card__image-container">
        <a href="">
          <img className="card__image" src={card.img} alt="" />
        </a>
      </div>
      <div>
        <a className="card__link" href="">
          {card.link}
        </a>
      </div>
    </div>
  );
};

export default Card;
