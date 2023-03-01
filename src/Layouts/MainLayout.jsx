import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { InfinitySpin } from "react-loader-spinner";
import Footer from "../Components/Footer";

function MainLayout({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  return (
    <>

      {loading ? (
        <div className="flex justify-center h-screen py-[40vh] dark:bg-slate-900">
          <InfinitySpin width="200" color="#3A98B9" visible={loading} />
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
