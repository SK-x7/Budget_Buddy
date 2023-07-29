import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import bitLady from "./images/lsMainImg.png";
import Llogo from "./images/logo.png";
import faceBbtn from "./images/Facebook.svg";
import twitbtn from "./images/twitter.svg";
import googlebtn from "./images/Google.svg";
export default function LoginPage(params) {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.app}>
        <section className={styles.sect1} style={{ fontSize: "2.5rem" }}>
          <header className={styles.headerr}>
            <h1 className={styles.headerr1}>keep saving</h1>
            <h1 className={styles.headerr2}>keep growing</h1>
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
            <h3 style={{ color: "#4612b4", textTransform: "uppercase" }}>
              welcome back
            </h3>
          </header>
          {/* <span>Log in with</span> */}
          {/* form */}
          <form action="#" style={{ display: "inline-block" }}>
            <span>Log in with</span>
            <fieldset className={styles.maang_btn}>
              <button id={styles.fb}>
                <img src={faceBbtn} id={styles.fb} alt="FaceBook" />
              </button>
              <button id={styles.twitter}>
                <img src={twitbtn} id={styles.twitter} alt="Twitter" />
              </button>
              <button id={styles.google}>
                <img src={googlebtn} id={styles.google} alt="Google" />
              </button>
            </fieldset>
            <span>or</span>
            <fieldset>
              <input type="email" placeholder="E-mail/@username" />
              <br />
              <br />
              <input
                type="password"
                id={styles.passwrdInputId}
                placeholder="Password"
                onkeyup="check()"
                required
              />
              <br />
              <p style={{ color: "red" }} id={styles.errorMsgSpanId} />
              <div className={styles.pass}>
                <input type="checkbox" />
                <label htmlFor>Keep me logged in</label>
                <footer>
                  <a href="www.google.com">Forgot Password?</a>
                </footer>
              </div>
              <span>
                <button id={styles.signin}>Sign In</button>
              </span>
            </fieldset>
            <span>or</span>
            <fieldset>
              <span> Don't have an account? </span>
              <span>
                <button
                  onClick={() => navigate("/signup")}
                  id={styles.signinbtn}
                >
                  Sign up
                </button>
              </span>
            </fieldset>
          </form>
          {/* <span>Log in with</span> */}
        </section>
      </div>
    </>
  );
}
