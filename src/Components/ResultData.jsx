import React, { useState } from "react";
import TableData from "./TableData";

import { BsFillFileEarmarkExcelFill } from "react-icons/bs";

import { AiFillCloseCircle } from "react-icons/ai";

const ResultData = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="flex flex-col gap-1">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-box"
      >
        <div
          className={`flex items-center justify-between collapse-title text-xl font-medium`}
        >
          <p className="text-xs flex gap-1">
            <span className="bg-blue-300 p-2 rounded-lg ">Asma Pa</span>
            <span className="bg-blue-300 p-2 rounded-lg">2019234</span>
            <span className="bg-blue-300 p-2 rounded-lg">S6</span>
            <span className="bg-green-300 p-2 rounded-lg">CGPA : 10</span>
          </p>
          <div className=" flex justify-between items-center gap-2">
            <button className="p-2 bg-slate-300 rounded-lg">
              <BsFillFileEarmarkExcelFill className="text-green-500 " />
            </button>
          </div>
        </div>
        <div className="collapse-content">
          <TableData />
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-box"
      >
        <div
          className={`flex items-center justify-between collapse-title text-xl font-medium`}
        >
          <p className="text-xs flex gap-1">
            <span className="bg-blue-300 p-2 rounded-lg ">Asma Pa</span>
            <span className="bg-blue-300 p-2 rounded-lg">2019234</span>
            <span className="bg-blue-300 p-2 rounded-lg">S6</span>
            <span className="bg-green-300 p-2 rounded-lg">CGPA : 10</span>
          </p>
          <div className=" flex justify-between items-center gap-2">
            <button className="p-2 bg-slate-300 rounded-lg">
              <BsFillFileEarmarkExcelFill className="text-green-500 " />
            </button>
          </div>
        </div>
        <div className="collapse-content">
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default ResultData;