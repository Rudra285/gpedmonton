import React, { useEffect, useState } from "react";
import "./RegistrationManager.css";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";

interface Registration {
  _id: string;
  eventName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  attendees: number;
  specialRequests?: string;
  timestamp: string;
}

const RegistrationManager: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/registrations")
      .then((res) => res.json())
      .then((data) => setRegistrations(data))
      .catch((err) => console.error("Error fetching registrations:", err))
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Group registrations by event name
  const grouped = registrations.reduce((acc: Record<string, Registration[]>, reg) => {
    if (!acc[reg.eventName]) acc[reg.eventName] = [];
    acc[reg.eventName].push(reg);
    return acc;
  }, {});

  // ✅ Export specific event registrations to CSV
  const exportToCSV = (eventName: string, regs: Registration[]) => {
    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Attendees",
      "Special Requests",
      "Timestamp",
    ];

    const rows = regs.map((r) => [
      r.firstName,
      r.lastName,
      r.email,
      r.phone || "-",
      r.attendees,
      r.specialRequests || "-",
      new Date(r.timestamp).toLocaleString(),
    ]);

    const csvContent =
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    // ✅ Sanitize event name for filename
    const safeName = eventName.replace(/[^\w\s-]/g, "").replace(/\s+/g, "_");

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `${safeName}_registrations.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p>Loading registrations...</p>;

  return (
    <div className="registration-manager">
      <h2>📝 Event Registrations</h2>

      {Object.keys(grouped).length === 0 ? (
        <p>No registrations yet.</p>
      ) : (
        Object.entries(grouped).map(([eventName, regs]) => (
          <div key={eventName} className="event-section">
            <h3 className="event-header">{eventName}</h3>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Attendees</th>
                  <th>Special Requests</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {regs.map((r) => (
                  <tr key={r._id}>
                    <td>{r.firstName} {r.lastName}</td>
                    <td>{r.email}</td>
                    <td>{r.phone || "-"}</td>
                    <td>{r.attendees}</td>
                    <td>{r.specialRequests || "-"}</td>
                    <td>{new Date(r.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 🔹 Export button for this specific event */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <button
                onClick={() => exportToCSV(eventName, regs)}
                className="export-button"
              >
                <PiMicrosoftExcelLogoLight /> Export Registrations
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RegistrationManager;