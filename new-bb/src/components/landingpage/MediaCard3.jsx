import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ourMission from "../../resources/images/OurMissionImg.png";
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

const MediaCard3 = () => {
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
            At BudgetBuddy, our mission is to empower financial confidence and
            clarity through easy-to-use money management tools. Our intelligent,
            personalized platform provides insights and guidance so individuals
            can understand spending, take control of finances, reach goals, and
            secure their monetary future. We aim to equip people with everything
            required to master their money.
          </Typography>
        </Container>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          {" "}
          <img
            src={ourMission}
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

export default MediaCard3;
