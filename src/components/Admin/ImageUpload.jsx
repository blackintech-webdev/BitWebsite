import React, { useState, useEffect } from 'react';
import './ImageUpload.css';

function ImageUpload({ onImageSelect, currentImage, isEditing = false }) {
  const [previewUrl, setPreviewUrl] = useState(currentImage || '');
  const [inputMethod, setInputMethod] = useState('url'); // 'url' or 'upload'
  const [urlInput, setUrlInput] = useState(currentImage || '');
  const [isUploading, setIsUploading] = useState(false);

  // Initialize with current image on edit
  useEffect(() => {
    if (isEditing && currentImage) {
      setPreviewUrl(currentImage);
      setUrlInput(currentImage);
    }
  }, [currentImage, isEditing]);

  // Handle URL input
  const handleUrlChange = (e) => {
    setUrlInput(e.target.value);
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      setPreviewUrl(urlInput);
      onImageSelect(urlInput);
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);

    // Create local preview
    const reader = new FileReader();
    reader.onload = (event) => {
      const preview = event.target.result;
      setPreviewUrl(preview);
      
      // TODO: Upload to Supabase and get URL
      // For now, we'll use the local preview
      // In production, call: uploadToSupabase(file).then(url => onImageSelect(url))
      
      // Simulate upload delay
      setTimeout(() => {
        onImageSelect(preview);
        setIsUploading(false);
      }, 500);
    };
    reader.readAsDataURL(file);
  };

  const handleClearImage = () => {
    setPreviewUrl('');
    setUrlInput('');
    onImageSelect('');
  };

  return (
    <div className="image-upload">
      <div className="upload-header">
        <h3>Event Image</h3>
        <span className="upload-label">{inputMethod === 'url' ? 'URL' : 'Upload'}</span>
      </div>

      {/* Show current image info when editing */}
      {isEditing && currentImage && (
        <div className="editing-info">
          <i className="fas fa-info-circle"></i>
          Showing current image. Upload a new image to replace it.
        </div>
      )}

      {/* Input Method Tabs */}
      <div className="upload-method-tabs">
        <button
          type="button"
          className={`method-tab ${inputMethod === 'url' ? 'active' : ''}`}
          onClick={() => setInputMethod('url')}
        >
          <i className="fas fa-link"></i>
          Paste URL
        </button>
        <button
          type="button"
          className={`method-tab ${inputMethod === 'upload' ? 'active' : ''}`}
          onClick={() => setInputMethod('upload')}
        >
          <i className="fas fa-cloud-upload-alt"></i>
          Upload File
        </button>
      </div>

      {/* URL Input Method */}
      {inputMethod === 'url' && (
        <div className="url-input-section">
          <div className="url-input-group">
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={urlInput}
              onChange={handleUrlChange}
              className="url-input"
            />
            <button
              type="button"
              onClick={handleUrlSubmit}
              className="btn-add-image"
              disabled={!urlInput.trim()}
            >
              <i className="fas fa-check"></i>
              Add
            </button>
          </div>
          <p className="input-helper">
            <i className="fas fa-lightbulb"></i>
            Paste the full URL of your image
          </p>
        </div>
      )}

      {/* File Upload Method */}
      {inputMethod === 'upload' && (
        <div className="file-upload-section">
          <label htmlFor="file-input" className="file-upload-label">
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isUploading}
              className="file-input"
            />
            <div className="file-upload-area">
              <i className={`fas fa-${isUploading ? 'spinner fa-spin' : 'image'}`}></i>
              <p>
                {isUploading ? 'Uploading...' : 'Click to upload or drag & drop'}
              </p>
              <span className="file-size-hint">Max 5MB</span>
            </div>
          </label>
        </div>
      )}

      {/* Image Preview */}
      {previewUrl && (
        <div className="image-preview-container">
          <div className="preview-label">
            {isEditing ? 'Current Image' : 'Preview'}
          </div>
          <div className="image-preview">
            <img src={previewUrl} alt="Preview" />
          </div>
          <button
            type="button"
            onClick={handleClearImage}
            className="btn-clear-image"
          >
            <i className="fas fa-trash-alt"></i>
            Remove Image
          </button>
        </div>
      )}

      {!previewUrl && (
        <div className="no-image-placeholder">
          <i className="fas fa-image"></i>
          <p>No image selected</p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;