import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Item from "../components/Item";

import "../styles/ShopPage.css";

class ShopPage extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { title, items } = value.SingleShopItem;
          return (
            <div className="container">
              <div className="ShopPage">
                <h1>{title}</h1>
                <div className="row row-cols-1 row-cols-md-4">
                  {items.map((item, index) => (
                    <Item
                      key={index}
                      item={item}
                      addToCart={value.addToCart}
                      handleInCart={value.handleInCart}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ShopPage;
