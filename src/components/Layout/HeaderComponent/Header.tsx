import React, { useState, useEffect } from "react";
import { Affix } from "antd"; // Giả sử bạn đang sử dụng Ant Design
import { TopHeader, HeaderComponent, MenuComponent } from "../../../components";

const Header: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 768) {
        // Kiểm tra kích thước màn hình
        if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false); // Ẩn header khi cuộn xuống
        } else {
          setIsHeaderVisible(true); // Hiển thị header khi cuộn lên
        }
      }

      setLastScrollY(currentScrollY); // Cập nhật vị trí cuộn cuối cùng
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Affix>
      <header>
        {isHeaderVisible && (
          <>
            <div className="hidden md:flex flex-col">
              <TopHeader />
            </div>
            <HeaderComponent />
            <div className="hidden md:flex flex-col">
              <MenuComponent />
            </div>
          </>
        )}
      </header>
    </Affix>
  );
};

export default Header;
