import React from "react";
import book_logo from "/book.png";
import Switcher from "./Switcher";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="md:px-20 p-3 text-xs md:text-md lg:px-40 flex flex-col gap-y-4 md:flex-row items-center md:justify-between py-2 md:p-4 dark:bg-sky-900 bg-slate-100">
      <Link to="/">
        <div className="flex space-x-4 justify-center items-center md:justify-between cursor-pointer">
          <img className="w-5 md:w-8 " src={book_logo} alt="book_logo" />
          <h2 className=" dark:text-slate-50 ">Student Management</h2>
        </div>
      </Link>
      <ul className="flex justify-p-3  items-center">
        <li className="link__text">
          <Link className="p-4" to="/">Home</Link>
        </li>
        <li className="link__text">
          <Link className="p-4" to="/login">Login</Link>
        </li>
        <li className="link__text">
          <Link className="p-4" to="/register">Register</Link>
        </li>
        <li className="link__text">
          <Link className="p-4" to="/results">View Results</Link>
        </li>
        <li className="link__text">
          <Link className="p-4" to="/enter_results">Enter Results</Link>
        </li>

        <li>
          <Switcher />
        </li>
      </ul>
    </nav>
  );
}
