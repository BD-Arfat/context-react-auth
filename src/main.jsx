import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layouts from "./Components/Layouts/Layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProbider from "./Provider/AuthProbider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProbider>
      <RouterProvider router={router} />
    </AuthProbider>
  </StrictMode>
);
