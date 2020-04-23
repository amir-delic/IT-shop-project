import React, { Component } from "react";
import Card from "../components/Card";
import { ProductConsumer } from "../context";
import "../styles/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Men's fashion</h1>
        <div className="row row-cols-1 row-cols-md-3">
          <ProductConsumer>
            {(value) => {
              return value.products.map((item) => (
                <Card key={item.id} product={item} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default HomePage;
