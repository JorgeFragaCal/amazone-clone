import {
  OBTENER_PRODUCTO,
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  AÑADIR_CARRITO,
  ELIMINAR_CARRITO,
} from "../../types";

const productReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTO:
      return {
        ...state,
        products: action.payload,
      };
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case AÑADIR_CARRITO:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default:
      return state;
  }
};
export default productReducer;
