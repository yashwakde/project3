import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/Recipecontext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {
  
  const navigate = useNavigate();
  const params = useParams();

  const { data, setdata } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      tittle: recipe?.tittle,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      category: recipe?.category,
    },
  });

  const Updatehandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("recipe Updated");
    navigate("/recipe");
  };

  const Deletehandler = () => {
    const filterdata = data.filter((r) => r.id !== params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

     const updatedFav = favorite.filter((f) => f.id !== params.id);
  setfavorite(updatedFav);
  localStorage.setItem("fav", JSON.stringify(updatedFav));

    toast.success("Recipe Deleted");
    navigate("/recipe");
  };

  
  const [favorite, setfavorite] = useState( JSON.parse(localStorage.getItem("fav")) || [])
  const favhandler = () => {
    const copyfav = [...favorite];
    copyfav.push(recipe);
    setfavorite(copyfav);
    toast.success("your favorite food is added");
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const unfavhandler = () => {
   const filterfav = favorite.filter((f)=>f.id != recipe?.id);
   setfavorite(filterfav);
   toast.error("your favorite food is removed");
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  //  useEffect(()=>{
  //   console.log("single recipe mount");
  // return ()=>{
  //  console.log("single recipe unmounted");
  // }
  //  },[])

  return recipe ? (
    <div className="w-full flex justify-between items-start pt-2">
      <div className="w-1/2 left p-2  relative">
        {" "}
        {favorite.includes(recipe) ? (
          <i
            onClick={unfavhandler}
            className="  ri-heart-fill text-5xl text-yellow-400 absolute right-[10%] top-[10%]"
          ></i>
        ) : (
           <i
            onClick={favhandler}
            className="ri-heart-line text-5xl text-yellow-800 absolute right-[10%] top-[10%]"
          ></i>
         
        )}
        <h1 className="text-5xl font-black uppercase mb-2">{recipe.tittle}</h1>
        <img
          className="w-[41.5vw] h-[40vh] rounded object-cover"
          src={recipe.image}
          alt=""
        />
        <small className="text-yellow-400 font-bold capitalize text-xl">
          {recipe.chef}
        </small>
        <p className="font-thin  text-xl">{recipe.desc}</p>
        <h4>{recipe.category}</h4>
      </div>

      <form
        onSubmit={handleSubmit(Updatehandler)}
        className="w-1/2  md:max-w-[35vw] bg-white p-6  rounded-lg backdrop-blur-xl  space-y-4 text-sm md:text-[15px]"
      >
        <input
          className="block border border-black bg-black rounded text-gray-500 font-black w-full p-2 outline-0"
          type="url"
          {...register("image")}
          placeholder="Enter Your Image URL"
        />
        <small className="text-red-800 font-bold capitalize">
          This is how error is shown
        </small>

        <input
          className="block  rounded-md bg-yellow-500 text-gray-50 w-full p-2 outline-0"
          type="text"
          {...register("chef")}
          placeholder="Chef Name"
        />

        <input
          className="block border rounded-md bg-black text-zinc-400 w-full p-2 outline-0"
          type="text"
          {...register("tittle")}
          placeholder="Enter Title"
        />

        <textarea
          className="block border rounded-md bg-black text-zinc-600 p-2 w-full resize-none outline-0"
          {...register("desc")}
          placeholder="Enter Description"
        ></textarea>

        <textarea
          className="block border rounded-md bg-black w-full resize-none p-2 outline-0"
          {...register("ingr")}
          placeholder="Enter Your Ingredients"
        ></textarea>

        <textarea
          className="block w-full  rounded-md bg-black p-2 outline-0 resize-none"
          {...register("inst")}
          placeholder="Enter your Instruction"
        ></textarea>

        <select
          className="block border-b border-black   p-2 outline-0  text-black"
          {...register("category")}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="  block bg-blue-700  font-semibold p-1 rounded-md mt-1 hover:bg-green-800 text-black ">
          Update Recipe
        </button>
        <button
          onClick={Deletehandler}
          className="block bg-yellow-500  font-semibold p-1 rounded-md mt-1    text-black"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "loading ..."
  );
};

export default Singlerecipe;
