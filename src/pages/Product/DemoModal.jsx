import React from 'react';

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
  formData,
  setFormData,
  handleInputChange,
  handleDemoRequest,
  isSubmitting,
  submitStatus,
  countries,
  productDetails,
  product
}) => {
  if (!showDemoModal) return null;

  return (
    <div className="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
      <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={() => setShowDemoModal(false)}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="modal-header">
          <h2>Request a Demo</h2>
          <p>Fill out the form below and our representative will contact you shortly.</p>
        </div>
        
        <form onSubmit={handleDemoRequest} className="demo-form">
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Doctor's Name *</label>
                <input
                  type="text"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter full name"
                />
              </div>
              
              <div className="form-group">
                <label>Hospital Name *</label>
                <input
                  type="text"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
                  required
                  placeholder="Hospital or clinic name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label>Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your country</option>
                  {countries.map(country => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group phone-group">
              <label>Phone Number *</label>
              <div className="phone-input">
                <input
                  type="text"
                  className="phone-code"
                  value={formData.phoneCode}
                  readOnly
                  placeholder="Code"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                  pattern="[0-9]{10,15}"
                  title="Please enter a valid phone number (10-15 digits)"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Request Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Request Type *</label>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Demonstration">Demonstration</option>
                  <option value="Detailed Information">Detailed Information</option>
                  <option value="Quotation">Quotation</option>
                  <option value="Technical Support">Technical Support</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Product *</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a product</option>
                  {Object.keys(productDetails).map(key => (
                    <option key={key} value={productDetails[key].title}>
                      {productDetails[key].title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="submit-status success">
              <i className="fas fa-check-circle"></i>
              <div>
                <strong>Thank you!</strong>
                <p>Your request has been submitted successfully. We'll contact you shortly.</p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="submit-status error">
              <i className="fas fa-exclamation-circle"></i>
              <div>
                <strong>Submission Error</strong>
                <p>There was an error submitting your request. Please try again.</p>
              </div>
            </div>
          )}

          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setShowDemoModal(false)}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Submit Request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(DemoModal);