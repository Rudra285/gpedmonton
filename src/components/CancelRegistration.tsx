import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import squareLogo from "../images/logo.png";

const CancelRegistration: React.FC = () => {
  const [status, setStatus] = useState("Processing your cancellation...");
  const [eventName, setEventName] = useState<string>("");
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const cancelRegistration = async () => {
      try {
        console.log("Fetching registration info for ID:", id);
        const regRes = await fetch(`http://localhost:5000/api/registrations/id/${id}`);

        if (!regRes.ok) {
          console.log("Registration fetch failed:", regRes.status);
          setStatus("Registration not found or already cancelled.");
          return;
        }

        const registration = await regRes.json();
        console.log("Fetched registration:", registration);
        setEventName(registration.eventName);

        console.log("Deleting registration...");
        const delRes = await fetch(`http://localhost:5000/api/registrations/${id}`, {
          method: "DELETE",
        });

        if (delRes.ok) {
          setStatus(`Your registration for "${registration.eventName}" has been successfully cancelled.`);
        } else if (delRes.status === 404) {
          setStatus("Registration not found or already cancelled.");
        } else {
          setStatus("Something went wrong while cancelling your registration.");
        }
      } catch (err) {
        console.error("Error cancelling registration:", err);
        setStatus("Unable to reach the server. Please try again later.");
      }
    };

    if (id) cancelRegistration();
  }, [id]);

  return (
    <main style={{ textAlign: "center", padding: "3rem" }}>
      <img src={squareLogo} alt="GP Edmonton Logo" style={{ height: "80px" }} />
      <h1>Gayatri Pariwar Edmonton</h1>
      <h2>{status}</h2>
    </main>
  );
};

export default CancelRegistration;