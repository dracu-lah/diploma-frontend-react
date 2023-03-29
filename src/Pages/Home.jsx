import React from "react";
import MainLayout from "../Layouts/MainLayout";
import { read, utils } from "xlsx";

function App() {
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = JSON.stringify(utils.sheet_to_json(worksheet));

        console.log(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <MainLayout>
      {/* <div className="dummy__text">Home</div> */}
      <div>
        <form>
          <input
            type="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-300 file:text-black file:dark:bg-sky-900 file:dark:text-white hover:file:bg-slate-200"
            onChange={readUploadFile}
          />
        </form>
      </div>
    </MainLayout>
  );
}

export default App;
