import { useState, useEffect } from 'react';
import { X, Plus, Trash2, Upload, Save } from 'lucide-react';
import axios from 'axios';

export default function ProductModal({ isOpen, product = null, onClose, onSave }) {
  const isEditMode = !!product;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  // Category options
  const categoryOptions = [
    'Home Automation',
    'Lighting Automation',
    'Audio Visual'
  ];
  
  // Subcategory options mapped to parent categories
  const subcategoryOptions = {
    'Home Automation': ['Touch Switches', 'Modular Switches', 'Motion Sensor', 'Smart Module', 'Curtain-Blind Motor'],
    'Lighting Automation': ['Architecture Light', 'Indoor Light', 'Outdoor Light'],
    'Audio Visual': ['Audio Visual']
  };
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    subcategory: '',
    image: null,
    imagePreview: null,
    description: '',
    features: [
       // { label: 'Product Model', value: '' },
              // { label: 'Product Voltage', value: '' },
              // { label: 'Model Number', value: '' },
              // { label: 'Size', value: '' },
              // { label: 'Power', value: '' },
              // { label: 'Material', value: 'Glass / Arcylic' },
              // { label: 'CCT', value: '' },
              // { label: 'Colour', value: 'Black / White' },
    ]
  });
  
  // Error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with product data if in edit mode
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        category: product.category || '',
        subcategory: product.subcategory || '',
        image: null,
        imagePreview : product.image ? `${backendUrl}/${product.image}` : null ,
        description: product.description || '',
        features: product.features && product.features.length > 0 
          ? product.features 
          : [
              { label: 'Product Model', value: '' },
              // { label: 'Product Voltage', value: '' },
              // { label: 'Model Number', value: '' },
              // { label: 'Size', value: '' },
              // { label: 'Power', value: '' },
              // { label: 'Material', value: 'Glass / Arcylic' },
              // { label: 'CCT', value: '' },
              // { label: 'Colour', value: 'Black / White' },
            ]
      });
    } else {
      // Reset form for new product
      setFormData({
        name: '',
        category: '',
        subcategory: '',
        image: null,
        imagePreview: null,
        description: '',
        features: [
         { label: 'Product Model', value: '' },
              // { label: 'Product Voltage', value: '' },
              // { label: 'Model Number', value: '' },
              // { label: 'Size', value: '' },
              // { label: 'Power', value: '' },
              // { label: 'Material', value: 'Glass / Arcylic' },
              // { label: 'CCT', value: '' },
              // { label: 'Colour', value: 'Black / White' },
  //             { label: 'Operating Voltage', value: '230V AC' },
  // { label: 'Technology', value: 'Cap Sense 1 Million Touch Capacity' },
  // { label: 'Load', value: '6 AMP Load Max. Current Per Load' },
  // { label: 'Operating Environment', value: 'Temperature: 0°C to 45°C, Humidity: 5% to 90% RH' },
  // { label: 'Load Type', value: 'CFL, LED Light, Tube Light, Resistive Load, Wiring Incandescent Lighting' },
  // { label: 'Module Type', value: '2' },
  // { label: 'Panel Colour', value: 'Black, White & Grey' },
  // { label: 'Panel Material', value: 'Glass, Acrylic & Wooden/Vinyl' },
  // { label: 'Mobile App/Android/IOS/ALEXA/Google Home', value: 'Yes' }
        ]
      });
    }
  }, [product, isOpen]);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for category to reset subcategory
    if (name === 'category') {
      setFormData({
        ...formData,
        [name]: value,
        subcategory: '' // Reset subcategory when category changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          image: 'Image size should be less than 5MB'
        });
        return;
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setErrors({
          ...errors,
          image: 'Only JPG, PNG and WebP images are allowed'
        });
        return;
      }

      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
      
      if (errors.image) {
        setErrors({
          ...errors,
          image: ''
        });
      }
    }
  };
  
  // Handle feature changes
  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = {
      ...updatedFeatures[index],
      [field]: value
    };
    
    setFormData({
      ...formData,
      features: updatedFeatures
    });
    
    // Clear feature errors if they exist
    if (errors.features) {
      setErrors({
        ...errors,
        features: ''
      });
    }
  };
  
  // Add new feature
  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, { label: '', value: '' }]
    });
  };
  
  // Remove feature
  const removeFeature = (index) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures.splice(index, 1);
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.subcategory) newErrors.subcategory = 'Subcategory is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    // Check if we need image for new product
    if (!isEditMode && !formData.image) {
      newErrors.image = 'Product image is required';
    }
    
    // Validate features
    const invalidFeatures = formData.features.some(feature => 
      !feature.label.trim() || !feature.value.trim()
    );
    
    if (invalidFeatures) {
      newErrors.features = 'All feature labels and values are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
   
      const url = isEditMode 
        ? `${backendUrl}/product/update/${product._id}` 
        : `${backendUrl}/product/add`;
      
      // Create FormData for multipart/form-data (needed for image upload)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('subcategory', formData.subcategory);
      formDataToSend.append('description', formData.description);
      
      // Convert features array to JSON string and append
      formDataToSend.append('features', JSON.stringify(formData.features));
      
      // Only append image if there's a new one
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      
      let response;
      if (isEditMode) {
          response = await axios.put(url, formDataToSend, config);
      } else {
        response = await axios.post(url, formDataToSend, config);
      }
    
      onSave(response.data);
      onClose();
      
    } catch (error) {
      console.error('Error saving product:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to save product. Please try again. || Please try other product name';
      setErrors({
        ...errors,
        submit: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-4 py-2 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {isEditMode ? `Edit Product: ${product.name}` : 'Add New Product'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-4">
            
            {/* Error Banner */}
            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md text-red-700">
                <p className="flex items-center font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.submit}
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-2">
                {/* Name */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="name">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Product Name'
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                {/* Category Dropdown */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="category">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.category ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                </div>
                
                {/* Subcategory Dropdown */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="subcategory">
                    Subcategory *
                  </label>
                  <select
                    id="subcategory"
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleChange}
                    disabled={!formData.category}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.subcategory ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    } ${!formData.category ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  >
                    <option value="">Select Subcategory</option>
                    {formData.category && subcategoryOptions[formData.category]?.map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                  </select>
                  {errors.subcategory && <p className="mt-1 text-sm text-red-600">{errors.subcategory}</p>}
                </div>
                
                {/* Image Upload */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Product Image {!isEditMode && '*'}
                  </label>
                  <div className="mt-1">
                    {formData.imagePreview ? (
                      <div className="mb-4">
                        <div className="relative inline-block">
                          <img 
                            src={formData.imagePreview} 
                            alt="Product preview" 
                            className="w-32 h-32 object-cover rounded-lg border shadow-sm"
                          />
                          <button
                            type="button"
                            onClick={() => setFormData({...formData, image: null, imagePreview: null})}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-md transition-colors"
                            aria-label="Remove image"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center bg-gray-50">
                        <Upload size={32} className="mx-auto text-gray-400 mb-1" />
                        <p className="text-gray-500 mb-1">Drag and drop an image or click to browse</p>
                        <p className="text-xs text-gray-400">JPG, PNG or WebP (Max 5MB)</p>
                      </div>
                    )}
                    
                    <label className={`mt-4 inline-flex items-center px-4 py-2 ${formData.imagePreview ? 'bg-gray-100 text-gray-700' : 'bg-blue-50 text-blue-700'} rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors`}>
                      <Upload size={16} className="mr-2" />
                      <span>{formData.imagePreview ? 'Change Image' : 'Upload Image'}</span>
                      <input 
                        type="file" 
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleImageChange}
                        className="hidden" 
                      />
                    </label>
                  </div>
                  {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="description">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.description ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter product description..."
                  ></textarea>
                  {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                </div>
                
                {/* Features Section */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium text-gray-700 text-sm">
                      Product Features *
                    </label>
                    <button
                      type="button"
                      onClick={addFeature}
                      className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Plus size={16} className="mr-1" />
                      Add Feature
                    </button>
                  </div>
                  
                  {errors.features && (
                    <p className="mb-3 text-sm text-red-600 bg-red-50 p-2 rounded">{errors.features}</p>
                  )}
                  
                  <div className="space-y-1">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 bg-white p-2 rounded-md border border-gray-100 shadow-sm">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={feature.label}
                            onChange={(e) => handleFeatureChange(index, 'label', e.target.value)}
                            placeholder="Feature name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            disabled={
                              feature.label === 'Product Model' || 
                              feature.label === 'Product Voltage'
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <input
                            type="text"
                            value={feature.value}
                            onChange={(e) => handleFeatureChange(index, 'value', e.target.value)}
                            placeholder="Feature value"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                        </div>
                        {!(
                          feature.label === 'Product Model' || 
                          feature.label === 'Product Voltage'
                        ) && (
                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors"
                            aria-label="Remove feature"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        
        {/* Footer with action buttons */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 font-medium transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 font-medium transition-colors"
            disabled={isSubmitting}
          >
            <Save size={18} className="mr-2" />
            {isSubmitting ? 'Saving...' : isEditMode ? 'Update Product' : 'Save Product'}
          </button>
        </div>
      </div>
    </div>
  );
}