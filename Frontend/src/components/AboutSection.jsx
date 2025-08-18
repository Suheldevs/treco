import React from "react";

const AboutSection = () => {
  return (
    <section className="relative lg:py-14 md:py-12 py-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Keep the original header section which is already good */}
      <div className="absolute -z-10 top-0 left-0 w-64 h-64 bg-sky-100 rounded-full -translate-y-1/2 -translate-x-1/4 opacity-50"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-sky-50 rounded-full translate-y-1/3 translate-x-1/4 opacity-70"></div>
``
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h2 className="inline-block relative">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400">
              About A-Mad Electricals
            </span>
            <div className="h-2 w-2/3 bg-gradient-to-r from-sky-500 to-sky-300 rounded-full mt-2 mx-auto"></div>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Shaping the future of smart living with innovation, precision, and
            world-class expertise
          </p>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute -z-10 left-1/2 top-0 h-16 w-16 rounded bg-sky-200/30 blur-xl"></div>
      <div className="absolute -z-10 right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-sky-300/20 blur-xl"></div>

      {/* Redesigned Main Content */}
      <div className="container mx-auto px-4 mt-4">
        {/* Vision Statement - Modern Text Block */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Revolutionizing Home Automation with Machine Learning
          </h3>
          {/* <p className="text-lg text-gray-600 leading-relaxed">
            At A-Mad , we're not just creating smart homes—we're building intelligent living spaces that 
            understand and anticipate your needs through our cutting-edge Lightning MLC technology.
          </p> */}
          <p className="text-lg text-gray-600 leading-relaxed">
            At <strong>A-Mad Electricals</strong>, we go beyond creating smart
            homes — we craft intelligent living experiences. Our advanced{" "}
            <strong>Lightning MLC Technology </strong>anticipates your needs,
            adapts to your lifestyle, and delivers seamless control over your
            environment.
            <p>
              From <strong>lighting and climate control</strong> to{" "}
              <strong>audio-visual systems and security</strong>, we blend
              cutting-edge automation with human-centric design, ensuring your
              space is not just smart, but truly intuitive.
            </p>
          </p>
        </div>

        {/* Three Column Feature Cards - Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="bg-sky-100 p-4 rounded-xl inline-flex mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <svg
                className="w-8 h-8 text-sky-600 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">
              Machine Learning Core
            </h4>
            <p className="text-gray-600">
              Our exclusive Lightning MLC Technology learns from your habits,
              adapting effortlessly to your lifestyle. It creates personalized
              automation routines that evolve as your preferences change—making
              your home smarter every single day.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="bg-sky-100 p-4 rounded-xl inline-flex mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <svg
                className="w-8 h-8 text-sky-600 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">
              Human-Centered Design
            </h4>
            <p className="text-gray-600">
              Technology should work for you, not the other way around. That’s
              why we design intuitive, user-friendly interfaces that deliver
              seamless, stress-free experiences, ensuring comfort and control
              are always at your fingertips.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="bg-sky-100 p-4 rounded-xl inline-flex mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <svg
                className="w-8 h-8 text-sky-600 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">
              Lightning Fast Performance
            </h4>
            <p className="text-gray-600">
              With our advanced real-time processing, your smart home responds
              instantly—whether it’s a voice command, a tap on your phone, or an
              environmental shift. Enjoy unmatched speed and precision in every
              interaction.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;
