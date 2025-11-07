import React, { useCallback } from "react";
import NavBar from "../components/NavBar";
import SeachBar from "../components/SeachBar";
import Category from "../components/Category";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";
import api from "../services/axiosInstance.js";

const MainLayout = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

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

  const filteredData = data.filter((item) => {
    if (search) {
      return (
        item.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.category.toLowerCase().includes(search.toLocaleLowerCase())
      );
    } else if (selectedCategory !== "All") {
      return selectedCategory.toLowerCase() === item.category.toLowerCase();
    } else {
      return data;
    }
  });

  return (
    <div>
      <NavBar />
      <SeachBar setSearch={setSearch} />
      <div className="flex justify-end">
        <Category setSelectedCategory={setSelectedCategory} />
      </div>
      {filteredData.length > 0 ? (
        filteredData.map((note) => (
          <Cards
            key={note._id}
            id={note._id}
            title={note.title}
            description={note.description}
            category={note.category}
            fetchAllData={fetchAllData}
            updatedAt={note.updatedAt}
          />
        ))
      ) : (
        <p className="text-center font-medium text-3xl text-gray-700">No note to show! <br /> Add new notes</p>
      )}
    </div>
  );
};

export default MainLayout;
