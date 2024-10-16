import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbComponent: React.FC = () => {
  const location = useLocation();

  // Tách đường dẫn URL thành các phần
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb separator=" / ">
      <Breadcrumb.Item>
        <Link to="/">Trang Chủ</Link>
      </Breadcrumb.Item>

      {pathnames.map((value, index) => {
        // Tạo link đường dẫn cho từng phần breadcrumb
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        // Nếu không phải phần cuối, hiển thị link
        return index + 1 !== pathnames.length ? (
          <Breadcrumb.Item key={to}>
            <Link to={to}>{decodeURIComponent(value)}</Link>
          </Breadcrumb.Item>
        ) : (
          // Nếu là phần cuối, chỉ hiển thị text (không phải link)
          <Breadcrumb.Item key={to}>
            {decodeURIComponent(value)}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
