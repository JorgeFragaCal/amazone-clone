import { Link } from "react-router-dom";
import React from "react";
import "../../styles/CheckoutProduct.css";
function CheckoutProduct({ product }) {
  return (
    <div className="checkoutProduct">
      <Link to="">
        <img className="checkoutProduct__image" src={product.image} alt="" />
      </Link>

      <div className="checkoutProduct__info">
        <ul>
          <li>
            <Link to="" className="checkoutProduct__title">
              {product.title}
            </Link>
          </li>
          <li></li>
          <li>Vendido por: {product.seller}</li>
          <li> Opciones de regalo no disponibles</li>
          <div>
            <button className="checkoutProduct__button"> Eliminar</button>
            <button className="checkoutProduct__button">
              Guardar para más tarde
            </button>
          </div>
        </ul>
      </div>
      <div className="checkoutProduct__price">
        <strong>{product.priceLow} €</strong>
      </div>
    </div>
  );
}

export default CheckoutProduct;
