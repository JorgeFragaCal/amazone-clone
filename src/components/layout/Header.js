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
  const { basket } = productsContext;

  return (
    <Fragment>
      <div className="header" id="home">
        <div className="header__menu">
          <MenuIcon />
        </div>
        <Link to="/" className="header__logo">
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
          <div className="header__option">
            <span className="header__optionLineOne">Hola, Identifícate</span>
            <span className="header__optionLineTwo">Cuenta y listas</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Devoluciones</span>
            <span className="header__optionLineTwo">y Pedidos</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Suscríbete a</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <div className="header__mapLetter">
                <span className="header__optionLineOneBasket">
                  {basket?.length}
                </span>
                <ShoppingCartIcon className="header__optionBasketIcon" />
              </div>
              <span className="header__optionLineTwoBasket">Cesta</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subheader">
        <div className="header__optionMap ">
          <RoomOutlinedIcon className="header__mapIcon" />
          <div className=" header__mapLetter">
            <span className="header__optionLineOne">Hola</span>
            <span className="header__optionLineTwo">Elige tu direccion</span>
          </div>
        </div>
        <div className="subheader__fill">
          <div className="subheader__option">
            <Link to="/products">Ofertas anticipadas Black Friday</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Los Más Vendidos</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Amazon Basics</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Prime</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Últimas Novedades</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Atención al Cliente</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Cheques Regalo</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Electrónica y Fotografía</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Hogas y cocina</Link>
          </div>
          <div className="subheader__option">
            <Link to="/products">Bricolaje y herramientas</Link>{" "}
          </div>
        </div>
        <img src={banner} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
