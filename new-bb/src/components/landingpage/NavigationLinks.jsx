import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const pages = [
  { routeTo: "/", linkName: "Home" },
  { routeTo: "/", linkName: "Features" },
  { routeTo: "/", linkName: "About us" },
  { routeTo: "/user-login", linkName: "Login/SignUp" },
];

function NavigationLinks({ handleCloseNavMenu }) {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page.linkName} // Use page.linkName as the key
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "black", display: "block" }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              textDecoration: "underline",
              color: page.linkName === "Login/SignUp" ? "#430EB2" : "black",
            }}
          >
            <Link to={page.routeTo}>{page.linkName}</Link>
          </Typography>
        </Button>
      ))}
    </>
  );
}

export default NavigationLinks;
