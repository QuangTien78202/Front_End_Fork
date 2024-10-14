// CategoryLinks.tsx
import React from "react";

const CategoryLinks: React.FC<{ links: string[] }> = ({ links }) => {
  return (
    <div className="flex flex-wrap mb-5">
      {links.map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-lg font-normal text-gray-800 transition-colors duration-500 hover:text-primary870 ml-5"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default CategoryLinks;
