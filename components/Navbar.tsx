"use client";
import NavHamburger from "./NavHamburger";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center">
      <div className="">
        <h3 className="text-teal-700 font-bold text-2xl ">Contacts</h3>
      </div>

      <NavHamburger />
    </nav>
  );
};

export default Navbar;
