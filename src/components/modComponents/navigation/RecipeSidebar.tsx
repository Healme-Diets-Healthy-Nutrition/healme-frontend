import React, { useState } from "react";

interface SidebarItem {
  title: string;
  href?: string;
  children?: SidebarItem[];
  isDropdown?: boolean; 
}

interface SidebarProps {
  menuItems: SidebarItem[];
}

const RecipeSidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <aside className="w-56 ml-5 mb-5 p-4 rounded-lg shadow-md bg-linen">
      <ul className="flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.children ? (
              item.isDropdown ? (
                <details
                  className="group [&_summary::-webkit-details-marker]:hidden"
                  open={openDropdown === item.title}
                  onClick={() => toggleDropdown(item.title)}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                    style={{
                      color: "var(--muted-mauve)",
                      backgroundColor: "var(--white-smoke)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--hover-outline)";
                      e.currentTarget.style.color = "var(--deep-charcoal)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--white-smoke)";
                      e.currentTarget.style.color = "var(--muted-mauve)";
                    }}
                  >
                    {item.title}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href || "#"}
                          className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                          style={{
                            color: "var(--muted-mauve)",
                            backgroundColor: "var(--white-smoke)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--hover-outline)";
                            e.currentTarget.style.color = "var(--deep-charcoal)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--white-smoke)";
                            e.currentTarget.style.color = "var(--muted-mauve)";
                          }}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <ul className="mt-2 space-y-1">
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href || "#"}
                        className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                        style={{
                          color: "var(--muted-mauve)",
                          backgroundColor: "var(--white-smoke)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--hover-outline)";
                          e.currentTarget.style.color = "var(--deep-charcoal)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--white-smoke)";
                          e.currentTarget.style.color = "var(--muted-mauve)";
                        }}
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <a
                href={item.href || "#"}
                className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: "var(--muted-mauve)",
                  backgroundColor: "var(--white-smoke)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--hover-outline)";
                  e.currentTarget.style.color = "var(--deep-charcoal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--white-smoke)";
                  e.currentTarget.style.color = "var(--muted-mauve)";
                }}
              >
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RecipeSidebar;
