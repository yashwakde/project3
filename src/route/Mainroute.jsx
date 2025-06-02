import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Singlerecipe from "../pages/Singlerecipe";
import Errorpage from "../pages/Errorpage";
import Fav from "../pages/Fav";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create-recipe" element={<Create />}></Route>
      <Route path="/recipe" element={<Recipes />}></Route>
      <Route path="/recipe/details/:id" element={<Singlerecipe />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/fav" element={<Fav/>}></Route>

      <Route path="*" element={<Errorpage />}></Route>
    </Routes>
  );
};

export default Mainroute;
