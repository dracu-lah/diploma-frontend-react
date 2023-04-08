import React, { useState } from "react";
import { read, utils } from "xlsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { organizeData } from "../utils/functions/organizeData";

const UploadCSV = () => {
  const [result, setResult] = useState({});
  console.log(result);
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const xlsx_json = utils.sheet_to_json(worksheet);
        const str = JSON.stringify(xlsx_json);

        let isFound = str.includes("register number");

        if (isFound) {
          const organizedData = organizeData(xlsx_json);
          setResult(organizedData);
          toast("Correct file is uploaded");
        } else {
          toast("Wrong file or Wrong file format");
          return;
        }
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <form
      className="flex gap-x-10"
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          await axios.post("http://localhost:3001/api/results", { result });
          console.log("results sent to server");
        } catch (error) {
          console.error(error);
          toast("Data not send to server");
        }
      }}
    >
      <input
        type="file"
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-300 file:text-black file:dark:bg-sky-900 file:dark:text-white hover:file:bg-slate-200"
        onChange={readUploadFile}
      />
      <button
        type="submit"
        className="dark:text-white bg-slate-300 
        text-black hover:bg-slate-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-900 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-blue-800"
      >
        POST
      </button>
      <ToastContainer />
    </form>
  );
};

export default UploadCSV;
