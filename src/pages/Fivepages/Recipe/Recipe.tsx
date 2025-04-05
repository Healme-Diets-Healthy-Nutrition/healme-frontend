import RecipeSidebar from "@/components/modComponents/navigation/RecipeSidebar";
import React from "react";

const menuItems = [
  {
    title: "Dietary",
    children: [
      { title: "Gluten-free", href: "#" },
      { title: "Low calorie", href: "#" },
    ],
    isDropdown: true, 
  },
  { title: "Vegeterian", href: "#" },
  { title: "Gastritis diet", href: "#" }, 
];

const Recipe: React.FC = () => {

  return (
    <div className="bg-gray-100">

      <RecipeSidebar menuItems={menuItems} />
    </div>
  );
};

export default Recipe;
