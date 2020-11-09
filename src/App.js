import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Checkout from "./components/pages/Checkout";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductState from "./context/productos/productState";

function App() {
  return (
    <ProductState>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ProductState>
  );
}

export default App;
