import { Button, Row, Col } from "antd";
import React from "react";

const AdvsComponent: React.FC = () => {
  return (
    <div className="my-4 w-full">
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Text Section */}
        <div className="w-full text-left ml-5">
          <h4 className="text-xl font-bold">
            Tạo Ấn Tượng Với Nhà Tuyển Dụng Cùng{" "}
            <span className="text-[#16A870]">FindJob</span>
          </h4>
          <p className="text-lg">
            Tạo Mẫu CV nhanh chóng và miễn phí, <br />
            để nhà tuyển dụng phải <strong>“Wow!”</strong> ngay khi nhìn thấy CV
            của bạn.
          </p>
          <button className=" flex bg-[#16A870] text-white font-bold py-2 px-6 rounded-lg mt-4 hover:bg-[#16A870]">
            Tạo CV Ngay
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-5/12 flex justify-end ">
          <img
            src="/assets/images/CV2.jpg"
            alt="CV Template 1"
            className="w-28 h-auto "
          />
          <img
            src="/assets/images/CV3.jpg"
            alt="CV Template 1"
            className="w-28 h-auto "
          />
          <img
            src="/assets/images/CV4.jpg"
            alt="CV Template 1"
            className="w-28 h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default AdvsComponent;
