import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

import "../styles/Modal.css";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 text-center text-capitalize"
                    >
                      <h2 className="py-3">item added to the cart</h2>
                      <img src={img} alt={title} />
                      <h3 className="pt-2">{title}</h3>
                      <h5 className="text-muted">price: {price}.00$</h5>
                      <Link to="/shop">
                        <button
                          className="btn btn-dark"
                          onClick={() => closeModal()}
                        >
                          Continue shopping
                        </button>
                      </Link>
                      <Link to="/mycart">
                        <button
                          className="btn btn-primary"
                          onClick={() => closeModal()}
                        >
                          Go to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
