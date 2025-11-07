import React from "react";
import { GrNotes } from "react-icons/gr";
import { MdAddComment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { MdLogout } from "react-icons/md";
import api from "../services/axiosInstance";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-note");
  };

  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    delete api.defaults.headers.common["Authorization"];
    toast.success("Log out successful!");
    navigate("/?form=login", { replace: true });
  };

  return (
    <div>
      <nav className="flex justify-between py-4 px-2 lg:px-10 border-b border-b-gray-300 shadow-sm  ">
        <div className="flex justify-center items-center gap-2 font-medium text-2xl tracking-tighter overflow-hidden">
          <GrNotes size={25} />
          <h1>React Notes Explorer</h1>
        </div>
        <div className="flex justify-center items gap-3">
          <div className="flex justify-center gap-2 items-center">
            <div className="hidden lg:flex font-semibold text-md tracking-tighter overflow-hidden border px-4 py-2 rounded-md bg-indigo-500 text-white cursor-pointer hover:scale-105 transition-all ease-in-out ">
              <button onClick={handleLogout}>Log out</button>
            </div>
            <div className="lg:hidden" onClick={handleLogout}>
              <MdLogout color="blue" />
            </div>
            <div className="hidden lg:flex lg:justify-center items-center gap-2 font-medium text-md tracking-tighter overflow-hidden border px-4 py-2 rounded-md bg-indigo-500 text-white cursor-pointer hover:scale-105 transition-all ease-in-out">
              <MdAddComment size={24} />
              <button className="cursor-pointer" onClick={handleClick}>
                Add Note
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <MdAddBox
              size={30}
              onClick={handleClick}
              color="blue"
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
