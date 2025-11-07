import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NewNote from "../Pages/NewNote";
import Userform from "../components/Userform";
import { AppContextProvider } from "../context/AppContext";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => {
  return (
    <AuthProvider>
      <AppContextProvider>
        <Routes>
          <Route path="/noteApp" element={<MainLayout />} />
          <Route path="/create-note" element={<NewNote />} />
          <Route path="/" element={<Userform />} />
        </Routes>
      </AppContextProvider>
    </AuthProvider>
  );
};

export default AppRouter;
