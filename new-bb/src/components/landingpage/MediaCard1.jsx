import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import landingHero from "../../resources/images/landingHero.png";
import { Box } from "@mui/material";

const spanTextStyle = {
  fontWeight: "bold",
  color: "#410CB2",
};

const cardStyle = {
  maxWidth: "100vw",
  backgroundColor: "#D7C7FF",
  display: "flex",
  justifyContent: { xs: "center", lg: "space-between" },
  alignItems: "center",
  padding: "2rem",
};

const textStyle = {
  fontSize: "4rem",
  marginBottom: "1rem",
  "@media (max-width: 600px)": {
    fontSize: "2rem",
    textAlign: "center",
  },
};

const MediaCard1 = () => {
  return (
    <Card sx={{ display: { sm: "flex", flexDirection: "column" } }}>
      <CardContent sx={cardStyle}>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <img
            src={landingHero}
            alt="Hero"
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              display: "block",
              marginTop: "1rem",
            }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={textStyle}>
          <span style={spanTextStyle}>SAVE MORE</span>
          <br />
          <span style={spanTextStyle}>GROW MORE</span>
          <br />
          <span style={spanTextStyle}>WITH</span>
          <br />
          <span style={spanTextStyle}>BUDGET BUDDY</span>
          <br />
          <Typography sx={{ fontSize: "1.5rem" }}>
            Strategize your Financial Growth.
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard1;
