import React from "react";
import { Link } from "react-router-dom";
import "./404Page.css";
import {
  FooterComponent,
  HeaderComponent,
  MenuComponent,
  TopHeader,
} from "../../../components";

const Page404 = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <HeaderComponent></HeaderComponent>
      <MenuComponent></MenuComponent>
      <div className="page-404">
        <h1>404</h1>
        <p>Page not found</p>
        <p>Liên kết bạn nhấp vào có thể bị hỏng hoặc trang có thể đã bị xóa.</p>
        <p>
          Truy cập <Link to="/">Trang chủ</Link> hoặc{" "}
          <Link to="/contact">Liên hệ với chúng tôi</Link> về vấn đề này.
        </p>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm ..." />
        </div>
        <Link to="/" className="back-home">
          Quay lại Trang Chủ
        </Link>
      </div>
      <div>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
};

export default Page404;
