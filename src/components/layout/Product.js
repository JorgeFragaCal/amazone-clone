import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css";

function Product({ producto }) {
  return (
    <Link>
      <div className="product">
        <div className="product__image">
          <div className="product__imageGradient" />
          <img className="product__imageImg" src={producto.image} alt="" />
        </div>
        <div className="product__info">
          <div className="product__price">
            <div className="product__priceLow">
              <span className="product__priceWhole">
                {producto.priceLow.split(".")[0]}
              </span>
              <span className="product__priceFraction">
                {producto.priceLow.split(".")[1]}
              </span>
              <span className="product__priceSymbol">€</span>
            </div>
            <div className="product__priceReal">{producto.priceReal}€</div>
          </div>
          <div className="product__title">{producto.title}</div>
          <div className="product__rating">
            ⭐⭐⭐⭐⭐<span>400</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
