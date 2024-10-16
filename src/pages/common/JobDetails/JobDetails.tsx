import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Skeleton, Button, Divider, Typography, message } from "antd";
import { MessageCircle } from "react-feather";
import Slider from "react-slick"; // Sử dụng react-slick
import CardJob from "../../../components/Layout/CardComponent/CardJob";
import { AdvsComponent, FooterComponent } from "../../../components";
import Header from "../../../components/Layout/HeaderComponent/Header";
import { jobList } from "../../../data";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import BreadcrumbComponent from "../../../components/Layout/BreadcrumbComponent";

const { Title, Text } = Typography;

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [currentJob, setCurrentJob] = useState<any>(null); // Bạn nên định nghĩa kiểu cụ thể cho công việc
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const jobId = parseInt(id!);
    if (isNaN(jobId)) {
      message.error("Không tìm thấy công việc. Quay lại trang chủ.");
      navigate("/"); // Điều hướng về trang chủ nếu không có id hợp lệ
      return;
    }

    const job = jobList.find((job) => job.id === jobId);
    if (job) {
      setCurrentJob(job);
      setLoading(false);
    } else {
      message.error("Không tìm thấy công việc. Quay lại trang chủ.");
      navigate("/"); // Điều hướng nếu không tìm thấy công việc
    }
  }, [id, navigate]);

  const similarJobs = jobList.filter(
    (job) => job.Title === currentJob?.Title && job.id !== currentJob.id
  );
  const displayJobs = showAll ? similarJobs : similarJobs.slice(0, 3);

  const CustomArrow = (props: any) => {
    const { className, style, onClick, direction } = props;
    return (
      <div
        className={`${
          direction === "left" ? "left-0" : "right-0"
        } absolute top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110`}
        style={{ ...style, zIndex: 1 }}
        onClick={onClick}
      >
        {direction === "left" ? (
          <LeftOutlined className="text-2xl" />
        ) : (
          <RightOutlined className="text-2xl" />
        )}
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4">
        <BreadcrumbComponent />
      </div>
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            {loading ? (
              <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <img
                    src={currentJob?.ImageUrl}
                    alt={currentJob?.Title}
                    className="w-full h-[200px] md:w-1/3 rounded-md translate-y-6 ..."
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-red-100 text-red-600 font-bold text-xs px-2 py-1 rounded mr-2">
                        Mới nhất
                      </span>
                      <Text className="text-xs text-gray-500">
                        20 phút trước
                      </Text>
                    </div>
                    <Title level={2} className="mb-2">
                      {currentJob?.Title}
                    </Title>
                    <Text className="text-green-600 text-xl font-semibold mb-4 block">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(currentJob?.Salary)}
                    </Text>
                    <Text>{currentJob?.Description}</Text>
                    <br />
                    <Button
                      type="primary"
                      className="mt-4 px-4 py-2 rounded-lg bg-primary border-primary w-full md:w-auto"
                    >
                      Ứng tuyển
                    </Button>
                  </div>
                </div>
                <Divider />
                <div className="mt-4 ">
                  <Title level={4} className="mb-4 text-primary">
                    Mô tả công việc
                  </Title>

                  {/* Mô tả công việc */}
                  <div className="prose prose-lg text-gray-700">
                    <ReactMarkdown>
                      {currentJob.detailedDescription}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar bên phải */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <Title level={4} className="font-semibold text-center">
                Thông tin người thuê
              </Title>
              {loading ? (
                <Skeleton avatar paragraph={{ rows: 3 }} active />
              ) : (
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src="/Assets/images/avata.jpg"
                    alt="Hoàng Gia Huy"
                    className="w-24 h-24 rounded-full border-2"
                  />
                  <div>
                    <Text className="text-primary font-semibold">
                      Anh/ Chị: Hoàng Gia Huy
                    </Text>
                    <br />
                    <Text>📞SĐT: 0912345570</Text>
                    <br />
                    <Text className="text-primary">
                      📍Địa chỉ: Thành phố Hồ Chí Minh
                    </Text>
                    <br />
                    <Text>👥Thành viên: Vàng</Text>
                  </div>
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <Text>Nhận thông báo việc làm tương tự qua email của bạn.</Text>
              <Button
                type="primary"
                className="mt-4 bg-primary border-primary w-full"
              >
                Đăng ký thành viên
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center bg-white p-4 rounded-lg shadow">
              <MessageCircle className="text-primary mr-2" />
              <Text className="text-primary font-semibold">Chat trợ giúp</Text>
            </div>
          </div>
        </div>

        <Divider />
        {/* Các công việc tương tự */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Các công việc tương tự</h3>
          <Slider {...sliderSettings} className="relative">
            {displayJobs.length > 0 ? (
              displayJobs.map((job) => (
                <CardJob
                  key={job.id}
                  {...job}
                  onClick={() => navigate(`/chi-tiết-công-việc/${job.id}`)}
                />
              ))
            ) : (
              <p>Không có công việc tương tự nào được tìm thấy.</p>
            )}
          </Slider>
        </div>
      </main>

      <section>
        <AdvsComponent />
      </section>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default JobDetails;
