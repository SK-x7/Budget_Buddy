import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.module.css";

export default function SignUP(params) {
  const navigate = useNavigate();

  return (
    <>
      <div className="app">
        <section className="sect1" style={{ fontSize: "2.4rem" }}>
          <header className="headerr">
            <h1 className="headerr1">
              start saving <br /> today with
            </h1>
            <h1 className="headerr2">BudgetBuddy</h1>
          </header>
          <span>
            <img
              src="./resources/_0680d48e-fbbb-42d9-aafe-07870a57628c-removebg-preview - Copy.png"
              alt="bitcoinLady"
              id="image"
            />
          </span>
        </section>
        <section className="sect2">
          <span>
            <img
              className="logo"
              src="./resources/Group 3.png"
              alt="BudgetBuddy"
            />
          </span>
          <header>
            <h3 style={{ color: "#4612B4", textTransform: "uppercase" }}>
              Create Account
            </h3>
          </header>
          {/* form */}
          <form action="#" id="signupForm" style={{ display: "inline-block" }}>
            <span>Sign-Up with</span>
            <fieldset className="maang-btn">
              <button className="fa fa-facebook" id="fb" />
              <button className="fa fa-twitter" id="twitter" />
              <button className="fa fa-google" id="google" />
            </fieldset>
            <span>or</span>
            <fieldset>
              <input type="email" placeholder="Email Address" id="e-mail" />
              <br />
              <br />
              <input type="text" placeholder="@username" id="username" /> <br />
              <br />
              <input type="password" placeholder="Password" id="user-passwrd" />
              <br />
              <div id="pass">
                <input type="checkbox" id="t&c" />
                <label htmlFor="t&c">
                  I agree to all{" "}
                  <a href="www.google.com" style={{ float: "inherit" }}>
                    Terms and Condition
                  </a>
                </label>
              </div>
              <p style={{ color: "red" }} id="errorMsgSpanId" />
              <span>
                <button type="submit" id="signin">
                  Sign Up
                </button>
              </span>
            </fieldset>
            <span>or</span>
            <fieldset>
              <span>Already have an Acount!</span>
              <span>
                <button onClick={() => navigate("/signup")}>Login</button>
              </span>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}
