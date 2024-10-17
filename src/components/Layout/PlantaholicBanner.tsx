import React from "react";
import { Button } from "antd";
import "tailwindcss/tailwind.css";

const PlantaholicBanner: React.FC = () => {
  return (
    <div
      className="m-8 lg:m-16 flex flex-col lg:flex-row justify-center items-center"
      role="main"
    >
      <div className="px-4 lg:px-16 text-center lg:text-left">
        <hr className="w-3/5 mx-auto lg:mx-0" />
        <h1
          className="mt-6 text-4xl lg:text-5xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug"
          role="heading"
          aria-level={1}
        >
          Cơ hội làm việc <br />
          <span className="text-primary" role="heading" aria-level={1}>
            part-time cho mọi người.
          </span>
        </h1>
        <p
          className="w-full lg:w-3/5 mt-2 text-gray-600 text-lg"
          aria-level={2}
        >
          Khám phá những công việc linh hoạt trên toàn quốc, đáp ứng thời gian
          của bạn.
        </p>
        <div
          className="mt-8 flex justify-center lg:justify-start"
          aria-level={3}
          role="button"
        >
          <Button
            type="primary"
            className="bg-primary text-white px-8 py-3 rounded-md uppercase shadow hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none"
          >
            Tìm việc ngay
          </Button>
          <Button
            type="default"
            className="ml-4 bg-white text-primary px-8 py-3 rounded-md uppercase shadow hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none"
          >
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-40 flex justify-center" role="img">
        <img
          className="object-cover object-center w-64 lg:w-96 rounded-md "
          src="/assets/images/banner_test.jpg"
          alt="Image of plants"
        />
      </div>
    </div>
  );
};

export default PlantaholicBanner;
