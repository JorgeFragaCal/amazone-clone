import React from "react";
import Card from "../layout/Card";
import CardGrid from "../layout/CardGrid";
import Carousel from "../layout/Carousel";
import "../styles/Home.css";
import { cardGrid, card } from "../test/Datos";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/TheChallenge/CHLL_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_es-ES._CB418072540_.jpg"
          alt=""
        />
        <div className="home__row-4">
          {card.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
        <hr />
        <div className="home__row-4">
          {cardGrid.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} />
          ))}
          {cardGrid.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} />
          ))}
          {cardGrid.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} />
          ))}
          {cardGrid.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} />
          ))}
        </div>
        <hr />
        <div className="home__row-1">
          <Carousel />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
