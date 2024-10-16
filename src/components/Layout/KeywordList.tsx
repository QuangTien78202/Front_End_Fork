import React from "react";
import { Tag, Tooltip } from "antd";
import { keywords } from "@/data";

interface KeywordListProps {
  keywords: string[];
}

const KeywordList: React.FC<KeywordListProps> = ({ keywords }) => {
  return (
    <div className="p-6 rounded-lg ">
      <div className="flex flex-wrap gap-2 justify-center">
        {keywords.map((keyword: string, index: number) => (
          <Tooltip
            className="bg-white text-primary"
            key={index}
            title={`Tìm kiếm việc liên quan đến ${keyword}`}
            overlayInnerStyle={{
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "1px solid #e0e0e0",
            }}
          >
            <Tag className="border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer">
              {keyword}
            </Tag>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default KeywordList;
