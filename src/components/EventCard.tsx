import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

interface EventCardProps {
  image: string;
  name: string;
  desc: string;
  timestamp: number;
}

const EventCard: React.FC<EventCardProps> = ({ image, name, desc, timestamp }) => {
  const now = Date.now();
  const eventEnded = now > timestamp;

  const TZ = "America/Edmonton";

  const formatEdmontonDateTime = (ts: number) =>
    new Date(ts).toLocaleString("en-CA", {
      timeZone: TZ,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });


  return (
    <div className={`event-card ${eventEnded ? "event-ended" : ""}`}>
      <img src={image} alt={name} className="event-image" />
      <h3>{name}</h3>
      <p>{formatEdmontonDateTime(timestamp)}</p>

      {eventEnded ? (
        <button className="event-ended-btn" disabled>
          Event Ended
        </button>
      ) : (
        <Link
          to={`/events/register/${encodeURIComponent(name)}`}
          state={{ eventName: name, desc, date: formatEdmontonDateTime(timestamp) }}
          className="register-link"
        >
          Details
        </Link>
      )}
    </div>
  );
};

export default EventCard;

