import React from "react";
import { Row, Col } from "antd";

const FooterComponent: React.FC = () => {
  return (
    <div className="bg-gray-200 p-10 mt-5">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={6}>
          <h4 className="text-primary font-bold text-2xl mb-5">FindJobs</h4>
          <ul className="list-none pl-0">
            <li>FindJob</li>
            <li>Về FindJob</li>
            <li>Liên Hệ</li>
            <li>Hỏi Đáp</li>
            <li>Thoả Thuận Sử Dụng</li>
            <li>Quy Định Bảo Mật</li>
          </ul>
        </Col>
        <Col xs={24} md={6}>
          <h4 className="font-bold text-xl mb-5">Dành cho nhà tuyển dụng</h4>
          <ul className="list-none pl-0">
            <li>Đăng Ký Tuyển Dụng</li>
            <li>Tìm Kiếm Hồ Sơ</li>
            <li>Sản Phẩm Dịch Vụ Khác</li>
            <li>Liên Hệ</li>
          </ul>
        </Col>
        <Col xs={24} md={6}>
          <h4 className="font-bold text-xl mb-5">Dành cho người làm</h4>
          <ul className="list-none pl-0">
            <li>Đăng Ký Ứng Tuyển</li>
            <li>Tìm Kiếm Việc Phù Hợp</li>
            <li>Khu Vực Ứng Tuyển</li>
          </ul>
        </Col>
        <Col xs={24} md={6}>
          <h4 className="font-bold text-xl mb-5">Việc làm theo ngành nghề</h4>
          <ul className="list-none pl-0">
            <li>Kỹ thuật</li>
            <li>Nhà Cửa</li>
            <li>Thiết Kế</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default FooterComponent;
