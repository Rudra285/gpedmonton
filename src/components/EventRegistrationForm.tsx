import React from "react";
import { useForm } from "react-hook-form";
import './EventRegistrationForm.css'
import squareLogo from '../assets/images/square-logo.png'
import { useParams, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  attendees: number;
  specialRequests?: string;
  agree: boolean;
}

interface LocationState {
  eventName?: string;
  date?: string;
  desc?: string;
}

const EventRegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { eventName: eventNameFromParams } = useParams<{ eventName: string }>();

  const location = useLocation();
  const state = location.state as LocationState;
  const navigate = useNavigate();
  
  const onSubmit = async (data: FormData) => {
    const eventName = state?.eventName || eventNameFromParams || "Unknown Event";

    try {
      const saveRes = await fetch("http://localhost:5000/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          eventName: state?.eventName || eventNameFromParams || "Unknown Event",
        }),
      });

      if (!saveRes.ok) throw new Error("Failed to submit registration");

      const result = await saveRes.json();
      console.log("✅ Registration saved:", result);

      const registrationId = result.registration._id;

      const mailRes = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          date: state?.date,
          name: `${data.firstName} ${data.lastName}`,
          eventName: state?.eventName,
          attendees: data.attendees,
          phoneNumber: data.phone,
          specialRequests: data.specialRequests,
          registrationId,
        }),
      });

      if (!mailRes.ok) throw new Error("Failed to send confirmation email.");
      console.log("✅ Confirmation email sent.");

      alert(`Registration successful for ${eventName}!`);

      navigate("/events");
    } catch (err) {
      console.error("❌ Error submitting registration:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="event-registration-page">
      <div className="event-info">
        <h1>{state?.eventName || eventNameFromParams}</h1>
        <h3>{state?.date}</h3>
        <ReactMarkdown>{state?.desc || "No description provided."}</ReactMarkdown>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2 className="form-title">
          {"Event Registration"}
        </h2>

        {/* Name */}
        <label>Your name</label>
        <input placeholder="First" {...register("firstName", { required: "First Name is required" })} />
        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        <input placeholder="Last" {...register("lastName", { required: "Last Name is required" })} />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}

        {/* Email */}
        <label>Email</label>
        <input placeholder="Emal Address" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }})} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* Phone */}
        <label>Phone (optional)</label>
        <input {...register("phone")} />

        {/* Attendees */}
        <label>Number of Attendees</label>
        <input type="number" min={1} defaultValue={1} {...register("attendees", { required: true, min: 1 })} />

        {/* Special Requests */}
        <label>Special Requests</label>
        <textarea {...register("specialRequests")} />

        {/* Donation */}
        <div className="donation-link">
          <label>Donate (optional)</label>
          <a href="https://checkout.square.site/merchant/MLB04Z81ZPQQK/checkout/YFROZOMGZRKFLKH3CSH3KTL4" target="_blank" rel="noopener noreferrer">
            <img src={squareLogo} className='square-up-logo' />
          </a>
        </div>

        {/* Agreement */}
        <div className="terms-group">
          <span>I agree to the terms & conditions</span>
        </div>
        {errors.agree && <p className="error">You must agree before submitting.</p>}

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </main>
  );
};

export default EventRegistrationForm;