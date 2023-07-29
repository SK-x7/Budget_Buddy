import Example from "./bargraph";
import Example1 from "./piChart";
import BBarChart from "./BrushBarChart";
import LineChart from "./linechart";
import ProgressBar from "./progress_bar";
import logo from "./images/logo.png";
import Smfoo from "./images/Smfoo.png";
import home_img from "./images/Home btn.svg";
import insight_img from "./images/Insights.svg";
import marketplace_img from "./images/Marketplace.svg";
import profile_img from "./images/profile_img.png";
import incoming_img from "./images/Income.svg";
import outgoing_img from "./images/Expense.svg";
// import pridown_img from "./images/";
import shop_img from "./images/shop icon.svg";
import amazon_img from "./images/Amazon.svg";
import flipkart_img from "./images/Flipkart.svg";
import product_img1 from "./images/product img.png";
import { useState } from "react";
import styles from "./index.module.css";
// import { LineChart } from "recharts";
export default function App() {
  const [Open, setOpen] = useState("home");

  function handleOpen(page) {
    setOpen(page);
  }

  // const [Open, setIsHomeOpen] = useState(true);
  // const [isInsightOpen, setIsInsightOpen] = useState(false);
  // const [isMpOpen, setIsMpOpen] = useState(false);

  return (
    <>
      <div className={styles.main_container}>
        {Open === "home" && (
          <>
            <SideMenu onOpen={handleOpen} />
            {/* <div className={styles.main_right}></div> */}
            <HomePage />
          </>
        )}
        {Open === "insight" && (
          <>
            <SideMenu onOpen={handleOpen} />
            <InsightPage />
          </>
        )}
        {Open === "mppage" && (
          <>
            <SideMenu onOpen={handleOpen} setOpen={setOpen} />
            <MpPage />
          </>
        )}
        {/* {isInsightOpen && (
          <>
            <SideMenu />
            <InsightPage />
          </>
        )}
        {isMpOpen && (
          <>
            <SideMenu />
            <MpPage />
          </> */}
        {/* )} */}
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
        <img className={styles.asm_list_img} alt="sm_list" src={home_img} />
        <button className={styles.asml_button} onClick={() => onOpen("home")}>
          Home
        </button>
      </li>
      <li className={styles.list_element}>
        <img className={styles.sm_list_img} alt="sm_list" src={insight_img} />
        <button className={styles.sml_button} onClick={() => onOpen("insight")}>
          Insights
        </button>
      </li>
      <li className={styles.list_element}>
        <img
          className={styles.sm_list_img}
          alt="sm_list"
          src={marketplace_img}
        />
        <button className={styles.sml_button} onClick={() => onOpen("mppage")}>
          Marketplace
        </button>
      </li>
    </>
  );
}

function HomePage() {
  return (
    <>
      <div className={styles.main_right}>
        <ProfileBar />
        <div className={styles.tp_graph}>
          <NonGraphSec />
          <div className={styles.graph_section}>
            <div className={styles.bar_chart_container}>
              <div className={styles.date_month}>
                <ul>
                  <li>July 2023</li>
                </ul>
              </div>
              <div className={styles.bfilters}>
                <span>🟣 Income VS Expenses</span>
                <select>
                  <option>Last 3 days</option>
                  <option>Last 7 days</option>
                  <option>Last 14 days</option>
                </select>
              </div>
              <div className={styles.bar_graph}>
                <Example />
              </div>
            </div>
            <div className={styles.balance_limit}>
              <h1>Balance</h1>
              <h1>50,000$</h1>
              <div className={styles.bl_ie1}>
                <span>Income</span>
                <span>30000$</span>
              </div>
              <div className={styles.bl_ie2}>
                <span>Expenses</span>
                <span>40000$</span>
              </div>
              <div className={styles.Spending_Limit}>
                <div className={styles.sl_title}>
                  <h2>Spending Limit</h2>
                </div>
                <div className={styles.progress_div}>
                  <ProgressBar bgcolor="#ae94ee" progress="80" height={30} />
                  <button className={styles.spending_limit_button}>Edit</button>
                </div>
                <h5>Monthly Transaction Limit</h5>
                <h3>
                  <span className={styles.bl}>20000 </span>
                  of 33333
                </h3>
                <h4>❗You have almost reached your Spending limit</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileBar(params) {
  return (
    <div className={styles.profile_bar}>
      <h1 className={styles.profile_bar_h1}>Hello Bheru👋🏻</h1>
      {/* <h6 className={styles.profile_bar_h1}>m</h6> */}
      <div className={styles.profile_page_container}>
        <button>
          <img
            className={styles.profile_photo}
            alt="profile"
            src={profile_img}
          />
        </button>
      </div>
    </div>
  );
}

function NonGraphSec(params) {
  return (
    <div className={styles.non_graph_section}>
      <TransactionContainer />
      <PrioritiesContainer />
    </div>
  );
}

function TransactionContainer(params) {
  return (
    <>
      <div className={styles.transaction_container}>
        <div className={styles.transaction_heading}>
          <ul>
            <li>Transactions</li>
          </ul>
        </div>
        <div className={styles.filters}>
          <select className={styles.select_btn}>
            <option>Today</option>
            <option>yesterday</option>
            <option>This week</option>
          </select>
          <select className={styles.select_btn}>
            <option>Filters</option>
            <option>Grocery</option>
            <option>Rent</option>
            <option>Medicines</option>
          </select>
        </div>
        <TransactionList />
        <div className={styles.transaction_buttons}>
          <button className={styles.tbtn_1}>view more</button>
          <button className={styles.tbtn_2}>+</button>
        </div>
      </div>
    </>
  );
}

function TransactionList(params) {
  return (
    <>
      <div className={styles.transaction_list}>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Salary</span>
          <span className={styles.tl_price}>+45000</span>
        </li>
        <li>
          <img className={styles.pup_img} src={outgoing_img} alt="in_out" />
          <span className={styles.tl_heading}>Rent</span>
          <span className={styles.tl_price}>-400</span>
        </li>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Pocket Money</span>
          <span className={styles.tl_price}>+100</span>
        </li>
        <li>
          <img className={styles.pup_img} src={outgoing_img} alt="in_out" />
          <span className={styles.tl_heading}>Bills</span>
          <span className={styles.tl_price}>-1400</span>
        </li>

        <li>
          <img className={styles.pup_img} src={outgoing_img} alt="in_out" />
          <span className={styles.tl_heading}>Grocery</span>
          <span className={styles.tl_price}>-400</span>
        </li>
      </div>
    </>
  );
}

function ITransactionContainer(params) {
  return (
    <>
      <div className={styles.itransaction_container}>
        <div className={styles.transaction_heading}>
          <ul>
            <li>Transaction History</li>
          </ul>
        </div>
        <>
          <div className={styles.th_day}>
            <h3>Today</h3>
          </div>
          <div className={styles.transaction_hdiv}>
            <ITransactionList />
          </div>
          <div className={styles.th_day}>
            <h3>Today</h3>
          </div>
          <div className={styles.transaction_hdiv}>
            <ITransactionList />
          </div>
        </>

        <div className={styles.transaction_buttons}>
          {/* <button className="tbtn_1">view more</button> */}
          <button className={styles.itbtn_2}>+</button>
        </div>
      </div>
    </>
  );
}

function ITransactionList(params) {
  return (
    <>
      <div className={styles.itransaction_list}>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Salary</span>
          <span className={styles.tl_price}>+45000</span>
        </li>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Rent</span>
          <span className={styles.tl_price}>-400</span>
        </li>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Pocket Money</span>
          <span className={styles.tl_price}>+100</span>
        </li>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Bills</span>
          <span className={styles.tl_price}>-1400</span>
        </li>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Grocery</span>
          <span className={styles.tl_price}>-400</span>
        </li>
        <li>
          <img className={styles.pup_img} src={incoming_img} alt="in_out" />
          <span className={styles.tl_heading}>Grocery</span>
          <span className={styles.tl_price}>-400</span>
        </li>
      </div>
    </>
  );
}

function PrioritiesContainer(params) {
  return (
    <>
      <div className={styles.priorities_container}>
        <div className={styles.priorities_heading}>
          <ul>
            <li>Priorities</li>
          </ul>
        </div>
        <PrioritiesList />
        <div className={styles.transaction_buttons}>
          <button className={styles.tbtn_1}>view more</button>
          <button className={styles.tbtn_2}>+</button>
        </div>
      </div>
    </>
  );
}

function PrioritiesList(params) {
  return (
    <>
      <div className={styles.priorities_list}>
        <li>
          <span className={styles.pl_mark}>🟣</span>
          <span className={styles.pl_title}> headphones</span>

          <div className={styles.pl_right}>
            <span className={styles.pl_price}>1400</span>
            <button className={styles.pl_btn}>✅</button>
            <button className={styles.pl_btn}>❌</button>
            <button className={styles.pl_btn}>⬆️</button>
            <button className={styles.pl_btn}>⬇️</button>
          </div>
        </li>
        <li>
          <span className={styles.pl_mark}>🟣</span>
          <span className={styles.pl_title}> headphones</span>

          <div className={styles.pl_right}>
            <span className={styles.pl_price}>1400</span>
            <button className={styles.pl_btn}>✅</button>
            <button className={styles.pl_btn}>❌</button>
            <button className={styles.pl_btn}>⬆️</button>
            <button className={styles.pl_btn}>⬇️</button>
          </div>
        </li>
        <li>
          <span className={styles.pl_mark}>🟣</span>
          <span className={styles.pl_title}> headphones</span>

          <div className={styles.pl_right}>
            <span className={styles.pl_price}>1400</span>
            <button className={styles.pl_btn}>✅</button>
            <button className={styles.pl_btn}>❌</button>
            <button className={styles.pl_btn}>⬆️</button>
            <button className={styles.pl_btn}>⬇️</button>
          </div>
        </li>
      </div>
    </>
  );
}

function InsightPage(params) {
  return (
    <>
      <div className={styles.insight_right}>
        <div className={styles.insight_right_l}>
          <div className={styles.idate_month}>
            <ul>
              <li>July 2023</li>
            </ul>
          </div>
          <h1>Balance</h1>
          <h1>50,000$</h1>
          <div className={styles.ibl_ie1}>
            <span>Income</span>
            <span>30000$</span>
          </div>
          <div className={styles.ibl_ie2}>
            <span>Expenses</span>
            <span>40000$</span>
          </div>
          <div className={styles.ibfilters}>
            <span>🟣 Income VS Expenses</span>
            <select>
              <option>Last 3 days</option>
              <option>Last 7 days</option>
              <option>Last 14 days</option>
            </select>
          </div>
          <div className={styles.ibar_graph}>
            <BBarChart />
          </div>
          <div className={styles.iSpending_Limit}>
            <div className={styles.isl_title}>
              <h2>Spending Limit</h2>
            </div>
            <div className={styles.progress_div}>
              <ProgressBar bgcolor="#ae94ee" progress="80" height={30} />
              <button className={styles.ispending_limit_button}>Edit</button>
            </div>
            <h5>Monthly Transaction Limit</h5>
            <h3>
              <span className={styles.ibl}>20000 </span>
              of 33333
            </h3>
            <h4>❗You have almost reached your Spending limit</h4>
          </div>
          <PrioritiesContainer />
        </div>
        <div className={styles.insight_right_r}>
          <div className={styles.pichart_container}>
            <Example1 />
            <div className={styles.pc_stats}>
              <h1>Burn</h1>
              <div className={styles.pc_stats_div}>
                <span>33%</span>
                <span>grocery</span>
              </div>
              <div className={styles.pc_stats_div}>
                <span>17%</span>
                <span>Electronics</span>
              </div>
              <div className={styles.pc_stats_div}>
                <span>25%</span>
                <span>Sports</span>
              </div>
              <div className={styles.pc_stats_div}>
                <span>25%</span>
                <span>Fashion</span>
              </div>
            </div>
          </div>
          <ITransactionContainer />
          <div className={styles.ibar_graph}>
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}

function MpPage(params) {
  return (
    <>
      <div className={styles.mp_right}>
        <div className={styles.mp_heading}>Best product For You</div>
        <div className={styles.sbf}>
          <div className={styles.sb_div}>
            <span className={styles.sb_container}>🔎</span>
            <div className={styles.input_div}>
              <input type="text" placeholder="Search Your Product" />
            </div>
          </div>
          <div className={styles.mp_fbtn}>
            <select className={styles.select_btn}>
              <option>Filters </option>
              <option>Today</option>
              <option>yesterday</option>
              <option>This week</option>
            </select>
          </div>
        </div>
        <div className={styles.categories_div}>
          <span>Categories</span>
          <ul>
            <li>
              <button>Electronics</button>
            </li>
            <li>
              <button>Fashion</button>
            </li>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Stationary</button>
            </li>
            <li>
              <button>Sports</button>
            </li>
            <li>
              <button>Personal Care</button>
            </li>
            <li>
              <button>Music</button>
            </li>
          </ul>
        </div>
        <div className={styles.product_container}>
          <div className={styles.p_card}>
            <div className={styles.p_img}>
              <img alt="p_image" src={product_img1} />
            </div>
            <h3 className={styles.p_heading}>MI 10000maH Power Bank</h3>
            <h4>this powerbanks is best in the market</h4>
            <div className={styles.p_sites}>
              <div>
                <img alt="flipkart" src={flipkart_img} />
                <span>1200</span>
              </div>
              <div>
                <img alt="flipkart" src={amazon_img} />
                <span>1500</span>
              </div>
              <div>
                <img alt="flipkart" src={shop_img} />
                <span>1000</span>
              </div>
            </div>
            <button>Add to cart</button>
          </div>
          <div className={styles.p_card}>
            <div className={styles.p_img}>
              <img alt="p_image" src={product_img1} />
            </div>
            <h3 className={styles.p_heading}>MI 10000maH Power Bank</h3>
            <h4>this powerbanks is best in the market</h4>
            <div className={styles.p_sites}>
              <div>
                <img alt="flipkart" src={flipkart_img} />
                <span>1200</span>
              </div>
              <div>
                <img alt="flipkart" src={amazon_img} />
                <span>1500</span>
              </div>
              <div>
                <img alt="flipkart" src={shop_img} />
                <span>1000</span>
              </div>
            </div>
            <button>Add to cart</button>
          </div>
          <div className={styles.p_card}>
            <div className={styles.p_img}>
              <img alt="p_image" src={product_img1} />
            </div>
            <h3 className={styles.p_heading}>MI 10000maH Power Bank</h3>
            <h4>this powerbanks is best in the market</h4>
            <div className={styles.p_sites}>
              <div>
                <img alt="flipkart" src={flipkart_img} />
                <span>1200</span>
              </div>
              <div>
                <img alt="flipkart" src={amazon_img} />
                <span>1500</span>
              </div>
              <div>
                <img alt="flipkart" src={shop_img} />
                <span>1000</span>
              </div>
            </div>
            <button>Add to cart</button>
          </div>
          <div className={styles.p_card}>
            <div className={styles.p_img}>
              <img alt="p_image" src={product_img1} />
            </div>
            <h3 className={styles.p_heading}>MI 10000maH Power Bank</h3>
            <h4>this powerbanks is best in the market</h4>
            <div className={styles.p_sites}>
              <div>
                <img alt="flipkart" src={flipkart_img} />
                <span>1200</span>
              </div>
              <div>
                <img alt="flipkart" src={amazon_img} />
                <span>1500</span>
              </div>
              <div>
                <img alt="flipkart" src={shop_img} />
                <span>1000</span>
              </div>
            </div>
            <button>Add to cart</button>
          </div>
          <div className={styles.p_card}>
            <div className={styles.p_img}>
              <img alt="p_image" src={product_img1} />
            </div>
            <h3 className={styles.p_heading}>MI 10000maH Power Bank</h3>
            <h4>this powerbanks is best in the market</h4>
            <div className={styles.p_sites}>
              <div>
                <img alt="flipkart" src={flipkart_img} />
                <span>1200</span>
              </div>
              <div>
                <img alt="flipkart" src={amazon_img} />
                <span>1500</span>
              </div>
              <div>
                <img alt="flipkart" src={shop_img} />
                <span>1000</span>
              </div>
            </div>
            <button>Add to cart</button>
          </div>
          <div className={styles.p_card}>
            <div className={styles.p_img}>
              <img alt="p_image" src={product_img1} />
            </div>
            <h3 className={styles.p_heading}>MI 10000maH Power Bank</h3>
            <h4>this powerbanks is best in the market</h4>
            <div className={styles.p_sites}>
              <div>
                <img alt="flipkart" src={flipkart_img} />
                <span>1200</span>
              </div>
              <div>
                <img alt="flipkart" src={amazon_img} />
                <span>1500</span>
              </div>
              <div>
                <img alt="flipkart" src={shop_img} />
                <span>1000</span>
              </div>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
