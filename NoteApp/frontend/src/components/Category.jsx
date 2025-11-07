import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

const Category = ({ setSelectedCategory }) => {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);

  const dropDownRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
    setUp(!up);
  };

  useEffect(() => {
    // Handler to close dropdown when clicking outside
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false);
        setUp(false); // Reset arrow rotation
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="mx-5 font-medium text-gray-600 z-100">
      <div
        className="border px-4 py-1.5 rounded-md border-gray-300 inset-shadow-sm items-center gap-2 inline-flex relative"
        ref={dropDownRef}
      >
        <span>Category</span>

        <span className="cursor-pointer" onClick={handleOpen}>
          <MdArrowDropDown
            className={`${
              up ? "rotate-180" : "rotate-0"
            } transition-all ease-in-out`}
            size={24}
          />
        </span>
        {open && (
          <div className="absolute translate-x-6 translate-y-18 border-top-2 border border-gray-300 inset-shadow-lg rounded -z-1 bg-white ">
            <ul className="py-1">
              <li
                className="cursor-pointer hover:bg-gray-300 px-4 transition-all ease-in-out"
                onClick={() => setSelectedCategory("All")}
              >
                All
              </li>
              <li
                className="cursor-pointer hover:bg-gray-300 px-4 transition-all ease-in-out"
                onClick={() => setSelectedCategory("Work")}
              >
                Work
              </li>
              <li
                className="cursor-pointer hover:bg-gray-300 px-4 transition-all ease-in-out"
                onClick={() => setSelectedCategory("Study")}
              >
                Study
              </li>
              <li
                className="cursor-pointer hover:bg-gray-300 px-4 transition-all ease-in-out"
                onClick={() => setSelectedCategory("Exercise")}
              >
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
