import React, { useEffect, useState } from "react";
import { Button, Select } from "antd";
import {
  ToolOutlined,
  EnvironmentOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const SearchComponent: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
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

  return (
    <div className="  justify-center inline-block rounded-full py-2 px-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4 ">
        {/* Dropdown cho tất cả việc làm */}
        <Select
          size="middle"
          defaultValue="Tất cả việc làm"
          className="rounded-lg w-[150px]"
        >
          <Option value="all">Tất cả việc làm</Option>
        </Select>

        {/* Input cho vị trí */}
        <div className="flex items-center bg-white border-r mr-2 px-4 py-2 w-full max-w-md">
          <SearchOutlined className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Nhập vị trí muốn ứng tuyển"
            className="w-full border-none outline-none text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Lọc theo nghề nghiệp */}
        {isMenuVisible && (
          <div className="flex items-center border-r border-gray-300 pr-4">
            <ToolOutlined className="mr-2" />
            <Select
              size="middle"
              defaultValue="Lọc theo nghề nghiệp"
              className="w-[150px] border-none"
              bordered={false}
            >
              <Option value="marketing">Marketing</Option>
              <Option value="it">Công nghệ thông tin</Option>
              <Option value="sales">Kinh doanh</Option>
            </Select>
          </div>
        )}

        {/* Lọc theo tỉnh thành */}
        {isMenuVisible && (
          <div className="flex items-center border-r border-gray-300 pr-4">
            <EnvironmentOutlined className="mr-2" />
            <Select
              size="middle"
              defaultValue="Lọc theo tỉnh thành"
              className="w-[150px] border-none"
              bordered={false}
            >
              <Option value="hn">Hà Nội</Option>
              <Option value="hcm">Hồ Chí Minh</Option>
              <Option value="dn">Đà Nẵng</Option>
            </Select>
          </div>
        )}

        {/* Nút tìm kiếm */}
        <Button
          type="primary"
          size="middle"
          icon={<SearchOutlined />}
          className="rounded-lg bg-primary border-primary text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
        >
          Tìm việc
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;
