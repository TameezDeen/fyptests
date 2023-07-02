import React, {useState}from "react";
import "./authForm.css";
import Login from "./Login";
import Signup from "./Signup";

const AuthFrom = () => {
  
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  return (
    // <div className="container" id="container">
    <div className={`container ${isSignUpMode? "sign-up-mode" : "login-in-mode"}`}>
      <div className="login-signup">
        {/* =============== LOGIN FORM =============== */}
        <Login isSignUpMode={isSignUpMode} toggleAuthMode={toggleAuthMode}/>

        {/* =============== SIGNUP FORM =============== */}
        <Signup isSignUpMode={isSignUpMode} toggleAuthMode={toggleAuthMode}/>
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
