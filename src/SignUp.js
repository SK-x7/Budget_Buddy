import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import bitLady from "./images/lsMainImg.png";
import Llogo from "./images/logo.png";
import faceBbtn from "./images/Facebook.svg";
import twitbtn from "./images/twitter.svg";
import googlebtn from "./images/Google.svg";
export default function SignUP(params) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.app}>
        <section className={styles.sect1} style={{ fontSize: "2.5rem" }}>
          <header className={styles.headerr}>
            <h1 className={styles.headerr1}>START SAVING TODAY WITH</h1>
            <h1 className={styles.headerr2}>Budget Buddy</h1>
          </header>
          <span>
            <img src={bitLady} alt="Bitcoin" id={styles.image} />
          </span>
        </section>
        <section className={styles.sect2}>
          <span>
            <img className={styles.logo} src={Llogo} alt="BudgetBuddy" />
          </span>
          <header>
            <h3>Create Account</h3>
          </header>
          {/* form */}
          <form
            action="#"
            id={styles.signupForm}
            style={{ display: "inline-block" }}
          >
            <span>Sign-Up with</span>
            <fieldset className={styles.maang_btn}>
              <button id={styles.fb} className={styles.iconbtn}>
                <img src={faceBbtn} id={styles.fbimg} alt="FaceBook" />
              </button>
              <button id={styles.twitter} className={styles.iconbtn}>
                <img src={twitbtn} id={styles.twitterimg} alt="Twitter" />
              </button>
              <button id={styles.google} className={styles.iconbtn}>
                <img src={googlebtn} id={styles.googleimg} alt="Google" />
              </button>
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
              <div id={styles.pass} style={{ marginTop: "1.9vh" }}>
                <input type="checkbox" id={styles.c} />
                <label htmlFor="t&c" style={{ marginTop: "10%" }}>
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
            <fieldset style={{ marginTop: "-1vh" }}>
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
