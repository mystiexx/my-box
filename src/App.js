import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./app/Add/Add";
import Chinese from "./app/Chinese/Chinese";
import Home from "./app/Home/Home";
import Korean from "./app/Korean/Korean";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/chinese" element={<Chinese />} />
        <Route exact path="/korean" element={<Korean />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
