import React from 'react';
import Sidebar from '../../../components/navigation/Sidebar'; 
import FoodTables from './FoodTables';

const FoodInfo: React.FC = () => {
    return (
        <div className='flex flex-row gap-10 mb-10'>
            <Sidebar></Sidebar>
            <FoodTables></FoodTables>
        </div>
    );
};

export default FoodInfo;