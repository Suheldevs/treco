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
  actions: {
    label: "Actions",
    render: (val, row) => (
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleDelete(row._id)}
          className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    ),
  },
  createdAt: {
    label: "Created Date",
    render: (val) => formatDate(val), // ya new Date(val).toLocaleString("en-IN")
  },
  message: { label: "Message" },
  service: { label: "Service" },
  phone: { label: "Phone" },
  email: { label: "Email" },
  projectType: { label: "Project Type" },
  projectName: { label: "Project Name" },
  name: { label: "Name" },
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="absolute -z-20 right-0 top-0 h-24 w-24 rounded-full bg-blue-400 opacity-20 -mr-8 -mt-8"></div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Total Products</h2>
                  <div className="p-3 bg-white bg-opacity-30 rounded-xl">
                    <Package size={24} className="text-blue-600" />
                  </div>
                </div>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{stats.products}</span>
                  <div className="flex items-center ml-4 text-sm">
                    <TrendingUp size={16} className="mr-1 " />
                    <span>Items</span>
                  </div>
                </div>
                <div className="mt-4 text-blue-100 text-sm flex items-center">
                  <ArrowUpRight size={16} className="mr-1" />
                  <Link to="/product">View all products</Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="absolute -z-20 right-0 top-0 h-24 w-24 rounded-full bg-purple-400 opacity-20 -mr-8 -mt-8"></div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Total Inquiries</h2>
                  <div className="p-3 bg-white bg-opacity-30 rounded-xl">
                    <MessageSquare size={24} className="text-purple-600" />
                  </div>
                </div>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{stats.inquiries}</span>
                  <div className="flex items-center ml-4 text-sm">
                    <Users size={16} className="mr-1" />
                    <span>Customers</span>
                  </div>
                </div>
                <div className="mt-4 text-purple-100 text-sm flex items-center">
                  <ArrowUpRight size={16} className="mr-1" />
                  <Link to="/inquiry">View all inquiries</Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="absolute -z-20 right-0 top-0 h-24 w-24 rounded-full bg-green-400 opacity-20 -mr-8 -mt-8"></div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Total Blogs</h2>
                  <div className="p-3 bg-white bg-opacity-30 rounded-xl">
                    <FileText size={24} className="text-green-600" />
                  </div>
                </div>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{stats.blogs}</span>
                  <div className="flex items-center ml-4 text-sm">
                    <Calendar size={16} className="mr-1" />
                    <span>Articles</span>
                  </div>
                </div>
                <div className="mt-4 text-green-100 text-sm flex items-center">
                  <ArrowUpRight size={16} className="mr-1" />
                  <Link to="/blog">View all blogs</Link>
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