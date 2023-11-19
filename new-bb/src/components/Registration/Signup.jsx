import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./Login.css"; // Add your CSS styling to this file
import welcomeImage from "../../resources/images/lsMainImg.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div style={{ display: "flex", backgroundColor: "#DCD1F3", width:"auto", height:"100%" }}>
      {/* leftBox */}
      <Box className="leftBox" sx={{ width: "55%", backgroundColor: "#D7C7FF", display:{xs:"none", sm:"block"}}}>
        {/* heading */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "4rem", marginBottom: "1rem" }}
        >
          <span style={{ fontWeight: "bold", color: "#410CB2" }}>
            Keep Saving
          </span>
          <br />
          <Typography
            variant="h7"
            sx={{ color: "#F45A29", fontWeight: "bold" }}
          >
            Keep Growing
          </Typography>
        </Typography>
        {/* image */}
        <Box
          component="img"
          className="welcomeImage"
          alt="Welcome Buddy"
          src={welcomeImage}
        ></Box>
      </Box>
      {/* rightBox */}
      <Box className="rightBox" sx={{ margin: "auto" }}>
        <SignupForm />
      </Box>
    </div>
  );
}

export default Signup;
