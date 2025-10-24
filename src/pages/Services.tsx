import { Mail, Phone, Map } from "lucide-react"; // icons
import { IoMdMail } from "react-icons/io";
import { FaMap, FaPhone } from "react-icons/fa6";
import React, { useState } from "react";
// import './Contact.css';

const Services: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // send data to backend / API here
  };

  return (
    <main>
        <section className="contact-section">
            {/* LEFT SIDE - Contact Details */}
            <div className="contact-details-container">
                <h2>Contact Info</h2>
                <div className="detail-item">
                    <IoMdMail style={{ color:"red" }} />
                    <a style={{ color: 'red' }} className="email-link" href='mailto:wgpedm@gmail.com'><span>awgpedm@gmail.com</span></a>
                </div>
                <div className="detail-item">
                    <FaPhone style={{ color:"red" }} />
                    <span>+ 1 (780) 438-1234</span>
                </div>
                <div className="detail-item">
                    <FaMap style={{ color:"red" }} />
                    <span>237 Ferguson Place,<br></br>Edmonton, AB, T6R 2C7</span>
                </div>
            </div>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <h2>Contact Us</h2>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="textbox"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="textbox"
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textbox"
                    />
                    <div className="submit-button-wrapper">
                        <button type="submit" className="submit-button">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        <section>
            <h2>Executive Committee Contact</h2>
            <p>Gayatri Pariwar Edmonton Executive committe for 2025:</p>
            <div>
                <div>
                    <h3>Prashant Shrivastava</h3>
                    <p>(780) 438-1234</p>
                </div>
                <div>
                    <h3>Devendra Patel</h3>
                    <p>(780) 461-1197</p>
                </div>
                <div>
                    <h3>Arun Bhavsar</h3>
                    <p>(780) 466-3837</p>
                </div>
            </div>    
        </section>
    </main>
  );
};

export default Services;