import Blog from "@/components/ui/blog";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Sidebar from "@/components/modComponents/navigation/Sidebar";

const ArticleData = [
  {
    title: "Lifestyle",
    items: [
      { name: "How to gain mass properly", link: "#" },
      { name: "How to lose weight scientifically", link: "#" },
    ],
  },
  {
    title: "Specific Diets",
    items: [
      { name: "Meat", link: "#" },
      { name: "Animal-based proteins", link: "#" },
      { name: "Plant-based proteins", link: "#" },
    ],
  },
  {
    title: "Research",
    items: [{ name: "Does food contain less vitamins?", link: "#" }],
  },
];

const Article: React.FC = () => {
  return (
    <div className="p-6 bg-white flex gap-8">
      <Sidebar variant="collapsible" menu={ArticleData} />
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Blog
              key={index}
              date={"222"}
              title={"22111"}
              body={"222"}
              link={""}
              image={
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
            />
          ))}
        </div>
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Article;
