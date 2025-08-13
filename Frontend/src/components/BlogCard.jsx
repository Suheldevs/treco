import { ArrowRight, ArrowUpRight, Clock, Tag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ date, category, title, imageUrl, slug, description }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div key={title} className="px-2 ">
      <div className="bg-white  flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
        {/* Image section */}
        <div className=" overflow-hidden">
          <img
            src={`${backendUrl}/${imageUrl}`}
            alt={title}
            className="w-full h-[18rem] object-cover"
          />
        </div>

        {/* Content section */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Date and Category row */}
          <div className="flex justify-between items-center mb-3 text-xs">
            <div className="flex items-center text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              {formattedDate(date)}
            </div>
            <div className="inline-flex items-center bg-black px-2 py-1 rounded-sm text-xs font-medium text-white">
              <Tag className="h-3 w-3 mr-1" />
              {category}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg text-black mb-2 line-clamp-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {
              new DOMParser().parseFromString(description, "text/html").body
                .textContent
            }
          </p>

          {/* Read More button */}
          <div className="mt-auto">
            <Link
              to={`/blog/${slug}`}
              className="inline-flex items-center text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300"
            >
              Read More
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
