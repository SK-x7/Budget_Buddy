import React from "react";
import { Formik, Field, Form } from "formik";
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

const LoginForm = () => {
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
        Log In With
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
              label="Email/ @username"
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="keepLoggedIn"
                    color="primary"
                    // sx={{
                    //   borderRadius: "none",
                    //   boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
                    // }}
                  />
                }
                label="Keep me logged In"
              />
            </Box>
            <Box>
              <Link href="/forgot-password">Forgot Password</Link>
            </Box>
          </Box>
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
        <div className="accCreate">Don't have an Account Yet?</div>
        <div>
          <Link href="/create-user-account">Create an Account</Link>
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

export default LoginForm;
