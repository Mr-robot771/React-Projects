import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setUp(!up);
  };

  return (
    <div className="mx-5 font-medium text-gray-600 z-100">
      <div className="border px-4 py-1.5 rounded-md border-gray-300 inset-shadow-sm items-center gap-2 inline-flex relative">
        <span>Category</span>

        <span className="cursor-pointer" onClick={handleOpen}>
          <MdArrowDropDown className={`${up?"rotate-180":"rotate-0"} transition-all ease-in-out`} size={24} />
        </span>
        {open && (
          <div className="absolute translate-x-6 translate-y-14.5 border border-gray-300 inset-shadow-lg rounded -z-1 bg-white ">
            <ul className="py-1">
              <li className="cursor-pointer hover:bg-gray-300 px-4 transition-all ease-in-out">
                Work
              </li>
              <li className="cursor-pointer hover:bg-gray-300 px-4 transition-all ease-in-out">
                Study
              </li>
              <li className="cursor-pointer hover:bg-gray-300 px-4 transition-all ease-in-out">
                Exercise
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
