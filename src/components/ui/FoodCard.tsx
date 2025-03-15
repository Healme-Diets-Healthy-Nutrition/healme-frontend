import React from "react";
import { Link } from "react-router-dom";

interface FoodCardProps {
    name: string;
    image: string;
}

const FoodCard: React.FC<FoodCardProps> = ({name, image}) => {
  return (
    <Link to={`/foodInfo/${name.toLowerCase()}`} className="h-60 w-60 p-1 pt-3 shadow-md bg-linen border-black rounded-md flex flex-col items-center transition duration-300 hover:scale-125">
      <img alt={name} src={image}
        className="h-48 w-48 object-cover bg-linen border-black rounded-md" />
      <p className="mt-2 max-w-sm text-black">
        {name}
      </p>
    </Link>
  );
};

export default FoodCard;
