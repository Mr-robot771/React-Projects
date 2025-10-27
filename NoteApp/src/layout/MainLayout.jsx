import React from "react";
import NavBar from "../components/NavBar";
import SeachBar from "../components/SeachBar";
import Category from "../components/Category";
import Cards from "../components/Cards";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <SeachBar />
      <div className="flex justify-end">
        <Category />
      </div>

      <Cards />
      <Cards />
    </div>
  );
};

export default MainLayout;
