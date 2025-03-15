import React from 'react';
import Sidebar from '@/components/navigation/Sidebar'; 
import { Outlet } from 'react-router-dom';

const menuData = [
    {
      title: "Plant-based food",
      items: [
        { name: "Vegetables", link: "/foodInfo/vegetables" }, 
        { name: "Fruits", link: "/foodInfo/fruits" },
      ],
    },
    {
      title: "Protein food",
      items: [
        { name: "Meat", link: "/foodInfo/meats" },
        { name: "Animal-based proteins", link: "/foodInfo/animal-proteins" },
        { name: "Plant-based proteins", link: "/foodInfo/plant-proteins" },
      ],
    },
    {
      title: "Grain food",
      items: [{ name: "Grains", link: "/foodInfo/grains" }],
    },
];

const FoodInfo: React.FC = () => {
    return (
        <div className='flex flex-row gap-10 mb-10 p-6 bg-white'>
            <Sidebar variant="simple" menu={menuData} />
            <div className="flex-1">
                <Outlet /> 
            </div>
        </div>
    );
};

export default FoodInfo;
