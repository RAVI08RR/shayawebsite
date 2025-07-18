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
    <>
      <div className="bg-white min-h-screen w-full px-4 sm:px-6 lg:px-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 px-4 pt-6 w-full   mx-auto">
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
        <section className="bg-[#232323] lg:rounded-xl w-full lg:max-w-[1790px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6  py-8 md:py-12 px-4 sm:px-6 lg:px-16 mb-10">
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
                <img
                  src="/images/link-arrow.svg"
                  className="w-5 h-5  hover:text-white"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center w-full">
            <img
              src="../../images/about-us.png"
              alt="Team meeting"
              className="rounded-lg w-[90%] h-[600.46px] object-cover"
            />
          </div>
        </section>

        {/* About, Mission, Vision Cards */}
        <section className=" w-full lg:max-w-[1790px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Left: About Us (col-6) */}
          <div className="bg-gray-50 rounded-xl p-8 flex flex-col justify-between shadow-sm h-full lg:px-[50px]">
            <h3 className="text-lg font-semibold mb-2">ABOUT US</h3>
            <p className="text-lg text-gray-700 mb-4">
              At Shaya Lighting, we believe light is more than illumination—it's an experience. We
              deliver innovative, premium solutions for modern spaces, including versatile indoor
              lighting, advanced track systems, and high-performance outdoor and architectural
              lighting. Combining cutting-edge technology, elegant design, and exceptional
              craftsmanship, we create efficient, sustainable, and inspiring environments—Lighting
              the Future with Excellence.
            </p>
            <button className="bg-[#0E4E14]  text-white px-4 py-2 rounded-full text-lg font-semibold  lg:w-[40%]">
              THE STORY
            </button>
          </div>
          {/* Right: Mission and Vision stacked (col-6) */}
          <div className="lg:mx-3 md:mx-5 grid grid-cols-1 md:grid-cols-2 gap-6 h-full align-middle px-[20px] lg:px-0">
            <div className="bg-white rounded-xl p-6 flex flex-col items-center border border-gray-200 shadow-sm justify-center">
              <img src="../../images/mission.svg" className="w-20 h-20 mb-2" alt="Mission" />
              <h3 className="text-lg font-semibold mb-2">MISSION</h3>
              <p className="text-sm text-gray-700 text-center">
                Transform everyday spaces into experiences with intelligent, artistic lighting
                solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center border border-gray-200 shadow-sm justify-center">
              <img src="../../images/vission.svg" className="w-20 h-20 mb-2" alt="Vision" />
              <h3 className="text-lg font-semibold mb-2">VISION</h3>
              <p className="text-sm text-gray-700 text-center">
                Inspire a brighter world through innovation, elegance, and lighting mastery.
              </p>
            </div>
          </div>
        </section>

        {/* Story Behind the Brand */}
        <section className="w-full lg:max-w-[1790px] mx-auto px-0 md:px-8 lg:px-0 py-16 md:py-20">
          <h2 className="text-4xl md:text-5xl font-marcellus text-center mb-6 md:mb-8">
            The story behind the brand
          </h2>
          <div className="w-full border-t border-gray-200 mb-10"></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
            {/* Left: Text */}
            <div className="flex-1 lg:max-w-xl text-left px-4 md:px-0">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Shaya Lighting was founded on a simple idea: light should inspire and transform, not
                just illuminate. From the start, our mission has been to combine advanced technology
                with timeless design, creating lighting solutions that are efficient, sustainable,
                and beautifully crafted.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Driven by a passion for innovation, we’ve built a diverse portfolio ranging from
                elegant indoor fixtures to high-performance outdoor systems—all engineered with
                meticulous attention to detail.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Shaya Lighting is a trusted partner to architects, designers, and visionaries
                worldwide, united by a commitment to redefine how light shapes experience.
              </p>
            </div>
            {/* Right: Images side by side */}
            <div className="flex-1 flex flex-row gap-6 justify-center items-center px-4 md:px-0">
              <img
                src="../../images/our-story.png"
                alt="Sketch"
                className="rounded-2xl object-cover w-1/2 h-[260px] md:h-[320px] max-w-[220px] bg-gray-100"
                style={{ minWidth: '140px' }}
              />
              <img
                src="../../images/story-2.png"
                alt="Team"
                className="rounded-2xl object-cover w-1/2 h-[260px] md:h-[320px] max-w-[620px] bg-gray-100"
                style={{ minWidth: '440px' }}
              />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className=" w-full lg:max-w-[1790px] mx-auto px-2 mb-16">
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
        <section className=" w-full lg:max-w-[1790px] mx-autopx-2 mb-16">
          <h2 className="text-3xl font-marcellus text-center mb-10">
            Driven by lighting-obsessed creators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-start rounded-2xl p-4 ">
              <img
                src="../../images/Marcus_Hundnes.png"
                alt="Marcus Hundsnes"
                className="rounded-xl w-full h-70 object-cover mb-4"
              />
              <span className="font-semibold text-green-900 text-[24px]">Marcus Hundsnes</span>
              <span className="text-xs text-gray-700 mt-1">CEO</span>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-start  rounded-2xl p-4 ">
              <img
                src="../../images/Maria_Shevtsova.png"
                alt="Maria Shevtsova"
                className="rounded-xl w-full h-70 object-cover mb-4"
              />
              <span className="font-semibold text-green-900 text-[24px]">Maria Shevtsova</span>
              <span className="text-xs text-gray-700 mt-1">CHIEF CREATIVE OFFICER</span>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-start rounded-2xl p-4 ">
              <img
                src="../../images/Louis_Holder.png"
                alt="Louis Holder"
                className="rounded-xl w-full h-70 object-cover mb-4"
              />
              <span className="font-semibold text-green-900 text-[24px]">Louis Holder</span>
              <span className="text-xs text-gray-700 mt-1">HEAD OF POST / POST PRODUCER</span>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-start  rounded-2xl p-4  ">
              <img
                src="../../images/Sarah_Winstanley.png"
                alt="Sarah Winstanley"
                className="rounded-xl w-full h-70 object-cover mb-4"
              />
              <span className="font-semibold text-green-900 text-[24px]">Sarah Winstanley</span>
              <span className="text-xs text-gray-700 mt-1">HEAD OF ORIGINALS / HR</span>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
      </div>
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
    </>
  );
};

export default AboutUs;
