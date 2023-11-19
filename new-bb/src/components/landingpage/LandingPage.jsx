import * as React from "react";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./ResponsiveAppBar";
import MediaCard1 from "./MediaCard1";
import Ending from "./Ending";
import MediaCard2 from "./MediaCard2";
import KeyFeatureCard from "./KeyFeatureCard";
import MediaCard3 from "./MediaCard3";

export default function LandingPage() {
  return (
    <Box sx={{ backgroundColor: "#D7C7FF" }}>
      <ResponsiveAppBar />
      <MediaCard1 />
      <hr
        style={{
          height: "4px",
          backgroundColor: "black", 
          maxWidth: "90vw",
          margin: "auto",
        }}
      />
      <MediaCard2 />
      <hr
        style={{
          height: "4px",
          backgroundColor: "black",
          maxWidth: "90vw",
          margin: "auto",
        }}
      />
      <KeyFeatureCard />
      <hr
        style={{
          height: "4px",
          backgroundColor: "black",
          maxWidth: "90vw",
          margin: "auto",
        }}
      />
      <MediaCard3 />
      <hr
        style={{
          height: "4px",
          backgroundColor: "black",
          maxWidth: "90vw",
          margin: "auto",
        }}
      />
      <Ending />
    </Box>
  );
}
