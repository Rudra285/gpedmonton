import React, { useEffect, useState } from "react";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import "./Subscribers.css";

interface Subscribe {
  _id: string;
  email: string;
}

const Subscribers: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscribe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/subscribe")
      .then((res) => res.json())
      .then((data) => setSubscribers(data))
      .catch((err) => console.error("Error fetching subscribers:", err))
      .finally(() => setLoading(false));
  }, []);

  const exportToCSV = () => {

    // Build CSV content
    const headers = ["Email"];
    const rows = subscribers.map((s) => [s.email]);
    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    // Create Blob and download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p>Loading subscribers...</p>;

  return (
    <div className="subscription-manager">
      <h2>📧 Newsletter Subscribers</h2>

      {subscribers.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr key={s._id}>
                  <td>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button onClick={exportToCSV} className="export-button">
              <PiMicrosoftExcelLogoLight /> Export all subscribers
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Subscribers;