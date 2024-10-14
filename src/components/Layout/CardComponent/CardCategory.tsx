import React from "react";
import { Card } from "antd";

interface CardCategoryProps {
  category: string;
  jobs: number;
  iconUrl: string;
  backgroundColor: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  category,
  jobs,
  iconUrl,
  backgroundColor,
}) => {
  return (
    <Card
      hoverable
      style={{
        width: 150,
        height: 200,
        borderRadius: "15px",
        backgroundColor: backgroundColor,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={iconUrl}
        alt={category}
        style={{ width: "100px", height: "120px", marginBottom: "10px" }}
      />
      <h3 style={{ marginBottom: "5px", fontSize: "18px" }}>{category}</h3>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
        {jobs} Công việc
      </p>
    </Card>
  );
};

export default CardCategory;
