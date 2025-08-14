import React from "react";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/treco-arabia.webp";
import logo4 from "../assets/logo3.webp";
const BranchSection = () => {
  const branches = [
      { name: "Treco Arabia", logo: logo3 },
      { name: "Treco India", logo: logo1 },
      { name: "Build Track", logo: logo4 },
      { name: "Hogar", logo: logo2 },
    // { name: "Chennai Branch", logo: "/api/placeholder/120/80" },
  ];

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 transform transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Branches
            </span>
          </h2>
          <div className="h-2 w-1/6 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-6 mx-auto"></div>
        </div>

        {/* Branch Logos Grid */}
        <div className="grid grid-cols-2  lg:grid-cols-4 mx-auto gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl 
                       transform hover:-translate-y-2 transition-all duration-300
                       border border-gray-200 hover:border-sky-200
                       group cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center h-full">
                {/* Branch Logo Image */}
                <div
                title={branch.name}
                  className="w-full h-20 mb-4 flex items-center justify-center
                              group-hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={branch.logo}
                    alt={`${branch.name} logo`}
                    className={`${branch.name == "Hogar" && 'bg-black p-2'} max-w-full max-h-full object-contain transition-all duration-300`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
