import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import productContext from "../../../context/productos/productContext";
import { productsData } from "../../test/Datos";
import "../../styles/ProductList.css";

const ProductList = ({ title, link }) => {
  const productsContext = useContext(productContext);
  const { products, getProduct } = productsContext;

  //Obtener productos cuando carga el componente
  useEffect(() => {
    getProduct(productsData);
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
        {products
          .map((product) => <Product key={product.id} product={product} />)
          .reverse()
          .slice(0, 8)}
      </div>
    </div>
  );
};

export default ProductList;
