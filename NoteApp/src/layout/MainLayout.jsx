import React, { useCallback } from "react";
import NavBar from "../components/NavBar";
import SeachBar from "../components/SeachBar";
import Category from "../components/Category";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";
import api from "../services/axiosInstance.js";
const MainLayout = () => {
  const [data, setData] = useState([]);

  const fetchAllData = useCallback(async () => {
    try {
      const res = await api.get("/note");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <div>
      <NavBar />
      <SeachBar />
      <div className="flex justify-end">
        <Category />
      </div>
      {data.map((note) => (
        <Cards key={note._id} title={note.title} description={note.description} category={note.category}/>
      ))}
    </div>
  );
};

export default MainLayout;
