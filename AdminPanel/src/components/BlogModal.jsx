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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-2">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[96vh] overflow-hidden flex flex-col">
        {/* Modal header */}
        <div className="p-3 border-b  border-gray-200 flex justify-between items-center bg-gradient-to-r from-slate-50 to-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">
            {blog ? 'Edit Post' : 'New Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal body */}
        <div className="overflow-y-auto p-3">
          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
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
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter blog title"
                />
              </div>
              
              {/* Category and Author fields - side by side */}
              <div className="grid grid-cols-2 gap-3">
                {/* Category field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => dispatch({ field: 'category', value: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Technology"
                  />
                </div>
                
                {/* Posted by field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postedBy}
                    onChange={(e) => dispatch({ field: 'postedBy', value: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Author name"
                  />
                </div>
              </div>

              {/* Image upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="relative border border-dashed border-gray-300 rounded-md px-3 py-2 hover:border-blue-400 cursor-pointer transition-colors">
                      <input
                        type="file"
                        onChange={handleImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                      />
                      <div className="flex items-center">
                        <Upload size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500 truncate">
                          {imageFile ? imageFile.name : "Upload image"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {imagePreview && (
                    <div className="w-14 h-14 relative border border-gray-200 rounded-md overflow-hidden flex-shrink-0">
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
                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 text-xs"
                      >
                        <X size={12} />
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
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <SunEditor
                    setContents={formData.description}
                    onChange={(value) => dispatch({ field: "description", value })}
                    setOptions={{
                      minHeight: "120px",
                      height: "150px",
                      buttonList: [
                        ["undo", "redo"],
                        ["bold", "underline", "italic", "strike"],
                        ["fontSize", "formatBlock"],
                        ["fontColor", "hiliteColor"],
                        ["align", "list"],
                        ["link"],
                        ["image"],
                        ["codeView"],
                      ],
                      linkProtocol: "",
                      addTagsWhitelist: "a[href]",
                      sanitize: false,
                      defaultTag: "div",
                      showPathLabel: false,
                      charCounter: false,
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Form actions */}
            <div className="flex justify-end gap-2 pt-3 mt-3 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-colors"
              >
                {isSubmitting && (
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                )}
                {blog ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}