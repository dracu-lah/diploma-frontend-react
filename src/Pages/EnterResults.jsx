import React from "react";
import MainLayout from "../Layouts/MainLayout";

export default function EnterResults() {
  let enterResult = true;
  return (
    <MainLayout>
      {enterResult ? (
        <div className="w-[60vh] h-[60vh] text-slate-500 dark:text-slate-400 p-6 shadow-lg bg-slate-100 dark:bg-sky-900 rounded-md">
          <h1 className="text-center text-2xl">Enter Results</h1>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex flex-col items-center py-5 gap-4"
          >
            <div className="flex flex-col">
              <label>Student Name</label>
              <input
                autoComplete="off"
                className="input"
                type="text"
                name="student_name"
                placeholder="Enter student name"
              />
            </div>
            <div className="flex flex-col">
              <label>Roll No</label>
              <input
                autoComplete="off"
                className="input"
                type="text"
                name="student_rno"
                placeholder="Enter Student Roll no"
              />
            </div>
            <div className=" flex flex-col gap-2 mb-5">
              <label className="mt-2">Enter Batch</label>
              <select className="input text-slate-500" name="user-type">
                <option value="student">CT</option>
                <option value="teacher">CE</option>
                <option value="admin">EE</option>
              </select>
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-slate-900 text-slate-100 rounded p-2"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="dummy__text">No access ;]</div>
      )}
    </MainLayout>
  );
}
