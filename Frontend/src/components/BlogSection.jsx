

import { useState } from "react";
import Slider from "react-slick";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
const dispatch = useDispatch();
  const { blogData, error, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  if(status=="loading"){
    return (
     <div className='text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Loading..</div>
    )
  }
  if(blogData.length == 0){
  return(
    <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Blog Data Not Found!</div>
  )
}
if(error){
  return(
    <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>{error}</div>
  )
}
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-2 lg:py-12 py-8 md:py-10">
        <div className={`text-center mb-12 transform transition-all duration-1000
       `}>
          {/* <span className="text-sky-600 font-medium uppercase tracking-wider mb-6">blogs</span> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-w tracking-tight">
            Recent  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Articles</span> 
          </h2>
          <div className="h-2 w-1/3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-6 mx-auto"></div>
        </div>

        <Slider {...settings}>
          {blogData.map(blog => (
            <BlogCard
          date={blog.createdAt}
          category={blog.category}
          title={blog.title}
          imageUrl={blog.imageUrl}
          slug={blog.slug}
          description={blog.description}
        />
          ))}
        </Slider>
      </div>
    </div>
  );
}