import logo from "./images/logo.png";
import Smfoo from "./images/Smfoo.png";
import home_img from "./images/Home btn.svg";
import insight_img from "./images/Insights.svg";
import marketplace_img from "./images/Marketplace.svg";
// import pi from "./images/profile_img.png";
import incoming_img from "./images/Income.svg";
import outgoing_img from "./images/Expense.svg";
import pp from "./images/ProfileImage.jpg";
import bi from "./images/bal icn.svg";
import i1 from "./images/Insights.svg";
import tracki from "./images/Trackingnew.svg";
import simg from "./images/seting.svg";
import logoutimg from "./images/logout.svg";
import ri from "./images/Men_invest_and_have_made_a_profit_generated-removebg-preview.png";
// import outgoing_img from "./images/Expense.svg";

// import styles from "./profilepage.module.css";

import React from "react";
// import { useNavigate } from "react-router-dom";

import styles from "./profilepage.module.css";

export default function ProfilePage(params) {
  return (
    <>
      <div className={styles.p_main_container}>
        <SideMenu />
        <div className={styles.pright}>
          <div className={styles.pright_l}>
            <div className={styles.p_container}>
              <img className={styles.p_img} alt="user_img" src={pp} />
            </div>
            <div className={styles.p_details}>
              <div className={styles.pd}>
                <span>@username</span>
                <button>Edit</button>
              </div>
              <h2>examplenjkbkbkbb</h2>
              <h3>123-7886-88</h3>
            </div>
          </div>
          <div className={styles.pright_c}>
            <div className={styles.bcards}>
              <div className={styles.bcard}>
                <img alt="img1" src={bi} />
                <div className={styles.bcdetails}>
                  <span>balance</span>
                  <span>100000</span>
                </div>
              </div>
              <div className={styles.bcard}>
                <img alt="img1" src={incoming_img} />
                <div className={styles.bcdetails}>
                  <span>avg income</span>
                  <span>70000</span>
                </div>
              </div>
              <div className={styles.bcard}>
                <img alt="img1" src={outgoing_img} />
                <div className={styles.bcdetails}>
                  <span>avg Expense</span>
                  <span>10000</span>
                </div>
              </div>
              <button>view more</button>
            </div>
          </div>
          <div className={styles.pright_r}>
            <div className={styles.lcards}>
              <div className={styles.lcard}>
                <img alt="img1" src={tracki} />
                <span>Transaction History</span>
              </div>
              <div className={styles.lcard}>
                <img alt="img1" src={i1} />
                <span>Insights</span>
              </div>
              <div className={styles.lcard}>
                <img alt="img1" src={simg} />
                <span>Settings</span>
              </div>
              <div className={styles.lcard}>
                <img alt="img1" src={logoutimg} />
                <span>Logout</span>
              </div>
            </div>
          </div>
          <div className={styles.relimg}>
            <img alt="relative_img" src={ri} />
          </div>
        </div>
      </div>
    </>
  );
}

function SideMenu({ onOpen, setOpen }) {
  return (
    <div className={styles.main_left}>
      <div className={styles.image_container}>
        <img alt="logo_image" src={logo} className={styles.logo_img} />
      </div>
      <div className={styles.page_list}>
        <ul>
          <PageList onOpen={onOpen} setOpen={setOpen} />
        </ul>
      </div>
      <div className={styles.bottom_footer_img}>
        <img className={styles.footer_img} alt="footer_img" src={Smfoo}></img>
      </div>
    </div>
  );
}

function PageList({ onOpen, setOpen }) {
  return (
    <>
      <li className={styles.alist_element}>
        <button className={styles.asml_button} onClick={() => onOpen("home")}>
          <img className={styles.asm_list_img} alt="sm_list" src={home_img} />
          Home
        </button>
      </li>
      <li className={styles.list_element}>
        <button className={styles.sml_button} onClick={() => onOpen("insight")}>
          <img className={styles.sm_list_img} alt="sm_list" src={insight_img} />
          Insights
        </button>
      </li>
      <li className={styles.list_element}>
        <button className={styles.sml_button} onClick={() => onOpen("mppage")}>
          <img
            className={styles.sm_list_img}
            alt="sm_list"
            src={marketplace_img}
          />
          Marketplace
        </button>
      </li>
    </>
  );
}
