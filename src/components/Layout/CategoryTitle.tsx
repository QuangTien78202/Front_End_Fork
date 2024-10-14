import React from "react";

const CategoryTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h3 className="mb-5 text-xl font-semibold text-left transition-colors duration-500 hover:text-primary870">
      {title}
    </h3>
  );
};

export default CategoryTitle;
