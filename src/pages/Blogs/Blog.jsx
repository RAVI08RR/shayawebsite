import React from 'react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    image: '/images/blog-1.png',
    category: 'Design Philosophy',
    title: 'The Void Between Light and Shadow',
    excerpt:
      'Exploring the delicate balance where darkness yields to illumination, creating spaces that breathe with contrast and intention.',
  },
  {
    id: 2,
    image: '/images/blog-2.png',
    category: 'Craftsmanship',
    title: 'Forged in Darkness, Born in Light',
    excerpt:
      'The meticulous journey of transforming raw materials into luminous installations that transcend mere functionality.',
  },
  {
    id: 3,
    image: '/images/blog-3.png',
    category: 'Innovation',
    title: 'Sculpting with Photons',
    excerpt:
      'How our designers harness cutting-edge technology to push the boundaries of what light can achieve in contemporary spaces.',
  },
  {
    id: 4,
    image: '/images/blog-4.png',
    category: 'Design Narrative',
    title: 'Echoes of Soft Light',
    excerpt:
      'Soft, ambient lighting that whispers rather than shouts — shaping emotion, comfort, and calm in every corner. A story of serenity told through glow.',
  },
  {
    id: 5,
    image: '/images/blog-5.png',
    category: 'Creative Spaces',
    title: 'Layered Light Living',
    excerpt:
      'True design lives in layers. Learn how to blend ambient, task, and accent lighting for depth, comfort, and intentional atmosphere in every room.',
  },
  {
    id: 6,
    image: '/images/blog-6.png',
    category: 'Light Philosophy',
    title: 'Quiet Glow, Bold Impact',
    excerpt:
      'Minimal lighting, maximum presence. Explore how restrained design choices create powerful visual statements in refined spaces.',
  },
  {
    id: 7,
    image: '/images/blog-7.png',
    category: 'Design Insight',
    title: 'Geometry of Glow',
    excerpt:
      'Where form meets function, and light follows structure. Discover why architectural lines and lighting elements align to shape depth, rhythm, and harmony in modern spaces.',
  },
  {
    id: 8,
    image: '/images/blog-8.png',
    category: 'Art of Illumination',
    title: 'Sculpting Space with Light',
    excerpt:
      'Light shapes more than sight—it carves volume, frames architecture, and creates emotional resonance in space.',
  },
  {
    id: 9,
    image: '/images/blog-9.png',
    category: 'Craft & Composition',
    title: 'The Texture of Light',
    excerpt:
      'See how materials interact with light—defining, reflecting, and absorbing to create tactile and visual depth.',
  },
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen w-full lg:max-w-[1790px] mx-auto lg:px-[56px] px-[20px] pb-16">
      {/* Breadcrumb */}
      <nav className="text-[16px] text-gray-500 pt-8 mb-4">
        <ol className="list-reset flex items-center space-x-1">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>

          <li className="text-[black]">Blog</li>
        </ol>
      </nav>
      {/* Page Title */}
      <h1 className="text-center font-marcellus lg:text-[55px] mt-2 mb-6">Blog</h1>
      {/* Hero Section */}
      <section
        className="w-full rounded-xl overflow-hidden mb-10"
        style={{ background: 'linear-gradient(90deg, #222 60%, #444 100%)' }}
      >
        <div className="relative w-full h-[460px] md:h-[420px] flex items-center px-8 md:px-16">
          <div className="z-10 max-w-[45rem]">
            <h2 className="text-[white] font-marcellus text-[30px] lg:text-[56px] md:text-4xl lg:leading-[55px] mb-6">
              ELEVATING SPACES WITH
              <br />
              LIGHT AND PURPOSE
            </h2>
            <p className="text-white text-xs md:text-sm mb-5 w-[56%]">
              At Shaya, we craft lighting that does more than shine—it enhances mood, function, and
              style, transforming everyday spaces into meaningful experiences.
            </p>
            <Button className="bg-white text-[#0E4E14] text-base font-semibold px-6 py-2 rounded-full flex items-center gap-3 hover:bg-gray-100 transition p-5 w-[150px] text-center explore-btn">
              EXPLORE
            </Button>
          </div>
          <div className="absolute inset-0">
            <img
              src="/images/blog-bg.png"
              alt="Blog Hero"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        </div>
      </section>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="group bg-white rounded-2xl  duration-200 flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[220px] object-cover rounded-2xl mb-4"
            />
            <span className="text-[16px] text-gray-400 mb-1 font-lexend font-[300]">
              {post.category}
            </span>
            <h3 className="font-marcellus text-[24px] font-[400] text-[#222] mb-1 group-hover:text-[#0E4E14] transition-colors duration-200">
              {post.title}
            </h3>
            <p className="text-xs text-gray-600 mb-4 flex-1">{post.excerpt}</p>
            <a
              href="#"
              className="text-[16px] text-[#0A0A0A] font-lexend font-[300] flex items-center gap-1 hover:underline mt-auto mb-2 group-hover:text-[#0E4E14]"
            >
              Read More <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
