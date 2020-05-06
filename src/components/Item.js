import React from "react";
import "../styles/Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  const { img, title, inCart, count, price, id } = props.item;

  return (
    <div className="col mb-4">
      <div className="card">
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-footer">
          <small className="text-muted">{title.toUpperCase()}</small>
          <small className="text-muted">{price}.00$</small>
        </div>

        <div>
          {inCart ? (
            <button disabled className="button btn btn-dark ">
              Added
            </button>
          ) : (
            <button
              className="button btn btn-light"
              onClick={() => {
                props.addToCart(props.item, inCart, count, price);
                props.handleInCart(props.item, inCart, count, price);
                props.openModal(props.item);
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
