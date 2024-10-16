import React, { useState } from "react";
import { Button, Select, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  MenuOutlined,
  FireOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import NotificationDropdown from "../../../components/Layout/NotificationDropdown ";

const { Option } = Select;

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/đăng-nhập");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
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
    <>
      {/* Header for Desktop */}
      <div className="lg:flex justify-between items-center py-1 pr-5 bg-white border-b border-gray-200 hidden">
        <div className="header-logo">
          <span
            className="ml-4 text-2xl font-bold text-[#16A870] font-mono cursor-pointer"
            onClick={handleLogoClick}
          >
            FindJobs
          </span>
        </div>

        <div className="menu-center flex flex-col w-full items-start md:flex-row md:w-auto justify-start md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-6 font-custom">
          <span className=" flex items-start ">
            <FireOutlined style={{ color: "#d32f2f" }} />
            <span className="ml-3 cursor-pointer ">Mới nhất</span>
          </span>

          <Dropdown overlay={categoryMenu}>
            <span className=" cursor-pointer flex ml-3">Tất cả danh mục</span>
          </Dropdown>

          <Dropdown overlay={recruiterMenu}>
            <span className=" cursor-pointer flex ml-3">Nhà tuyển dụng</span>
          </Dropdown>

          <Dropdown overlay={fanPageMenu}>
            <span className=" cursor-pointer flex ml-3">FanPage</span>
          </Dropdown>

          <Dropdown overlay={contactMenu}>
            <span className=" cursor-pointer flex ml-3">Liên Hệ</span>
          </Dropdown>
        </div>

        <div className="flex items-center">
          <div className="menu-right flex items-center mt-4 md:mt-0 w-full md:w-auto justify-start md:justify-end space-x-2">
            <CustomerServiceOutlined />
            <span className="support-text">Hỗ trợ</span>
          </div>
          {/* Thông báo */}
          <NotificationDropdown />
          <Button
            type="primary"
            icon={<UserOutlined />}
            className="ml-5 bg-[#16A870] border-[#16a870] hover:bg-[#138a64] hover:border-[#138a64]"
            onClick={handleLoginClick}
          >
            Đăng Nhập
          </Button>
        </div>
      </div>

      {/* Header for Mobile */}
      <div className="flex justify-between lg:hidden mx-5">
        <div className="header-logo">
          <span
            className="text-2xl font-bold text-[#16A870] cursor-pointer"
            onClick={handleLogoClick}
          >
            FindJobs
          </span>
        </div>

        <div className="relative">
          <button className="pt-2" onClick={handleOpen}>
            <MenuOutlined />
          </button>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute right-0 transition-transform transform ease-in-out duration-500 z-50 bg-white`}
          >
            <ul className="flex flex-col p-2 border border-gray-200 justify-center items-center">
              <li>
                <NotificationDropdown />
              </li>
              <li>
                {user ? (
                  <>
                    <p className=""> Xin chào, {user}</p>
                    <Link to="/đăng-xuất">Đăng xuất</Link>
                  </>
                ) : (
                  <Button
                    type="primary"
                    icon={<UserOutlined />}
                    className="bg-primary flex items-center justify-center hov"
                    onClick={handleLoginClick}
                  >
                    Đăng Nhập
                  </Button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
