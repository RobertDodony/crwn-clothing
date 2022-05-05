import React from "react";
import "./App.css";
import Home from "./components/Routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Routes/Navigation/Navigation";

const Shop = () => {
  return <h1>I am the shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
