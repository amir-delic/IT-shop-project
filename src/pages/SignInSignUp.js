import React from "react";
import "../styles/SignInSignUp.css";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignInSignUp = () => (
  <div className="SignInSignUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
