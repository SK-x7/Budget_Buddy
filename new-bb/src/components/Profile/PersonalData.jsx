import { Box, Button } from "@mui/material";
import profilePicture from "../../resources/images/profile_img.png";
import React from "react";
import Typography from "@mui/material/Typography";

export default function PersonalData() {
  //   const classes = useStyles();
  return (
    <div>
      <Box
        component="img"
        src={profilePicture}
        alt="Profile Pic"
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "350px",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />

      <Box
        sx={{
          backgroundColor: "#E5B3F9",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          borderRadius: "18px",
          padding:"4%"
        }}
      >
        <span>
          <Typography>USERNAME</Typography>
          <Typography>username@xyz.com</Typography>
          <Typography>123-456-7890</Typography>
        </span>
        <Button
          variant="contained"
          sx={{
            borderRadius: "18px",
            backgroundColor: "#CF95FC",
            border: "1px solid black",
            fontSize: "0.9rem",
            height: "fit-content",
            width: "max-content",
            color: "black",
          }}
        >
          Edit
        </Button>
      </Box>
    </div>
  );
}
