import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/common/HomePage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import JobDetails from "../pages/common/JobDetails/JobDetails";
import Page404 from "../pages/common/404Page/404Page";
import CandidateProfilePage from "../pages/Candidate/CandidateProfilePage/CandidateProfilePage";

const AuthRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/đăng-nhập" element={<LoginPage />} />
          <Route path="/đăng-ký" element={<RegisterPage />} />
          <Route path="/quên-mật-khẩu" element={<ForgotPasswordPage />} />
          <Route path="/chi-tiết-công-việc" element={<JobDetails />} />
          <Route path="/candidate-profile" element={<CandidateProfilePage />} />
          <Route path="/chi-tiết-công-việc/:id" element={<JobDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthRouter;
