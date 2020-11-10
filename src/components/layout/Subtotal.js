import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import productContext from "../../context/productos/productContext";
import "../styles/Subtotal.css";
function Subtotal() {
  const productsContext = useContext(productContext);
  const { basket, getBasketTotal, getBasketTotalProducts } = productsContext;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__title">
              Subtotal ({getBasketTotalProducts(basket)}{" "}
              {getBasketTotalProducts(basket) === 1 ? "producto" : "productos"}
              ): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Este pedido contiene un regalo
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
      />

      <button className="button-primary m-0">Tramitar pedido</button>
    </div>
  );
}

export default Subtotal;
