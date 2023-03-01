import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Watch } from "react-loader-spinner";
import Footer from "../Components/Footer";

function MainLayout({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  // console.log(loading);
  // console.log(theme);
  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen py-[40vh] dark:bg-slate-900">
          <Watch
            height="100"
            width="100"
            radius="48"
            color="#2F58CD"
            i
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={loading}
          />
        </div>
      ) : (
        <div className=" dark:bg-slate-900  min-h-screen flex flex-col mx-auto">
          <Navbar />
          <div className="flex-1 flex flex-wrap items-center justify-center">
            {children}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default MainLayout;
