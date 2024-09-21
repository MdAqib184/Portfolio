import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState(''); // To hold the message status
  const [statusColor, setStatusColor] = useState(''); // To hold the color (success/failure)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_h6nh0c9', // Replace with your actual service ID
        'template_634i2g9', // Replace with your actual template ID
        {
          ...formData,
          to_email: formData.toEmail // Dynamic recipient
        },
        'P0d6eDW6bnrHZTj6E' // Replace with your public key
      )
      .then(
        (response) => {
          setStatusMessage('Message sent successfully!'); // Set success message
          setStatusColor('green'); // Set text color to green

          // Automatically refresh form after 2 seconds
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
            setStatusMessage(''); // Reset the status message
          }, 2000); // 2 seconds delay
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again.'); // Set error message
          setStatusColor('red'); // Set text color to red
        }
      );
  };

  return (
    
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={formData.name}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={formData.email}
          className="form-input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={formData.subject}
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          value={formData.message}
          className="form-textarea"
        ></textarea>
        <button type="submit" className="submit-button">Send Email</button>
      </form>

      {/* This is where the success or error message will appear */}
      {statusMessage && (
        <p className="status-message" style={{ color: statusColor }}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default Contact;
