import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet"; // Added Sheet components
import { Button } from "@/components/ui/shadcn/button"; // For the trigger button
import { Link } from "react-router";
import {
  CalendarDays,
  CookingPot,
  Flame,
  Newspaper,
  Utensils,
  Menu, // Added Menu icon for the hamburger button
} from "lucide-react";

const menu = [
  { title: "Recipe", icon: CookingPot, url: "recipe" },
  { title: "Week", icon: CalendarDays, url: "/week" },
  { title: "Food info", icon: Utensils, url: "/foodinfo" },
  { title: "Articles", icon: Newspaper, url: "/articles" },
  { title: "Calories", icon: Flame, url: "/calories" },
];

export default function Navbar() { // Capitalized 'Navbar' (convention)
  return (
    <div className="w-full py-4">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className="inline-flex w-full h-13 p-5 items-center gap-2 rounded-md text-sm font-medium bg-background hover:bg-muted text-foreground transition-colors"
                >
                  <Link to={item.url} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-foreground transition-colors" />
                    <span>{item.title}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-end px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] p-4">
            <div className="flex flex-col gap-4">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="flex items-center gap-2 p-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}