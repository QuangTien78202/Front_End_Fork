import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Radio, Row, Col, Affix } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import {
  TopHeader,
  AdvsComponent,
  BenefitComponent,
  FooterComponent,
  HeaderComponent,
  MenuComponent,
} from "../../components";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/HeaderComponent/Header";

const RegisterPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Header />

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-5">
            <h2 className="text-2xl text-gray-500 font-bold">
              Tạo Tài Khoản Mới
            </h2>
            <p className="text-gray-600">
              Bạn đã có tài khoản?{" "}
              <Link to="/login" className="text-sm text-primary ">
                Đăng nhập
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form đăng ký */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Form name="register" onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="username"
                  label="Tên đăng nhập"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên đăng nhập!" },
                  ]}
                >
                  <Input placeholder="Nhập tên đăng nhập của bạn" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { type: "email", message: "Email không hợp lệ!" },
                    { required: true, message: "Vui lòng nhập email!" },
                  ]}
                >
                  <Input placeholder="Nhập email của bạn" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="SĐT"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại!" },
                  ]}
                >
                  <Input placeholder="Nhập số điện thoại của bạn" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Mật khẩu"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Xác nhận Mật khẩu"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng xác nhận mật khẩu!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Mật khẩu không khớp!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Nhập lại mật khẩu" />
                </Form.Item>

                <Form.Item>
                  <Checkbox>
                    Tôi đồng ý với các điều khoản và chính sách
                  </Checkbox>
                </Form.Item>

                <Form.Item name="role">
                  <Radio.Group>
                    <Radio value="employer">Tôi là người thuê</Radio>
                    <Radio value="employee">Tôi là ứng viên</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full bg-primary border-primary"
                  >
                    Đăng ký ngay
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    icon={<GoogleOutlined />}
                    type="default"
                    className="w-full border-gray-300"
                  >
                    Continue with Google
                  </Button>
                </Form.Item>
              </Form>
            </div>

            {/* Cột dành cho hình ảnh */}
            <div className=" justify-center items-center md:flex hidden">
              <img
                src="/assets/images/logo_loginn.jpg"
                alt="Login"
                className="w-auto h-auto max-w-xs rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="hidden md:flex flex-col ">
        <BenefitComponent />
        <AdvsComponent />
      </section>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default RegisterPage;
