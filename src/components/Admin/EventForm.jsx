import React, { useState, useEffect } from 'react';
import useEventAPI from './useEventAPI';
import ImageUpload from './ImageUpload';
import './EventForm.css';

function EventForm({ initialData, onSuccess, isEditing = false }) {
  const [formData, setFormData] = useState({
    name: '',
    date_time: '',
    location: '',
    description: '',
    image: '',
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState('');
  const { createEvent, updateEvent, loading, error: apiError } = useEventAPI();

  // Populate form with initial data if editing
  useEffect(() => {
    if (initialData && isEditing) {
      const dateTimeLocal = new Date(initialData.date_time)
        .toISOString()
        .slice(0, 16);
      
      setFormData({
        name: initialData.name || '',
        date_time: dateTimeLocal || '',
        location: initialData.location || '',
        description: initialData.description || '',
        image: initialData.image || '',
      });
      setImagePreview(initialData.image || '');
    }
  }, [initialData, isEditing]);

  // Simple validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Event name is required';
    }
    if (!formData.date_time) {
      newErrors.date_time = 'Date and time are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleImageSelect = (imageUrl) => {
    setFormData(prev => ({
      ...prev,
      image: imageUrl,
    }));
    setImagePreview(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      if (isEditing && initialData?.id) {
        await updateEvent(initialData.id, formData);
      } else {
        await createEvent(formData);
      }
      
      // Reset form on success
      if (!isEditing) {
        setFormData({
          name: '',
          date_time: '',
          location: '',
          description: '',
          image: '',
        });
        setImagePreview('');
      }
      
      onSuccess?.();
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      {apiError && (
        <div className="form-error-message">
          <i className="fas fa-exclamation-circle"></i>
          {apiError}
        </div>
      )}

      {/* Form Grid */}
      <div className="form-grid">
        {/* Left Column - Text Fields */}
        <div className="form-column">
          {/* Event Name */}
          <div className="form-group">
            <label htmlFor="name">Event Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Cloud Computing Workshop"
              className={`form-input ${errors.name ? 'error' : ''}`}
            />
            {errors.name && (
              <span className="form-error">
                <i className="fas fa-times-circle"></i>
                {errors.name}
              </span>
            )}
          </div>

          {/* Date & Time */}
          <div className="form-group">
            <label htmlFor="date_time">Date & Time *</label>
            <input
              id="date_time"
              type="datetime-local"
              name="date_time"
              value={formData.date_time}
              onChange={handleInputChange}
              className={`form-input ${errors.date_time ? 'error' : ''}`}
            />
            {errors.date_time && (
              <span className="form-error">
                <i className="fas fa-times-circle"></i>
                {errors.date_time}
              </span>
            )}
          </div>

          {/* Location */}
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., DBH 1300"
              className="form-input"
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the event..."
              rows="5"
              className="form-input form-textarea"
            />
          </div>
        </div>

        {/* Right Column - Image Upload */}
        <div className="form-column">
          <ImageUpload 
            onImageSelect={handleImageSelect}
            currentImage={imagePreview}
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button
          type="submit"
          disabled={loading}
          className="btn-submit"
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              {isEditing ? 'Updating...' : 'Creating...'}
            </>
          ) : (
            <>
              <i className={`fas fa-${isEditing ? 'save' : 'plus'}`}></i>
              {isEditing ? 'Update Event' : 'Create Event'}
            </>
          )}
        </button>
      </div>

      {/* Form Info */}
      <div className="form-info">
        <i className="fas fa-info-circle"></i>
        Fields marked with * are required. All other fields are optional.
      </div>
    </form>
  );
}

export default EventForm;