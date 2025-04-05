import React from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  items: { name: string; link: string }[];
}

interface SidebarProps {
  menu?: MenuItem[];
  variant?: "simple" | "collapsible";
}

const defaultMenu: MenuItem[] = [
  {
    title: "Navigation",
    items: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ menu = defaultMenu, variant = "simple" }) => {
  return (
    <aside className="w-56 p-4 rounded-lg shadow-md bg-white-smoke">
      <ul className="flex flex-col space-y-2">
        {menu.map((section, index) => (
          <li key={index}>
            {variant === "simple" ? (
              <>
                <strong className="block text-xs font-medium uppercase text-black">
                  {section.title}
                </strong>
                <ul className="mt-2 space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.link}
                        className="block rounded-lg px-4 py-2 text-sm transition-colors duration-200 text-black bg-gray-100 hover:bg-gray-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100">
                  <span className="text-sm font-medium">{section.title}</span>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <ul className="mt-2 space-y-1 px-4">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.link}
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
