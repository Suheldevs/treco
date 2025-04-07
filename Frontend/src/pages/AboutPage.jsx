import React from "react";
import { Lightbulb, Rocket, ArrowRight } from 'lucide-react';
const AboutPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://picsum.photos/id/103/1920/600"
          alt="Treco Engineering Header"
          className="w-full h-full object-cover brightness-75"
        />
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 ">
          <h1 className="text-5xl font-bold mb-2">About Treco</h1>
          <div className="h-2 w-1/4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mt-2 mx-auto"></div>
          <p className="text-xl max-w-2xl text-center px-4">Engineering excellence and innovative solutions for a better tomorrow</p>
        </div> */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
          <div className="text-center">
            <h2 className="inline-block relative">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-300">
                About Treco India
              </span>
              <div className="h-2 w-2/3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mt-2 mx-auto"></div>
            </h2>

            <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
              Leading the automation revolution with innovative solutions and
              world-class expertise
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center text-justify">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-600">Our Story</h2>
            <p className="text-lg mb-2">
            We are committed to design, develop & market high-end dedicated
              Audio-Video and IoT/Automation products as well as solution for
              domestic and commercial requirements.
            </p>
            <p className="text-lg mb-2"> 
              It is our vision &
              commitment to share the advantage of technology with society to
              make life more safe, secure and comfortable.
              We integrate multiple smart devices available in market in single
              frame work to provide highly sophisticated, smart, intelligent and
              economical IoT/ Home Automation solution for different Residential
              and commercial customers requirements. We believe in international
            </p>
            <p className="text-lg">
              level of engineering developments and solutions which provides
              people a more sophisticated, cozy and safe environment to live in
              and work with.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/id/28/600/500"
              alt="Treco Team at Work"
              className="rounded-lg shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Purpose</span>
          <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Vision & Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white backdrop-blur-sm bg-opacity-70 p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-blue-200 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <Lightbulb size={28} className="text-white" />
              </div>
              <div className="p-2 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight size={20} className="text-blue-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in engineering solutions that positively
              impact lives and create a sustainable future for generations to
              come. We envision a world where innovative engineering solves
              humanity's greatest challenges.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white backdrop-blur-sm bg-opacity-70 p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-indigo-200 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
                <Rocket size={28} className="text-white" />
              </div>
              <div className="p-2 rounded-full bg-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight size={20} className="text-indigo-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional engineering solutions through innovation,
              expertise, and collaboration. We are committed to exceeding
              client expectations while maintaining the highest standards of
              quality, integrity, and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
      {/* Core Values Section */}
      <section className="lg:py-14 md:lg-12 py-10 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-50 opacity-70 -skew-y-6 transform -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-100 rounded-full blur-2xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Modern header section with animated underline */}
        <div className="text-center mb-12 relative">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3 inline-block">The pillars of our approach</span>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">Our Core Values</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-2 mb-8 rounded-full"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            These fundamental principles drive our innovation and guide our manufacturing excellence at Treco India.
          </p>
        </div>

        {/* Modern grid layout with unique cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div 
              key={value.id} 
              className="relative bg-white rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-md hover:shadow-xl"
            >
              {/* Colored gradient top bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${value.color}`}></div>
              
              <div className="p-8">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${value.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {value.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                
                {/* Subtle card footer */}
                {/* <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Treco Value</span>
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={value.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA/Caption */}
        <div className="text-center mt-16">
          <p className="text-blue-600 font-medium">Driving manufacturing excellence through our core principles</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-white mb-8">
            Become part of a team that's redefining what's possible in
            engineering and innovation.
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



const coreValues = [
  {
    id: 1,
    title: "Innovation",
    description: "We constantly seek new technologies and methods to revolutionize home automation systems, staying at the forefront of manufacturing excellence.",
    image: "https://picsum.photos/id/338/200/200",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM6.293 6.707a1 1 0 011.414-1.414l.7.7a1 1 0 11-1.414 1.414l-.7-.7zM5 10a1 1 0 100 2h1a1 1 0 100-2H5zm8 2a1 1 0 110-2h1a1 1 0 110 2h-1zm-4-3a1 1 0 100 2A1 1 0 0010 9zm-1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm7-7a1 1 0 10-1.414 1.414l.7.7a1 1 0 101.414-1.414l-.7-.7z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Excellence",
    description: "Our commitment to precision engineering and quality control ensures every Treco product meets the highest manufacturing standards.",
    image: "https://picsum.photos/id/634/200/200",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 3,
    title: "Sustainability",
    description: "We design and manufacture energy-efficient automation solutions that reduce environmental impact while maximizing performance.",
    image: "https://picsum.photos/id/111/200/200",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-green-500 to-teal-600"
  },
  {
    id: 4,
    title: "Integrity",
    description: "From sourcing components to production and delivery, we maintain transparent and ethical practices throughout our manufacturing process.",
    image: "https://picsum.photos/id/447/200/200",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 5,
    title: "Collaboration",
    description: "We work closely with suppliers, partners, and clients to create integrated manufacturing solutions that meet complex automation needs.",
    image: "https://picsum.photos/id/648/200/200",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 6,
    title: "Empowerment",
    description: "We invest in our manufacturing team's skills and knowledge, fostering innovation and ownership in creating advanced automation technologies.",
    image: "https://picsum.photos/id/1025/200/200",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600"
  }
];
