import { useEffect, useState } from 'react';
import { Tv, Speaker, Headphones, Video, MonitorSpeaker, Mic, Radio, Film, ChevronRight, Play, Volume2, Music, Monitor, Smartphone, Headset } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproductData } from '../redux/dataSlice';

export default function AudioVisual() {
  const  subcategory  = 'audio-visual';
  const dispatch = useDispatch();
  const { productData, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchproductData());
  }, [dispatch]);

  const filteredProducts = productData.filter(
    (product) =>
      product.subcategory.toLowerCase().replace(/\s+/g, "-") ===
      subcategory.toLowerCase()
  );


  const features = [
    { icon: <Play />, title: "Immersive Experience", description: "Theater-quality visuals and audio in your own space" },
    { icon: <Volume2 />, title: "Crystal Clear Sound", description: "Advanced acoustics technology for superior audio quality" },
    { icon: <Smartphone />, title: "Smart Integration", description: "Control all devices seamlessly with your smartphone" },
    { icon: <Monitor />, title: "Stunning Visuals", description: "4K and 8K resolution for lifelike picture quality" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
   <section className="bg-gradient-to-r from-sky-600 to-sky-400 text-white">
  <div className="container mx-auto px-6 py-12">
    <div className="flex flex-col gap-4 md:flex-row items-center">
      
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Smart Audio Visual Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Elevate your home and office with intelligent audio-visual automation. 
          From multi-room music systems to 4K home theaters, our solutions give 
          you crystal-clear sound and stunning visuals — all controlled at your fingertips.
        </p>
        <a
          href="#products"
          className="bg-white inline-flex text-sky-600 font-semibold py-3 px-6 rounded-lg hover:bg-sky-50 transition duration-300 items-center"
        >
          Explore Products <ChevronRight className="ml-2" size={20} />
        </a>
      </div>

      {/* Right Content - Highlight Card */}
      <div className="md:w-1/2 flex justify-center">
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <Headset className="w-32 h-32 text-white mb-4 mx-auto" />
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Immersive Experience</h3>
            <p>
              Control lighting, sound, and visuals with one touch. 
              Perfect for home theaters, boardrooms, and smart living spaces.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>


      {/* About Audio Visual Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">The Future of Audio Visual Technology</h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Modern audio visual technology has transformed entertainment, communication, and information sharing. Our premium systems combine cutting-edge hardware with intelligent software to deliver experiences that engage all your senses.
            </p>
            <p className="text-lg text-gray-700 mb-10">
              From crystal-clear 8K displays to spatial audio systems that place you in the center of the action, our products represent the pinnacle of what's possible in home and commercial audio visual solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg text-sky-600">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-sky-800 mb-2">Why Choose Premium?</h4>
              <p className="text-sky-700">
                Our audio visual products aren't just about specifications—they're about creating meaningful experiences that bring people together, enhance your environment, and provide years of reliable entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Cards Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Audio Visual Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className={`h-2 ${hovered === index ? 'bg-sky-600' : 'bg-sky-400'} transition-colors duration-300`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${hovered === index ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-600'}`}>
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className={`flex items-center text-sm font-medium ${hovered === index ? 'text-sky-600' : 'text-sky-500'} transition-colors duration-300`}>
                    View details <ChevronRight className="ml-1" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

       <div className="container mx-auto p-4 min-h-screen flex flex-col items-center scroll-m-20" id='products'>
         <h2 className="text-2xl font-semibold mb-6 capitalize">{subcategory.replace(/-/g, " ")}</h2>
         {status === "loading" && <p>Loading...</p>}
         {status === "error" && <p>Something went wrong!</p>}
         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
           {filteredProducts.map((product, index) => (
             <ProductCard key={product._id} product={product} index={index} />
           ))}
         </div>
         {filteredProducts.length === 0 && status === "success" && (
           <p className='font-medium'>No products found in this subcategory.</p>
         )}
       </div>
    </div>
  );
}


export const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div id='products' 
      className="bg-white scroll-m-20 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <span className="absolute top-2 left-2 z-20 text-xs px-2 py-1 bg-white text-sky-600 rounded-full">
          {product.category}
        </span>
        <img
          src={`${backendUrl}/${product.image}`}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <Link
            to={`/products/${product.slug}`}
            className="bg-white group text-sky-600 rounded-xl px-3 py-2 mx-2 hover:bg-sky-500 hover:text-white transition-colors duration-300"
          >
             Detail <ArrowUpRight className="inline rotate-12 group-hover:rotate-0" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        {/* <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
          <Star size={16} className="text-gray-300" fill="currentColor" />
          <span className="text-gray-600 text-sm ml-2">(24 reviews)</span>
        </div> */}
        <h3 className="font-semibold text-lg text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};