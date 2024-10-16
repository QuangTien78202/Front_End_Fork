import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import {
  AdvsComponent,
  BenefitComponent,
  FooterComponent,
} from "../../components";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/HeaderComponent/Header";
import BreadcrumbComponent from "../../components/Layout/BreadcrumbComponent";

const LoginPage: React.FC = () => {
  const [loginError, setLoginError] = useState<string | null>(null);

  const onFinish = async (values: { username: string; password: string }) => {
    try {
      const user = await LoginPage(values.username, values.password);
      if (user) {
        console.log("Đăng nhập thành công", user);
        // Xử lý khi đăng nhập thành công (ví dụ: điều hướng tới trang chủ)
      } else {
        setLoginError("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      setLoginError("Lỗi trong quá trình đăng nhập!");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="container mx-auto mt-4">
        <BreadcrumbComponent />
      </div>
      <section className="flex items-center justify-center flex-grow mt-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Login Form */}
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Đăng nhập
              </h2>
              <p className="mb-6 text-gray-500">
                Bạn chưa có tài khoản?{" "}
                <Link to="/đăng-ký" className="text-sm text-primary">
                  Đăng ký ngay{" "}
                </Link>
              </p>
              <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout="vertical"
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên đăng nhập!" },
                  ]}
                >
                  <Input
                    placeholder="Tên đăng nhập"
                    size="large"
                    className="px-4 py-2 w-full border border-gray-300 rounded-lg"
                  />
                </Form.Item>
                {loginError && <p className="text-red-500">{loginError}</p>}
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Mật Khẩu"
                    size="large"
                    className="px-4 py-2 w-full border border-gray-300 rounded-lg"
                  />
                </Form.Item>

                <div className="flex justify-between items-center">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Lưu đăng nhập</Checkbox>
                  </Form.Item>

                  <Link to="/quên-mật-khẩu" className="text-sm text-primary">
                    Quên mật khẩu?
                  </Link>
                </div>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-full bg-primary text-white py-2 rounded-lg"
                    style={{
                      backgroundColor: "#16A870",
                      borderColor: "#16A870",
                    }}
                  >
                    Đăng nhập
                  </Button>
                  <h4 className="flex pt-2 justify-center items-center">
                    Hoặc
                  </h4>
                </Form.Item>
                <Form.Item>
                  <Button icon={<GoogleOutlined />} size="large" block>
                    Continue with Google
                  </Button>
                </Form.Item>
              </Form>
            </div>

            {/* Login Image */}
            <div className="flex justify-center items-center">
              <img
                src="/assets/images/logo_loginn.jpg"
                alt="Login"
                className="w-full h-full max-w-xs rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:flex flex-col pt-5">
        <BenefitComponent />
        <AdvsComponent />
      </section>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default LoginPage;
