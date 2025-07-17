import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs';
import Categories from './pages/Categories';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Projects from './pages/Projects';
import Blog from './pages/Blogs/Blog';

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products/spotlights" element={<Categories />} />
        <Route path="/products/:category/:subcategory/:product" element={<ProductDetail />} />
        <Route path="/products/:category/:subcategory" element={<ProductList />} />
        {/* Add other routes here */}
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
