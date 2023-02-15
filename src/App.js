import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Layout from "./components/Layout/Layout";

import HealthStatus from "./containers/HealthStatus";
import ResultPage from "./containers/ResultPage";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-status" element={<HealthStatus />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
