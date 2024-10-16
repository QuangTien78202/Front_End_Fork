import React, { useState, useEffect } from "react";
import { Button, Popover, Badge, Tabs } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { notifications } from "../../data";
interface Notification {
  title: string;
  time: string;
  read: boolean;
}

const NotificationDropdown = () => {
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("all"); // Tab state

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 giây
    return () => clearTimeout(timer);
  }, []);

  const skeletonLoader = (
    <div className="w-80 max-h-96 overflow-y-auto bg-white shadow-lg rounded-lg p-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded-full w-1/2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );

  // Filter notifications based on read status
  const unreadNotifications = notifications.filter((n) => !n.read);
  const allNotifications = notifications;

  // Render notifications based on the selected tab
  const renderNotifications = (data: Notification[]) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
        >
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
            <BellOutlined />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-500 hover:text-primary">
              {item.title}
            </p>
            <p className="text-gray-500 text-sm">{item.time}</p>
          </div>
        </div>
      ))}
      <div className="text-center py-3">
        <a
          href="#"
          className="text-gray-300 hover:underline hover:text-primary"
          onClick={() => navigate("/notifications")}
        >
          Xem thêm
        </a>
      </div>
    </div>
  );

  const content = (
    <div className="w-80 max-h-96 overflow-y-auto bg-white shadow-lg rounded-lg">
      {loading ? (
        skeletonLoader
      ) : (
        <Tabs
          defaultActiveKey="all"
          activeKey={currentTab}
          onChange={(key) => setCurrentTab(key)}
          className="ml-2"
        >
          <Tabs.TabPane tab="Tất cả" key="all">
            {renderNotifications(allNotifications)}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Chưa đọc" key="unread">
            {renderNotifications(unreadNotifications)}
          </Tabs.TabPane>
        </Tabs>
      )}
    </div>
  );

  return (
    <Popover placement="bottomRight" content={content} trigger="click">
      <Badge count={unreadNotifications.length} offset={[-10, 10]}>
        <Button type="text" icon={<BellOutlined />} size="large" />
      </Badge>
    </Popover>
  );
};

export default NotificationDropdown;
