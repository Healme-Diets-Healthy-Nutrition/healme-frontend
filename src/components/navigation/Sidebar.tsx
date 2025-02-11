import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside>
      <ul className="flex flex-col space-y-2 w-40 m-5">
        <li>
          <strong className="block text-xs font-medium uppercase text-gray-400">
            {" "}
            Plant-based food{" "}
          </strong>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Vegetables
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Fruits
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong className="block text-xs font-medium uppercase text-gray-400">
            {" "}
            Protein food{" "}
          </strong>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Meat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Animal-based proteins
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Plant-based proteins
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong className="block text-xs font-medium uppercase text-gray-400">
            {" "}
            Grain food{" "}
          </strong>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Grains
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
