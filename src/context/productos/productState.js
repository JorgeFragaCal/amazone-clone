import React, { useReducer } from "react";
import productContext from "./productContext";
import productsReducer from "./productReducer";
import {
  AGREGAR_PRODUCTO,
  OBTENER_PRODUCTO,
  AÑADIR_CARRITO,
} from "../../types";

const ProductsState = (props) => {
  const products = [
    {
      title:
        "Presentamos el Fire TV Stick Lite con mando por voz Alexa | Lite (sin controles del TV), streaming HD, modelo de 2020",
      priceLow: "19.99",
      priceReal: "29.99",
      image:
        "https://m.media-amazon.com/images/I/51GF9vRAnFL._AC._SR360,460.jpg",
    },
  ];
  const initialState = {
    products: [],
    basket: [],
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //Obtener los productos
  const getProduct = () => {
    dispatch({
      type: OBTENER_PRODUCTO,
      payload: products,
    });
  };

  //Agregar producto nuevo
  const addProduct = (product) => {
    dispatch({
      type: AGREGAR_PRODUCTO,
      payload: product,
    });
  };
  //Añadir producto al carrito
  const addToBasket = (product) => {
    dispatch({
      type: AÑADIR_CARRITO,
      payload: product,
    });
  };
  //Mostrar los productos del carrito

  const getBasketTotal = (basket) => {
    return basket.reduce(
      (amount, product) => amount + Number(product.priceLow),
      0
    );
  };
  return (
    <productContext.Provider
      value={{
        products: state.products,
        basket: state.basket,
        addProduct,
        getProduct,
        addToBasket,
        getBasketTotal,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
export default ProductsState;
