import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom'
const BlogCard = ({ date, category, title, imageUrl, slug }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="relative flex flex-col bg-gray-50 border border-slate-200 p-4 overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center space-x-2 p-4 mt-5 ">
        <span className="text-white p-2 absolute left-0  bg-sky-600">{formattedDate(date)}</span>
        <div className='absolute right-6 '>
        <span className="text-black ">— </span>
        <span className="text-black text-base">{category}</span>
        </div>
      </div>
      <h3 className="text-whit text-xl font-semibold lora mt-6 mb-4 line-clamp-2">{title}</h3>
      <div className="relative flex-grow">
        <Link to={`/blog/${slug}`}  className="h-48 w-full overflow-hidden group">
          <img
            // src={imageUrl || "/api/placeholder/400/320"}
            src={`${backendUrl}/${imageUrl}`} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link to={`/blog/${slug}`} className=" hover:bg-sky-600  cursor-pointer border border-white rounded-full text-white font-semibold py-2 px-4 rounde shadow-md transition-all duration-600 hidden md:block ease-in-out">
        Read More <ArrowUpRight className='inline rotate-12 group-hover:rotate-0' />
          </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

// const BlogsCard = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       date: "Dec 14, 2024",
//       category: "Architecture",
//       title: "To Use Learn Wall Sheet Learn the Right...",
//       image: "https://picsum.photos/400/320?random=3"
//     },
//     {
//       id: 2,
//       date: "Dec 11, 2024",
//       category: "Architecture",
//       title: "History on the Beginnings of Modern Architecture",
//       image: "https://picsum.photos/400/320?random=1"
//     },
//     {
//       id: 3,
//       date: "Dec 11, 2024",
//       category: "Home Renovation",
//       title: "Achieving Great results in Architecture",
//       image: "https://picsum.photos/400/320?random=2"
//     }
//   ];

//   return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {blogPosts.map((post) => (
//             <BlogCard
//               key={post.id}
//               date={post.date}
//               category={post.category}
//               title={post.title}
//               image={post.image}
//             />
//           ))}
//         </div>
//   );
// };

export default BlogCard;