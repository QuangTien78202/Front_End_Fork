import React from "react";

const CategoryLinks: React.FC<{ links: string[] }> = ({ links }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {links.map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-sm font-normal text-gray-800 transition-colors cursor-pointer duration-500 hover:text-primary870 bg-gray-200 rounded-full px-3 py-1.5 hover:bg-white"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default CategoryLinks;
