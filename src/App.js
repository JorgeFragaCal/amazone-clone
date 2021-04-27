import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import NavRigth from "./components/layout/NavRigth";
import Register from "./components/pages/Register";
import Checkout from "./components/pages/Checkout";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetail";
import ProductState from "./context/productos/productState";
import Login from "./components/pages/Login";

function App() {
  return (
    <ProductState>
      <Router>
        <section className="App row-2">
          <section>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/product/:id" component={ProductDetail} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
            <Footer />
          </section>
          <NavRigth />
        </section>
      </Router>
    </ProductState>
  );
}

export default App;
