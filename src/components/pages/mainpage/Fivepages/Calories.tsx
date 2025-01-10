import * as React from 'react';

const Calories: React.FC = () => {
  
  return (
<div className="flex flex-col gap-6 items-center justify-center bg-gray-100 p-6">
  <div className="bg-rose-taupe text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-lg font-semibold mb-4">Today</h2>
  </div>
  <div className="bg-white-smoke text-black p-6 rounded-lg shadow-lg">
    <h2 className="text-lg font-semibold mb-4">Journal</h2>
   
  </div>
</div>

  );
}

export default Calories;