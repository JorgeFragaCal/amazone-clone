import React, { useReducer } from "react";
import productContext from "./productContext";
import productsReducer from "./productReducer";
import {
  AGREGAR_PRODUCTO,
  DETALLE_PRODUCTO,
  MOSTRAR_PRODUCTOS,
  AÑADIR_CARRITO,
  ELIMINAR_CARRITO,
  TOTAL_CARRITO,
} from "../../types";

const ProductsState = (props) => {
  //State inicial
  const initialState = {
    productsDetail:[],
    products: [],
    basket: [],
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //Obtener los productos
  const getProductDetail = (id) => {
    dispatch({
      type: DETALLE_PRODUCTO,
      payload: id,
    });
  }; 
  //Obtener los productos
  const getProducts = (products) => {
    dispatch({
      type: MOSTRAR_PRODUCTOS,
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
  //Eliminar producto del carrito
  const deleteBasket = (product) => {
    dispatch({
      type: ELIMINAR_CARRITO,
      payload: product,
    });
  };
  //Mostrar cantidad de productos del carrito
  const getBasketTotalProducts = (basket) => {
    return basket.reduce(
      (amount, product) => amount + Number(product.cantidad),
      0
    );
  };
  //Mostrar precio total del carrito
  const getBasketTotal = (basket) => {
    return basket.reduce(
      (amount, product) => amount + Number(product.priceLow) * product.cantidad,
      0
    );
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        basket: state.basket,
        addProduct,
         getProductDetail, 
        getProducts,
        addToBasket,
        deleteBasket,
        getBasketTotalProducts,
        getBasketTotal,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
export default ProductsState;
