import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import { Link, Route } from "react-router";
import Recipe from "@/pages/Fivepages/Recipe/Recipe";
import { CalendarDays, CookingPot, Flame, Newspaper, Utensils } from "lucide-react";
import { NavigationMenuContent, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import Logo from "./Logo";
import Profile from "./Profile";

const menu = [
  {
    title: "Recipe",
    icon: <CookingPot className="color-primary w-8 h-8" />,
    url: <Route path="/recipe" element={<Recipe />} />,
  },
  {
    title: "Week",
    icon: <CalendarDays className="color-primary w-8 h-8" />,
    url: <Route path="/recipe" element={<Recipe />} />,
  },
  {
    title: "Food info",
    icon: <Utensils className="color-primary w-8 h-8" />,
    url: <Route path="/recipe" element={<Recipe />} />,
  },
  {
    title: "Articles",
    icon:     <Newspaper className="color-primary w-8 h-8" />,
    url: <Route path="/recipe" element={<Recipe />} />,
  },
  {
    title: "Calories",
    icon:     <Flame className="color-primary w-8 h-8" />,
    url: <Route path="/recipe" element={<Recipe />} />,
  },
];

export default function navbar() {
  return (
    <>
    <Logo></Logo>
<NavigationMenu className="bg-background flex w-full h-13">
  <NavigationMenuList>
    {menu.map((item, index) => (
      <NavigationMenuItem key={index} className="bg-background cursor-pointer"> 
        <NavigationMenuLink >
          {item.icon}
          <span className="ml-2">{item.title}</span>
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>
<Profile></Profile>
</>
  );
}
