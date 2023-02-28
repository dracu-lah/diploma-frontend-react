import React, { Children } from "react";
import Navbar from "../Components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="h-screen dark:bg-slate-800 ">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
