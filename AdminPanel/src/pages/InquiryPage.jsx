import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2, Search, Calendar, Mail, Phone, FileText, RefreshCw } from "lucide-react";

export default function InquiryDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendUrl}/inquiry/getall`);
      setInquiries(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to fetch inquiries");
      setLoading(false);
      console.error("Error fetching inquiries:", error);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await axios.delete(`${backendUrl}/inquiry/delete/${id}`);
        setInquiries(inquiries.filter(inquiry => inquiry._id !== id));
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

  const sortedInquiries = [...inquiries]
    .filter(inquiry => 
      inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.projectName?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">Recent Inquiries</h1>
            <p className="text-gray-500">Manage customer inquiries from your website</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search inquiries..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <button 
              onClick={fetchInquiries}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <RefreshCw size={18} className="mr-2" />
              Refresh
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : sortedInquiries.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500 text-lg">No inquiries found</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer" onClick={() => handleSort("name")}>
                      Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer" onClick={() => handleSort("service")}>
                      Service {sortBy === "service" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer" onClick={() => handleSort("createdAt")}>
                      Date {sortBy === "createdAt" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedInquiries.map((inquiry) => (
                    <tr key={inquiry._id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{inquiry.name}</div>
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
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar size={14} className="mr-1 text-blue-500" />
                          {formatDate(inquiry.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs truncate">
                          <div className="flex items-center mb-1">
                            <FileText size={14} className="mr-1 text-blue-500 flex-shrink-0" />
                            <span className="truncate">{inquiry.message}</span>
                          </div>
                          {inquiry.projectName && (
                            <div className="mt-1 text-xs text-gray-500">
                              Project: {inquiry.projectName} ({inquiry.projectType || "N/A"})
                            </div>
                          )}
                          {inquiry.area && (
                            <div className="mt-1 text-xs text-gray-500">
                              Area: {inquiry.area}, Floors: {inquiry.floor || "N/A"}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(inquiry._id)}
                          className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-3 text-gray-500 text-sm">
              Showing {sortedInquiries.length} of {inquiries.length} inquiries
            </div>
          </div>
        )}
      </div>
    </div>
  );
}