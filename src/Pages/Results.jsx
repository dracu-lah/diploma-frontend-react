import React from "react";
import MainLayout from "../Layouts/MainLayout";
export default function Results() {
  let result = false;
  return (
    <MainLayout>
      {result ? <div></div> : <div className="dummy__text">No Results ;]</div>}
    </MainLayout>
  );
}
