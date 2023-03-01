import React from "react";
import MainLayout from "../Layouts/MainLayout";

export default function EnterResults() {
  let enterResult = false;
  return (
    <MainLayout>
      {enterResult ? (
        <div></div>
      ) : (
        <div className="dummy__text">No access ;]</div>
      )}
    </MainLayout>
  );
}
