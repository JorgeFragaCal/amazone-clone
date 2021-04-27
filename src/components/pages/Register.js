import React, { useState } from "react";
import { ArrowRight, Info, PriorityHigh } from "@material-ui/icons";
import logo from "../../img/logo-2.png";
import "../styles/Register.css";
import { Link } from "react-router-dom";
function Register() {
  const [error, setError] = useState(false);
  const [user, createUser] = useState({
    nombre: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { nombre, email, password, confirm } = user;

  const onChange = (e) => {
    createUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      password.trim() === confirm.trim()
    ) {
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
        <h1 className="login__title">Crear cuenta</h1>
        <form action="" className="sidebar__form" onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor="nombre">Nombre</label>
            <input
              className={`input__primary ${
                error ? "input__primary-error" : "input__primary"
              }`}
              type="text"
              name="nombre"
              onChange={onChange}
              value={nombre}
            />
            {error ? (
              <div className="error__input">
                <PriorityHigh />
                <p>Introduce tu nombre</p>
              </div>
            ) : null}
          </fieldset>
          <fieldset>
            <label htmlFor="email">Correo Electrónico</label>
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
              placeholder="Al menos 6 caracteres"
            />
            {error ? (
              <div className="error__input">
                <PriorityHigh />
                <p>Introduce tu contraseña</p>
              </div>
            ) : (
              <div className="input__alert">
                <Info />
                <p>La contraseña debe tener 6 caracteres como mínimo.</p>
              </div>
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="confirm">Confirma tu contraseña</label>
            <input
              className={`input__primary ${
                error ? "input__primary-error" : "input__primary"
              }`}
              type="password"
              name="confirm"
              onChange={onChange}
              value={confirm}
            />
            {error ? (
              <div className="error__input">
                <PriorityHigh />
                <p>Las contraseñas no coinciden</p>
              </div>
            ) : null}
          </fieldset>
          <input
            type="submit"
            className=" button button-primary"
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
        <hr />
        <section>
          <p className="login__links">
            ¿Ya tiene una cuenta?
            <Link to="/login" className="login__links">
              Iniciar sesión <ArrowRight />
            </Link>
          </p>
          <p className="login__links">
            ¿Compras para tu empresa?{" "}
            <Link to="" className="login__links">
              Crea una cuenta gratis
              <ArrowRight />
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
}

export default Register;
