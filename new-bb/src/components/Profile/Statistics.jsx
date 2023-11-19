import { Box, Button, Typography } from "@mui/material";
import React from "react";
import incomeLogo from "../../resources/images/Income.svg";
import expenseLogo from "../../resources/images/Expense.svg";
import equalsLogo from "../../resources/images/bal_icn.svg";

export default function Statistics() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "2%",
    backgroundColor: "#F0F8FF",
    width: "90%",
    borderRadius: "20px",
    height: "auto",
    paddingBottom: "3%",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E5B3F9",
    border: "1px solid black",
    borderRadius: "20px",
    gap: "2%",
    padding: "2% 3%",
  };

  const imageStyle = {
    width: "20%",
    height: "auto",
    marginRight: "5%",
  };

  const buttonStyle = {
    borderRadius: "18px",
    backgroundColor: "#CF95FC",
    border: "1px solid black",
    fontSize: "0.9rem",
    padding: "5% 10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    width: "100%",
  };

  return (
    <Box sx={containerStyle}>
      {[
        { image: equalsLogo, title: "Balance" },
        { image: incomeLogo, title: "Average Income" },
        { image: expenseLogo, title: "Average Expense" },
      ].map((item, index) => (
        <Box key={index} sx={itemStyle} marginTop="3%">
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={imageStyle}
          />
          <Box>
            <Typography variant="h6">{item.title}</Typography>
          </Box>
        </Box>
      ))}

      <Box sx={{ margin: "5% 5% 3% 5%" }}>
        <Button variant="contained" sx={buttonStyle}>
          View More
        </Button>
      </Box>
    </Box>
  );
}
