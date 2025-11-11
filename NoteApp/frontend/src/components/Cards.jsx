import React from "react";
import api from "../services/axiosInstance.js";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

const Cards = ({
  id,
  title,
  description,
  category,
  fetchAllData,
  updatedAt,
}) => {
  const handleDelete = async (id) => {
    try {
      await api.delete(`/note/${id}`);
      fetchAllData();
    } catch (error) {
      console.log("deleting note failed", error);
    }
  };

  const timeAgo = formatDistanceToNow(new Date(updatedAt), { addSuffix: true });

  const navigate = useNavigate();

  return (
    <div className="my-5 mx-5 border border-gray-300 py-4 px-4 flex flex-col gap-5 rounded-2xl inset-shadow-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tighter ">{title}</h1>
        <div className="flex gap-4">
          {" "}
          <button className="bg-sky-500 px-2 text-white rounded-md cursor-pointer hover:bg-sky-500/80 active:bg-sky-500/80 lg:active:bg-sky-500 font-medium" onClick={()=>{navigate("/create-note",{state:{noteId:id,title,description,category}})}}>
            Edit
          </button>
          <button
            className="bg-red-500 px-2 text-white rounded-md cursor-pointer hover:bg-red-500/80 active:bg-red-500 font-medium"
            onClick={() => handleDelete(id)} // Pass the id to handleDelete
          >
            Delete
          </button>
        </div>
      </div>

      <div className="w-auto max-w-full">
        <p className="text-[1.2rem] text-gray-800 tracking-tighter w-full grow line-clamp-6">
          {description}
        </p>
      </div>

      <div>
        <span className="px-2.5 py-1 rounded-full text-blue-900 bg-blue-300 font-medium tracking-tight">
          {category}
        </span>
      </div>

      <p className="text-[1rem] text-gray-800 tracking-tight">
        Last modified: {timeAgo || ""}
      </p>
    </div>
  );
};

export default Cards;
