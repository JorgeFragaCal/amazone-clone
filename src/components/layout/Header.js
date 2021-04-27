import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../../context/productos/productContext";
import SearchIcon from "@material-ui/icons/Search";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../img/logo.png";
import banner from "../../img/bannerheader.jpg";
import "../styles/Header.css";
const Header = () => {
  const productsContext = useContext(productContext);
  const { getBasketTotalProducts, basket } = productsContext;

  return (
    <Fragment>
      <div className="header" id="home">
        <div className="header__menu">
          <MenuIcon />
        </div>
        <Link to="/" className="header__logo header__linkHover">
          <img className="header__logoImg" alt="" src={logo} />
          <span className="header__logoLetter">.es</span>
        </Link>

        <form className="header__search">
          <div className="header__navSearchDropdownCard">
            <span className="header__navSearchLabel">
              Todos los departamentos
            </span>
            <ArrowDropDownIcon />
          </div>
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </form>
        <div className="header__nav">
          <Link to="/register" className="header__option header__linkHover">
            <span className="header__optionLineOne">Hola, Identifícate</span>
            <span className="header__optionLineTwo">Cuenta y listas</span>
          </Link>
          <div className="header__option header__linkHover">
            <span className="header__optionLineOne">Devoluciones</span>
            <span className="header__optionLineTwo">y Pedidos</span>
          </div>
          <div className="header__option header__linkHover">
            <span className="header__optionLineOne">Suscríbete a</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket header__linkHover">
              <div className="header__mapLetter">
                <span className="header__optionLineOneBasket">
                  {getBasketTotalProducts(basket)}
                </span>
                <ShoppingCartIcon className="header__optionBasketIcon" />
              </div>
              <span className="header__optionLineTwoBasket">Cesta</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subheader">
        <div className="header__optionMap header__linkHover">
          <RoomOutlinedIcon className="header__mapIcon" />
          <div className=" header__mapLetter">
            <span className="header__optionLineOne">Hola</span>
            <span className="header__optionLineTwo">Elige tu direccion</span>
          </div>
        </div>
        <div className="subheader__fill">
          <Link to="/products" className="subheader__option header__linkHover">
            Ofertas anticipadas Black Friday
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Los Más Vendidos
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Amazon Basics
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Prime
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Últimas Novedades
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Atención al Cliente
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Cheques Regalo
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Electrónica y Fotografía
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Hogas y cocina
          </Link>
          <Link to="/products" className="subheader__option header__linkHover">
            Bricolaje y herramientas
          </Link>
        </div>
        <img src={banner} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
