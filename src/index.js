import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import LandingPage from "./landing";
// import "./landing.module.css";
// import "./signup.module.css";
// import "./login.module.css";
// import "./index.module.css";
// import reportWebVitals from './reportWebVitals';
import LoginPage from "./loginPage";
import SignUP from "./SignUp";
import ProfilePage from "./profilePage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignUP />} />
      <Route exact path="/home" element={<App />} />

      <Route exact path="/profilepage" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
