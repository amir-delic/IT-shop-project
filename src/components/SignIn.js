import React, { Component } from "react";
import "../styles/SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state };
    this.props.signInUser(newUser);
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="SignIn">
        <h2>I already have a account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <button className="btn btn-dark" type="Submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
