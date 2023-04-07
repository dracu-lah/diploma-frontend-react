import React, { useState } from "react";
import { read, utils } from "xlsx";

import axios from "axios";

const UploadCSV = () => {
  const [result, setResult] = useState({});
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);

        organizeData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  function organizeData(jsonData) {
    const organizedData = [];

    jsonData.forEach((data) => {
      const newData = organizedData.find(
        (item) => item.registerNumber === data["register number"]
      );

      if (newData) {
        newData.courses.push({
          course: data["course"],
          examType: data["exam type"],
          attendance: data["attendance"],
          withheld: data["withheld"],
          internalMark: data["internal mark"],
          grade: data["grade"],
          result: data["result"],
        });
      } else {
        organizedData.push({
          registerNumber: data["register number"],
          studentName: data["student name"],
          branch: data["branch"],
          semester: data["semester"],
          courses: [
            {
              course: data["course"],
              examType: data["exam type"],
              attendance: data["attendance"],
              withheld: data["withheld"],
              internalMark: data["internal mark"],
              grade: data["grade"],
              result: data["result"],
            },
          ],
        });
      }
    });
    setResult(organizedData);
  }

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
    </form>
  );
};

export default UploadCSV;
