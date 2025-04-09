import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import { Link } from "react-router";
import {
  CalendarDays,
  CookingPot,
  Flame,
  Newspaper,
  Utensils,
} from "lucide-react";

const menu = [
  {
    title: "Recipe",
    icon: CookingPot,
    url: "recipe",
  },
  {
    title: "Week",
    icon: CalendarDays,
    url: "/week",
  },
  {
    title: "Food info",
    icon: Utensils,
    url: "/foodinfo",
  },
  {
    title: "Articles",
    icon: Newspaper,
    url: "/articles",
  },
  {
    title: "Calories",
    icon: Flame,
    url: "/calories",
  },
];

export default function navbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {menu.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className="inline-flex w-full h-13 p-5 items-center gap-2 rounded-md text-sm font-medium bg-background hover:bg-muted text-foreground transition-colors"
              >
                <Link to={item.url} >
                  <item.icon className="w-5 h-5 text-foreground transition-colors" />
                  <span>
                    {item.title}
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
