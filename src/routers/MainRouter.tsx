import React from "react";
import HomePage from "../pages/common/HomePage";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Layout/HeaderComponent/Header";
import { Content } from "antd/es/layout/layout";
import { FooterComponent } from "../components";
import JobDetails from "../pages/common/JobDetails/JobDetails";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/job-details" element={<JobDetails />} />
              <Route path="/job-details/:id" element={<JobDetails />} />
            </Routes>
          </Content>
          <FooterComponent />
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
