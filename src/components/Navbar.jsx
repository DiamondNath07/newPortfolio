import React, { useState } from "react";
import Logo from "../components/Logo";

import NavLinks from "./NavLinks";

export default function Navbar() {
  const [text, setText] = useState("Resume");

  return (
    <div className="flex justify-between h-12 px-4 sm:px-10   items-center bg-black">
      <div>
        <Logo />
      </div>
      <NavLinks text = {text} setText = {setText} />
    </div>
  );
}

//onclick change hamburger menu to cross and show modal
//
