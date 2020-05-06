import React, { Component } from "react";
import Product from "../components/Product";
import "../styles/MyCart.css";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

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
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Item Total</th>
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
                    {value.cart.length > 0 && (
                      <tr>
                        <th>
                          <Link to="/">
                            <button
                              style={{ width: "150px", borderRadius: "0" }}
                              className="btn btn-dark"
                              onClick={() => value.clearCart()}
                            >
                              Clear Cart
                            </button>
                          </Link>
                        </th>
                      </tr>
                    )}

                    <tr>
                      <th>SUBTOTAL: {value.cartSubTotal}.00$</th>
                    </tr>
                    <tr>
                      <th>TAX: {value.cartTax}$</th>
                    </tr>
                    <tr>
                      <th>TOTAL: {value.cartTotal}$</th>
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
