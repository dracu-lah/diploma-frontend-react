import React from "react";
import ResultData from "../Components/ResultData";
import MainLayout from "../Layouts/MainLayout";
export default function Results() {
  return (
    <MainLayout>
      <div className="bg-white w-full p-2 self-start">
      <h1 className="">Student Results</h1>
      <ResultData />
      </div>
    </MainLayout>
  );
}
