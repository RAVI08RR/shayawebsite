import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Add other routes here */}
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
