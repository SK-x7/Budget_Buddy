import * as React from "react";
import Box from "@mui/material/Box";
// import Signup from "./Registration/Signup";
import ProfilePage from "./Profile/ProfilePage";
import LandingPage from "./landingpage/LandingPage";
// import Login from "./Registration/Login";
export default function PageLayout() {
  return (
    <Box sx={{margin:0,padding:0,width:"100%",height:"100vh", backgroundColor:"grey"}}>
      {/* <LandingPage /> */}
      {/* <Login/> */}
      <ProfilePage/>
      {/* <Signup/> */}
    </Box>
  );
}
