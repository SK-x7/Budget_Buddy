import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

export default function SignUP(params) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.signin}>
        <section className={styles.sect1}>
          <header className={styles.headerr}>
            <h1 className={styles.headerr1}>
              start saving <br /> today with
            </h1>
            <h1 className={styles.headerr2}>BudgetBuddy</h1>
          </header>
          <span>
            <img
              src="./resources/_0680d48e-fbbb-42d9-aafe-07870a57628c-removebg-preview - Copy.png"
              alt="bitcoinLady"
              id={styles.image}
            />
          </span>
        </section>
        <section className={styles.sect2}>
          <span>
            <img
              className={styles.logo}
              src="./resources/Group 3.png"
              alt="BudgetBuddy"
            />
          </span>
          <header>
            <h3>Create Account</h3>
          </header>
          {/* form */}
          <form action="#" id={styles.signupForm}>
            <span>Sign-Up with</span>
            <fieldset className={styles.maang_btn}>
              <button className="fa fa-facebook" id={styles.fb} />
              <button className="fa fa-twitter" id={styles.twitter} />
              <button className="fa fa-google" id={styles.google} />
            </fieldset>
            <span>or</span>
            <fieldset>
              <input
                type="email"
                placeholder="Email Address"
                id={styles.e_mail}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="@username"
                id={styles.username}
              />{" "}
              <br />
              <br />
              <input
                type="password"
                placeholder="Password"
                id={styles.user_passwrd}
              />
              <br />
              <div id={styles.pass}>
                <input type="checkbox" id={styles.c} />
                <label htmlFor="t&c">
                  I agree to all{" "}
                  <a href="www.google.com">Terms and Condition</a>
                </label>
              </div>
              <p id={styles.errorMsgSpanId} />
              <span>
                <button type="submit" id={styles.signin}>
                  Sign Up
                </button>
              </span>
            </fieldset>
            <span>or</span>
            <fieldset>
              <span>Already have an Acount!</span>
              <span>
                <button onClick={() => navigate("/login")}>Login</button>
              </span>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}
