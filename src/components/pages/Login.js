import React, { useState } from "react";
import { PriorityHigh } from "@material-ui/icons";
import logo from "../../img/logo-2.png";
import "../styles/Register.css";
import { Link } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { nombre, email, password, confirm } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <section className="login">
      <Link to="/" className="header__logo login__header">
        <img className="header__logoImg" alt="" src={logo} />
        <span className="header__logoLetter logo__header-letter">.es</span>
      </Link>
      <section className="login__container">
        <h1 className="login__title">Iniciar sesión</h1>
        <form action="" className="sidebar__form" onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor="email">
              Dirección de e-mail o número de teléfono móvil
            </label>
            <input
              className={`input__primary ${
                error ? "input__primary-error" : "input__primary"
              }`}
              type="email"
              name="email"
              onChange={onChange}
              value={email}
            />
            {error ? (
              <div className="error__input">
                <PriorityHigh />
                <p>Introduce tu dirección de e-mail</p>
              </div>
            ) : null}
          </fieldset>
          <fieldset>
            <label htmlFor="password">Contraseña</label>
            <input
              className={`input__primary ${
                error ? "input__primary-error" : "input__primary"
              }`}
              type="password"
              name="password"
              onChange={onChange}
              value={password}
            />
            {error ? (
              <div className="error__input">
                <PriorityHigh />
                <p>Introduce tu contraseña</p>
              </div>
            ) : null}
          </fieldset>

          <input
            type="submit"
            className="button button-primary"
            onChange={onChange}
            value="Crea tu cuenta de Amazon"
          />
        </form>
        <section>
          <p className="login__legalText">
            Al identificarte aceptas nuestras
            <Link to=""> Condiciones de uso y venta.</Link> Consulta nuestro
            <Link to=""> Aviso de privacidad</Link> , nuestro{" "}
            <Link to=""> Aviso de Cookies</Link> y nuestro{" "}
            <Link to="">
              Aviso sobre publicidad basada en los intereses del usuario.
            </Link>
          </p>
        </section>
      </section>
      <section className="login__header ">
        <section className='login__divider'>
          <h5 className="login__spanRegister">¿Eres nuevo en amazon?</h5>
        </section>
        <Link to='/register' className="button button-secondary">
          Crea tu cuenta de Amazon
        </Link>
      </section>
    </section>
  );
}

export default Login;
