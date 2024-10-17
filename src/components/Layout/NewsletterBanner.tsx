import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import "tailwindcss/tailwind.css";

const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(`Email Submitted: ${email}`);
  };

  return (
    <div
      className="m-8 lg:m-16 flex flex-col lg:flex-row justify-between items-center"
      role="main"
    >
      <div className="px-4 lg:px-16 text-center lg:text-left">
        <hr className="w-3/5 mx-auto lg:mx-0" />
        <h1
          className="mt-6 text-4xl lg:text-5xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug"
          role="heading"
          aria-level={1}
        >
          Khám phá cơ hội việc làm <br />
          <span
            className="text-primary tracking-wider  "
            role="heading"
            aria-level={1}
          >
            part-time
          </span>
          hấp dẫn
        </h1>
        <p
          className="w-full lg:w-3/5 mt-2 text-gray-600 text-lg"
          aria-level={2}
        >
          Việc làm linh hoạt cho học sinh, sinh viên và người lao động tự do{" "}
          <span className="font-bold text-clip text-primary">FINDJOB</span>
        </p>
        <div className="mt-8 flex justify-center lg:justify-start items-center w-full space-x-4">
          <Input
            type="email"
            placeholder="Địa chỉ Email của bạn ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-md w-full max-w-md"
          />
          <Button
            size="large"
            type="default"
            className="bg-white text-primary px-8 py-3 rounded-md uppercase shadow hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none"
          >
            Tham gia ngay
          </Button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-40 flex justify-center" role="img">
        <img
          className="object-cover object-center w-80 lg:w-128 rounded-md hover:shadow-lg transform transition "
          src="/assets/images/NewsletterBanner.jpg"
          alt="Image of plants"
        />
      </div>
    </div>
  );
};

export default NewsletterBanner;
