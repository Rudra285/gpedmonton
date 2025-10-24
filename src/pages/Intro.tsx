import React, { forwardRef, useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import squareLogo from '../images/square-logo.png'
import Calendar from "../components/Calendar";
import './Intro.css';

const Intro = forwardRef<HTMLElement>((props, ref) => {
    const [formData, setFormData] = useState({
        pooja: "",
        subEmail: "",
        reqEmail: "",
        name: "",
        phone: "",
        date: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement| HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
        // send data to backend / API here
        const saveRes = await fetch("http://localhost:5000/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.subEmail }), // send only email
        });

        if (!saveRes.ok) throw new Error("Failed to subscribe");

        const result = await saveRes.json();
        console.log("Subscribed:", result);
    };

    const handleRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
        // send data to backend / API here
        try {
            const res = await fetch("http://localhost:5000/api/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData), // send exactly name, email, message
            });

            if (!res.ok) throw new Error("Failed to send request");

            const result = await res.json();
            console.log("Request sent:", result);
            alert("Your request has been sent successfully!");
            setFormData((prev) => ({
                ...prev,
                name: "",
                reqEmail: "",
                pooja: "",
                phone: "",
                date: "",
            })); // reset form

        } catch (err) {
            console.error("Error sending request:", err);
            alert("Something went wrong. Please try again.");
        }
    };

  return (
    <main>
        <section ref={ref} className='overview'>
            <Calendar />
        </section>
        <section id='support-us' className='support'>
            <div style={{ backgroundColor: '#1877F2' }} className='social-media'>
                <h2>Connect with us</h2>
                <div className="social-link">
                    <a href="https://www.facebook.com/profile.php?id=100012147423755" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                        <span>Follow Us!</span>
                    </a>
                </div>
                <form onSubmit={handleSubscribe} className="subscribe-form">
                    <p>Subscribe to our newsletter</p>
                    <div className="form-row">
                        <input
                            type="text"
                            name="subEmail"
                            placeholder="Your Email"
                            value={formData.subEmail}
                            onChange={handleChange}
                            className="textbox"
                            required
                        />
                    </div>
                    <div className="subscribe-button-wrapper">
                        <button type="submit" className="subscribe-button">Subscribe</button>
                    </div>
                </form>
            </div>

            <div style={{ backgroundColor: '#f27a18ff' }} className='pooja'>
                <h2>Want to book a session?</h2>
                <form onSubmit={handleRequest} className="pooja-form">
                    <p>Select a session to subscribe to</p>
                    <div className="form-row">
                        <select
                            name="pooja"
                            value={formData.pooja}
                            onChange={handleChange}
                            className="textbox"
                            required
                        >
                            <option value="">-- Choose a session --</option>
                            <option value="Morning Meditation">Morning Meditation</option>
                            <option value="Evening Satsang">Evening Satsang</option>
                            <option value="Kids Workshop">Kids Workshop</option>
                            <option value="Bhajan Class">Bhajan Class</option>
                            <option value="Other">Other</option>
                        </select>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="textbox"
                            required
                        />

                        <input
                            type="text"
                            name="reqEmail"
                            placeholder="Your Email"
                            value={formData.reqEmail}
                            onChange={handleChange}
                            className="textbox"
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone Number (optional)"
                            value={formData.phone}
                            onChange={handleChange}
                            className="textbox"
                        />

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className='textbox'
                        />
                    </div>

                    <div className="request-button-wrapper">
                        <button type="submit" className="request-button">Request</button>
                    </div>
                </form>
            </div>

            {/* Flex Item 2 */}
            <div style={{ backgroundColor: 'green' }} className='donation'>
                <h2>Donate</h2>
                <p>Support our activities by donating securely online.</p>
                <h3>Click below to donate</h3>
                <div className="donate-link">
                    <a href="https://checkout.square.site/merchant/MLB04Z81ZPQQK/checkout/YFROZOMGZRKFLKH3CSH3KTL4" target="_blank" rel="noopener noreferrer">
                        <img src={squareLogo} className='square-logo' />
                    </a>
                </div>
            </div>
{/* 
        
            <div style={{ backgroundColor: '#2ecc71' }}>
                <h2>Pragya Kunj Support</h2>
                <p>Help maintain and grow our spiritual center.</p>
            </div> */}
        </section>
        <section className='disclaimer'>
            <h3>Disclaimer</h3>
            <p>All World Gayatri Pariwar, Edmonton (Gayatri Pariwar, Edmonton)</p>
            <ol>
                <li>Is registered as a non-profit public organization within the Province of Alberta, 
					Canada and a Registered Charity Organization with Canada Revenue Agency. </li>
				<li>Does not endorse or adhere to views or opinions expressed in the articles, 
					literature or videos posted or referenced in this website </li>
				<li>Disclaims any and all liability arising from or relating to 
					information you choose to explore through this website </li>
				<li>Makes no representation as to the reliability of information provided, or of the reference resources. 
					Any person who chooses to review any information on this website, or at reference sources 
					cited herein, assumes all risk arising from or relating thereto </li>
			</ol>
        </section>
    </main>
  );
});

export default Intro;