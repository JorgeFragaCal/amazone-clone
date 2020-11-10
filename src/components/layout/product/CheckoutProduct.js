import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import productContext from "../../../context/productos/productContext";
import "../../styles/CheckoutProduct.css";

function CheckoutProduct({ product }) {
  const productsContext = useContext(productContext);
  const { deleteBasket, addToBasket } = productsContext;

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
          <li>Vendido por: {product.seller}</li>
          <li> Opciones de regalo no disponibles</li>
          <div>
            <button className="checkoutProduct__quantity">
              Cant.: {product.cantidad}
            </button>
            <button
              className="checkoutProduct__button"
              onClick={() => addToBasket(product)}
            >
              Añadir
            </button>
            <button
              className="checkoutProduct__button"
              onClick={() => deleteBasket(product)}
            >
              Eliminar
            </button>
          </div>
        </ul>
      </div>
      <div className="checkoutProduct__price">
        <CurrencyFormat
          renderText={(value) => <strong>{value}</strong>}
          decimalScale={2}
          value={product.priceLow * product.cantidad}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"€"}
        />
      </div>
    </div>
  );
}

export default CheckoutProduct;
