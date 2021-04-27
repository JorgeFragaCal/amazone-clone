import React, { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../../../context/productos/productContext";
import "../../styles/Product.css";

function Product({ product }) {
  const productsContext = useContext(productContext);
  const { addToBasket } = productsContext;
  const rating = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
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
            {product.priceReal ? (
              <div className="product__priceReal">{product.priceReal}€</div>
            ) : null}
          </div>
          <div className="product__title">{product.title.slice(0,45)}...</div>
          <div className="product__rating">
            {rating.splice(0, product.rating)}
            <span>{product.ratingCount}</span>
          </div>
        </div>
      </Link>
      <button
        className="button button-primary m-0"
        onClick={() => addToBasket(product)}
      >
        Añadir a la cesta
      </button>
    </div>
  );
}

export default Product;
