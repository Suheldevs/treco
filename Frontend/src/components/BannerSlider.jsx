import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import b1 from "../assets/banner/Banners-04-01.jpg";
import b2 from "../assets/banner/Banners-04-02.jpg";
import b3 from "../assets/banner/Banners-04-03.jpg";
import b4 from "../assets/banner/Banners-04-04.jpg";

const DualBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [b1, b2, b3, b4];

  // Pair generator: each slide = 2 images (current + next)
  const slides = images.map((img, index) => {
    const nextImg = images[(index + 1) % images.length];
    return [img, nextImg];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="relative m-10 h-70 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((pair, index) => (
              <div key={index} className="min-w-full h-full flex gap-4 p-4">
                {pair.map((src, i) => (
                  <div key={i} className="flex-1">
                    <img
                      src={src}
                      alt={`Slide ${index}-${i}`}
                      className="w-full h-full object-center rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-1 rounded-full z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-1 rounded-full z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? "w-8 h-3 bg-gray-800 rounded-full"
                  : "w-3 h-3 bg-gray-400 hover:bg-gray-600 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DualBannerSlider;
