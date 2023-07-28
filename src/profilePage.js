import React from "react";
// import { useNavigate } from "react-router-dom";

import styles from "./profilepage.module.css";

export default function ProfilePage(params) {
  return (
    <>
      <div>
        <section className={styles.sidebar}>
          <span className={styles.sidebar_image_top}>
            <img alt="BudgetBuddy" id="logo" />
          </span>
          <ul className={styles.sidebar_options}>
            <li id={styles.home}>
              <button href="#">Home</button>
            </li>
            <li id={styles.insights}>
              <button href="#">Insights</button>
            </li>
            <li id={styles.market}>
              <button href="#">MarketPlace</button>
            </li>
          </ul>
          <div className={styles.sidebar_image_bottom}>
            <img alt="Money" />
          </div>
        </section>
        <section>
          <div className="content">
            <div className="profile-box">
              <div className="profile-picture">
                {/* Profile picture content here */}
                <img
                  alt="Profile Picturex"
                  className={styles.profile_picture}
                />
              </div>
              <div className="stats">
                <div>
                  {" "}
                  <img
                    src="./resources/drive-download-20230726T083314Z-001/icons/bal icn.svg"
                    alt=""
                  />{" "}
                  <span style={{ color: "#F9754F", fontSize: "2rem" }}>
                    BALANCE 10000
                  </span>
                </div>
                <div>
                  {" "}
                  <img
                    src="./resources/drive-download-20230726T083314Z-001/icons/Income.svg"
                    alt=""
                  />
                  <span
                    className="avg1"
                    style={{ color: "green", textShadow: "green" }}
                  >
                    Average Income: 10000
                  </span>
                </div>
                <div>
                  {" "}
                  <img
                    src="./resources/drive-download-20230726T083314Z-001/icons/Expense.svg"
                    alt=""
                  />
                  <span className="avg2" style={{ color: "red" }}>
                    Average Expense: 10000
                  </span>
                </div>
                <button id="view-more">View More</button>
              </div>
              <div className="list-box">
                {/* Your list items content here */}
                <ul className="navs">
                  <li>
                    <img className={styles.list_item_icon} alt="bhbj" />
                    <a href="#gjgjh">
                      <b>Transaction History</b>
                    </a>
                  </li>
                  <hr />
                  <li>
                    <img alt="hhjvhj" />

                    <a href="#jhgjgjh">
                      <b>Settings</b>
                    </a>
                  </li>
                  <hr />
                  <li>
                    <img alt="ugh" />

                    <a href="#jhh">
                      <b>Logout</b>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Your user info content here */}
            <div className="user-info">
              {/* Example: */}
              <span className="span">
                <h2 id="uname">@USERNAME</h2>
                <button id="editButton">
                  <b>Edit</b>
                </button>
              </span>
              <p id="email">
                <b>example@example.com</b>
              </p>
              <p id="phone-num">
                <b>123-456-7890</b>
              </p>
            </div>
            <span>
              <img
                src="./resources/drive-download-20230726T083314Z-001/Illustration/Men_invest_and_have_made_a_profit_generated.jpg"
                alt=""
                className="bottom-right-image"
              />
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
