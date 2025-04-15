import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { X, Upload } from 'lucide-react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { toast } from 'react-toastify';

// Form reducer to handle all form state
const formReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_FORM':
      return action.payload;
    case 'SET_FORM':
      return { ...action.payload };
    default:
      return { ...state, [action.field]: action.value };
  }
};

// Initial form state - removed slug
const initialFormState = {
  title: '',
  category: '',
  description: '',
  postedBy: '',
  imageUrl: '',
};

export default function BlogModal({ isOpen, blog, onClose, onSave }) {
  const [formData, dispatch] = useReducer(formReducer, initialFormState);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Reset form when modal is opened/closed or blog changes
  useEffect(() => {
    if (isOpen) {
      if (blog) {

        const { slug, ...blogDataWithoutSlug } = blog;
        dispatch({ 
          type: 'SET_FORM', 
          payload: { 
            ...blogDataWithoutSlug,
            imageUrl: blog.imageUrl || '' 
          } 
        });
        
        // Set image preview if available
        if (blog.imageUrl) {
          const imageUrl =`${backendUrl}/${blog.imageUrl}`;
          setImagePreview(imageUrl);
        } else {
          setImagePreview(null);
        }
      } else {
        // Add mode - reset form
        dispatch({ type: 'RESET_FORM', payload: initialFormState });
        setImagePreview(null);
      }
      setImageFile(null);
    }
  }, [isOpen, blog, backendUrl]);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      const formDataToSend = new FormData();
      
      
      Object.keys(formData).forEach(key => {
        if (key !== 'imageUrl' || !imageFile) { 
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Add the image file if there's a new one
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }
      
      let response;
      
      if (blog?._id) {
        // Update existing blog
        response = await axios.put(
          `${backendUrl}/blog/update/${blog._id}`, 
          formDataToSend,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
      } else {
        // Create new blog
        response = await axios.post(
          `${backendUrl}/blog/save`, 
          formDataToSend,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
      }
      if (response.data) {
        onSave();
      } else {
        toast.error(response.data.message || 'Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error('An error occurred while saving the blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-auto flex flex-col">
        {/* Modal header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-indigo-50 rounded-t-lg">
          <h2 className="text-xl font-bold text-gray-800">
            {blog ? 'Edit Blog Post' : 'Add New Blog Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-indigo-100 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Modal body */}
        <div className="overflow-y-auto p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Title field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => dispatch({ field: 'title', value: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter blog title"
                />
              </div>
              
              {/* Category and Author fields - side by side */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Category field */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => dispatch({ field: 'category', value: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g. Technology, Design, Business"
                  />
                </div>
                
                {/* Posted by field */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postedBy}
                    onChange={(e) => dispatch({ field: 'postedBy', value: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Author name"
                  />
                </div>
              </div>

              {/* Image upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="relative border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50 cursor-pointer">
                      <input
                        type="file"
                        onChange={handleImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                      />
                      <div className="flex items-center">
                        <Upload size={18} className="text-gray-400 mr-2" />
                        <span className="text-gray-500">
                          {imageFile ? imageFile.name : "Choose an image"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {imagePreview && (
                    <div className="w-20 h-20 relative border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setImageFile(null);
                          dispatch({ field: 'imageUrl', value: '' });
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl-md hover:bg-red-600"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content <span className="text-red-500">*</span>
                </label>
                <SunEditor
                  setContents={formData.description}
                  onChange={(value) => dispatch({ field: "description", value })}
                  setOptions={{
                    minHeight: "150px",
                    height: "200px",
                    buttonList: [
                      ["undo", "redo"],
                      ["bold", "underline", "italic", "strike"],
                      ["font", "fontSize", "formatBlock"],
                      ["fontColor", "hiliteColor"],
                      ["align", "list", "lineHeight"],
                      ["table"],
                      ["link"],
                      ["image", "video"],
                      ["codeView"],
                    ],
                    linkProtocol: "",
                    addTagsWhitelist: "a[href]",
                    sanitize: false,
                    defaultTag: "div",
                  }}
                />
              </div>
            </div>
            
            {/* Form actions */}
            <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                )}
                {blog ? 'Update Blog' : 'Create Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}