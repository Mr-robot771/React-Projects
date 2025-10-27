import React from "react";

const Cards = () => {
  return (
    <div className="my-5 mx-5 border border-gray-300 py-4 px-4 flex flex-col gap-5 rounded-2xl inset-shadow-xl">
      <h1 className="text-2xl font-semibold tracking-tighter ">
        Meeting Notes
      </h1>
      <div className="w-auto max-w-full">
        <p className="text-[1.2rem] text-gray-800 tracking-tighter w-full grow line-clamp-6">
          A brief overview of the key discussion points and action items from
          our quarterly review meeting
        </p>
      </div>

      <div>
        <span className="px-2.5 py-1 rounded-full text-blue-900 bg-blue-300 font-medium tracking-tight">
          work
        </span>
      </div>

      <p className="text-[1rem] text-gray-800 tracking-tight">
        Last modified: 2 days ago
      </p>
    </div>
  );
};

export default Cards;
