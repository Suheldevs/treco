import React from 'react';

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src="https://picsum.photos/id/1035/1920/600" 
          alt="Treco Engineering Header" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
          <h1 className="text-5xl font-bold mb-2">About Treco</h1>
          <p className="text-xl max-w-2xl text-center px-4">Engineering excellence and innovative solutions for a better tomorrow</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Story</h2>
            <p className="text-lg mb-4">
              Treco Engineering & Innovation was founded in 2018 with a clear purpose: to redefine 
              the boundaries of engineering excellence and sustainable innovation.
            </p>
            <p className="text-lg mb-4">
              What began as a small team of passionate engineers has grown into a global force
              for technological advancement and problem-solving prowess.
            </p>
            <p className="text-lg">
              Today, we continue to push the envelope of what's possible, leveraging cutting-edge
              technologies and methodologies to address the world's most pressing challenges.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/id/28/600/400" 
              alt="Treco Team at Work" 
              className="rounded-lg shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800">Vision & Mission</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Vision</h3>
              <p className="text-lg">
                To be the global leader in engineering solutions that positively impact lives and
                create a sustainable future for generations to come. We envision a world where innovative
                engineering solves humanity's greatest challenges.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h3>
              <p className="text-lg">
                To deliver exceptional engineering solutions through innovation, expertise, and
                collaboration. We are committed to exceeding client expectations while maintaining
                the highest standards of quality, integrity, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800">Our Core Values</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            These fundamental beliefs guide our actions, decisions, and interactions every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://picsum.photos/id/338/200/200" alt="Innovation" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Innovation</h3>
            <p>
              We embrace creativity and unconventional thinking to develop groundbreaking solutions
              that address complex engineering challenges.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://picsum.photos/id/634/200/200" alt="Excellence" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Excellence</h3>
            <p>
              We are committed to the highest standards of quality and performance in everything we do,
              constantly striving to exceed expectations.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://picsum.photos/id/111/200/200" alt="Sustainability" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Sustainability</h3>
            <p>
              We design with the future in mind, creating solutions that are environmentally
              responsible and contribute to a more sustainable world.
            </p>
          </div>

          {/* Value 4 */}
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://picsum.photos/id/447/200/200" alt="Integrity" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Integrity</h3>
            <p>
              We conduct ourselves with honesty, transparency, and ethical behavior in all our
              relationships and business dealings.
            </p>
          </div>

          {/* Value 5 */}
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://picsum.photos/id/648/200/200" alt="Collaboration" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Collaboration</h3>
            <p>
              We believe in the power of teamwork and partnership, working closely with clients
              and stakeholders to achieve shared goals.
            </p>
          </div>

          {/* Value 6 */}
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://picsum.photos/id/1025/200/200" alt="Empowerment" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Empowerment</h3>
            <p>
              We foster a culture where each team member is encouraged to grow, contribute, and
              make a meaningful impact on our projects and the world.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 text-center">
        <img 
          src="https://picsum.photos/id/1076/1920/600" 
          alt="Join Our Team" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-xl text-white mb-8">
            Become part of a team that's redefining what's possible in engineering and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              View Careers
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;