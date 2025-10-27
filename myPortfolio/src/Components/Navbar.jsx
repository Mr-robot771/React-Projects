import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar flex items-center justify-between mx-10 my-8 text-[20px]">
        <img src="#" alt="" />
        <ul className="nav-menu flex items-center gap-20">
          <li>Home</li>
          <li>About me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="nav-connect bg-linear-[267deg,#DA7C25_0.36%,#B923E1_102.06%] px-4 py-4 rounded-full text-[18px] cursor-pointer transition delay-150 duration-100 ease-out hover:-translate-y-1 hover:scale-105 font-bold ">
          Connect With Me
        </div>
      </div>
    </>
  );
}

export default Navbar;
