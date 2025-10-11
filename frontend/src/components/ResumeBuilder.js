import React, { useState } from 'react';
import PaymentButton from './PaymentButton';
import PDFExport from './PDFExport';

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });

  const [isPaid, setIsPaid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentSuccess = () => {
    setIsPaid(true);
  };

  return (
    <div className="resume-builder">
      <h2>Build Your Resume</h2>
      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Professional Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            rows="3"
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            rows="3"
          />
        </div>
      </form>

      <div className="actions">
        {!isPaid ? (
          <PaymentButton onSuccess={handlePaymentSuccess} />
        ) : (
          <PDFExport formData={formData} />
        )}
      </div>
    </div>
  );
}

export default ResumeBuilder;