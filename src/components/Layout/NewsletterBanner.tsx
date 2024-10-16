import React, { useState } from "react";
import { Input, Button, Form } from "antd";

const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(`Email Submitted: ${email}`);
    // Xử lý gửi email ở đây
  };

  return (
    <div className="relative newsletter-inner p-6 bg-gray-100">
      <div className="newsletter-content text-center">
        <h2 className="mb-8 text-3xl font-bold">
          Stay home & get your daily <br />
          <span className="text-green-700">needs from our shop</span>
        </h2>
        <p className="mb-6 text-lg">
          Start Your Daily Shopping with{" "}
          <span className="text-brand text-green-700">Nest Mart</span>
        </p>
        <Form
          className="form-subscriber flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            className="w-full md:w-auto"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-md w-full md:w-auto"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
          >
            Subscribe
          </Button>
        </Form>
      </div>
      <img
        className="mt-8 mx-auto rounded-md w-full max-w-lg"
        src="assets/images/banner.png"
        alt="newsletter"
      />
    </div>
  );
};

export default NewsletterBanner;
