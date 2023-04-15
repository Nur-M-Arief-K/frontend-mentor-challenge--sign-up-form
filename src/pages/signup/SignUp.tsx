import React from "react";

import "./styles.css";
import SignUpForm from "./signupform/SignUpForm";

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-page__container">
        <div className="signup-page__banner">
          <h1 className="signup-page__title">
            Learn to code by watching others
          </h1>
          <p className="signup-page__subtitle">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers this
            is invaluable.
          </p>
        </div>

        <div className="signup-page__form">
          <div className="signup-page__pricing">
            <p className="signup-page__pricing__text">
              <span className="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
