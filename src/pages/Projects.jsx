import React from 'react';

const projects = [
  {
    name: 'Kempinski Hotel',
    location: 'Common Wealth of Dominic.',
    image: '/images/project-kempinski.webp',
  },
  {
    name: 'Gulf Medical University Thumbay',
    location: 'Ajman- United Arab Emirates.',
    image: '/images/project-gulf-medical.webp',
  },
  {
    name: 'Spring Village Mall',
    location: 'Dubai- United Arab Emirates.',
    image: '/images/project-spring-village.webp',
  },
  {
    name: 'Meydan',
    location: 'Dubai- United Arab Emirates.',
    image: '/images/project-meydan.webp',
  },
  {
    name: 'Bloom Marina',
    location: 'Abu Dhabi- United Arab Emirates.',
    image: '/images/project-bloom-marina.webp',
  },
  {
    name: 'MovenPick Hotel',
    location: 'Dubai- United Arab Emirates.',
    image: '/images/project-movenpick.webp',
  },
];

export default function Projects() {
  return (
    <div className="bg-white  min-h-screen w-full lg:max-w-[1790px] mx-auto lg:px-[60px] px-[20px] pb-16">
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
          <li className="text-black">Projects</li>
        </ol>
      </nav>

      {/* Heading */}
      <h1 className="text-4xl font-marcellus text-center mb-10">Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="flex flex-col">
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-[360px] object-cover rounded-2xl mb-4"
            />
            <span className="font-marcellus text-xl font-semibold text-[#222]">{proj.name}</span>
            <span className="text-gray-500 text-base mt-1">{proj.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
