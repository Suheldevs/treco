import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  Package, 
  MessageSquare, 
  FileText, 
  Users, 
  ShoppingBag, 
  Calendar, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Trash2, 
  TrendingUp,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import Table from "../components/Table";

export default function DashboardHome() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    products: 0,
    inquiries: 0,
    blogs: 0
  });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsRes, inquiriesRes, blogsRes] = await Promise.all([
          axios.get(`${backendUrl}/product/getall`),
          axios.get(`${backendUrl}/inquiry/getall`),
          axios.get(`${backendUrl}/blog/getall`)
        ]);

        setStats({
          products: productsRes.data.products.length,
          inquiries: inquiriesRes.data.length,
          blogs: blogsRes.data.length
        });

        // Sort inquiries by date (newest first) and take the 5 most recent
        const sortedInquiries = inquiriesRes.data.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        ).slice(0, 5);
        
        setRecentInquiries(sortedInquiries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast.error("Failed to load dashboard data");
        setLoading(false);
      }
    };

    fetchData();
  }, [backendUrl]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await axios.delete(`${backendUrl}/inquiry/delete/${id}`);
        setRecentInquiries(recentInquiries.filter(inquiry => inquiry._id !== id));
        toast.success("Inquiry deleted successfully");
      } catch (error) {
        toast.error("Failed to delete inquiry");
        console.error("Error deleting inquiry:", error);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredInquiries = recentInquiries.filter(inquiry => 
    inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.service?.toLowerCase().includes(searchTerm.toLowerCase())
  );


   
  const columnConfig = {
  // actions: {
  //   label: "Actions",
  //   render: (val, row) => (
  //     <div className="flex justify-center gap-3">
  //       <button
  //         onClick={() => handleDelete(row._id)}
  //         className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
  //         title="Delete"
  //       >
  //         <Trash2 size={16} />
  //       </button>
  //     </div>
  //   ),
  // },
  createdAt: {
    label: "Created Date",
    render: (val) => formatDate(val), 
  },
  name: { label: "Name" },
  email: { label: "Email" },
  phone: { label: "Phone" },
  address: { 
    label: "Address",
    render: (val) => val || "N/A"
  },
  service: { label: "Service" },
  projectName: { 
    label: "Project Name",
    render: (val) => val || "N/A"
  },
  projectType: { 
    label: "Project Type",
    render: (val) => val || "N/A"
  },
  area: { 
    label: "Area (sq ft)",
    render: (val) => val ? `${val} sq ft` : "N/A"
  },
  floor: { 
    label: "Floor Count",
    render: (val) => val || "N/A"
  },
  featuresOfInterest: {
    label: "Features of Interest",
    render: (val) => {
      if (!val || val.length === 0) return "None";
      return (
        <div className="">
          <div className="truncate" title={val.join(", ")}>
            {val.join(", ")}
          </div>
        </div>
      );
    }
  },
  mediaEntertainment: {
    label: "Media & Entertainment",
    render: (val) => {
      if (!val || val.length === 0) return "None";
      return (
        <div className="">
          <div className="truncate" title={val.join(", ")}>
            {val.join(", ")}
          </div>
        </div>
      );
    }
  },
  message: { 
    label: "Message",
    render: (val) => {
      if (!val) return "N/A";
      return (
        <div className="max-w-sm">
          <div className="truncate" title={val}>
            {val}
          </div>
        </div>
      );
    }
  }
};


  return (
    <div className="bg-gray-50 min-h-screen p-">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="max-w-7xl mx-auto">
        

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
{/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
  <div className="bg-white border border-gray-200 border-l-4 border-l-black rounded-xl shadow-md px-4 py-2 relative overflow-hidden hover:shadow-md transition-shadow">
   
    <div className="flex justify-between items-center ">
      <h2 className="text-lg font-semibold text-gray-800 ">Total Products</h2>
      <div className="p-2.5 bg-gray-100 rounded-lg">
        <Package size={20} className="text-black" />
      </div>
    </div>
    <div className="flex items-end">
      <span className="text-3xl font-bold text-gray-900">{stats.products}</span>
      <div className="flex items-center ml-3 text-sm text-gray-600">
        <TrendingUp size={14} className="mr-1" />
        <span>Items</span>
      </div>
    </div>
    <div className="mt-4 text-gray-600 text-sm flex items-center">
      <ArrowUpRight size={14} className="mr-1" />
      <Link to="/product" className="hover:text-black transition-colors">View all products</Link>
    </div>
  </div>

  <div className="bg-white border border-gray-200 border-l-4 border-l-black rounded-xl shadow-md px-4 py-2 relative overflow-hidden hover:shadow-md transition-shadow">

    <div className="flex justify-between items-center ">
      <h2 className="text-base font-semibold text-gray-800">Total Inquiries</h2>
      <div className="p-2.5 bg-gray-100 rounded-lg">
        <MessageSquare size={20} className="text-black" />
      </div>
    </div>
    <div className="flex items-end">
      <span className="text-3xl font-bold text-gray-900">{stats.inquiries}</span>
      <div className="flex items-center ml-3 text-sm text-gray-600">
        <Users size={14} className="mr-1" />
        <span>Customers</span>
      </div>
    </div>
    <div className="mt-4 text-gray-600 text-sm flex items-center">
      <ArrowUpRight size={14} className="mr-1" />
      <Link to="/inquiry" className="hover:text-black transition-colors">View all inquiries</Link>
    </div>
  </div>

  <div className="bg-white border border-gray-200 border-l-4 border-l-black rounded-xl shadow-md px-4 py-2 relative overflow-hidden hover:shadow-md transition-shadow">
    
    <div className="flex justify-between items-center">
      <h2 className="text-base font-semibold text-gray-800">Total Blogs</h2>
      <div className="p-2.5 bg-gray-100 rounded-lg">
        <FileText size={20} className="text-black" />
      </div>
    </div>
    <div className="flex items-end">
      <span className="text-3xl font-bold text-gray-900">{stats.blogs}</span>
      <div className="flex items-center ml-3 text-sm text-gray-600">
        <Calendar size={14} className="mr-1" />
        <span>Articles</span>
      </div>
    </div>
    <div className="mt-4 text-gray-600 text-sm flex items-center">
      <ArrowUpRight size={14} className="mr-1" />
      <Link to="/blog" className="hover:text-black transition-colors">View all blogs</Link>
    </div>
  </div>
</div>

            {/* Recent Inquiries */}
            <Table data={filteredInquiries} columnConfig={columnConfig} />
            <div className="w-full flex justify-end mt-1 ">
              <Link to='/inquiry' className="text-blue-600 hover:text-blue-500 underline">
              View More
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}