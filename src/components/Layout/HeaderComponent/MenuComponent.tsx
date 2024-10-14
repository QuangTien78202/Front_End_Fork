import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  InfoCircleOutlined,
  FireOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const MenuComponent: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        // Kiểm tra kích thước màn hình
        setIsMenuVisible(false); // Ẩn MenuComponent khi cuộn
      } else {
        setIsMenuVisible(true); // Hiển thị MenuComponent trên màn hình lớn hơn
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const jobMenu = (
    <Menu>
      <Menu.Item key="1">Việc làm IT</Menu.Item>
      <Menu.Item key="2">Việc làm Marketing</Menu.Item>
      <Menu.Item key="3">Việc làm Kinh doanh</Menu.Item>
    </Menu>
  );

  const categoryMenu = (
    <Menu>
      <Menu.Item key="1">Kỹ Thuật</Menu.Item>
      <Menu.Item key="2">Nội Trợ</Menu.Item>
      <Menu.Item key="3">Giáo dục</Menu.Item>
    </Menu>
  );

  const recruiterMenu = (
    <Menu>
      <Menu.Item key="1">Nhà tuyển dụng 1</Menu.Item>
      <Menu.Item key="2">Nhà tuyển dụng 2</Menu.Item>
    </Menu>
  );

  const fanPageMenu = (
    <Menu>
      <Menu.Item key="1">FanPage 1</Menu.Item>
      <Menu.Item key="2">FanPage 2</Menu.Item>
    </Menu>
  );

  const contactMenu = (
    <Menu>
      <Menu.Item key="1">Liên hệ 1</Menu.Item>
      <Menu.Item key="2">Liên hệ 2</Menu.Item>
    </Menu>
  );

  return (
    <div className="menu-container flex flex-col md:flex-row justify-between items-center py-2 px-6 bg-white border-b border-gray-200">
      {/* Left Section */}
      <div className="menu-left flex mb-2 ml-3 mr-4 md:mb-0 w-full md:w-auto">
        <Dropdown overlay={jobMenu}>
          <Button
            type="primary"
            icon={<InfoCircleOutlined />}
            className="menu-button bg-[#16A870]"
          >
            Tất cả việc làm <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      {/* Center Section */}
      <div className="menu-center flex flex-col w-full items-start md:flex-row md:w-auto justify-start md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-4">
        <span className=" flex items-start">
          <FireOutlined style={{ color: "#d32f2f" }} />
          <span className="ml-2">Mới nhất</span>
        </span>

        <Dropdown overlay={categoryMenu}>
          <span className=" cursor-pointer flex">
            Tất cả danh mục <DownOutlined className="ml-1" />
          </span>
        </Dropdown>

        <Dropdown overlay={recruiterMenu}>
          <span className=" cursor-pointer flex">
            Nhà tuyển dụng <DownOutlined className="ml-1" />
          </span>
        </Dropdown>

        <Dropdown overlay={fanPageMenu}>
          <span className=" cursor-pointer flex ">
            FanPage <DownOutlined className="ml-1" />
          </span>
        </Dropdown>

        <Dropdown overlay={contactMenu}>
          <span className=" cursor-pointer flex">
            Liên Hệ <DownOutlined className="ml-1" />
          </span>
        </Dropdown>
      </div>

      {/* Right Section */}
      <div className="menu-right flex items-center mt-4 md:mt-0 w-full md:w-auto justify-start md:justify-end space-x-2">
        <CustomerServiceOutlined />
        <span className="support-text">Hỗ trợ</span>
      </div>
    </div>
  );
};

export default MenuComponent;
