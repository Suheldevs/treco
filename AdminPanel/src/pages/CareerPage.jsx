import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Eye } from 'lucide-react';

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

  return (
    <div className="p-6 min-h-screen ">
      <h1 className="text-3xl font-bold text-sky-600  mb-6">Job Application List</h1>
      {loading ? (
        <p className="text-sky-600">Loading career inquiries...</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-sky-100 text-sky-700">
                <th className="p-3 text-left">Full Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Job Profile</th>
                <th className="p-3 text-left">Resume</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {careerData.map((item) => (
                <tr key={item._id} className="border-b border-gray-200 hover:bg-sky-50">
                  <td className="p-3">{item.fullName}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.jobProfile}</td>
                  <td className="p-3">
                    <a
                      href={`${backendUrl}/${item.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sky-600 hover:text-sky-800"
                    >
                      <Eye className="w-4 h-4 mr-1" /> View
                    </a>
                  </td>
                  <td className="p-3">{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {careerData.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 p-4">
                    No inquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CareerPage;
