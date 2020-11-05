import {
  OBTENER_PRODUCTO,
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  ACTUALIZAR_PRODUCTO,
} from "../../types";

const productoReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTO:
      return {
        ...state,
        productos: action.payload,
      };
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };

    default:
      return state;
  }
};
export default productoReducer;
