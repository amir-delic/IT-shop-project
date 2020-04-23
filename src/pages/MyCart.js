import React, { Component } from "react";
import Product from "../components/Product";
import "../styles/MyCart.css";
import { ProductConsumer } from "../context";

class MyCart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div
              className={
                value.cart.length < 3
                  ? "mycart-footer container"
                  : "mycart container"
              }
            >
              <h1>My Cart</h1>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <React.Fragment>
                    {value.cart.map((c) => (
                      <Product
                        key={c.id}
                        product={c}
                        removeFromCart={value.removeFromCart}
                        increaseNumProduct={value.increaseNumProduct}
                        decreaseNumProduct={value.decreaseNumProduct}
                      />
                    ))}
                    <tr>
                      <th>Total: {value.total}.00$</th>
                    </tr>
                  </React.Fragment>
                </tbody>
              </table>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default MyCart;
