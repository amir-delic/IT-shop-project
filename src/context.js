import React, { Component } from "react";
import { ShopItems, SingleShopItem } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      SingleShopItem: SingleShopItem,
      cart: [],
      users: [],
      user: {},
      modalOpen: false,
      modalProduct: SingleShopItem,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      login: false,
    };
  }
  signInUser = (newUser) => {
    this.setState(
      (prevState) => ({
        user: newUser,
      }),
      () => {
        this.checkLoginUser();
      }
    );
  };
  checkLoginUser = () => {
    let arr = JSON.parse(localStorage.getItem("customers") || "[]");
    let userExist = false;

    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].email === this.state.user.email &&
        arr[i].password === this.state.user.password
      ) {
        userExist = true;
      }
    }
    if (userExist) {
      this.logInUser();
    } else {
      alert("This user NOT exist!");
    }
  };
  logInUser = () => {
    this.setState({ login: true });
  };
  signUpUser = (newUser) => {
    this.setState(
      (prevState) => ({
        users: [...prevState.users, newUser],
      }),
      () => {
        let arr = JSON.parse(localStorage.getItem("customers") || "[]");

        let userExist = false;

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].email === newUser.email) {
            userExist = true;
            alert("User alredy exist");
          }
        }

        if (!userExist) {
          arr.push(newUser);
          localStorage.setItem("customers", JSON.stringify(arr));
          this.logInUser();
        }
      }
    );
  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    ShopItems.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleShop = (item) => {
    this.setState(() => {
      return { SingleShopItem: item };
    });
  };
  openModal = (item) => {
    this.setState(() => {
      return { modalProduct: item, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  addToCart = (item, count, inCart, price) => {
    this.setState(
      () => {
        return {
          cart: [
            ...this.state.cart,
            {
              ...item,
              count: count + 1,
              inCart: !inCart,
              total: price,
            },
          ],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  handleInCart = (item, inCart, count, price) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) => {
        if (product.items.some((p) => p.id === item.id)) {
          return {
            ...product,
            items: product.items.map((el) =>
              el.id === item.id
                ? { ...el, inCart: !inCart, count: count + 1, total: price }
                : el
            ),
          };
        }
        return product;
      }),
      SingleShopItem: {
        ...prevState.SingleShopItem,
        items: prevState.SingleShopItem.items.map((el) =>
          el.id === item.id
            ? { ...el, inCart: !inCart, count: count + 1, total: price }
            : el
        ),
      },
    }));
  };
  removeFromCart = (id) => {
    let newProducts = this.state.products;
    for (let i = 0; i < newProducts.length; i++) {
      const element = newProducts[i];
      for (let j = 0; j < element.items.length; j++) {
        const el = element.items[j];
        if (el.id === id) {
          el.inCart = false;
          el.count = 0;
          el.total = 0;
        }
      }
    }

    this.setState(
      () => {
        return {
          products: newProducts,
          cart: this.state.cart.filter((item) => item.id !== id),
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  increaseNumProduct = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decreaseNumProduct = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.count > 1) {
      product.count = product.count - 1;
    }
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.17;
    const tax = parseFloat(tempTax.toFixed(2));
    const tempTotal = subTotal + tax;
    const total = parseFloat(tempTotal.toFixed(2));
    this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
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
          clearCart: this.clearCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          signUpUser: this.signUpUser,
          signInUser: this.signInUser,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
