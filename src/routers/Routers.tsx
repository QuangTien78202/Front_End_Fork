import React, { useState } from "react";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import { Spin } from "antd";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? <Spin /> : 1 < 2 ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
