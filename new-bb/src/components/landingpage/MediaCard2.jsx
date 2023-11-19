import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import landingHero from "../../resources/images/Smfoo.png";
import { Box, Container } from "@mui/material";

const cardStyle = {
  maxWidth: "100%",
  backgroundColor: "#D7C7FF",
};

const contentStyle = {
  display: "flex",
  // flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const MediaCard2 = () => {
  return (
    <Card sx={cardStyle}>
      <CardContent sx={contentStyle}>
        <Container maxWidth="md">
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#4612B4",
              marginBottom: "0.3em",
            }}
          >
            What is Budget Buddy
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              "@media (max-width: 600px)": {
                fontSize: "1rem",
                textAlign: "center",
              },
            }}
          >
            BudgetBuddy is your intelligent personal finance ally that
            simplifies money management. Input your income and expenses to get
            automated insights, budget tracking, cost-cutting tools, and
            tailored savings goals that empower you to take control of your
            finances, gain confidence in your money decisions, and achieve
            financial security on your terms.
          </Typography>
        </Container>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          {" "}
          <img
            src={landingHero}
            alt="Hero"
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              marginBottom: "1rem",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MediaCard2;
