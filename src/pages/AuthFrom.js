import React, {useState}from "react";
import "./authForm.css";
import Login from "./Login";
import Signup from "./Signup";

const AuthFrom = () => {
  // const login_btn = document.querySelector("#login-btn");
  // const signup_btn = document.querySelector("#signup-btn");
  // const container = document.querySelector(".container");

  // signup_btn.addEventListener("click", () => {
  //   container.classList.add("sign-up-mode");
  // });

  // login_btn.addEventListener("click", () => {
  //   container.classList.remove("sign-up-mode");
  // });

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  return (
    // <div className="container" id="container">
    <div className={`container ${isSignUpMode? "sign-up-mode" : "login-in-mode"}`}>
      <div className="login-signup">
        {/* =============== LOGIN FORM =============== */}
        <Login />

        {/* =============== SIGNUP FORM =============== */}
        <Signup />
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h1>Already Registered?</h1>
            <p>Login and continue your experience.</p>
            <button className="button" id="login-btn" onClick={toggleAuthMode}>
              Login
            </button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h1>New Here?</h1>
            <p>Create an account and discover great music</p>
            <button className="button" id="signup-btn" onClick={toggleAuthMode}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFrom;
