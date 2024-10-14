import React from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import Routers from "./routers/Routers";

function App() {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#16A870",
            colorPrimaryHover: "#138f5e",
          },
        }}
      >
        <Routers />
      </ConfigProvider>
    </div>
  );
}

export default App;
