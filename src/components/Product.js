import React, { Component } from "react";

import "../styles/Product.css";

class Product extends Component {
  render() {
    const { img, title, price, count, id } = this.props.product;
    return (
      <tr className="tr">
        <th scope="row">
          <img src={img} alt={title} className="table-image" />
        </th>
        <td>{title.toUpperCase()}</td>
        <td>
          <i
            className="fas fa-arrow-down"
            onClick={() =>
              this.props.decreaseNumProduct(count, this.props.product)
            }
          ></i>
          <span style={{ margin: "20px" }}>{count}</span>
          <i
            className="fas fa-arrow-up"
            onClick={() =>
              this.props.increaseNumProduct(count, this.props.product)
            }
          ></i>
        </td>
        <td>{price}.00$</td>
        <td>
          <i
            className="fas fa-trash-alt"
            onClick={() => this.props.removeFromCart(id)}
          ></i>
        </td>
      </tr>
    );
  }
}

export default Product;
