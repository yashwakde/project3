import { Link } from "react-router-dom";

const Recipecard = (props) => {
    const { id,tittle,image,desc,chef} = props.recipe;
  return (
    <Link to={`/recipe/details/${id}`} className=" duration-75 hover:scale-95 block w-[250px] rounded-[30px]  overflow-hidden border-6 border-white mr-5 mb-3 shadow-sm shadow-gray-900 bg-white">
      <img className="w-full h-[20vh] object-cover" src={image} alt="" />
      <h1 className=" font-black mt-2 font- text-black p-0.5">{tittle}</h1>
      <small className="text-black   p-0.5 capitalize font-bold">{chef}</small>
      <p className="p-2  text-[0.8vw] bg-white text-black font-semibold">{desc.slice(0,100)}...<small className="text-blue-900 font-thin uppercase">more</small></p>
    </Link>
  )
}

export default Recipecard;
