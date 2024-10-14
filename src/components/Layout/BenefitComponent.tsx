import React from "react";
import { Row, Col, Card } from "antd";

const benefits = [
  {
    icon: "/assets/images/logo_benefit1.png",
    title: "Giá Rẻ Uy Tín",
  },
  {
    icon: "/assets/images/logo_benefit2.png",
    title: "Ứng viên Chất lượng",
  },
  {
    icon: "/assets/images/logo_benefit3.png",
    title: "Hoàn Thành Nhanh Chóng",
  },
  {
    icon: "/assets/images/logo_benefit4.png",
    title: "Đảm bảo An Toàn",
  },
];

const BenefitComponent: React.FC = () => {
  return (
    <div className="mt-5 flex justify-between items-end p-5 flex-wrap lg:flex-nowrap">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-5 h-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 m-2 w-full lg:w-1/4 md:w-1/2"
        >
          <img
            src={benefit.icon}
            alt={benefit.title}
            className="w-10 h-10 mr-4"
          />
          <div className="text-lg font-bold text-gray-800">{benefit.title}</div>
        </div>
      ))}
    </div>
  );
};

export default BenefitComponent;
