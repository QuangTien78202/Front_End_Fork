import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenu: React.FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar-menu bg-white shadow-lg rounded-lg p-4 w-64">
      <div className="profile-section text-center mb-4">
        <img
          src="/assets/images/avata.jpg" // Đường dẫn đến hình đại diện
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-2"
        />
        <h2 className="text-xl font-semibold">Hoàng Gia Huy</h2>
      </div>

      <ul className="menu-list">
        <li
          className={`${
            location.pathname === "/thong-tin-ca-nhan"
              ? "bg-green-100 text-Prime"
              : ""
          } mb-2`}
        >
          <Link
            to="/thong-tin-ca-nhan"
            className="block py-2 px-4 rounded hover:bg-primary hover:text-white"
          >
            Thông tin cá nhân
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/cac-cong-viec-da-goi"
              ? "bg-green-100 text-Prime"
              : ""
          } mb-2`}
        >
          <Link
            to="/cac-cong-viec-da-goi"
            className="block py-2 px-4 rounded hover:bg-primary hover:text-white"
          >
            Các công việc đã gửi
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/cong-viec-da-lam"
              ? "bg-green-100 text-Prime"
              : ""
          } mb-2`}
        >
          <Link
            to="/cong-viec-da-lam"
            className="block py-2 px-4 rounded hover:bg-primary hover:text-white"
          >
            Công việc đã làm
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/cv-cua-ban"
              ? "hover:bg-primary hover:text-white"
              : ""
          } mb-2`}
        >
          <Link
            to="/cv-cua-ban"
            className="block py-2 px-4 rounded hover:bg-primary hover:text-white"
          >
            CV của bạn
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/chi-tieu"
              ? "hover:bg-primary hover:text-white"
              : ""
          } mb-2`}
        >
          <Link
            to="/chi-tieu"
            className="block py-2 px-4 rounded hover:bg-primary hover:text-white"
          >
            Chi tiêu
          </Link>
        </li>
      </ul>

      <div className="text-center mt-4">
        <button className="block w-full bg-red-500 text-white py-2 rounded">
          Đăng xuất
        </button>
      </div>

      <div className="text-center mt-4 text-gray-500">
        Điểm uy tín hiện có: <strong>99</strong>
      </div>

      <div className="text-center mt-4">
        <span className="text-blue-500">Bật thông báo</span> :{" "}
        <span className="text-green-500">Đã bật</span>
      </div>
    </div>
  );
};

export default SidebarMenu;
