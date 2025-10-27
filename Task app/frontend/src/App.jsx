import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
