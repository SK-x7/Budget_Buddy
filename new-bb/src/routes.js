// import PageLayout from "./components/PageLayout";
import Login from "./components/Registration/Login";
import Signup from "./components/Registration/Signup";
import LandingPage from "./components/landingpage/LandingPage";
export const route = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/user-login",
    element: <Login />,
  },
  {
    path: "/create-user-account",
    element: <Signup />,
  },
];
