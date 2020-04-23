import React, { Component } from "react";
import "../styles/Card.css";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { id, img, title } = this.props.product;
    return (
      <div className="col mb-4">
        <ProductConsumer>
          {(value) => (
            <div className="card" onClick={() => value.handleShop(id)}>
              <Link to="/shop">
                <img className="card-img-top" src={img} alt={title} />
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                </div>
              </Link>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}

export default Card;
