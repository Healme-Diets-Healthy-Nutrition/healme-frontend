import React from "react";
import { Link } from "react-router-dom";

interface BlogProps {
  date: string;
  title: string;
  body: string;
  link: string;
  image: string;
}

const Blog: React.FC<BlogProps> = ({ date, title, body, link, image }) => {
  return (
    <div className="max-w-md">
    <Link to={link} className="block">
      <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg cursor-pointer">
        <img alt={title} src={image} className="h-56 w-full object-cover" />
        <div className="bg-gray-100 p-4 sm:p-6">
          <time dateTime={date} className="block text-xs text-gray-500">
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-gray-500">{body}</p>
        </div>
      </article>
    </Link>
    </div>
  );
};

export default Blog;
