import { useState, useEffect } from 'react';
import { Plus, Edit, Eye, Search, ChevronDown, Trash2, Calendar, User, Tag, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BlogModal from '../components/BlogModal';

  function htmlToPlainText(html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}


// View Modal Component
function ViewModal({ isOpen, blog, onClose }) {
  if (!isOpen || !blog) return null;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sx flex items-center justify-center z-50 p-2">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[98vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black text-white p-4 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Blog Details</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Blog Image */}
          <div className="mb-4 rounded-lg overflow-hidden shadow-md">
            <img 
              src={`${import.meta.env.VITE_BACKEND_URL}/${blog.imageUrl}`}
              alt={blog.title} 
              className="w-full h-70 object-cover"
            />
          </div>

          {/* Blog Info */}
          <div className="space-y-4">
            {/* Title and Category */}
            <div>
              <div className="flex items-center mb-2">
                <Tag size={16} className="text-blackmr-2" />
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blackrounded-full text-sm font-medium">
                  {blog.category || 'Uncategorized'}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.title}</h1>
            </div>

            {/* Meta Information */}
            <div className="flex items-center space-x-6 text-gray-600 text-sm border-b border-b-gray-200 pb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-blue-600" />
                <span>Published: {formatDate(blog.createdAt)}</span>
              </div>
              {blog.postedBy && (
                <div className="flex items-center">
                  <User size={16} className="mr-2 text-green-600" />
                  <span>By: {blog.postedBy}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-black">
                <p className="text-gray-700 leading-relaxed">{htmlToPlainText(blog.description)}</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 p-4 rounded-b-xl">
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  // Fetch blogs from API
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendUrl}/blog/getall`);
      
      if (response.data) {
        setBlogs(response.data);
      } else {
        setError('Failed to fetch blogs');
        toast.error('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('An error occurred while fetching blogs');
      toast.error('An error occurred while fetching blogs');
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories for filter dropdown
  const categories = ['All', ...new Set(blogs.map(blog => blog.category).filter(Boolean))];
  
  // Filter blogs based on search query and category filter
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = (blog.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
                          (blog.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || blog.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const openAddModal = () => {
    setCurrentBlog(null); 
    setIsModalOpen(true);
  };

  const openEditModal = (blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  const handleViewDetails = (blog) => {
    setCurrentBlog(blog);
    setIsViewModalOpen(true);
  };

  const deleteBlog = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        const response = await axios.delete(`${backendUrl}/blog/delete/${blogId}`);
        
        if (response.data.success) {
          setBlogs(blogs.filter(blog => blog._id !== blogId));
          toast.success('Blog post deleted successfully');
          fetchBlogs()
        } else {
          toast.error(response.data.message || 'Failed to delete blog post');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
        toast.error('An error occurred while deleting the blog post');
      }
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSaveBlog = () => {
    fetchBlogs();
    setIsModalOpen(false);
    const message = currentBlog ? 'Blog updated successfully!' : 'Blog added successfully!';
    toast.success(message);
  };


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
  
        
        <div className="bg-white rounded-md shadow-xl overflow-hidden border border-gray-200">
          {/* Header with add button */}
          <div className="p-2 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-black">
            <div className="text-white">
              <h1 className="text-2xl font-bold">Blog Posts</h1>
            </div>
            <button 
              onClick={openAddModal}
              className="px-4 py-2 bg-white text-black rounded-sm hover:bg-blue-50 transition-all duration-200 flex items-center shadow-md hover:shadow-lg font-medium"
            >
              <Plus size={18} className="mr-2" />
              Add New Post
            </button>
          </div>
          
          {/* Search and filter */}
          <div className="p-4 border-b border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
              />
            </div>
            <div className="relative">
              <div className="flex items-center">
                <Tag size={16} className="mr-2 text-black" />
                <label className="mr-2 text-gray-700 font-medium">Category:</label>
                <div className="relative flex-1">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="appearance-none pl-3 pr-10 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog posts in card format */}
          <div className="p-4">
            {loading ? (
              <div className="py-12 flex flex-col justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent mb-4"></div>
                <p className="text-gray-600">Loading amazing content...</p>
              </div>
            ) : error ? (
              <div className="py-8 flex justify-center items-center text-red-500 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle size={24} className="mr-2" />
                <p className="font-medium">{error}</p>
              </div>
            ) : (
              <>
                {filteredBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredBlogs.map((blog) => (
                      <div key={blog._id} className=" bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Blog image */}
                        <div className="h-56 overflow-hidden relative group">
                          <img 
                            src={`${backendUrl}/${blog.imageUrl}`}
                            alt={blog.title} 
                            className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Blog content */}
                        <div className="p-3">
                          <div className="flex items-center mb-2">
                            <span className="px-2 py-1 bg-black text-white text-blackrounded-full text-xs font-semibold border border-gray-200">
                              {blog.category || 'Uncategorized'}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 hover:text-blacktransition-colors">{blog.title}</h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{htmlToPlainText(blog.description)}</p>
                          
                          {/* Blog meta info */}
                          <div className="flex items-center text-gray-500 text-xs mb-3 space-x-3">
                            <div className="flex items-center">
                              <Calendar size={12} className="mr-1 text-black" />
                              {formatDate(blog.createdAt)}
                            </div>
                            {blog.postedBy && (
                              <div className="flex items-center">
                                <User size={12} className="mr-1 text-green-500" />
                                {blog.postedBy}
                              </div>
                            )}
                            <div className='ml-4 '>
                               <button 
                              onClick={() => handleViewDetails(blog)}
                              className="p-2 text-blackhover:text-blackhover:bg-blue-50 rounded-lg transition-all duration-200 group"
                              title="View details"
                            >
                              <Eye size={16} className="group-hover:scale-110 transition-transform" />
                            </button>
                            <button 
                              onClick={() => openEditModal(blog)}
                              className="p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-all duration-200 group"
                              title="Edit blog"
                            >
                              <Edit size={16} className="group-hover:scale-110 transition-transform" />
                            </button>
                            <button 
                              onClick={() => deleteBlog(blog._id)}
                              className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                              title="Delete blog"
                            >
                              <Trash2 size={16} className="group-hover:scale-110 transition-transform" />
                            </button>
                              </div>
                          </div>
                          
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <div className="mb-4">
                      <AlertCircle size={48} className="mx-auto text-gray-400" />
                    </div>
                    <p className="text-lg font-medium mb-2">
                      {searchQuery || filterCategory !== 'All' 
                        ? "No blog posts match your search criteria" 
                        : "No blog posts available"}
                    </p>
                    <p className="text-sm">
                      {!searchQuery && filterCategory === 'All' 
                        ? "Start by creating your first blog post!" 
                        : "Try adjusting your search or filter criteria"}
                    </p>
                  </div>
                )}
                
                
              </>
            )}
          </div>
        </div>
      </div>
      
      <BlogModal 
        isOpen={isModalOpen}
        blog={currentBlog}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBlog}
      />
      
      <ViewModal 
        isOpen={isViewModalOpen}
        blog={currentBlog}
        onClose={() => setIsViewModalOpen(false)}
      />
    </>
  );
}