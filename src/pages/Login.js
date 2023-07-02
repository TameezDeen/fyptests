import React from "react";
import "./authForm.css";

const Login = ({ isSignUpMode, toggleAuthMode }) => {
  return (
    <form action="" className="login-form">
      <h1 className="title">Login</h1>
      <div className="input-field">
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" />
      </div>
      <button className="forgot-password-btn">Forgot password?</button>
      <button className="button">Login</button>
      <p className={`account-text ${isSignUpMode ? "" : "show1"}`}>
        Don't have an account?{" "}
        <a href="#" id="sign-up-btn2" onClick={toggleAuthMode}>
          Sign up
        </a>
      </p>
    </form>
  );
};

export default Login;
