import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DUBAI_COORDS = [25.17856, 55.33938];

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 px-4 pt-6 max-w-7xl mx-auto">
        <ol className="list-reset flex">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>Contact us</li>
        </ol>
      </nav>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-marcellus text-center mt-2 mb-6">Contact Us</h1>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#232323] rounded-xl overflow-hidden mb-10">
        {/* Left: Info */}
        <div className="p-8 flex flex-col justify-between text-white min-h-[400px]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-marcellus mb-8 leading-tight">
              CONNECT WITH US
              <br />
              TO ELEVATE YOUR SPACE.
            </h2>
            <div className="mb-6">
              <div className="mb-2 font-semibold">CALL US</div>
              <div className="mb-4 text-base">+971 4 3977274</div>
              <div className="mb-2 font-semibold">EMAIL</div>
              <div className="mb-4 text-base">sales@shayalighting.com</div>
              <div className="mb-2 font-semibold">LOCATION</div>
              <div className="mb-4 text-base">
                Show room #G1, Al Marri 7 building besides Dewa Power Station, Manama Street 51,
                Ras-Al-Khor Industrial area -1, Dubai - UAE
              </div>
            </div>
            <div className="mt-8">
              <div className="mb-2 font-semibold">FOLLOW US</div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-green-900 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <img src="/images/fb.svg" alt="fb" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-green-900 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <img src="/images/insta.svg" alt="ig" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-green-900 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <img src="/images/linkdin.svg" alt="in" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-green-900 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <img src="/images/pintrest.svg" alt="pi" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="p-8 bg-[#232323] text-white flex flex-col justify-center">
          <div className="mb-6 text-base text-gray-200">
            Discover innovative lighting solutions tailored to your unique vision and requirements.
            Our team is ready to assist you in bringing exceptional spaces to life.
            <br />
            Fill out the form or email us here:{' '}
            <span className="underline">info@shayalighting.com</span>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 text-white placeholder-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 text-white placeholder-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone*"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 text-white placeholder-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full bg-transparent border-b border-gray-400 py-2 px-1 text-white placeholder-gray-300 focus:outline-none resize-none"
                rows={3}
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="bg-white text-green-900 px-8 py-2 rounded-full font-semibold text-base hover:bg-gray-100 transition w-fit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
          <MapContainer
            center={DUBAI_COORDS}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=Vr7vYidbTpPfM7Mt6rl9"
              attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            />
            <Marker position={DUBAI_COORDS}>
              <Popup>
                Shaya Lighting
                <br />
                Showroom, Dubai
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
