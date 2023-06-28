import React from "react";
import "./authForm.css";


const Signup = () => {
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
    </form>
  );
};

export default Signup;
