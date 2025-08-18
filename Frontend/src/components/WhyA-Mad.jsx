import { Shield, Users, ThumbsUp, Star, Headphones, Award, Heart } from "lucide-react";
import a1 from '../assets/why/1.png'
import a2 from '../assets/why/2.png'
import a3 from '../assets/why/3.png'
import a4 from '../assets/why/4.png'
const WhyAmad = () => {
  const features = [
    {
      icon: <Headphones className="w-12 h-12 text-blue-600 mx-auto" />,
      src:a1,
      title: "Best Customer Services",
      desc: "Our customer-centric approach ensures you receive exceptional support at every stage of your smart home journey."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600 mx-auto" />,
       src:a2,
      title: "Flat 5-Year Warranty", 
      desc: "We stand by the quality of our work with a flat 5-year warranty on all installations, giving you peace of mind."
    },
    {
      icon: <Award className="w-12 h-12 text-purple-600 mx-auto" />,
       src:a3,
      title: "Quality Assured",
      desc: "Our commitment to quality is unwavering. We strive to exceed your expectations with the highest standards."
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-600 mx-auto" />,
       src:a4,
      title: "500+ Happy Customers",
      desc: "Join our ever-growing community of satisfied customers who have transformed their homes with A-mad Electronic."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">
          Why <span className="text-blue-600">A-mad Electronic</span>
        </h2>
        <div className="h-2 w-1/3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-4 mx-auto"></div>
        <p className="text-gray-600 mb-16 text-lg mx-auto">
          Experience excellence with India's most trusted smart home solution provider
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-4 border-gray-200 hover:shadow-lg border-x transition-all duration-300 group"
            >
              <div className="mb-4 flex justify-center items-center">
                {/* {item.icon} */}
                <img src={item?.src} alt={item.src} className="h-20"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAmad;