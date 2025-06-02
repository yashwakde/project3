import Recipecard from "../components/Recipecard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")|| []);

  const renderingrecipe = favorite.map((recipe) => (
    <Recipecard recipe={recipe} key={recipe.id} />
  ));
  return (
    <div className=" flex flex-wrap">
      {favorite.length > 0 ? renderingrecipe : "No favorite found"}
    </div>
  );
};

export default Fav;
