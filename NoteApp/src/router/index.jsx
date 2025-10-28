import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import NewNote from '../Pages/NewNote';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/note" element={<NewNote />} />
    </Routes>
  );
};

export default AppRouter;