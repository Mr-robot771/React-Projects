import React from "react";
import { IoIosSearch } from "react-icons/io";

const SeachBar = () => {
  return (
    <>
      {" "}
      <div className="border mx-5 my-5 pl-15 p-2 text-[1.2rem] rounded-lg border-gray-300 inset-shadow-sm relative">
        <IoIosSearch className="absolute left-4" size={28} style={{color:"gray"}}/>
        <input
          type="text"
          placeholder="Search notes..."
          className="focus:outline-0"
        />
      </div>
    </>
  );
};

export default SeachBar;
