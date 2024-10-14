// src/components/Layout/CardComponent/CardJob.tsx
import React, { useState } from "react";
import { Card, Button, Image } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface CardJobProps {
  id: number;
  Title: string;
  Description: string;
  PostedBy: string;
  Salary: number;
  ImageUrl: string;
  isHot: boolean;
  onClick?: () => void; // Thêm thuộc tính onClick để nhận sự kiện từ ngoài
}

const CardJob: React.FC<CardJobProps> = ({
  id,
  Title,
  Description,
  PostedBy,
  Salary,
  ImageUrl,
  isHot,
  onClick, // Nhận onClick từ props
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Card
      hoverable
      onClick={onClick ? onClick : () => navigate(`/job-details/${id}`)} // Nếu không có onClick từ ngoài thì điều hướng theo id
      cover={
        <Image
          alt={Title}
          src={ImageUrl}
          preview={false}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
      }
      className="rounded-lg m-5 flex flex-col justify-between min-h-[400px] overflow-hidden"
    >
      <div className="p-4 pr-2">
        <h3 className="font-bold text-lg text-[#16A870]">{Title}</h3>
        <p className="text-base mb-1">{Description}</p>
        <p className="text-sm mb-1">
          Được đăng bởi <strong className="text-[#16A870]">{PostedBy}</strong>
        </p>
        <p className="text-sm text-gray-600">
          Lương:{" "}
          <strong className="text-[#16A870]">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(Salary)}
          </strong>
        </p>
      </div>

      <div className="flex justify-between items-center px-4 py-3">
        <Button
          type="primary"
          className="w-3/4 rounded-full bg-[#16A870] border-none"
          onClick={(e) => e.stopPropagation()}
        >
          Nhận ngay
        </Button>
        <HeartOutlined
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          className={`text-2xl cursor-pointer ${
            isFavorited ? "text-red-500" : "text-gray-400"
          }`}
        />
      </div>
    </Card>
  );
};

export default CardJob;
