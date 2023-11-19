import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import jarImage from "../../resources/images/_04b1696b-ab89-451b-a875-54db0d40a7bc-removebg-preview.png";

const Ending = () => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        minwidth: "100vw",
        backgroundColor: "#D7C7FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <img
            src={jarImage}
            alt="happyJar"
            style={{ maxWidth: "100%", height: "auto", paddingRight: "2rem" }}
          />
        </Box>
        <Container maxWidth="md">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: "blueviolet",
              fontSize: "3.5rem",
              textAlign: "center",
            }}
          >
            <b>
              START SAVING <br /> TODAY WITH <br />
              <span style={{ color: "orangered" }}>BUDGET BUDDY</span>
            </b>
          </Typography>
          <CardActions
            sx={{
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Button
              size="large"
              sx={{
                backgroundColor: "#4612B4",
                color: "white",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "200px",
              }}
            >
              SIGNUP
            </Button>
            <Button
              size="large"
              sx={{
                backgroundColor: "#4612B4",
                color: "white",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "200px",
              }}
            >
              LOGIN
            </Button>
          </CardActions>
        </Container>
      </Box>
    </Card>
  );
};

export default Ending;
