import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
