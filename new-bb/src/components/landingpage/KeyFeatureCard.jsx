import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import insightsFeatureIcon from "../../resources/images/Insightsfeturenew.svg";
import targetIcon from "../../resources/images/Targetnew.svg";
import comparePriceIcon from "../../resources/images/Comparpricenew.svg";
import trackingIcon from "../../resources/images/Trackingnew.svg";
// Mock data for each Grid item
const gridItems = [
  {
    image: trackingIcon,
    text: "Easy to track and Manage your Income and Expenses",
  },
  {
    image: insightsFeatureIcon,
    text: "Automated Insights and Info for your Income and Expenses",
  },
  {
    image: targetIcon,
    text: "Set Monthly and Daily Limits",
  },
  {
    image: comparePriceIcon,
    text: "Compare Price of Item",
  },
];

const KeyFeatureCard = () => {
  return (
    <Container >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "rgb(65, 12, 178)",
          margin: "2.5rem auto 1.8rem auto",
          fontWeight: "bold",
        }}
        gutterBottom
      >
        Key Features Of Budget Buddy
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          "@media (max-width: 600px)": {
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          },
        }}
      >
        {gridItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                mixBlendMode: "multiply",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                "@media (max-width: 600px)": {
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  width: "70%",
                  height: "auto",
                },
              }}
            >
              <img
                src={item.image}
                alt={`Image ${index}`}
                style={{ maxWidth: "50%", height: "auto", width: "50%" }}
              />
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "black", fontWeight: "bold" }}
                gutterBottom
              >
                {item.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KeyFeatureCard;
