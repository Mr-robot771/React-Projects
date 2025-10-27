import React from "react";
import { GrNotes } from "react-icons/gr";
import { MdAddComment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-note");
  };

  return (
    <div>
      <nav className="flex justify-between py-4 px-10 border-b border-b-gray-300 shadow-sm  ">
        <div className="flex justify-center items-center gap-2 font-medium text-2xl tracking-tighter overflow-hidden">
          <GrNotes size={25} />
          <h1>React Notes Explorer</h1>
        </div>
        <div className="flex justify-center items-center gap-2 font-medium text-md tracking-tighter overflow-hidden border px-4 py-2 rounded-md bg-indigo-500 text-white cursor-pointer hover:scale-105 transition-all ease-in-out">
          <MdAddComment size={24} />
          <button className="cursor-pointer" 
          onClick={handleClick}>
            Add Note
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
