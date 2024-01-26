import React from "react";
import { LogoCat } from "../cat";

function Navbar() {
  return (
    <ul className="text-white pl-8 pt-8 text-xl justify-start flex">
      <li className="flex">
        <LogoCat size={55} />
      </li>
    </ul>
  );
}

export default Navbar;
