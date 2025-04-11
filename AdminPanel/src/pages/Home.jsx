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

  return (
    <div className="bg-gray-50 min-h-screen p-">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-blue-800">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome to your website management dashboard</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-400 opacity-20 -mr-8 -mt-8"></div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Total Products</h2>
                  <div className="p-3 bg-white bg-opacity-30 rounded-xl">
                    <Package size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{stats.products}</span>
                  <div className="flex items-center ml-4 text-sm">
                    <TrendingUp size={16} className="mr-1" />
                    <span>Items</span>
                  </div>
                </div>
                <div className="mt-4 text-blue-100 text-sm flex items-center">
                  <ArrowUpRight size={16} className="mr-1" />
                  <span>View all products</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-purple-400 opacity-20 -mr-8 -mt-8"></div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Total Inquiries</h2>
                  <div className="p-3 bg-white bg-opacity-30 rounded-xl">
                    <MessageSquare size={24} className="text-white" />
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
                  <span>View all inquiries</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-green-400 opacity-20 -mr-8 -mt-8"></div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Total Blogs</h2>
                  <div className="p-3 bg-white bg-opacity-30 rounded-xl">
                    <FileText size={24} className="text-white" />
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
                  <span>View all blogs</span>
                </div>
              </div>
            </div>

            {/* Recent Inquiries */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <MessageSquare size={20} className="mr-2 text-purple-600" />
                    Recent Inquiries
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">The latest inquiries from your website</p>
                </div>
                
                <div className="mt-4 md:mt-0 relative">
                  <input
                    type="text"
                    placeholder="Search inquiries..."
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full md:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              {filteredInquiries.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">No recent inquiries found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Message
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredInquiries.map((inquiry) => (
                        <tr key={inquiry._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{inquiry.name}</div>
                            {inquiry.projectName && (
                              <div className="text-xs text-gray-500 mt-1">{inquiry.projectName}</div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col text-sm text-gray-600">
                              <div className="flex items-center mb-1">
                                <Mail size={14} className="mr-1 text-blue-500" />
                                <span>{inquiry.email}</span>
                              </div>
                              <div className="flex items-center">
                                <Phone size={14} className="mr-1 text-blue-500" />
                                <span>{inquiry.phone}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                              {inquiry.service}
                            </span>
                            {inquiry.projectType && (
                              <div className="text-xs text-gray-500 mt-1">{inquiry.projectType}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar size={14} className="mr-1 text-blue-500" />
                              {formatDate(inquiry.createdAt)}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600 max-w-xs truncate">
                              {inquiry.message}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap">
                            <button
                              onClick={() => handleDelete(inquiry._id)}
                              className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center mx-auto">
                  <span>View all inquiries</span>
                  <ArrowUpRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}