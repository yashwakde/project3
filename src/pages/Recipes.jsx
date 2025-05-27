import { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";
import Recipecard from "../components/Recipecard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderingrecipe = data.map((recipe) => (
          <Recipecard  recipe={recipe} key={recipe.id}/>
  ));
  return <div className=" flex flex-wrap">{data.length>0?renderingrecipe:"No recipe found"}</div>;
};

export default Recipes;
