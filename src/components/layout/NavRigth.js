import React, { Fragment, useContext } from "react";
import CurrencyFormat from "react-currency-format";
import productContext from "../../context/productos/productContext";
import "../styles/NavRigth.css";
function NavRigth() {
  const productsContext = useContext(productContext);
  const { basket, getBasketTotal } = productsContext;
  return (
    <Fragment>
      {basket.length !== 0 ? (
        <div className="navRigth">
          <div className="navRigth__subtotal">
            <div className="navRigth__subtotal--text">Subtotal</div>
            <CurrencyFormat
              renderText={(value) => (
                <strong className="navRigth__price">{value}</strong>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"€"}
            />
          </div>
          <div className="navRigth__products">
            {basket.map((basket) => (
              <div className="navRigth__image">
                <img src={basket.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default NavRigth;
