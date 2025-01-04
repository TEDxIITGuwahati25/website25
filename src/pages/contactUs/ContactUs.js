import React, { useState } from 'react';
import './ContactUs.css';
import '../../components/sidebar/Sidebar';
import '../../components/newsletter/NewsLetter'
import ScrollButton from '../../components/scroll/ScrollButton';
import backpic from './image/img1.jpg' 


const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
    comments: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbwi3Fj33QEnEY9TSkLjE_9-PoBAPO6NIkq4jWEyNzbpv66M3nOt0UxhTQU3wiAyxW-U-g/exec";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          contact_number: '',
          comments: '',
          newsletter: false,
        });
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="main">
      <div className="blog-section">
        <h1>Leave Us a Message!!</h1>
        <p>
          If you would like to subscribe to our Newsletter, have a question
          about an upcoming event, would like to explore a partnership with TEDx IIT Guwahati, or want to send us a comment or suggestion, simply fill out the form below and we’ll get back to you shortly.
        </p>
      </div>

      <div className="form-wrapper">
        <div className="outer-box"></div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name*"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contact_number"
                placeholder="Contact Number*"
                value={formData.contact_number}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="comments"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label htmlFor="newsletter">
                Sign me up for the TEDx IIT Guwahati newsletter
              </label>
            </div>

            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
