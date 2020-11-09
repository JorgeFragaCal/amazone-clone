import React from "react";
import ProductList from "../layout/product/ProductList";
import Sidebar from "../layout/Sidebar";
import "../styles/Products.css";

function Products() {
  return (
    <div className="content-row-2">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="container">
        <div className="container__header">
          <h1 className="container__title"> Tienda de Electronica</h1>
          <p className="container__text">
            Bienvenido a la tienda de Electrónica, aquí podrás encontrar
            dispositivos electrónicos de diferentes categorías como: móviles,
            fotografía, audio, televisión, informática, GPS y productos
            reacondicionados.
            <br /> Si lo que buscas son productos gamers no dudes en visitar
            nuestra Gaming Store
            <br />
            Descubre las cosas que debes saber antes de comprar una TV con
            nuestra Guía de compra
          </p>
        </div>
        <ProductList title="Novedades destacadas" />
        <ProductList title="Los mejor valorados" />
        <ProductList title="Ofertas destacadas" />
      </div>
    </div>
  );
}

export default Products;
