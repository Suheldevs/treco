import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Filter, ChevronDown, Star, ArrowUpRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproductData } from '../redux/dataSlice';
import { Link } from 'react-router-dom';
import bread from '../assets/product-bread.jpg'
const ProductCard = ({ product ,index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  return (
    <Link
    to={`/products/${product.slug}`} 
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
      <span className="absolute top-2 left-2 z-20 text-xs px-2 py-1 bg-white text-sky-600 rounded-full">{product.category}</span>
        <img 
          src={`${backendUrl}/${product.image}`} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute  top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <Link to={`/products/${product.slug}`} className="bg-white group text-sky-600 rounded-xl px-3 py-2 mx-2 hover:bg-sky-500 hover:text-white transition-colors duration-300">
            {/* <ShoppingCart size={20} />  */}
            View Detail <ArrowUpRight className='inline rotate-12 group-hover:rotate-0' />
          </Link>
          {/* <button className="bg-white text-gray-800 rounded-full p-3 mx-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
            <Heart size={20} />
          </button> */}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-yellow-400 mb-2">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} className="text-gray-300" fill="currentColor" />
          <span className="text-gray-600 text-sm ml-2">(24 reviews)</span>
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
        
        </div>
      </div>
    </Link>
  );
};

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch()
  const {productData, error, status} = useSelector((state)=>state.data)
useEffect(()=>{
dispatch(fetchproductData())
},[])
  // const categories = ['All', 'Home Automation', 'Lighting Automation', 'Audio Visual',];
  const categories = ['All', ...new Set(productData?.map(p => p.category) || [])];

  useEffect(() => {
    if (!productData) return;
    
    if (activeCategory === 'All') {
      setFilteredProducts(productData);
    } else {
      setFilteredProducts(productData.filter(product => product.category === activeCategory));
    }
  }, [activeCategory, productData]);

  if(status=='loading'){
    return(
      <div className='text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Loading..</div>
    )
  }
  if(productData.length == 0){
    return(
      <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Product Data Not Found!</div>
    )
  }
  if(error){
    return(
      <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>{error}</div>
    )
  }

  return (
    <>
    <Breadcrumb 
  title="Latest Products"
  bgImage={bread}
  items={[
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    // { label: "Electronics", path: "/products/electronics" }
  ]}
/>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
            <p className="text-gray-600 mt-1">Discover our innovative automation solutions</p>
          </div>
          <div className="mt-4 md:mt-0 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Categories - Desktop */}
        <div className="hidden md:flex mb-8 space-x-2 overflow-x-auto pb-2  justify-center items-center">
          {categories.map((category) => (
            <button
            title='Category selection button'
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded transition-all duration-200 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-blue-500 text-white font-medium shadow-md'
                  : 'bg-white border border-slate-200 text-gray-900 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories - Mobile */}
        <div className="md:hidden mb-6">
          <button 
            className="flex items-center justify-between w-full px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <div className="flex items-center">
              <Filter size={18} className="text-gray-500 mr-2" />
              <span>{activeCategory}</span>
            </div>
            <ChevronDown size={18} className={`text-gray-500 transition-transform ${isFilterOpen ? 'transform rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-10 relative">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    activeCategory === category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product,index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductPage;