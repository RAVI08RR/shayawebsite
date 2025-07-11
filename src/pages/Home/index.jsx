import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HeroSlider from '@/components/HeroSlider';
import FeaturedProduct from './FeaturedProduct';
import StatsSection from './StatsSection';
import WhoWeAreSection from './WhoWeAreSection';
import ExploreCatalogsSection from './ExploreCatalogsSection';
import IlluminatingInteriorsSection from './IlluminatingInteriorsSection';
import ModernLightingDubaiSection from './ModernLightingDubaiSection';
import ProcessSection from './ProcessSection';
import TestimonialSection from './TestimonialSection';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      title: 'Factory. Foundation. \nFuture.',
      subtitle: '03',
      description: 'Strong roots behind shining lighting products',
    },
  ];

  const featuredProducts = [
    { id: 1, name: 'INDOOR', image: '/images/img_mask_group.png' },
    { id: 2, name: 'OUTDOOR', image: '/images/img_mask_group.png' },
    { id: 3, name: 'CONTROLS', image: '/images/img_mask_group.png' },
  ];

  const projects = [
    {
      id: 1,
      type: 'INDOOR PROJECT',
      title: 'Old Stable View, Nottighams, Dubai',
      image: '/images/img_image_343.png',
    },
    {
      id: 2,
      type: 'OUTDOOR PROJECT',
      title: 'Villa Esperance, India',
      image: '/images/img_image_347.png',
    },
  ];

  const roomTypes = [
    { id: 1, name: 'Bathroom', image: '/images/img_image_345.png' },
    { id: 2, name: 'Interior', image: '/images/img_image_346.png' },
    { id: 3, name: 'Exterior', image: '/images/img_image_348.png' },
    { id: 4, name: 'Kitchen', image: '/images/img_image_349.png' },
  ];

  const catalogs = [
    {
      id: 1,
      title: 'Indoor Catalog',
      icon: '/images/img_layer_1.svg',
      downloadIcon: '/images/img_frame.svg',
    },
    {
      id: 2,
      title: 'outdoor Catalog',
      icon: '/images/img_group_169.svg',
      downloadIcon: '/images/img_frame.svg',
    },
    {
      id: 3,
      title: 'Controls Catalog',
      icon: '/images/img_frame_green_900_03.svg',
      downloadIcon: '/images/img_frame.svg',
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: 'On-Site Visit & Consultation',
      description:
        'We visit your location to understand your needs and recommend the right lighting solutions.',
      icon: '/images/img_17488728311579605530.svg',
    },
    {
      id: 2,
      title: 'Quotation & Custom Plan',
      description:
        'You receive a clear, competitive quote with a tailored lighting plan that fits your space and budget.',
      icon: '/images/img_11956056801571183078.svg',
    },
    {
      id: 3,
      title: 'Fast Delivery & Execution',
      description:
        'We ensure quick, on-time delivery and installation support, so your project stays on track.',
      icon: '/images/img_group.svg',
    },
  ];

  const certifications = [
    '/images/img_images_removebg_preview.png',
    '/images/img_360_f_514182728.png',
    '/images/img_0c42438b9ee3225.png',
    '/images/img_images_1_removebg_preview.png',
    '/images/img_certification_o.png',
    '/images/img_download_removebg_preview.png',
  ];

  return (
    <div className="bg-white">
      {/* <Header /> */}
      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Section */}
      <StatsSection />

      {/* Who We Are Section */}
      <WhoWeAreSection certifications={certifications} />

      {/* Featured Products */}
      <FeaturedProduct />

      {/* Explore Catalogs */}
      <ExploreCatalogsSection catalogs={catalogs} />

      {/* Illuminating Interiors */}
      <IlluminatingInteriorsSection projects={projects} />

      {/* Modern Lighting Designed in Dubai */}
      {/* <ModernLightingDubaiSection roomTypes={roomTypes} /> */}

      {/* Process Section */}
      <ProcessSection processSteps={processSteps} />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
