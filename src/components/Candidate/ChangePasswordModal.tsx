import React from "react";
import { Modal, Form, Input, Button, message } from "antd";

interface ChangePasswordModalProps {
  isVisible: boolean;
  onCancel: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isVisible,
  onCancel,
}) => {
  const handleOk = (values: any) => {
    console.log("New password submitted:", values);
    message.success("Đổi mật khẩu thành công!");
    onCancel(); // Đóng modal sau khi submit thành công
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Vui lòng nhập đúng các trường bắt buộc!");
  };

  return (
    <Modal
      title="Đổi mật khẩu"
      visible={isVisible}
      onCancel={onCancel}
      footer={null} // Không hiển thị footer để nút lưu trong form
    >
      <Form
        layout="vertical"
        onFinish={handleOk} // Xử lý khi submit đổi mật khẩu
        onFinishFailed={handleFinishFailed} // Xử lý khi có lỗi
      >
        <Form.Item
          label="Mật khẩu cũ"
          name="oldPassword"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu cũ!" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu cũ" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới!" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu mới" />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Vui lòng xác nhận mật khẩu mới!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu xác nhận không khớp!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Xác nhận mật khẩu mới" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu thay đổi
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ChangePasswordModal;
