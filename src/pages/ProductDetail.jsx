import React from 'react';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { allProducts } from '../data/products';

export default function ProductDetail() {
  const { category, product } = useParams();

  // Find the product based on params
  const productData = allProducts[category]?.find((p) => p.slug === product);

  if (!productData) {
    return <div className="p-10 text-center text-red-600">Product not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen w-full lg:max-w-[1790px] mx-auto px-[56px] pb-16">
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
            <a href="/products/indoor" className="hover:underline">
              Indoor
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <a href="/products/indoor/spotlights" className="hover:underline">
              Spotlights & Downlights
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li className="text-black">{productData.name}</li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        {/* Image Carousel with Zoom */}
        <div className="bg-white border rounded-xl p-8 flex-1 flex flex-col items-center">
          <div className="w-[320px] h-[320px] mx-auto">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: productData.name,
                  isFluidWidth: true,
                  src: productData.images[0],
                },
                largeImage: {
                  src: productData.images[0],
                  width: 1200,
                  height: 1200,
                },
                enlargedImageContainerDimensions: {
                  width: '200%',
                  height: '200%',
                },
                lensStyle: { backgroundColor: 'rgba(0,0,0,.1)', border: '1px solid #ccc' },
              }}
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-10">
            {productData.images.map((img, idx) => (
              <img key={idx} src={img} alt="" className="w-10 h-10 object-contain border rounded" />
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-marcellus font-semibold mb-2">{productData.name}</h2>
          <div className="text-green-900 font-semibold mb-2">{productData.code}</div>
          <button className="bg-green-800 text-white rounded-[30px] px-6 py-2 mb-4">
            INQUIRE US
          </button>
          <p className="text-gray-700">{productData.description}</p>
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-2">PRODUCT DESCRIPTION</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            Luminaire made of extruded aluminium alloy (grade 6063) with die-cast aluminium
            components and non corrosive SS fasteners.
          </li>
          <li>Shielded light source.</li>
          <li>
            For optimum illumination, these luminaires can be supplied in three different heights.
          </li>
          <li>Reflector system made of spun aluminium (powder coated white).</li>
          <li>Non yellowing UV stabilized clear polycarbonate diffuser.</li>
          <li>Silicone gasket.</li>
          <li>
            Mounting plate of cast aluminium double powder coat with an anchorage unit and stainless
            steel fixing screws.
          </li>
          <li>Cable entries for through-wiring of mains supply cable.</li>
          <li>Integral constant current power supply.</li>
          <li>CRI80</li>
          <li>
            Prewired with LED driver and suitable for operation on 240V,50Hz single phase ac supply.
          </li>
          <li>Ordering code: KL-70XX-2CCT (Colour Temperature)</li>
          <li>Available CCT: 2700K,3000K,4000K,5700K</li>
        </ul>
      </div>

      {/* Product Benefits, Application, Finishes */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">PRODUCT BENEFITS</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {productData.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">AREA OF APPLICATION</h4>
          <p className="text-gray-700">{productData.application}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">AVAILABLE FINISH</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {productData.finishes.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Specifications Table */}
      <div className="mb-12">
        <h3 className="font-semibold text-lg mb-2">PRODUCT SPECIFICATIONS</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Wattage</th>
                <th className="p-2 border">Dimension</th>
                <th className="p-2 border">IES</th>
                <th className="p-2 border">Photometry</th>
                <th className="p-2 border">Technical Datasheet</th>
              </tr>
            </thead>
            <tbody>
              {productData.specifications.map((spec, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{spec.id}</td>
                  <td className="p-2 border">{spec.wattage}</td>
                  <td className="p-2 border">{spec.dimension}</td>
                  <td className="p-2 border">{spec.ies}</td>
                  <td className="p-2 border">{spec.photometry}</td>
                  <td className="p-2 border">
                    <a
                      href={`/pdfs/${spec.datasheet}`}
                      className="text-green-700 underline flex items-center gap-1"
                      download
                    >
                      {spec.datasheet}
                      <svg
                        width={16}
                        height={16}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {productData.related.map((cat, idx) => (
            <a
              href={`/products/${category}/${cat.slug}`}
              key={idx}
              className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center relative min-h-[220px]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-[100px] h-[100px] object-contain mb-6"
              />
              <span className="font-[300] text-[16px] text-[#1F1F1F] font-lexend">{cat.name}</span>
              <span className="text-gray-400 text-sm font-[400]">{cat.subtitle}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
