import React from 'react';

const AboutUs = () => {
  const certifications = [
    '/images/img_images_removebg_preview.png',
    '/images/img_360_f_514182728.png',
    '/images/img_0c42438b9ee3225.png',
    '/images/img_images_1_removebg_preview.png',
    '/images/img_certification_o.png',
    '/images/img_download_removebg_preview.png',
  ];

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
          <li>About us</li>
        </ol>
      </nav>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-marcellus text-center mt-2 mb-6">About Us</h1>

      {/* Hero Section */}
      <section className="bg-[#232323] rounded-xl max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 py-8 md:py-12 md:px-12 mb-10">
        {/* Left: Text */}
        <div className="text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-marcellus font-normal leading-tight">
            LIGHTING BEYOND LIMITS, INSPIRED BY DESIGN
          </h2>
          <p className="text-base sm:text-lg font-lexend font-light">
            Shaya Lighting delivers innovative indoor, outdoor, and control solutions that combine
            modern design with unmatched performance, transforming ordinary spaces into
            extraordinary experiences.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-lexend font-medium text-sm hover:bg-[#0E4E14] transition flex  hover:text-white">
              VIEW DETAILS <img src="/images/link-arrow.svg" className="w-5 h-5" alt="arrow" />
            </button>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-lexend font-medium text-sm hover:bg-[#0E4E14] transition flex hover:text-white">
              SCHEDULE A CALL{' '}
              <img src="/images/link-arrow.svg" className="w-5 h-5  hover:text-white" alt="arrow" />
            </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center w-full">
          <img
            src="../../images/about-us.png"
            alt="Team meeting"
            className="rounded-lg w-full h-[600.46px] object-cover"
          />
        </div>
      </section>

      {/* About, Mission, Vision Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Left: About Us (col-6) */}
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between shadow-sm h-full">
          <h3 className="text-lg font-semibold mb-2">ABOUT US</h3>
          <p className="text-lg text-gray-700 mb-4">
            At Shaya Lighting, we believe light is more than illumination—it's an experience. We
            deliver innovative, premium solutions for modern spaces, including versatile indoor
            lighting, advanced track systems, and high-performance outdoor and architectural
            lighting. Combining cutting-edge technology, elegant design, and exceptional
            craftsmanship, we create efficient, sustainable, and inspiring environments—Lighting the
            Future with Excellence.
          </p>
          <button className="bg-[#0E4E14]  text-white px-4 py-2 rounded-full text-lg font-semibold  w-[40%]">
            THE STORY
          </button>
        </div>
        {/* Right: Mission and Vision stacked (col-6) */}
        <div className="lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-full m-6">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center border border-gray-200 shadow-sm">
            <img src="../../images/mission.svg" className="w-20 h-20 mb-2" alt="Mission" />
            <h3 className="text-lg font-semibold mb-2">MISSION</h3>
            <p className="text-sm text-gray-700 text-center">
              Transform everyday spaces into experiences with intelligent, artistic lighting
              solutions.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-center border border-gray-200 shadow-sm">
            <img src="../../images/vission.svg" className="w-20 h-20 mb-2" alt="Vision" />
            <h3 className="text-lg font-semibold mb-2">VISION</h3>
            <p className="text-sm text-gray-700 text-center">
              Inspire a brighter world through innovation, elegance, and lighting mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Story Behind the Brand */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Left: Text */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-marcellus text-center md:text-left mb-8">
            The story behind the brand
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Shaya Lighting was founded on a simple idea: light should inspire and transform, not
            just illuminate. From the start, our mission has been to combine advanced technology
            with timeless design, creating lighting solutions that are efficient, sustainable, and
            beautifully crafted.
          </p>
          <p className="text-gray-700 text-base">
            Driven by a passion for innovation, we've built a diverse portfolio ranging from elegant
            indoor fixtures to high-performance outdoor systems—all engineered with meticulous
            attention to detail.
            <br />
            <br />
            Today, Shaya Lighting is a trusted partner to architects, designers, and visionaries
            worldwide, united by a commitment to redefine how light shapes experience.
          </p>
        </div>
        {/* Right: Images stacked */}
        <div
          className="flex flex-col gap-4 justify-center md:m-6"
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <img
            src="../../images/our-story.png"
            alt="Sketch"
            className="rounded-lg object-cover w-full h-32 md:h-1/2"
          />
          <img
            src="../../images/story-2.png"
            alt="Team"
            className="rounded-lg object-cover w-full h-32 md:h-1/2"
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl sm:text-3xl font-marcellus text-center mb-8">
          More Than 100+ Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert, index) => (
            <img
              key={index}
              src={cert}
              alt={`Certification ${index + 1}`}
              className="w-10 sm:w-20 lg:w-20 h-10 sm:h-20 lg:h-20 object-contain"
            />
          ))}

          {certifications.map((cert, index) => (
            <img
              key={index}
              src={cert}
              alt={`Certification ${index + 1}`}
              className="w-10 sm:w-20 lg:w-20 h-10 sm:h-20 lg:h-20 object-contain"
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-marcellus text-center mb-10">
          Driven by lighting-obsessed creators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center  rounded-2xl p-4 ">
            <img
              src="../../images/Marcus_Hundnes.png"
              alt="Marcus Hundsnes"
              className="rounded-xl w-full h-64 object-cover mb-4"
            />
            <span className="font-semibold text-green-900 text-lg">Marcus Hundsnes</span>
            <span className="text-xs text-gray-700 mt-1">CEO</span>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center  rounded-2xl p-4 ">
            <img
              src="../../images/Marcus_Hundnes.png"
              alt="Maria Shevtsova"
              className="rounded-xl w-full h-64 object-cover mb-4"
            />
            <span className="font-semibold text-green-900 text-lg">Maria Shevtsova</span>
            <span className="text-xs text-gray-700 mt-1">CHIEF CREATIVE OFFICER</span>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center rounded-2xl p-4 ">
            <img
              src="../../images/Marcus_Hundnes.png"
              alt="Louis Holder"
              className="rounded-xl w-full h-64 object-cover mb-4"
            />
            <span className="font-semibold text-green-900 text-lg">Louis Holder</span>
            <span className="text-xs text-gray-700 mt-1">HEAD OF POST / POST PRODUCER</span>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-4 ">
            <img
              src="../../images/Marcus_Hundnes.png"
              alt="Sarah Winstanley"
              className="rounded-xl w-full h-64 object-cover mb-4"
            />
            <span className="font-semibold text-green-900 text-lg">Sarah Winstanley</span>
            <span className="text-xs text-gray-700 mt-1">HEAD OF ORIGINALS / HR</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-marcellus text-white mb-8">
            Connect to craft your lighting plan
          </h2>
          <button className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
