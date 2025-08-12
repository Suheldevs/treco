import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";
import Breadcrumb from "../components/Breadcrumb";
import bread from '../assets/blog-bread.jpg'
const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const BlogDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { blogData, status, error } = useSelector((state) => state.data);
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  useEffect(() => {
    if (!blogData.length) dispatch(fetchBlogData());
  }, [dispatch, blogData.length]);

  const blog = blogData.find((item) => item.slug === slug);
  const relatedBlogs = blogData.filter((item) => item.slug !== blog?.slug);

  if (status === "loading")
    return <div className="text-gray-800 text-xl my-24  font-semibold text-center">Loading...</div>;

  if (error)
    return <div className="text-red-600 text-xl  my-24 font-semibold text-center">{error}</div>;

  if (!blog)
    return <div className="text-red-600 text-xl my-24  font-semibold text-center">Blog Not Found!</div>;

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb
        title="Blog Detail"
          bgImage={bread}
        items={[
          { label: "Home", link: "/" },
          { label: "Blogs", link: "/blogs" },
          { label: blog?.title, link: `/blogs/${blog?.slug}` },
        ]}
      />

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Blog Details */}
        <div className="lg:col-span-3">
          <img
            src={`${backendUrl}/${blog.imageUrl}`} 
            alt={blog.title}
            className="w-full h-[400px] object-cover shadow-md"
          />
          <div className="flex justify-between">
          <p className="text-gray-700 text-sm mt-4">{formattedDate(blog.updatedAt)}</p>
          <p className="text-gray-700 text-sm mt-4">{blog.category}</p>

          </div>
          <h1 className="lg:text-2xl text-xl font-semibold mt-2">{blog.title}</h1>
          <div
            className="mt-4 lg:text-lg text-gray-950 blog"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />

          {/* Back to Blogs Button */}
          <Link
            to="/blogs"
            className="mt-6 inline-block bg-sky-600-btn text-white px-6 py-3 hover:bg-[#7A5F4D] transition-all duration-300"
          >
            Back to Blogs
          </Link>
        </div>

        {/* Related Blogs */}
        <div className="lg:col-span-1 border p-2 border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 messiri">Other Blogs</h2>
          <div className="space-y-4 overflow-y-auto">
            {relatedBlogs.length === 0 ? (
              <p>No other blogs available.</p>
            ) : (
              relatedBlogs?.map((relatedBlog) => (
                <Link
                  to={`/blog/${relatedBlog.slug}`}
                  key={relatedBlog.slug}
                  className="block p-4 bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={`${backendUrl}/${relatedBlog.imageUrl}`} 
                    alt={relatedBlog.title}
                    className="w-full h-28 object-cover"
                  />
                  <p className="text-gray-500 text-sm mt-2">{formattedDate(relatedBlog.updatedAt)}</p>
                  <h3 className="text-lg font-semibold mt-1 line-clamp-1">{relatedBlog.title}</h3>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
