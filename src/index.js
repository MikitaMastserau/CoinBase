import React from "react";
import ReactDOM from "react-dom/client";

import { MainLayout } from "components/MainLayout";
import { HomeContainer } from "pages/Home/containers/HomeContainer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MainLayout>
    <HomeContainer />
  </MainLayout>
);