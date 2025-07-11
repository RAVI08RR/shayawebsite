import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Add other routes here */}
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
