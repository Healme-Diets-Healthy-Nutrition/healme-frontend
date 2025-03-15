import React, { useState } from "react";
import FoodCard from "@/components/ui/FoodCard";
import { VegetableItems } from "@/data/VegetableItems";
import SearchInput from "@/components/ui/SearchInput";

const VegetableTables: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredItems = VegetableItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodCard key={item.name} name={item.name} image={item.image} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No vegetables found.
          </p>
        )}
      </div>
    </div>
  );
};

export default VegetableTables;
