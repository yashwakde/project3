import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/Recipecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
 
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Submithandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
        toast.success("New Recipe Created")
    reset();
    navigate("/recipe");
  };

  return (
    <div className="w-full bg-[url(https://i.pinimg.com/736x/2e/b0/33/2eb0336898648e83cdb8182c04e9b4e2.jpg)] bg-cover mt-10 flex justify-center items-center rounded-md relative border-6 border-white p-4 md:mt-5">
      <div className="absolute text-4xl md:text-6xl font-thin w-full flex justify-between px-4 text-white">
        <h1>Add</h1>
        <h1>Recipe</h1>
      </div>

      <form
        onSubmit={handleSubmit(Submithandler)}
        className="w-full max-w-xl md:max-w-xs bg-[#d6d5d0]/30 p-6  rounded-lg backdrop-blur-xl flex flex-col space-y-4 text-sm md:text-[10px]"
      >
        <input
          className="block border border-black bg-black rounded text-white w-full p-2 outline-0"
          type="url"
          {...register("image")}
          placeholder="Enter Your Image URL"
        />
        <small className="text-red-800">This is how error is shown</small>

        <input
          className="block border border-black w-full p-2 outline-0"
          type="text"
          {...register("chief")}
          placeholder="Chef Name"
        />

        <input
          className="block border border-black w-full p-2 outline-0"
          type="text"
          {...register("tittle")}
          placeholder="Enter Title"
        />

        <textarea
          className="block border border-black p-2 w-full resize-none outline-0"
          {...register("desc")}
          placeholder="Enter Description"
        ></textarea>

        <textarea
          className="block border border-black w-full resize-none p-2 outline-0"
          {...register("ingr")}
          placeholder="Enter Your Ingredients"
        ></textarea>

        <textarea
          className="block w-full border border-black p-2 outline-0 resize-none"
          {...register("inst")}
          placeholder="Enter your Instruction"
        ></textarea>

        <select
          className="block border border-black p-2 outline-0 bg-white text-black"
          {...register("category")}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="block bg-white text-black font-semibold p-1 rounded-md mt-1 hover:bg-gray-200 transition">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
