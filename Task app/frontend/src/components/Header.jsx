import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between mx-15 mt-5 bg-gray-300 p-5">
        <div>
          <Link to="/">Task Creator</Link>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link
              to="/login"
              className="flex justify-center items-center gap-2"
            >
              <FaSignInAlt /> Log in
            </Link>
          </li>
          <li>
            <Link
              to="register"
              className="flex justify-center items-center gap-2"
            >
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
