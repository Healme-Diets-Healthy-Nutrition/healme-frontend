import React from "react";
import { useParams } from "react-router";
import { foodItems } from "@/data/foodItems";

const FoodDetail: React.FC = () => {
    const { name } = useParams<{ name: string }>();
  const foodInfo = foodItems.find(
    (item) => item.name.toLocaleLowerCase().replace(/\s+/g, "-") === name?.toLocaleLowerCase()
  );
  if (!foodInfo) {
    return <p className="text-gray-500 text-center">Food not found</p>
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{foodInfo.name}</h1>
      <img src={foodInfo.image} alt={foodInfo.name} className="w-40 h-40 my-4" />
      <p className="text-lg">
        Detailed information about {foodInfo.name} goes here.
      </p>
    </div>
  );
};

export default FoodDetail;
