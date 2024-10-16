import React from "react";
import { Form, Input, Button, Row, Col, Segmented } from "antd";
import { FooterComponent } from "../../components";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/HeaderComponent/Header";
import BreadcrumbComponent from "../../components/Layout/BreadcrumbComponent";

const ForgotPasswordPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4">
        <BreadcrumbComponent />
      </div>
      <div className="flex flex-container justify-center mt-7">
        <div
          className="container"
          style={{ maxWidth: "1200px", width: "100%" }}
        >
          <Row justify="center" style={{ marginBottom: "20px" }}>
            <Col span={24} style={{ textAlign: "center" }}>
              <h2 className="forgot-password-title">Quên mật khẩu</h2>
              <p className="forgot-password-subtitle">
                Nhập email đã đăng ký của bạn và chúng tôi sẽ gửi liên kết để
                đặt lại mật khẩu.
              </p>
            </Col>
          </Row>

          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} md={12} lg={10}>
              <div className="forgot-password-form-container ">
                <Form
                  name="forgot-password"
                  onFinish={onFinish}
                  layout="vertical"
                >
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

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        backgroundColor: "#16A870",
                        borderColor: "#16A870",
                      }}
                      block
                    >
                      Gửi yêu cầu đặt lại mật khẩu
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link to="/đăng-nhập" className="text-sm text-primary">
                      Quay lại trang đăng nhập
                    </Link>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default ForgotPasswordPage;
