import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Results from "./Pages/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"results",
    element:<Results/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
