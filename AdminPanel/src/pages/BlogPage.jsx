import { useState, useEffect } from 'react';
import { Plus, Edit, Eye, Search, ChevronDown, Trash2, Calendar, User, Tag, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BlogModal from '../components/BlogModal';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setCurrentBlog(null); // No blog means we're adding a new one
    setIsModalOpen(true);
  };

  const openEditModal = (blog) => {
    setCurrentBlog(blog); // Set the blog to edit
    setIsModalOpen(true);
  };

  const handleViewDetails = (blog) => {
    toast.info(`Viewing details for "${blog.title}"`);
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
      <div className="bg-white rounded-lg shadow-md">
        {/* Header with add button */}
        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-indigo-50">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>
            <p className="text-gray-600">Manage your blog posts</p>
          </div>
          <button 
            onClick={openAddModal}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center shadow-sm"
          >
            <Plus size={16} className="mr-2" />
            Add Blog Post
          </button>
        </div>
        
        {/* Search and filter */}
        <div className="p-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
            <div className="flex items-center">
              <label className="mr-2 text-gray-600">Category:</label>
              <div className="relative flex-1">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog posts in card format */}
        <div className="p-6">
          {loading ? (
            <div className="py-12 flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
          ) : error ? (
            <div className="py-8 flex justify-center items-center text-red-500">
              <AlertCircle size={24} className="mr-2" />
              <p>{error}</p>
            </div>
          ) : (
            <>
              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map((blog) => (
                    <div key={blog._id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      {/* Blog image */}
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={`${backendUrl}/${blog.imageUrl}`}
                          alt={blog.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Blog content */}
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                            {blog.category || 'Uncategorized'}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.description}</p>
                        
                        {/* Blog meta info */}
                        <div className="flex items-center text-gray-500 text-xs mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar size={14} className="mr-1" />
                            {formatDate(blog.createdAt)}
                          </div>
                          {blog.postedBy && (
                            <div className="flex items-center">
                              <User size={14} className="mr-1" />
                              {blog.postedBy}
                            </div>
                          )}
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex justify-end space-x-2 pt-2 border-t border-gray-100">
                          <button 
                            onClick={() => handleViewDetails(blog)}
                            className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
                            title="View details"
                          >
                            <Eye size={18} />
                          </button>
                          <button 
                            onClick={() => openEditModal(blog)}
                            className="p-1 text-amber-600 hover:text-amber-800 hover:bg-amber-50 rounded"
                            title="Edit blog"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => deleteBlog(blog._id)}
                            className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                            title="Delete blog"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  {searchQuery || filterCategory !== 'All' 
                    ? "No blog posts match your search criteria" 
                    : "No blog posts available"}
                </div>
              )}
              
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-medium">{filteredBlogs.length}</span> of <span className="font-medium">{blogs.length}</span> blog posts
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <BlogModal 
  isOpen={isModalOpen}
  blog={currentBlog}
  onClose={() => setIsModalOpen(false)}
  onSave={handleSaveBlog}
/>
    </>
  );
}