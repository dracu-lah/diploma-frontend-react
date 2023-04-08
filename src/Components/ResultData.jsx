import React, { useState } from "react";
import TableData from "./TableData";

const ResultData = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-box"
      >
        <div
          className={`flex items-center justify-between collapse-title text-xl font-medium ${
            collapse && " collapse-close"
          }`}
        >
          <p className="text-xs flex gap-1">
            <span className="bg-blue-300 p-2 rounded-lg ">Asma Pa</span>
            <span className="bg-blue-300 p-2 rounded-lg">2019234</span>
            <span className="bg-blue-300 p-2 rounded-lg">S6</span>
            <span className="bg-green-300 p-2 rounded-lg">CGPA : 10</span>
          </p>
          {collapse === true && (
            <button
              onClick={() => {
                setCollapse(true);
              }}
              className="bg-slate-300  rounded-full  p-2 text-xs"
            >
              shrink
            </button>
          )}
        </div>
        <div className="collapse-content">
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default ResultData;
