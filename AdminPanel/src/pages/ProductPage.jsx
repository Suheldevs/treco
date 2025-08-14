import { useState, useEffect } from 'react';
import { Plus, Edit, Eye, Search, ChevronDown, Trash2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import ProductModal from '../components/ProductModal';
import { toast } from 'react-toastify';

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendUrl}/product/getall`);
      
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        setError('Failed to fetch products');
        toast.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('An error occurred while fetching products');
      toast.error('An error occurred while fetching products');
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories for filter dropdown
  const categories = ['All', ...new Set(products.map(product => product.category).filter(Boolean))];
  
  // Filter products based on search query and category filter
  const filteredProducts = products.filter(product => {
    const matchesSearch = (product.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
                         (product.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const openAddModal = () => {
    setCurrentProduct(null); // No product means we're adding a new one
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleViewDetails = (product) => {
    // In a real app, this might navigate to a detailed view
    // For now, we'll just display an alert
    toast.info(`Viewing details for ${product.name}`);
  };

  const deleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await axios.delete(`${backendUrl}/product/delete/${productId}`);
        
        if (response.data.success) {
          setProducts(products.filter(product => product._id !== productId));
          toast.success('Product deleted successfully');
        } else {
          toast.error(response.data.message || 'Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        toast.error('An error occurred while deleting the product');
      }
    }
  };

  const handleSaveProduct = (savedProduct) => {
    // Refresh the product list after save
    fetchProducts();
    
    // Show success message
    const message = currentProduct ? 'Product updated successfully!' : 'Product added successfully!';
    toast.success(message);
    
    // Close the modal
    setIsModalOpen(false);
  };

  

  return (
    <>
      <div className="bg-white rounded-lg shadow-md">
        {/* Header with add button */}
        <div className="p-2 border-b rounded-md border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-black">
          <div>
            <h1 className="text-2xl font-bold text-white ">Products Management</h1>
          </div>
          <button 
            onClick={openAddModal}
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 cursor-pointer transition-colors flex items-center shadow-sm"
          >
            <Plus size={16} className="mr-2" />
            Add Product
          </button>
        </div>
        
        {/* Search and filter */}
        <div className="p-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <div className="flex items-center">
              <label className="mr-2 text-gray-600">Category:</label>
              <div className="relative flex-1">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        
        {/* Products list */}
        <div className="">
          {loading ? (
            <div className="py-12 flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="py-8 flex justify-center items-center text-red-500">
              <AlertCircle size={24} className="mr-2" />
              <p>{error}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-gray-50 border-b border-b-gray-200">
                    <th className="px-4 py-3 font-medium text-gray-800">Image</th>
                    <th className="px-4 py-3 font-medium text-gray-800">Name</th>
                    <th className="px-4 py-3 font-medium text-gray-800">Category</th>
                    <th className="px-4 py-3 font-medium text-gray-800">Subcategory</th>
                    <th className="px-4 py-3 font-medium text-gray-800">Product ID</th>
                    <th className="px-4 py-3 font-medium text-gray-800">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <tr key={product._id} className="hover:bg-gray-50">
                        <td className="px-3 py-1 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" onClick={()=>{window.open(`${backendUrl}/${product.image}`, "_blank")}}>
                          <img 
                            src={`${backendUrl}/${product.image}`} 
                            alt={product.name} 
                            className="w-12 h-12 object-cover rounded-md border border-gray-200 shadow-sm"
                          />
                        </td>
                        <td className="px-2 py-1 font-medium">{product.name}</td>
                        <td className="px-2 py-1 text-gray-600">
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                            {product.category || 'N/A'}
                          </span>
                        </td>
                        <td className="px-2 py-1 text-gray-600">
                          {product.subcategory || product.subCategory || 'N/A'}
                        </td>
                        <td className="px-2 py-1">
                          <span className="font-mono text-sm">
                            {product.productId || 'N/A'}
                          </span>
                        </td>
                        <td className="px-2 py-1">
                          <div className="flex space-x-2">
                            {/* <button 
                              onClick={() => handleViewDetails(product)}
                              className="p-1 text-black hover:text-blue-800 hover:bg-blue-50 rounded"
                              title="View details"
                            >
                              <Eye size={18} />
                            </button> */}
                            <button 
                              onClick={() => openEditModal(product)}
                              className="p-1 bg-gray-100  text-amber-600 hover:text-amber-800 hover:bg-amber-50 rounded"
                              title="Edit product"
                            >
                              <Edit size={18} />
                            </button>
                            <button 
                              onClick={() => deleteProduct(product._id)}
                              className="p-1 bg-gray-100  text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                              title="Delete product"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                        {searchQuery || filterCategory !== 'All' 
                          ? "No products match your search criteria" 
                          : "No products available"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
          
          {!loading && !error && (
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-medium">{filteredProducts.length}</span> of <span className="font-medium">{products.length}</span> products
              </p>
            </div>
          )}
        </div>
      </div>
      
      <ProductModal 
        isOpen={isModalOpen}
        product={currentProduct}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProduct}
      />
    </>
  );
}