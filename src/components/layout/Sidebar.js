import React, { Fragment, useState, useContext } from "react";
import "../styles/Sidebar.css";
import "../styles/Button.css";
import "../styles/Input.css";
import imagen from "../../img/icon-camera-512.webp";
import productoContext from "../../context/productos/productoContext";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
const Sidebar = () => {
  const productosContext = useContext(productoContext);
  const { agregarProducto } = productosContext;
  const [error, setError] = useState(false);
  const [producto, crearProducto] = useState({
    title: "",
    priceLow: "",
    priceReal: "",
    image: "",
  });

  const { title, image, priceLow, priceReal } = producto;

  const onChange = (e) => {
    crearProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      priceLow.trim() === "" ||
      priceReal.trim() === "" ||
      image.trim() === ""
    ) {
      setError(true);
      return;
    }
    agregarProducto(producto);
    crearProducto({
      title: "",
      priceLow: "",
      priceReal: "",
      image: "",
    });
  };

  return (
    <Fragment>
      <h3 className="sidebar__title">Nuevo Producto</h3>
      <form action="" className="sidebar__form" onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="nombre">Nombre</label>
          <input
            className={`input__primary ${
              error ? "input__primary-error" : "input__primary"
            }`}
            type="text"
            name="title"
            onChange={onChange}
            value={title}
            placeholder="Nombre del producto"
          />
          {error ? (
            <div className="error__input">
              <PriorityHighIcon />
              <p>Introduce el nombre del producto</p>
            </div>
          ) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="imagen">Imagen</label>
          <div className="sidebar__formImage">
            <img src={image ? image : imagen} alt="" />
            <input
              className={`input__primary ${
                error ? "input__primary-error" : "input__primary"
              }`}
              type="text"
              name="image"
              onChange={onChange}
              value={image}
              placeholder="Link de imagen"
            />
          </div>
          {error ? (
            <div className="error__input">
              <PriorityHighIcon />
              <p className="error__input">Introduce el link de la imagen</p>
            </div>
          ) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="precio">Precio</label>
          <input
            className={`input__primary ${
              error ? "input__primary-error" : "input__primary"
            }`}
            type="text"
            name="priceReal"
            placeholder="Precio Normal"
            onChange={onChange}
            value={priceReal}
          />
          {error ? (
            <div className="error__input">
              <PriorityHighIcon />
              <p className="error__input">Introduce el precio del producto</p>
            </div>
          ) : null}
          <input
            className={`input__primary ${
              error ? "input__primary-error" : "input__primary"
            }`}
            type="text"
            name="priceLow"
            placeholder="Precio Rebajado"
            onChange={onChange}
            value={priceLow}
          />
          {error ? (
            <div className="error__input">
              <PriorityHighIcon />
              <p className="error__input">
                Introduce el precio rebajado del producto
              </p>
            </div>
          ) : null}
        </fieldset>
        <input
          type="submit"
          className="button-primary"
          onChange={onChange}
          value="Añadir"
        />
      </form>
    </Fragment>
  );
};

export default Sidebar;
