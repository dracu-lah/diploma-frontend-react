import React, { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  let register = true;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <MainLayout>
      {register ? (
        <div className="w-[60vh] h-[60vh] text-slate-500 dark:text-slate-400 p-6 shadow-lg bg-slate-100 dark:bg-sky-900 rounded-md">
          <h1 className="text-center text-2xl">Register</h1>
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
              <label>Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="input"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col">
              <label>Re-Password:</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off"
                className="input"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => {
                  if (password !== confirmPassword) {
                    toast("Passwords does not match!");
                  }
                }}
                type="submit"
                className="bg-slate-900 text-slate-100 rounded p-2"
              >
                Register
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      ) : (
        <div className="dummy__text">No Registration ;]</div>
      )}
    </MainLayout>
  );
}
