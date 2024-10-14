import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const languageMenu = (
  <Menu>
    <Menu.Item key="1">Tiếng Việt</Menu.Item>
    <Menu.Item key="2">English</Menu.Item>
  </Menu>
);

const TopHeader: React.FC = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-6 py-2 bg-white text-gray-600 border-b border-gray-200 text-sm">
      {/* Left Section */}
      <div className="flex space-x-4">
        <span className="relative cursor-pointer hover:text-[#16a870] after:content-['|'] after:ml-3 after:text-gray-300 last:after:content-['']">
          About Us
        </span>
        <span className="relative cursor-pointer hover:text-[#16a870] after:content-['|'] after:ml-3 after:text-gray-300 last:after:content-['']">
          Tài khoản
        </span>
        <span className="relative cursor-pointer hover:text-[#16a870] after:content-['|'] after:ml-3 after:text-gray-300 last:after:content-['']">
          Việc của tôi
        </span>
        <span className="relative cursor-pointer hover:text-[#16a870] after:content-['']">
          Bật thông báo
        </span>
      </div>

      {/* Center Section */}
      <div className="hidden md:block text-center text-[#ffcccc]">
        <span className="text-base md:text-lg font-semibold">
          Hôm nay có 2 công việc chuyển nhà
        </span>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex space-x-4">
        <span>
          Cần giúp đỡ? Gọi chúng tôi:{" "}
          <span className="font-bold">+0929 XXXXXX</span>
        </span>
        <Dropdown overlay={languageMenu}>
          <span className="cursor-pointer flex items-center">
            Tiếng Việt <DownOutlined className="ml-1" />
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopHeader;
