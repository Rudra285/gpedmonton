import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

interface EventCardProps {
  image: string;
  name: string;
  date: string;
  desc: string;
  timestamp: number;
}

const EventCard: React.FC<EventCardProps> = ({ image, name, date, desc, timestamp }) => {
  const now = Date.now();
  const eventEnded = now > timestamp;

  return (
    <div className={`event-card ${eventEnded ? "event-ended" : ""}`}>
      <img src={image} alt={name} className="event-image" />
      <h3>{name}</h3>
      <p>{date}</p>

      {eventEnded ? (
        <button className="event-ended-btn" disabled>
          Event Ended
        </button>
      ) : (
        <Link
          to={`/events/register/${encodeURIComponent(name)}`}
          state={{ eventName: name, desc, date }}
          className="register-link"
        >
          Details
        </Link>
      )}
    </div>
  );
};

export default EventCard;

