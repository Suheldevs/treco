import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
const navigate = useNavigate()
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Fetch products from API
    fetch(`${backendUrl}/product/getall`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);

        // Random product on load
        if (data.products?.length) {
          const randomIndex = Math.floor(Math.random() * data.products.length);
          setSelectedProduct(data.products[randomIndex]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleProductClick = (product) => {
    navigate(`/products/${product.slug}`)
  };

  return (
    <section className="relative bg-black text-white  flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <div className="text-center max-w-3xl">
        <button className="px-4 py-1 text-sm rounded-full bg-sky-600/20 text-sky-400 mb-2">
          Smart Living
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Control Your Home with <span className="text-sky-500">Ease</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Discover the future of living with our smart home automation systems.
          Seamlessly integrate lighting, security, appliances, and more.
        </p>
      </div>

      {/* Roller Type Carousel */}
      <div className="mt-12 w-full max-w-6xl">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          className="w-full custom-swiper"
        >
          {products.map((item) => (
            <SwiperSlide
              key={item._id}
              style={{ width: "260px", height: "380px" }}
              className="flex justify-center items-center cursor-pointer"
              onClick={() => handleProductClick(item)}
            >
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden w-full h-full">
                <img
                  src={`${backendUrl}/${item.image.replace("\\", "/")}`}
                  alt={item.name}
                  className="w-full h-full bg-white object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      {/* Custom scaling via CSS */}
      <style>{`
        .custom-swiper .swiper-slide {
          transition: transform 0.4s ease;
        }
        .custom-swiper .swiper-slide-active {
          transform: scale(0.7); /* center chhoti */
          z-index: 10;
        }
        .custom-swiper .swiper-slide-prev,
        .custom-swiper .swiper-slide-next {
          transform: scale(1.1); /* side wali badi */
          z-index: 20;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
