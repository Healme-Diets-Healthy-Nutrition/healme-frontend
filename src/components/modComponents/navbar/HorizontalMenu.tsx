import { Link } from "react-router";
import { CalendarDays, CookingPot, Flame, Newspaper, Utensils } from "lucide-react";

const HorizontalMenu: React.FC = () => {
  return (
    <>
      <div className="h-13 w-full flex">
        <Link to="/recipe" className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
        <CookingPot className="color-primary w-8 h-8" />
          <h3 className="text-lg">Recipes</h3>
        </Link>
        <div className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
        <CalendarDays className="color-primary w-8 h-8" />
          <h3 className="text-lg">Week</h3>
        </div>
        <Link to="/foodinfo" className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
          <Utensils className="color-primary w-8 h-8" />
          <h3 className="text-lg">Food info</h3>
        </Link>
        <Link to="/article"   className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
        <Newspaper className="color-primary w-8 h-8" />
          <h3 className="text-lg">Articles</h3>
        </Link  >
        <Link to="/calories" className="h-13 w-76 gap-x-1 flex items-center justify-center cursor-pointer hover:border-b border-dark-gray">
        <Flame className="color-primary w-8 h-8" />
          <h3 className="text-lg">Calories</h3>
        </Link>
      </div>
    </>
  );
};

export default HorizontalMenu;
