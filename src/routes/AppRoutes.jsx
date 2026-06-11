import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  );
};

export default AppRoutes;