import React, { Component } from "react";
import uuid from "uuid/v4";
import "../styles/SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state, id: uuid() };
    if (this.state.password === this.state.confirmPassword) {
      this.props.signUpUser(newUser);
    } else {
      alert("Password do not match!!!");
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="SignUp">
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="SignUpForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="displayName"
            placeholder="Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm Password"
            required
          />
          <button className="btn btn-dark" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
