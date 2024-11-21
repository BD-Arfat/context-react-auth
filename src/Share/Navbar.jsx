import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProbider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { createUser } = useContext(AuthContext);
  // console.log(name);

  const links = (
    <>
      <li className="text-white text-lg px-4 py-2 hover:bg-pink-600 md:hover:bg-transparent">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-white text-lg px-4 py-2 hover:bg-pink-600 md:hover:bg-transparent">
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li className="text-white text-lg px-4 py-2 hover:bg-pink-600 md:hover:bg-transparent">
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      <li className="text-white text-lg px-4 py-2 hover:bg-pink-600 md:hover:bg-transparent">
        <NavLink to={"/register"}>{createUser.email}</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-pink-500">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white text-xl font-bold">My Website</div>

          {/* Hamburger Menu */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </div>

          {/* Links */}
          <ul
            className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-pink-500 md:w-auto md:top-auto md:left-auto md:bg-transparent ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
