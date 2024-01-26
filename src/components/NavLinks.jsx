import { Link } from "react-router-dom";
import { ReactComponent as TestSvgIcon } from "../assets/darkmodeicon.svg";
import { ReactComponent as HamburgerIcon } from "../assets/harmburger.svg";
import { ReactComponent as CloseHarmbourger } from "../assets/closeHarmbourger.svg";

import { useState } from "react";

export default function NavLinks({ text, setText }) {
  const [isOpen, setIsOpen] = useState(true);

  const handletoggle = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="flex gap-6 justify-between items-center  ">
      <ul className="flex justify-between items-center gap-6 text-teal-200 font-medium">
        <Link to="/">
          <li className="hidden sm:inline font-bold cursor-pointer hover:text-teal-500 ">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className=" hidden sm:inline cursor-pointer hover:text-teal-500 ">
            About
          </li>
        </Link>
        <Link to="/contact">
          <li className=" hidden sm:inline cursor-pointer hover:text-teal-500 ">
            Contact
          </li>
        </Link>
        <Link to="/blogs">
          <li className=" hidden sm:inline cursor-pointer hover:text-teal-500 ">
            Blogs
          </li>
        </Link>
        <li>
          <TestSvgIcon className="hidden sm:inline   align-text-bottom cursor-pointer  " />
        </li>
        <li onClick={handletoggle}>
          {isOpen ? (
            <HamburgerIcon className="sm:hidden" />
          ) : (
            <CloseHarmbourger className="sm:hidden" />
          )}
        </li>
      </ul>
      <Link
        target="true"
        to={
          "https://drive.google.com/file/d/1kTN72vR8qUsoVceI1WrUtk9eqM6KpPJV/view?usp=sharing"
        }
      >
        <button
          onMouseOver={() => setText("Download")}
          onMouseLeave={() => setText("Resume")}
          className="hidden sm:inline text-white py-1 border rounded-md text-sm px-2 w-24 font-medium"
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
