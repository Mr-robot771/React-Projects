import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useApp } from "../context/AppContext";

const Userform = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("form") || "signup"
  );
  const [toggle, setToggle] = useState(activeTab === "signup");

  useEffect(() => {
    setSearchParams({ form: activeTab });
    setToggle(activeTab === "signup");
  }, [activeTab, setSearchParams]);

  const renderTab = () => {
    switch (activeTab) {
      case "login":
        return <Login />;

      case "signup":
        return <Signup />;

      default:
        return null;
    }
  };

  const { title, setTitle } = useApp();

  // Keep the global title in sync with the active tab
  useEffect(() => {
    if (activeTab === "signup") {
      setTitle((prev) => ({
        ...prev,
        header: "Sign Up Now!",
        caption: "Create an account to join react note app explorer",
      }));
    } else if (activeTab === "login") {
      setTitle((prev) => ({
        ...prev,
        header: "Welcome Back",
        caption: "Login to view your notes",
      }));
    }
  }, [activeTab, setTitle]);

  return (
    <>
      <div>
        <div className="text-center my-4">
          <h1 className="text-4xl font-bold tracking-tight">{title.header}</h1>
          <p className="text-lg tracking-tight text-gray-600">
            {title.caption}
          </p>
        </div>
        <div className="flex bg-gray-100 justify-around mx-5 py-2 rounded-[2rem]">
          <button
            className={`${
              toggle ? "bg-gray-100" : "bg-white"
            } flex-1 mx-2 rounded-[2rem] py-2 text-[1.1rem] font-bold cursor-pointer transition-colors ease-in-out tracking-tight`}
            onClick={() => {
              setToggle(false);
              setActiveTab("login");
            }}
          >
            Login
          </button>
          <button
            className={`${
              toggle ? "bg-white" : "bg-gray-100"
            } flex-1 mx-2 rounded-[2rem] py-2 text-[1.1rem] font-bold cursor-pointer transition-colors ease-in-out tracking-tight`}
            onClick={() => {
              setToggle(true);
              setActiveTab("signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex justify-center mx-5 my-3 ">{renderTab()}</div>
    </>
  );
};

export default Userform;
