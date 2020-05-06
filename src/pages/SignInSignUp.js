import React from "react";
import "../styles/SignInSignUp.css";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { ProductConsumer } from "../context";
import { Redirect } from "react-router-dom";

const SignInSignUp = () => (
  <ProductConsumer>
    {(value) => {
      return (
        <div className="SignInSignUp">
          <SignIn signInUser={value.signInUser} />
          <SignUp signUpUser={value.signUpUser} />
        </div>
      );
    }}
  </ProductConsumer>
);

export default SignInSignUp;
