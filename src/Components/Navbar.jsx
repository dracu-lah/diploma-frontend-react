import React from "react";
import book_logo from "/book.png";
import Switcher from "./Switcher";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" px-40 flex justify-between p-4 dark:bg-slate-700 bg-slate-100">
      <Link to="/">
        <div className="flex space-x-4 justify-between cursor-pointer">
          <img className="w-8 mt-[-3px]" src={book_logo} alt="book_logo" />
          <h2 className=" dark:text-slate-50 ">Student Management</h2>
        </div>
      </Link>
      <ul className="flex justify-evenly">
        <li className="mx-4  dark:text-slate-50 dark:hover:text-blue-500  hover:text-blue-500 cursor-pointer">
          Login
        </li>
        <li className="mx-4  dark:text-slate-50 dark:hover:text-blue-500  hover:text-blue-500 cursor-pointer">
          Register
        </li>
        <li className="mx-4  dark:text-slate-50 dark:hover:text-blue-500  hover:text-blue-500 cursor-pointer">
          <Link to="/results">View Results</Link>
        </li>
        <li className="mx-4  dark:text-slate-50 dark:hover:text-blue-500  hover:text-blue-500 cursor-pointer">
          Enter Results
        </li>

        <li className=" ">
          <Switcher />
        </li>
      </ul>
    </nav>
  );
}
