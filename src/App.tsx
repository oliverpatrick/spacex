import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import LaunchesPage from "./pages/LaunchesPage";
import RocketsPage from "./pages/RocketsPage";
import HomePage from "./pages/HomePage";

const Hero = React.lazy(() => import("./components/Hero/Hero"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/launches" element={<LaunchesPage />} />
          <Route path="/rockets" element={<RocketsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
