import React from "react";
import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const FooterComponent: React.FC = () => {
  return (
    <div className="bg-[#3b484e] p-8 mt-5">
      <Row gutter={[32, 32]}>
        {/* Cột FindJobs */}
        <Col xs={24} md={5}>
          <h4 className="text-primary text-2xl mb-5">FindJobs</h4>
          <ul className="list-none text-gray-500 pl-0">
            <li>FindJob</li>
            <li>Về FindJob</li>
            <li>Liên Hệ</li>
            <li>Hỏi Đáp</li>
            <li>Thoả Thuận Sử Dụng</li>
            <li>Quy Định Bảo Mật</li>
          </ul>
        </Col>

        {/* Cột Nhà tuyển dụng */}
        <Col xs={24} md={5}>
          <h4 className="text-xl text-white mb-5">Dành cho nhà tuyển dụng</h4>
          <ul className="list-none text-gray-500 pl-0">
            <li>Đăng Ký Tuyển Dụng</li>
            <li>Tìm Kiếm Hồ Sơ</li>
            <li>Sản Phẩm Dịch Vụ Khác</li>
            <li>Liên Hệ</li>
          </ul>
        </Col>

        {/* Cột Người làm */}
        <Col xs={24} md={5}>
          <h4 className="text-xl text-white mb-5">Dành cho người làm</h4>
          <ul className="list-none text-gray-500 pl-0">
            <li>Đăng Ký Ứng Tuyển</li>
            <li>Tìm Kiếm Việc Phù Hợp</li>
            <li>Khu Vực Ứng Tuyển</li>
          </ul>
        </Col>

        {/* Cột Ngành nghề */}
        <Col xs={24} md={5}>
          <h4 className="text-xl text-white mb-5">Việc làm theo ngành nghề</h4>
          <ul className="list-none text-gray-500 pl-0">
            <li>Kỹ thuật</li>
            <li>Nhà Cửa</li>
            <li>Thiết Kế</li>
          </ul>
        </Col>

        {/* Cột Mạng xã hội */}
        <Col xs={24} md={4}>
          <h4 className="text-xl text-white mb-5">Theo dõi chúng tôi</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FacebookOutlined className="text-2xl text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitterOutlined className="text-2xl text-blue-400 hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramOutlined className="text-2xl text-pink-500 hover:text-pink-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedinOutlined className="text-2xl text-blue-700 hover:text-blue-900" />
            </a>
          </div>
        </Col>
      </Row>

      {/* Dòng bản quyền */}
      <div className="text-center mt-10 text-gray-500">
        © 2024 FindJobs. All rights reserved.
      </div>
    </div>
  );
};

export default FooterComponent;
