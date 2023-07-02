import React from "react";
import "./authForm.css";

const Signup = ({ isSignUpMode, toggleAuthMode }) => {
  return (
    <form action="" className="signup-form">
      <h1 className="title">Create Account</h1>
      <div className="input-field">
        <input type="text" placeholder="First Name" />
      </div>
      <div className="input-field">
        <input type="text" placeholder="Last Name" />
      </div>
      <div className="input-field">
        <input type="number" placeholder="Age" />
      </div>
      <div className="input-field">
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" />
      </div>
      <div className="input-field">
        <input type="password" placeholder="Confirm Password" />
      </div>
      <button className="button">Signup</button>
      <p className={`account-text ${isSignUpMode ? "show2" : ""}`}>
        Already have an account?{" "}
        <a href="#" id="login-btn2" onClick={toggleAuthMode}>
          Login
        </a>
      </p>
    </form>
  );
};

export default Signup;
