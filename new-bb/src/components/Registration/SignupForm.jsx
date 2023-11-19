import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Box,
  Typography,
} from "@mui/material";
import logo from "../../resources/images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import welcomeImage from "../../resources/images/lsMainImg.png";

const SignupForm = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{ width: 200, height: "auto", margin: "" }}
          alt="Logo"
          src={logo}
        />
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#4612B4" }}>
          Welcome Back
        </Typography>
      </Box>
      <Box style={{ display: "flex" }}>
        <hr />
        Sign Up With
        <hr />
      </Box>
      <Box
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "black",
            backgroundColor: "white",
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <FacebookIcon sx={{ fontSize: "2rem" }} />
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            backgroundColor: "white",
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <GoogleIcon sx={{ fontSize: "2rem" }} />
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            backgroundColor: "white",
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <TwitterIcon sx={{ fontSize: "2rem" }} />
        </Button>
      </Box>
      <Box style={{ display: "flex" }}>
        <hr />
        OR
        <hr />
      </Box>
      <Formik
        initialValues={{
          username: "",
          password: "",
          agreeToTerms: false,
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Username/Email is required"),
          password: Yup.string().required("Password is required"),
          agreeToTerms: Yup.bool().oneOf(
            [true],
            "You must agree to the Terms & Conditions"
          ),
        })}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        <Form>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              required
              type="email"
              id="outlined-required"
              label="Email"
              fullWidth
              sx={{
                backgroundColor: "whitesmoke",
                borderRadius: "15px",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
              }}
              // helperText={<ErrorMessage name="username" />}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              required
              type="email"
              id="outlined-required"
              label="@username"
              fullWidth
              sx={{
                backgroundColor: "whitesmoke",
                borderRadius: "15px",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
              }}
              // helperText={<ErrorMessage name="username" />}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <TextField
              required
              type="password"
              id="outlined-required"
              label="Password"
              fullWidth
              sx={{
                backgroundColor: "whitesmoke",
                borderRadius: "15px",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
              }}
              // helperText={<ErrorMessage name="password" />}
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  color="primary" // You can change the color to suit your design
                />
              }
              label={
                <div>
                  I agree to all <Link href="/terms-and-conditions">Terms & Privacy Policies</Link>
                </div>
              }
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#4612B4" }}
              fullWidth
            >
              Sign In
            </Button>
          </div>
        </Form>
      </Formik>
      <Box style={{ display: "flex" }}>
        <hr />
        OR
        <hr />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="accCreate">Already have an Account Yet?</div>
        <div>
          <Link href="/user-login">Login</Link>
        </div>
      </Box>
      <Box
        component="img"
        className="welcomeImage"
        alt="Welcome Buddy"
        src={welcomeImage}
        sx={{ display: { xs: "block", sm: "none" } }}
      ></Box>
    </div>
  );
};

export default SignupForm;
