import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);
const Recipecontext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  },[]);
 
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default Recipecontext;
// //  {
//   id: 1,
//   tittle: "Classic Margherita Pizza",
//   ingredients: [
//     "Pizza dough",
//     "Tomato sauce",
//     "Fresh mozzarella cheese",
//     "Fresh basil leaves",
//     "Olive oil",
//     "Salt and pepper to taste"
//   ],
//   instructions: [
//     "Preheat the oven to 475°F (245°C).",
//     "Roll out the pizza dough and spread tomato sauce evenly.",
//     "Top with slices of fresh mozzarella and fresh basil leaves.",
//     "Drizzle with olive oil and season with salt and pepper.",
//     "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//     "Slice and serve hot."
//   ],
  
//   image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//   chef:"dhanesh malviya",
//   category:"dinner",
//   desc:"Drizzle with olive oil and season with salt and pepper.Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
// // }