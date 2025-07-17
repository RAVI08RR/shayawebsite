import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/products';

export default function ProductList() {
  const { category, subcategory } = useParams();
  const subcat = allProducts[category]?.find((s) => s.slug === subcategory);

  if (!subcat) {
    return <div className="p-10 text-center text-red-600">Subcategory not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen w-full lg:max-w-[1790px] mx-auto lg:px-[56px] px-[20px] pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 pt-8 mb-4">
        <ol className="list-reset flex items-center space-x-1">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <Link to={`/products/${category}`} className="hover:underline">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li className="text-black">{subcat.name}</li>
        </ol>
      </nav>

      {/* Main Heading */}
      <h1 className="text-4xl font-marcellus text-center mt-8 mb-12">{subcat.name}</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {subcat.products.map((prod, idx) => (
          <div
            key={idx}
            className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center relative min-h-[300px]"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-[200px] h-[200px] object-contain mb-6"
            />
            <div className="w-full flex flex-col items-start">
              <span className="absolute bottom-10 left-4 font-[300] text-[16px] text-[#1F1F1F] font-lexend">
                {prod.name}
              </span>
              {prod.isNew && (
                <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  NEW
                </span>
              )}
              <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to={`/products/${category}/${subcategory}/${prod.slug}`}>
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
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
