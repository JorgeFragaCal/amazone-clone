import React, { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../../../context/productos/productContext";
import "../../styles/Product.css";

function Product({ product }) {
  const productsContext = useContext(productContext);
  const { addToBasket } = productsContext;

  return (
    <div className="product">
      <Link>
        <div className="product__image">
          <div className="product__imageGradient" />
          <img className="product__imageImg" src={product.image} alt="" />
        </div>
        <div className="product__info">
          <div className="product__price">
            <div className="product__priceLow">
              <span className="product__priceWhole">
                {product.priceLow.split(".")[0]}
              </span>
              <span className="product__priceFraction">
                {product.priceLow.split(".")[1]}
              </span>
              <span className="product__priceSymbol">€</span>
            </div>
            <div className="product__priceReal">{product.priceReal}€</div>
          </div>
          <div className="product__title">{product.title}</div>
          <div className="product__rating">
            ⭐⭐⭐⭐⭐<span>400</span>
          </div>
        </div>
      </Link>
      <button
        className="button-primary m-0"
        onClick={() => addToBasket(product)}
      >
        Añadir a la cesta
      </button>
    </div>
  );
}

export default Product;
