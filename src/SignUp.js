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
            <img src={bitLady} alt="Bitcoin" />
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
          <form action="#">
            <span>---------------- Sign-up with ------------------</span>
            <fieldset className={styles.maang_btn}>

              <button>
                <img src={faceBbtn} id={styles.fb} alt="FaceBook" />
              </button>
              <button>
                <img src={twitbtn} id={styles.twitter} alt="Twitter" />
              </button>
              <button>
                <img src={googlebtn} id={styles.google} alt="Google" />

              </button>
            </fieldset>
            <span>--------------------- or ------------------------</span>
            <fieldset className={styles.f2}>
              <input
                className={styles.i}
                type="email"
                placeholder="Email Address"
              />
              <input className={styles.i} type="text" placeholder="@username" />

              <input
                className={styles.i}
                type="password"
                placeholder="Password"
              />


              <div id={styles.pass}>
                <input type="checkbox" />
                <label>

                  I agree to all{" "}
                  <a href="www.google.com">Terms and Condition</a>
                </label>
              </div>

              <span>
                <button type="submit" id={styles.signin}>
                  Sign Up
                </button>
              </span>
            </fieldset>

            <span>--------------------- or ----------------------</span>
            <fieldset className={styles.f3}>
              <span>Already have an Acount!</span>
              <span>
                <button
                  onClick={() => navigate("/login")}
                  id={styles.signinbtn}
                >
                  Login
                </button>
              </span>

            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}
