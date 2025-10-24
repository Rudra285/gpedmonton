import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.css";

interface EventData {
  _id: string;
  name: string;
  timestamp: number;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events/upcoming")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="calendar-wrapper">
      {/* ✅ Full Calendar */}
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={events.map((e) => ({
            title: e.name,
            date: new Date(e.timestamp).toISOString(),
            url: `/events/register/${encodeURIComponent(e.name)}`,
          }))}
          eventColor="#ff7b00"
        />
      </div>
      {/* ✅ Event List Sidebar */}
      <div className="calendar-side">
        <h3>Upcoming Events</h3>
        {events.length > 0 ? (
          <ul>
            {events.map((e) => (
              <li key={e._id}>
                <a href={`/events/register/${encodeURIComponent(e.name)}`}>
                  {e.name} — {new Date(e.timestamp).toLocaleDateString()}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming events.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;