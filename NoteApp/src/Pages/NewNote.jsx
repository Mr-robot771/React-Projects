import React from "react";

const NewNote = () => {
  return (
    <div className="mx-10 my-8">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-4xl tracking-tight text-center">
          Create New Note
        </h1>
        <div>
          <label
            htmlFor="title"
            className="text-2xl font-medium tracking-tight"
          >
            Title
            <input
              id="title"
              type="text"
              placeholder="Ex: Project Meeting Summary"
              className="border w-full px-2 py-1 text-lg rounded-[15px] border-blue-400 ring-blue-500 ring-2 focus:outline-0 "
            />
          </label>
        </div>
        <div>
          <label
            className="text-2xl font-medium tracking-tight"
            htmlFor="description"
          >
            Description
            <input
              id="description"
              type="text"
              placeholder="Start writing your note here..."
              className="w-full max-h-[800px] h-20 align-text-top text-lg rounded-xl focus:outline-none border-gray-300 border-2"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="select"
            className="text-2xl font-medium tracking-tight"
          >
            Category
            <select
              name="select"
              id="select"
              className="border-2 w-full px-2 py-1 text-lg rounded-[15px] border-gray-300 focus:outline-0 "
            >
              <option value="work">Work</option>
              <option value="study">Study</option>
              <option value="exercise">Exercise</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <button className="bg-blue-700 text-white w-full rounded-xl font-medium text-2xl py-2 cursor-pointer hover:bg-blue-700/90 active:bg-blue-700">
            Save Note
          </button>
          <button className="bg-gray-300 w-full rounded-xl font-medium text-2xl py-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
