import React from "react";
import "./authForm.css";

const Login = () => {
  return (
    <form action="" className="login-form">
      <h1 className="title">Login</h1>
      <div className="input-field">
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" />
      </div>
      <button className="button">Login</button>
    </form>
  );
};

export default Login;
