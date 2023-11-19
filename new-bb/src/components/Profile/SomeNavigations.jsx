import { Box, Button, Typography } from "@mui/material";
import React from "react";
import insightLogo from "../../resources/images/Insights.svg";
import bookLogo from "../../resources/images/Trackingnew.svg";
import settingIcon from "../../resources/images/seting.svg";
import logoutIcon from "../../resources/images/logout.svg";

export default function SomeNavigations() {
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

  return (
    <Box sx={containerStyle}>
      {[
        { image: bookLogo, title: "Transaction History" },
        { image: insightLogo, title: "Insights" },
        { image: settingIcon, title: "Settings" },
        { image: logoutIcon, title: "Logout" },
      ].map((item, index) => (
        <Button key={index} sx={itemStyle} marginTop="3%">
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={imageStyle}
          />
          <Box>
            <Typography variant="h6">{item.title}</Typography>
          </Box>
        </Button>
      ))}
    </Box>
  );
}
