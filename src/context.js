import React, { Component } from "react";
import { ShopItems, SingleShopItem } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ShopItems,
      SingleShopItem,
      cart: [],
      total: 0,
    };
  }
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleShop = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { SingleShopItem: product };
    });
  };

  addToCart = (item, count, inCart, price) => {
    this.setState({
      cart: [
        ...this.state.cart,
        {
          ...item,
          count: count + 1,
          inCart: !inCart,
          total: price * 4,
        },
      ],
      SingleShopItem: { ...this.state.SingleShopItem },
    });
  };
  handleInCart = (item, inCart) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) => {
        if (product.items.some((p) => p.id === item.id)) {
          return {
            ...product,
            items: product.items.map((el) =>
              el.id === item.id ? { ...el, inCart: !inCart } : el
            ),
          };
        }
        return product;
      }),
    }));
  };
  removeFromCart = (id) => {
    this.setState({ cart: this.state.cart.filter((item) => item.id !== id) });
  };
  increaseNumProduct = (count, item) => {
    this.setState((prevState) => ({
      cart: prevState.cart.map((el) =>
        el === item ? { ...el, count: count + 1 } : el
      ),
    }));
  };
  decreaseNumProduct = (count, item) => {
    if (count > 1) {
      this.setState((prevState) => ({
        cart: prevState.cart.map((el) =>
          el === item ? { ...el, count: count - 1 } : el
        ),
      }));
    }
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleShop: this.handleShop,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          increaseNumProduct: this.increaseNumProduct,
          decreaseNumProduct: this.decreaseNumProduct,
          handleInCart: this.handleInCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
