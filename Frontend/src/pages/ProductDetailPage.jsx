import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ArrowRight, ChevronRight } from 'lucide-react';
import { fetchproductData } from '../redux/dataSlice';
import Breadcrumb from '../components/Breadcrumb';
import InquiryModal from '../components/InquiryModal';
import bread from '../assets/product-bread.jpg'


// This component would normally be connected to your Redux store
// For demo purposes, we're creating a mock product data structure
const ProductDetailPage = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
  const dispatch = useDispatch();
  const { slug } = useParams();
  
  // In a real application, this would come from your Redux store
  const { productData, error, status } = useSelector((state) => state.data);
  console.log(productData)
  // Mock data for demonstration
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    dispatch(fetchproductData());


    setTimeout(()=>
    {
        const currentProduct = productData.find(p => p.slug === slug) || productData[0];
        const related = productData.filter(p => 
            p.category === currentProduct.category && p._id !== currentProduct._id
        )
        setProduct(currentProduct);
        setRelatedProducts(related);
        setLoading(false);
    },1000)
  }, [dispatch, slug]);
  
  const [isOpen, setIsOpen] = useState(false);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-sky-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }
  
  return (
    
    <>
     <InquiryModal isOpen={isOpen} setIsOpen={setIsOpen} />
    <Breadcrumb 
  title="Product Detail"
  bgImage={bread} 
  items={[
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: product.name, link: `/products/${product.slug}` },
  ]}
/>
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation breadcrumbs */}
      <div className="container mx-auto px-2 lg:px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <span>Home</span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span>{product.category}</span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span>{product.subcategory}</span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="font-medium text-gray-800">{product.name}</span>
        </div>
      </div>
      
      {/* Product details section */}
      <div className="container mx-auto px-2 lg:px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Product image */}
            <div className="md:w-1/2">
              <div className="relative aspect-square bg-gray-100">
                <img 
                 src={`${backendUrl}/${product.image}`} 
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  {product.subcategory}
                </span>
              </div>
            </div>
            
            {/* Product info */}
          <div className="md:w-1/2 p-4 md:p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">42 reviews</span>
                  </div>
                  <span className="mx-3 text-gray-300">|</span>
                  <span className="text-green-600 font-medium">In Stock</span>
                </div>
                {/* <div className="text-3xl font-bold text-gray-900 mb-6">${product.price}</div> */}
                <p className="text-gray-600 mb-8">{product.description}</p>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{feature.label}:</span> {feature.value}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Actions */}
              <div className="space-y-4">
                <button onClick={()=>setIsOpen(!isOpen)} className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-150">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Get Quetes
                </button>
                
                {/* <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-150">
                    <Heart className="w-5 h-5 mr-2" />
                    Save
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-150">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                </div> */}
              </div>
              
              {/* Additional info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <span>Product ID: {product.productId}</span>
                  <span className="mx-2">•</span>
                  <span>Category: {product.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related products section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
          <Link to='/products' className="flex items-center text-sky-600 hover:text-sky-800 font-medium">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct._id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-150">
              <div className="relative aspect-video bg-gray-100">
                <img 
                 src={`${backendUrl}/${relatedProduct.image}`} 
                  alt={relatedProduct.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                <p className="text-gray-600 line-clamp-2 mb-4">{relatedProduct.description}</p>
                <div className="flex items-center justify-between">
                  {/* <span className="text-xl font-bold text-gray-900">${relatedProduct.price}</span> */}
                  <Link to={`/products/${relatedProduct.slug}`} className="bg-sky-100 hover:bg-sky-200 text-sky-600 font-medium py-2 px-4 rounded-lg transition duration-150">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default ProductDetailPage;