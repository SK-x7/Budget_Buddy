import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./routes";
import "./App.css";

export default function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(route)}></RouterProvider>
    </>
  );
}
