import {
  MOSTRAR_PRODUCTOS,
  AGREGAR_PRODUCTO,
  AÑADIR_CARRITO,
  ELIMINAR_CARRITO,
 // TOTAL_PRODUCTOS_CARRITO,
 //TOTAL_RECIO_CARRITO
} from "../../types";

const productReducer = (state, action) => {
  //Indice de producto cuando existe en el carrito
  let i = state.basket.indexOf(action.payload);

  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      //devuelve el state de productos
      return {
        ...state,
        products: action.payload,
      };
    case AGREGAR_PRODUCTO:
      //añade un elemento mas al state de productos
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case AÑADIR_CARRITO:
      //si el indice es -1 y no hay coincidencias, añade el producto al state de cesta
      if (i === -1) {
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
      } else {
        //si existe el producto sumale uno a la cantidad
        state.basket[i].cantidad += 1;
        return {
          ...state,
        };
      }
    case ELIMINAR_CARRITO:
      //Si solo hay un producto, eliminalo del state de la cesta
      if (action.payload.cantidad === 1) {
        return {
          ...state,
          basket: state.basket.filter(
            (product) => product.id !== action.payload.id
          ),
        };
        //Si hay mas de uno, restale a la cantidad
      } else {
        state.basket[i].cantidad -= 1;
        return { ...state };
      }
    /*  case TOTAL_CARRITO:
      return {
        ...state,
        total: action.payload.reduce(
          (amount, product) => amount + Number(product.cantidad),
          0
        ),
      }; */

    default:
      return state;
  }
};
export default productReducer;
