import React, { useContext } from "react";
import Subtotal from "../layout/Subtotal";
import CurrencyFormat from "react-currency-format";
import "../styles/Checkout.css";
import productContext from "../../context/productos/productContext";
import CheckoutProduct from "../layout/product/CheckoutProduct";
function Checkout() {
  const productsContext = useContext(productContext);
  const { basket, getBasketTotal, getBasketTotalProducts } = productsContext;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__section">
          <h1 className="checkout__title">Cesta</h1>
          <span className="checkout__span">Precio</span>
          <div>
            {basket.map((basket) => (
              <CheckoutProduct key={basket.id} product={basket} />
            ))}
          </div>
          <div className="checkout__subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({getBasketTotalProducts(basket)}
                    {getBasketTotalProducts(basket) === 1
                      ? " producto"
                      : " productos"}
                    ): <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              fixedDecimalScale={true}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"€"}
            />
          </div>
        </div>
      </div>
      <div className="checkout__rigth">
        {basket?.length > 0 ? <Subtotal /> : null}
      </div>
    </div>
  );
}

export default Checkout;
