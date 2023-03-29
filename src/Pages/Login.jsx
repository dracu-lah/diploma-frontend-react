import React from "react";
import MainLayout from "../Layouts/MainLayout";

export default function Login() {
  let login = true;
  return (
    <MainLayout>
      {login ? (
        <div className="w-[60vh]  text-slate-500 dark:text-slate-400 p-6 shadow-lg bg-slate-100 dark:bg-sky-900 rounded-md">
          <h1 className="text-center text-2xl">Login</h1>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex flex-col items-center py-5 gap-4"
          >
            <div className=" flex flex-col gap-2 mb-5">
              <label className="mt-2">Select user type:</label>
              <select className="input text-slate-500" name="user-type">
                <option value="student">Student</option>
                <option value="teacher">Class Tutor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Username</label>
              <input
                autoComplete="off"
                className="input"
                type="text"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                autoComplete="off"
                className="input"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-slate-900 text-slate-100 rounded p-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="dummy__text">No Login ;]</div>
      )}
    </MainLayout>
  );
}
