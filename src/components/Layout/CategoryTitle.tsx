import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd"; // Sử dụng MenuProps để định kiểu cho sự kiện onClick

const CategoryTitle: React.FC<{ title: string }> = ({ title }) => {
  const [selectedFilter, setSelectedFilter] = useState("Địa điểm");

  // Thêm kiểu MenuProps['onClick'] cho tham số e
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setSelectedFilter(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Ngành nghề">Ngành nghề</Menu.Item>
      <Menu.Item key="Địa điểm">Địa điểm</Menu.Item>
      <Menu.Item key="Mức lương">Mức lương</Menu.Item>
      <Menu.Item key="Kinh nghiệm">Kinh nghiệm</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-start justify-start mr-2 mb-5 mt-2 ">
      <Dropdown overlay={menu}>
        <Button size="large" className="rounded-full text-lg py-2 px-6">
          Lọc theo: {selectedFilter} <DownOutlined />
        </Button>
      </Dropdown>
      <h3 className="text-xl font-semibold text-left transition-colors cursor-pointer duration-500 hover:text-primary870 ml-4 mt-1">
        {title}
      </h3>

      {/* Dropdown lọc */}
    </div>
  );
};

export default CategoryTitle;
