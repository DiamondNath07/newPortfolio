import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { ReactComponent as TestSvgIcon } from "../assets/darkmodeicon.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between h-12 px-10   items-center bg-black">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3 justify-between items-center ">
        <ul className="flex justify-between gap-3 text-white">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/blogs">
            <li>Blogs</li>
          </Link>
          <li>
            <TestSvgIcon className="stroke-violet-900 hover:stroke-rose-700" />
          </li>
        </ul>
        <button>Resume</button>
      </div>
    </div>
  );
}
