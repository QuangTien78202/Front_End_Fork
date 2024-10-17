import React, { useState } from "react";
import { Button, Input, Form, Select, message } from "antd";
import SidebarMenu from "../../../components/Candidate/SidebarMenu";
import Header from "../../../components/Layout/HeaderComponent/Header";
import FooterComponent from "../../../components/Layout/FooterComponent/FooterComponent";
import ChangePasswordModal from "../../../components/Candidate/ChangePasswordModal"; // Import Modal

const { Option } = Select;

const onFinish = (values: any) => {
  console.log("Success:", values);
  message.success("Lưu thay đổi thành công!");
};

// Hàm xử lý khi có lỗi trong form
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
  message.error("Vui lòng nhập đầy đủ các trường bắt buộc!");
};

const PageProfileCandidate: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Mở Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Đóng Modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Header />

      <div className="flex bg-gray-100 h-screen">
        <div className="ml-20 mt-4">
          <SidebarMenu />
        </div>

        <div className="relative ml-20 mt-4 mb-6">
          <h1 className="text-2xl justify-between items-center font-semibold mb-6">
            Thông tin cá nhân
          </h1>
          <Button
            type="primary"
            shape="round"
            className="bg-primary absolute right-0 top-0"
          >
            Đăng ký thành viên ngay
          </Button>

          <Form
            layout="vertical"
            className="max-w-lg"
            onFinish={onFinish} // Xử lý khi submit thành công
            onFinishFailed={onFinishFailed} // Xử lý khi submit thất bại
          >
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Họ"
                name="lastName"
                className="col-span-1"
                rules={[
                  { required: true, message: "Vui lòng nhập họ!" },
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Họ chỉ được chứa chữ cái!",
                  },
                ]}
              >
                <Input placeholder="Nhập họ" />
              </Form.Item>
              <Form.Item
                label="Tên"
                name="firstName"
                className="col-span-1"
                rules={[
                  { required: true, message: "Vui lòng nhập tên!" },
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Tên chỉ được chứa chữ cái!",
                  },
                ]}
              >
                <Input placeholder="Nhập tên" />
              </Form.Item>
            </div>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không đúng định dạng!" },
              ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <div className="grid grid-cols-3 gap-4">
              <Form.Item
                label="Số điện thoại"
                name="phone"
                className="col-span-1"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Số điện thoại phải gồm 10 chữ số!",
                  },
                ]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item label="Nghề nghiệp" name="job" className="col-span-1">
                <Input placeholder="Nhập nghề nghiệp" />
              </Form.Item>
              <Form.Item
                label="Giới tính"
                name="gender"
                className="col-span-1"
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" },
                ]}
              >
                <Select placeholder="Chọn giới tính">
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input placeholder="Nhập địa chỉ" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="mt-4">
              Lưu thay đổi
            </Button>
          </Form>

          <div className=" flex justify-between mt-4">
            <Button type="link" className="text-blue-500" onClick={showModal}>
              Đổi mật khẩu
            </Button>
            <div>
              <span className="text-gray-600">
                Xác minh chính chủ?{" "}
                <Button type="link" className="text-red-500">
                  Tại đây
                </Button>
              </span>
              <p className="mt-1">
                Trạng thái: <span className="text-red-500">chưa xác minh</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <FooterComponent />
      </footer>

      {/* Gọi modal Đổi mật khẩu */}
      <ChangePasswordModal isVisible={isModalVisible} onCancel={handleCancel} />
    </>
  );
};

export default PageProfileCandidate;
