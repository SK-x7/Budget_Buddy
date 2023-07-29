import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./landing.module.css";
// import styles from "./landing.module.css";

// import LoginPage from "./loginPage";
// import SignUp from "./signUp";
// import App from "./App";

import logo from "./images/logo.png";
import lpMainImg from "./images/lpMain.png";
import Smfoo from "./images/Smfoo.png";
import omImg from "./images/OurMissionImg.png";
import MoneyPotImg from "./images/moneypotImg.png";

import Comparpricenew from "./images/Comparpricenew.svg";
import Insightsfeturenew from "./images/Insightsfeturenew.svg";
import Trackingnew from "./images/Trackingnew.svg";
import Targetnew from "./images/Targetnew.svg";

export default function LandingPage(params) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.main_}>
        <div id={styles.nav}>
          <img src={logo} alt="Logo........" id={styles.logo} />
          <ul id={styles.menu}>
            <li>
              <button onClick={() => navigate("/home")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/login")}>Sign Up/login</button>
            </li>
            <li>
              <a href="#{styles.fethead}">Features</a>
            </li>
            <li>
              <a href="#mission">About Us</a>
            </li>
          </ul>
        </div>
        <div id={styles.Herosec}>
          <div id={styles.heroimg}>
            <img src={lpMainImg} alt="hero...." />
          </div>
          <div id={styles.herotxt}>
            <h1>SAVE MORE GROW MORE WITH BUDGET BUDDY</h1>
          </div>
        </div>
        <hr />
        <div id={styles.WHTBB}>
          <div id={styles.wtxt}>
            <h2>What is Budget Buddy</h2>
            <p>
              BudgetBuddy is your intelligent personal finance ally that
              simplifies money management. Input your income and expenses to get
              automated insights, budget tracking, cost cutting tools, and
              tailored savings goals that empower you to take control of your
              finances, gain confidence in your money decisions, and achieve
              financial security on your own terms.
            </p>
          </div>
          <div id={styles.whtimg}>
            <img src={Smfoo} alt="" />
          </div>
        </div>
        <hr />
        <h2 id={styles.fethead}>Key Features of Budget Buddy</h2>
        <div id={styles.features}>
          <div className={styles.f}>
            <div className={styles.fimg}>
              <img src={Insightsfeturenew} alt="" />
            </div>
            <div className={styles.ftxt}>
              <p>Easy to track and manage your Income end Expenses.</p>
            </div>
          </div>

          <div className={styles.f}>
            <div className={styles.fimg}>
              <img src={Targetnew} alt="" />
            </div>
            <div className={styles.ftxt}>
              <p>Automated Insights and info about your Money</p>
            </div>
          </div>

          <div className={styles.f}>
            <div className={styles.fimg}>
              <img src={Trackingnew} alt="" />
            </div>
            <div className={styles.ftxt}>
              <p>Set Monthly and daily limit</p>
            </div>
          </div>

          <div className={styles.f}>
            <div className={styles.fimg}>
              <img src={Comparpricenew} alt="" />
            </div>
            <div className={styles.ftxt}>
              <p>Compare price of item</p>
            </div>
          </div>
        </div>
        <hr />
        <div id={styles.mission}>
          <div id={styles.Mtxt}>
            <h2>OUR MISSION</h2>
            <p>
              At BudgetBuddy, our mission is to empower financial confidence and
              clarity through easy-to-use money management tools. Our
              intelligent, personalized platform provides insights and guidance
              so individuals can understand spending, take control of finances,
              reach goals, and secure their monetary future. We aim to equip
              people with everything required to master their money.
            </p>
          </div>
          <div id={styles.Mimg}>
            <img src={omImg} alt="" />
          </div>
        </div>
        <hr />
        <div id={styles.fword}>
          <div id={styles.fimgf}>
            <img src={MoneyPotImg} alt="" />
          </div>
          <div id={styles.ftxtf}>
            <h1>START SAVING TODAY WITHBUDGET BUDDY</h1>
            <button id={styles.su}>signup</button>
            <button id={styles.li}>log in</button>
          </div>
        </div>
      </div>
    </>
  );
}
