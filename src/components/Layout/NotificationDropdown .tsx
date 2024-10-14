import React from "react";
import { Button, List, Popover } from "antd";
import { BellOutlined } from "@ant-design/icons";

const notifications = [
  {
    title: "Có công việc làm vườn gấp trong ngày mới đăng tải",
    time: "10 phút trước",
  },
  {
    title: "Có công việc sửa laptop trong ngày mới đăng tải",
    time: "1 tiếng trước",
  },
  {
    title: "Có công việc gia sư cấp 1 vừa mới đăng tải",
    time: "1 phút trước",
  },
  {
    title: "Có công việc làm phụ bếp đang gấp trong ngày mới đăng tải",
    time: "15 phút trước",
  },
];

const NotificationDropdown = () => {
  const content = (
    <div style={{ width: "300px" }}>
      <List
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="#">{item.title}</a>}
              description={item.time}
            />
          </List.Item>
        )}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a href="#">Xem thêm</a>
      </div>
    </div>
  );

  return (
    // Sử dụng Popover để hiển thị danh sách thông báo khi click vào
    <Popover placement="bottomRight" content={content} trigger="click">
      <Button type="text" icon={<BellOutlined />} size="large">
        Thông báo
      </Button>
    </Popover>
  );
};

export default NotificationDropdown;
