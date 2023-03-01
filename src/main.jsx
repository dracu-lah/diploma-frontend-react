import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Results from "./Pages/Results";
import EnterResults from "./Pages/EnterResults";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "results",
    element: <Results />,
  },
  {
    path: "enter_results",
    element: <EnterResults />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
