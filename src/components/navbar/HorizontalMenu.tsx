import IconRecipes from "../../assets/icons/recipes.svg?react";
import IconDiet from "../../assets/icons/diet.svg?react";
import IconCalories from "../../assets/icons/calories.svg?react";
import IconCalendar from "../../assets/icons/calendar.svg?react";
import IconArticle from "../../assets/icons/article.svg?react";
import { Link } from "react-router";

const HorizontalMenu: React.FC = () => {
  return (
    <>
      <div className="h-13 w-full flex">
        <div className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
          <IconRecipes className="fill-rose-taupe w-8 h-8" />
          <h3 className="text-lg">Recipes</h3>
        </div>
        <div className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
          <IconCalendar className="fill-rose-taupe w-8 h-8" />
          <h3 className="text-lg">Week</h3>
        </div>
        <div className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
          <IconDiet className="fill-rose-taupe w-8 h-8" />
          <h3 className="text-lg">Food info</h3>
        </div>
        <div className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
          <IconArticle className="fill-rose-taupe w-8 h-8" />
          <h3 className="text-lg">Articles</h3>
        </div>
        <Link to="/calories" className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
          <IconCalories className="fill-rose-taupe w-8 h-8" />
          <h3 className="text-lg">Calories</h3>
        </Link>
      </div>
    </>
  );
};

export default HorizontalMenu;
