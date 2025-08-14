import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Eye } from 'lucide-react';
import Table from '../components/Table';
import PageHeader from '../components/PageHeader';

function CareerPage() {
  const [careerData, setCareerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchCareerData();
  }, []);

  const fetchCareerData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/career/getall`);
      setCareerData(response.data.data);
    } catch (error) {
      console.error('Error fetching career data:', error);
    } finally {
      setLoading(false);
    }
  };


const ColumnConfig = (backendUrl) => ({
  fullName: { label: "Full Name" },
  email: { label: "Email" },
  phone: { label: "Phone" },
  jobProfile: { label: "Job Profile" },
  resume: {
    label: "Resume",
    render: (val) => (
      <a
        href={`${backendUrl}/${val}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center hover:underline text-blue-600 hover:text-blue-800"
      >
        <Eye className="w-4 h-4 mr-1" /> View
      </a>
    ),
  },
  createdAt: {
    label: "Date",
    render: (val) => new Date(val).toLocaleDateString("en-IN"),
  },
});


  return (
    <div className="p-2 min-h-screen ">
    <PageHeader title='Job Application List'/>
      {loading ? (
        <p className="text-black">Loading career inquiries...</p>
      ) : <Table
  data={careerData}
  columnConfig={ColumnConfig(backendUrl)}
/>}
    </div>
  );
}

export default CareerPage;
