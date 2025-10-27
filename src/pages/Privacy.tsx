import React, { forwardRef } from 'react';
import './Privacy.css';
import { Link } from "react-router-dom";
import { IoIosGlobe, IoMdMail } from "react-icons/io";
import { FaMap } from "react-icons/fa6";


const Privacy = forwardRef<HTMLElement>((props, ref) => {
  return (
    <main className='privacy'>
        <h1>Data Collection, Use, and Privacy Policy</h1>
        <section ref={ref} className='purpose'>
            <h2>1. Purpose</h2>
            <p>
                Gayatri Pariwar Edmonton (“we,” “our,” or “us”) collects certain personal information from participants and members for the purpose of event registration, communication, and community updates. By registering for an event or subscribing to our newsletter, you consent to the collection and use of your information in accordance with these terms.
            </p>
        </section>
        <section className='info'>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
                <li>Personal details such as name, phone number, and email address</li>
                <li>Demographic information (e.g., city, age group) when voluntarily provided</li>
                <li>Event participation details (e.g., attendance, preferences, volunteering interests)</li>
            </ul>
        </section>
        <section className='use'>
            <h2>3. How We Use Your Information</h2>
            <p>Your information will be used to:</p>
            <ul>
                <li>Communicate event details, reminders, and updates</li>
                <li>Share newsletters and community announcements</li>
                <li>Improve future programs and services</li>
                <li>Maintain internal records for volunteer coordination and donor recognition</li>
            </ul>
            <p>We will not sell, rent, or share your information with third parties for marketing or commercial purposes.</p>
        </section>
        <section className='consent'>
            <h2>4. Consent</h2>
            <p>
                By submitting your details through an online form, physical form, or digital sign-up, you provide explicit consent for us to collect and use your information as described above. You may withdraw your consent at any time by contacting us at <a className="email-link" href='mailto:wgpedm@gmail.com'>awgpedm@gmail.com</a>.
            </p>
        </section>
        <section className='security'>
            <h2>5. Data Security</h2>
            <p>
                We are committed to ensuring your information is secure. Reasonable measures are in place to prevent unauthorized access, loss, or misuse of your data.
            </p>
        </section>
        <section className='comm'>
            <h2>6. Email and Communication Preferences</h2>
            <p>
                You may unsubscribe from our email communications at any time by clicking the unsubscribe link provided in our emails or by contacting us directly.
            </p>
        </section>
        <section className='media'>
            <h2>7. Photography and Media</h2>
            <p>
                During events, photos or videos may be taken for documentation and promotional purposes (e.g., newsletters, social media, website). By attending, you consent to the possible use of your image unless you request otherwise in writing.
            </p>
        </section>
        <section className='update'>
            <h2>8. Updates to These Terms</h2>
            <p>
                We may update these Terms and Conditions periodically. Any changes will be posted on our official communication channels.
            </p>
        </section>
        <section className='contact'>
            <h2>9. Contact Information</h2>
            <p>
                For any questions, concerns, or requests regarding your data, please contact:
            </p>
            <div className="detail-item">
                <IoMdMail style={{ color:"orange" }} />
                <a style={{ color: 'orange' }} className="email-link" href='mailto:wgpedm@gmail.com'><span>awgpedm@gmail.com</span></a>
            </div>
            <div className="detail-item">
                <IoIosGlobe style={{ color:"orange" }} />
                <Link style={{ color: 'orange' }} className="home-link" to='/'><span>www.gpedmonton.org</span></Link>
            </div>
            <div className="detail-item">
                <FaMap style={{ color:"orange" }} />
                <span>Pragya Kunj – Centre for Spiritual and Holistic Wellness<br></br>Gayatri Pariwar Edmonton<br></br>22037, Township Road 520 <br></br> Sherwood Park AB, T8E 1E9</span>
            </div>
        </section>
        <p className="footer-note">
            © {new Date().getFullYear()} Gayatri Pariwar Edmonton. All rights reserved.
        </p>
    </main>
  );
});

export default Privacy;