import React, { useReducer } from "react";
import productosContext from "./productoContext";
import productosReducer from "./productoReducer";
import { AGREGAR_PRODUCTO, OBTENER_PRODUCTO } from "../../types";

const ProductosState = (props) => {
  const productos = [
    {
      title:
        "Presentamos el Fire TV Stick Lite con mando por voz Alexa | Lite (sin controles del TV), streaming HD, modelo de 2020",
      priceLow: '19.99',
      priceReal: "29.99",
      image:
        "https://m.media-amazon.com/images/I/51GF9vRAnFL._AC._SR360,460.jpg",
    },
  ];

  const initialState = {
    productos: [],
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(productosReducer, initialState);

  //Obtener los productos
  const obtenerProducto = () => {
    dispatch({
      type: OBTENER_PRODUCTO,
      payload: productos,
    });
  };

  //Agregar producto nuevo
  const agregarProducto = (producto) => {
    dispatch({
      type: AGREGAR_PRODUCTO,
      payload: producto,
    });
  };

  return (
    <productosContext.Provider
      value={{
        productos: state.productos,
        agregarProducto,
        obtenerProducto,
      }}
    >
      {props.children}
    </productosContext.Provider>
  );
};
export default ProductosState;
