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
        <p className="h-10">🪴 Plant-a-holic</p>
        <hr className="w-3/5 mx-auto lg:mx-0" />
        <h1
          className="mt-6 text-4xl lg:text-5xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug"
          role="heading"
          aria-level={1}
        >
          We got your plants. <br />
          <span className="text-green-700" role="heading" aria-level={1}>
            And we deliver them for you.
          </span>
        </h1>
        <p
          className="w-full lg:w-3/5 mt-2 text-gray-600 text-lg"
          aria-level={2}
        >
          Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.
        </p>
        <div
          className="mt-8 flex justify-center lg:justify-start"
          aria-level={3}
          role="button"
        >
          <Button
            type="primary"
            className="bg-green-700 text-white px-8 py-3 rounded-md uppercase shadow hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none"
          >
            See the collection
          </Button>
          <Button
            type="default"
            className="ml-4 bg-white text-green-700 px-8 py-3 rounded-md uppercase shadow hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-40 flex justify-center" role="img">
        <img
          className="object-cover object-center w-64 lg:w-96 rounded-md hover:shadow-lg transform transition hover:-translate-y-2"
          src="https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg"
          alt="Image of plants"
        />
      </div>
    </div>
  );
};

export default PlantaholicBanner;
