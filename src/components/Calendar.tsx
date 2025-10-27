import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

interface EventData {
  _id: string;
  name: string;
  timestamp: number;
  desc?: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://gpedmonton-backend.onrender.com/api/events/upcoming")
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
          contentHeight="auto"
          aspectRatio={1.6}        // ✅ ensures full month width
          events={events.map((e) => ({
            id: e._id,
            title: e.name,
            start: new Date(e.timestamp), // preferred over `date`
            extendedProps: {
              desc: e.desc,
              date: new Date(e.timestamp).toLocaleDateString(),
            },
          }))}
          eventColor="#ff7b00"
          eventClick={(info) => {
              info.jsEvent.preventDefault();
              navigate(`/events/register/${encodeURIComponent(info.event.title)}`, {
                state: {
                  eventName: info.event.title,
                  desc: info.event.extendedProps.desc,
                  date: new Date(info.event.start!).toLocaleString([], {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })
                },
              });
          }}
        />
      </div>
      {/* ✅ Event List Sidebar */}
      <div className="calendar-side">
        <h3>Registration for upcoming Events</h3>
        {events.length > 0 ? (
          <ul>
            {events.map((e) => (
              <li key={e._id}>
                <a
                  href={`/events/register/${encodeURIComponent(e.name)}`}
                  onClick={(ev) => {
                    ev.preventDefault(); // ⛔ stop full-page reload
                    navigate(`/events/register/${encodeURIComponent(e.name)}`, {
                      state: {
                        eventName: e.name,
                        desc: e.desc,
                        date: new Date(e.timestamp).toLocaleString([], {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })
                      },
                    });
                  }}
                >
                  {e.name} — {new Date(e.timestamp).toLocaleDateString()}
                  <FaArrowRight className="arrow-icon" />
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