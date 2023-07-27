import React from "react";
import { useNavigate } from "react-router-dom";

import "./landing.module.css";

// import LoginPage from "./loginPage";
// import SignUp from "./signUp";
// import App from "./App";

import logo from "./images/logo.png";
import lpMainImg from "./images/lpMain.png";
import Smfoo from "./images/Smfoo.png";
import omImg from "./images/OurMissionImg.png";
import MoneyPotImg from "./images/moneypotImg.png";
import trackingImg from "./images/Tracking.svg";
import targetImg from "./images/Target.svg";
import insight1 from "./images/Insights-1.svg";
import compareImg from "./images/Compar price.svg";

export default function LandingPage(params) {
  const navigate = useNavigate();

  return (
    <>
      <div className="main_">
        <div id="nav">
          <img src={logo} alt="Logo........" id="logo" />
          <ul id="menu">
            <li>
              <button onClick={() => navigate("/home")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/login")}>Sign Up/login</button>
            </li>
            <li>
              <a href="#fethead">Features</a>
            </li>
            <li>
              <a href="#mission">About Us</a>
            </li>
          </ul>
        </div>
        <div id="Herosec">
          <div id="heroimg">
            <img src={lpMainImg} alt="hero...." />
          </div>
          <div id="herotxt">
            <h1>SAVE MORE GROW MORE WITH BUDGET BUDDY</h1>
          </div>
        </div>
        <hr />
        <div id="WHTBB">
          <div id="wtxt">
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
          <div id="whtimg">
            <img src={Smfoo} alt="" />
          </div>
        </div>
        <hr />
        <h2 id="fethead">Key Features of Budget Buddy</h2>
        <div id="features">
          <div className="f">
            <div className="fimg">
              <img src={insight1} alt="" />
            </div>
            <div className="ftxt">
              <p>Easy to track and manage your Income end Expenses.</p>
            </div>
          </div>
          <div className="f">
            <div className="fimg">
              <img src={targetImg} alt="" />
            </div>
            <div className="ftxt">
              <p>Automated Insights and info about your Money</p>
            </div>
          </div>
          <div className="f">
            <div className="fimg">
              <img src={trackingImg} alt="" />
            </div>
            <div className="ftxt">
              <p>Set Monthly and daily limit</p>
            </div>
          </div>
          <div className="f">
            <div className="fimg">
              <img src={compareImg} alt="" />
            </div>
            <div className="ftxt">
              <p>Compare price of item</p>
            </div>
          </div>
        </div>
        <hr />
        <div id="mission">
          <div id="Mtxt">
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
          <div id="Mimg">
            <img src={omImg} alt="" />
          </div>
        </div>
        <hr />
        <div id="fword">
          <div id="fimgf">
            <img src={MoneyPotImg} alt="" />
          </div>
          <div id="ftxtf">
            <h1>START SAVING TODAY WITHBUDGET BUDDY</h1>
            <button>signup</button>
            <button>log in</button>
          </div>
        </div>
      </div>
    </>
  );
}
