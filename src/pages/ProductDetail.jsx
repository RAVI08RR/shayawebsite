import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { allProducts } from '../data/products';

// Static product data for all detail pages
const staticProduct = {
  product: {
    name: 'MATCH SNEAK TRIMLESS I.O',
    product_code: '190451B3',
    description:
      'These environmentally friendly LED garden and pathway luminaires, create a pleasant light distribution with a high degree of visual comfort. These luminaires offer shielded glare free illumination on ground surface and are perfect for illuminating entrances, footpaths as well as garden and landscape architecture. Clean Lines and pure form are the underlying elements of this series of LED bollards, designed to provide light emission of 180°.',
    product_benefits: [
      'High luminous efficacy at reduced wattage',
      'Reduced maintenance',
      'Modern and timeless design',
      'Direct lighting (Downlight) products for glare-free general light down the horizontal plane',
      'All LED Downlighting products are tested for reliability and safety within their power consumption',
    ],
    area_of_application:
      'Suitable for general downlighting in office and low-density public areas.',
    available_finishes: [
      'Graphite black with white cone',
      'Graphite white with black cone',
      'Graphite black',
      'Graphite white',
      'Graphite grey',
    ],
  },
  product_specifications: [
    {
      id: 'KL-5560',
      voltage: '8W LED 2700K,3000K,4000K,5700K, Clear Polycarbonate',
      dimensions: '0100x 270mm',
      ies: 'KL-5560-BA--WW.IES\nKL-5560-BA--CW.IES\nKL-5560-BA--NW.IES',
      photometry: 'KL-5560-BA--WW.PDF\nKL-5560-BA--CW.PDF\nKL-5560-BA--NW.PDF',
      technical_datasheet: '5560.pdf',
    },
    {
      id: 'KL-5559',
      voltage: '8W LED 2700K,3000K,4000K,5700K, Clear Polycarbonate',
      dimensions: '0100x 440mm',
      ies: 'KL-5559-BA--WW.IES\nKL-5559-BA--CW.IES\nKL-5559-BA--NW.IES',
      photometry: 'KL-5559-BA--WW.PDF\nKL-5559-BA--CW.PDF\nKL-5559-BA--NW.PDF',
      technical_datasheet: '5559.pdf',
    },
    {
      id: 'KL-5558',
      voltage: '8W LED 2700K,3000K,4000K,5700K, Clear Polycarbonate',
      dimensions: '0100x 900mm',
      ies: 'KL-5558-BA--WW.IES\nKL-5558-BA--CW.IES\nKL-5558-BA--NW.IES',
      photometry: 'KL-5558-BA--WW.PDF\nKL-5558-BA--CW.PDF\nKL-5558-BA--NW.PDF',
      technical_datasheet: '5558.pdf',
    },
  ],
  related_products: [
    { name: 'Petit', type: 'Fixed Spotlight', image: '/images/petit.png' },
    { name: 'Omado', type: 'Fixed Spotlight', image: '/images/omado.png' },
    { name: 'Olev', type: 'Fixed Spotlight', image: '/images/olev.png' },
    { name: 'Atala', type: 'Fixed Spotlight', image: '/images/atala.png' },
  ],
};

export default function ProductDetail() {
  const { category, subcategory } = useParams();
  const subcategories = allProducts[category] || [];

  // Example images for the slider (replace with real images as needed)
  const images = [
    '/images/petit-adj.png',
    '/images/petit.png',
    '/images/petit-adj-blk.png',
    '/images/s-lumi-46-1.png',
  ];
  const [currentImage, setCurrentImage] = useState(1); // default to second image as in screenshot

  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);

  return (
    <div className="bg-white min-h-screen w-full lg:max-w-[1790px] mx-auto lg:px-[56px] px-[20px] pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 pt-8 mb-4">
        <ol className="list-reset flex items-center space-x-1">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <a href="/products" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <a href={`/products/${category}`} className="hover:underline">
              {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <a href={`/products/${category}/${subcategory}`} className="hover:underline">
              {subcategory?.charAt(0).toUpperCase() + subcategory?.slice(1)}
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li className="text-black">{staticProduct.product.name}</li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        {/* Image Slider/Carousel */}
        <div className="bg-white border rounded-xl p-8 flex-1 flex flex-col items-center min-w-[400px] max-w-[600px]">
          <div className="relative w-full flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-700 border border-gray-200 z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Main Image with Zoom */}
            <div className="w-[240px] h-[240px] mx-auto">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: staticProduct.product.name,
                    isFluidWidth: true,
                    src: images[currentImage],
                  },
                  largeImage: {
                    src: images[currentImage],
                    width: 1000,
                    height: 1000,
                  },
                  enlargedImageContainerDimensions: {
                    width: '250%', // Increase this to make the zoom box wider
                    height: '150%',
                  },
                  enlargedImageContainerStyle: {
                    marginLeft: '220px', // Adjust closer
                    marginTop: '-2rem',
                    borderRadius: '12px', // 👈 Rounded corners
                    overflow: 'hidden', // 👈 Ensures zoom image respects border radius
                    backgroundColor: '#f5f5f5',
                  },
                  lensStyle: {
                    backgroundColor: 'rgba(0,0,0,.1)',
                    border: '1px solid #ccc',
                  },
                }}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-700 border border-gray-200 z-10"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-4 mt-6 justify-center">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-14 h-14 rounded-lg border-2 ${currentImage === idx ? 'border-green-700 bg-white' : 'border-transparent bg-gray-100'} flex items-center justify-center transition-all`}
                aria-label={`Show image ${idx + 1}`}
              >
                <img src={img} alt="" className="w-10 h-10 object-contain" />
              </button>
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-marcellus font-normal mb-2">{staticProduct.product.name}</h2>
          <div className="text-[#222] text-xl font-bold mb-4">
            {staticProduct.product.product_code}
          </div>
          <button className="bg-green-800 text-white rounded-full px-8 py-2 mb-6 text-lg font-semibold w-fit">
            INQUIRE US
          </button>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            {staticProduct.product.description}
          </p>
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-2">PRODUCT DESCRIPTION</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {staticProduct.product.product_benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">PRODUCT BENEFITS</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {staticProduct.product.product_benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">AREA OF APPLICATION</h4>
          <p className="text-gray-700">{staticProduct.product.area_of_application}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">AVAILABLE FINISH</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {staticProduct.product.available_finishes.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Specifications Table */}
      <div className="mb-12">
        <h3 className="font-semibold text-lg text-center mb-6">PRODUCT SPECIFICATIONS</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr className="bg-[#F5F5F5]">
                <th className="py-4 px-3 font-marcellus font-semibold text-lg text-center border-b-2 border-[#222]">
                  ID
                </th>
                <th className="py-4 px-3 font-marcellus font-semibold text-lg text-center border-b-2 border-[#222]">
                  Wattage
                </th>
                <th className="py-4 px-3 font-marcellus font-semibold text-lg text-center border-b-2 border-[#222]">
                  Dimension
                </th>
                <th className="py-4 px-3 font-marcellus font-semibold text-lg text-center border-b-2 border-[#222]">
                  IES
                </th>
                <th className="py-4 px-3 font-marcellus font-semibold text-lg text-center border-b-2 border-[#222]">
                  Photometry
                </th>
                <th className="py-4 px-3 font-marcellus font-semibold text-lg text-center border-b-2 border-[#222]">
                  Technical Datasheet
                </th>
              </tr>
            </thead>
            <tbody>
              {staticProduct.product_specifications.map((spec, idx) => (
                <tr
                  key={idx}
                  className={`border-b-2 border-[#222] ${idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}
                >
                  <td className="py-4 px-3 align-top text-left">{spec.id}</td>
                  <td className="py-4 px-3 align-top text-left">{spec.voltage}</td>
                  <td className="py-4 px-3 align-top text-left">{spec.dimensions}</td>
                  <td className="py-4 px-3 align-top text-left whitespace-pre-line">{spec.ies}</td>
                  <td className="py-4 px-3 align-top text-left whitespace-pre-line">
                    {spec.photometry}
                  </td>
                  <td className="py-4 px-3 align-top text-left">
                    <a
                      href="#"
                      className="text-green-700 underline flex items-center gap-1"
                      download
                    >
                      {spec.technical_datasheet}
                      <svg
                        width={18}
                        height={18}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5 5 5-5M12 4v12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h3 className="font-semibold text-lg text-center mb-6">RELATED PRODUCTS</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-[80rem] mx-auto">
          {staticProduct.related_products.map((prod, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center relative min-h-[300px] "
            >
              <img
                src={prod.image || '/images/petit.png'}
                alt={prod.name}
                className="w-[140px] h-[140px] object-contain mb-6"
              />
              <div className="w-full flex flex-col items-start">
                <span className="absolute bottom-10 left-4 font-semibold text-lg text-green-800 mb-1">
                  {prod.name}
                </span>
                <span className="absolute bottom-4 left-4 text-gray-400 text-sm font-[400]">
                  {prod.type}
                </span>
                <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-green-800 rounded-md p-2">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subcategories Navigation */}
    </div>
  );
}
