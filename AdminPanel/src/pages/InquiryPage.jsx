import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2, Search, Calendar, Mail, Phone, FileText, RefreshCw } from "lucide-react";
import Table from "../components/Table";
import PageHeader from "../components/PageHeader";

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
  if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

  try {
    await axios.delete(`${backendUrl}/inquiry/delete/${id}`);
    setInquiries(prev => prev.filter(inquiry => inquiry._id !== id));
    toast.success("Inquiry deleted successfully");
  } catch (error) {
    toast.error("Failed to delete inquiry");
    console.error("Error deleting inquiry:", error);
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
    <div className="bg-gray-50 min-h-screen ">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="">
       <PageHeader title="Recent Inquiries" />
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>): <Table data={inquiries} columnConfig={columnConfig} />}
      </div>
    </div>
  );
}