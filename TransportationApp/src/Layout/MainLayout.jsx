import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="pt-15">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
