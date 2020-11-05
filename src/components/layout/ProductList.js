import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import productoContext from "../../context/productos/productoContext";

import "../styles/ProductList.css";

const ProductList = ({ title, link }) => {
  const productosContext = useContext(productoContext);
  const { productos, obtenerProducto } = productosContext;

  //Obtener productos cuando carga el componente
  useEffect(() => {
    obtenerProducto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="productList">
      <div className="productList__header">
        <h3 className="productList__title">{title}</h3>
        <Link to={link} className="productList__link">
          Ver más
        </Link>
      </div>
      <div className="productList__row-8">
        {productos
          .map((producto) => (
            <Product key={producto.title} producto={producto} />
          ))
          .slice(0, 8)}
      </div>
    </div>
  );
};

export default ProductList;
