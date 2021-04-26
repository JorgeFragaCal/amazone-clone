import React from "react";
import Banner from "../layout/Banner";
import Card from "../layout/Card";
import CardGrid from "../layout/CardGrid";
import Carousel from "../layout/Carousel";
import "../styles/Home.css";
import {
  card,
  cardGridHome1,
  cardGridHome2,
  cardGridHome3,
  cardGridHome4,
  carouselCategorys,
  productsData,
} from "../test/Datos";

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
          {cardGridHome1.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} key="" />
          ))}
          {cardGridHome2.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} key="" />
          ))}
          {cardGridHome3.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} key="" />
          ))}
          {cardGridHome4.map((cardGrid) => (
            <CardGrid cardGrid={cardGrid} key="" />
          ))}
        </div>
        <hr />
        <div className="home__row-1">
          <Carousel
            carouselItems={carouselCategorys}
            title="Lo más valorado por los clientes"
          />
        </div>
        <hr />
        <div className="home__row-1">
          <Banner image="https://images-eu.ssl-images-amazon.com/images/G/30/amazonservices/seller_success_stories/2021/03_clic/ES-click_editorial-1x._CB656600928_.jpg" />
        </div>
        <hr />
        <div className="home__row-1">
          <Carousel
            carouselItems={productsData}
            title="La tecnología del momento"
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
