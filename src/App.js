import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SignInSignUp from "./pages/SignInSignUp";
import MyCart from "./pages/MyCart";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signinsignup" component={SignInSignUp} />
          <Route exact path="/mycart" component={MyCart} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
