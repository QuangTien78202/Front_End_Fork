import React, { useState } from "react";
import { Input, Button, Dropdown, Menu } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  DownOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import NotificationDropdown from "../NotificationDropdown ";

const jobMenu = (
  <Menu>
    <Menu.Item key="1">Kỹ thuật</Menu.Item>
    <Menu.Item key="2">Giáo dục</Menu.Item>
    <Menu.Item key="3">Kinh doanh</Menu.Item>
    <Menu.Item key="4">Kỹ thuật</Menu.Item>
    <Menu.Item key="5">Giáo dục</Menu.Item>
    <Menu.Item key="6">Kinh doanh</Menu.Item>
  </Menu>
);

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState("mail");
  const [user, setUser] = useState(null);

  const onClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log("open ne", isOpen);
  };

  return (
    <>
      <div className="lg:flex justify-between items-center py-1 pr-5 bg-white border border-b-1 hidden border-[#eee] ">
        <div className="header-logo ">
          <span className="logo-text ml-4" onClick={handleLogoClick}>
            FindJobs
          </span>
        </div>
        <div className="header-search">
          <Dropdown overlay={jobMenu}>
            <Button>
              Tất cả việc làm <DownOutlined />
            </Button>
          </Dropdown>
          <Input
            placeholder="Tìm kiếm công việc....."
            className="search-input"
          />
          <Button
            style={{ backgroundColor: "#16A870", borderColor: "#16A870" }}
            type="primary"
            icon={<SearchOutlined />}
          />
        </div>
        <div className="header-actions">
          <NotificationDropdown />

          <Button
            type="primary"
            icon={<UserOutlined />}
            className="login-button"
            onClick={handleLoginClick}
          >
            Đăng Nhập
          </Button>
        </div>
      </div>

      {/* header cho mobile */}
      <div className="flex justify-between lg:hidden mx-5">
        <div className="header-logo">
          <span className="logo-text" onClick={handleLogoClick}>
            FindJobs
          </span>
        </div>

        <div className="relative">
          <button className="pt-2" onClick={handleOpen}>
            <MenuOutlined />
          </button>
          <div
            className={`${
              isOpen ? "flex" : " hidden"
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
                    <Link to="/logout">Đăng xuất</Link>
                  </>
                ) : (
                  <Button
                    type="primary"
                    icon={<UserOutlined />}
                    className=" flex bg-primary items-center justify-center"
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
