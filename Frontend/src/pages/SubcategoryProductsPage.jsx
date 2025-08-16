import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import { fetchproductData } from "../redux/dataSlice";
import Breadcrumb from "../components/Breadcrumb";
import bread from '../assets/product-bread.jpg'
const SubcategoryProductsPage = () => {
  const { subcategory, "*" : wildcard } = useParams();
const [category, setCategory] = useState('');

useEffect(() => {
  if (wildcard) {
    const pathSegments = wildcard.split('/');
    setCategory(pathSegments[0]);
  } else {
    setCategory('home-automation');  
  }
}, [wildcard]);

  
  const dispatch = useDispatch();
  const { productData, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchproductData());
  }, [dispatch]);

  const filteredProducts = productData.filter(
    (product) =>
      product.subcategory.toLowerCase().replace(/\s+/g, "-") ===
      subcategory.toLowerCase()
  );

  return (
    <>
    <Breadcrumb 
      title="Latest Product"
      bgImage={bread}
      items={[
        { label: "Home", link: "/" },
        { label: category.replace(/-/g, " "), link: `/${category}` },
        { label:subcategory.replace(/-/g, " ") , link: `/${category}/${subcategory}` }
      ]}
    />
    
    <div className="container mx-auto p-4 py-10 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 capitalize">{subcategory.replace(/-/g, " ")}</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Something went wrong!</p>}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product._id} product={product} index={index} />
        ))}
      </div>
      {filteredProducts.length === 0 && status === "success" && (
        <p className="font-medium">No products found in this subcategory.</p>
      )}
    </div>
    </>
  );
};

export const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <span className="absolute top-2 left-2 z-20 text-xs px-2 py-1 bg-white text-sky-600 rounded-full">
          {product.category}
        </span>
        <img
          src={`${backendUrl}/${product.image}`}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <Link
            to={`/products/${product.slug}`}
            className="bg-white group text-sky-600 rounded-xl px-3 py-2 mx-2 hover:bg-sky-500 hover:text-white transition-colors duration-300"
          >
           See Features <ArrowUpRight className="inline rotate-12 group-hover:rotate-0" />
          </Link>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        {/* <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
          <Star size={16} className="text-gray-300" fill="currentColor" />
          <span className="text-gray-600 text-sm ml-2">(24 reviews)</span>
        </div> */}
        <h3 className="font-semibold text-lg text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default SubcategoryProductsPage;
