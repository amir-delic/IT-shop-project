import React, { Component } from "react";

import "../styles/Product.css";

class Product extends Component {
  render() {
    const { img, title, price, count, id, total } = this.props.product;
    return (
      <tr className="tr">
        <th scope="row">
          <img src={img} alt={title} className="table-image" />
        </th>
        <td>{title.toUpperCase()}</td>
        <td className="text-muted">{price}.00$</td>
        <td>
          <i
            className="fas fa-arrow-down"
            onClick={() => this.props.decreaseNumProduct(id)}
          ></i>
          <span style={{ margin: "20px" }}>{count}</span>
          <i
            className="fas fa-arrow-up"
            onClick={() => this.props.increaseNumProduct(id)}
          ></i>
        </td>
        <td className="font-weight-bold">{total}.00$</td>
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
