import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import MediaManager from "../admin/MediaManager";
import EventManager from "../admin/EventManager";
import PhotoManager from "../admin/PhotoManager";
import DataManager from "../admin/DataManager";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <main className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Media Section */}
      <section className="dashboard-section">
        <h2>Media Manager</h2>
        <MediaManager />
      </section>

      {/* Event Section */}
      <section className="dashboard-section">
        <h2>Event Manager</h2>
        <EventManager />
      </section>

      {/* Photo Gallery */}
      <section className="dashboard-section">
        <h2>Photo Manager</h2>
        <PhotoManager />
      </section>

      {/* Registrations & Subscribers Tabs */}
      <section className="dashboard-section">
        <h2>Registrations & Subscribers</h2>
        <DataManager />
      </section>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </main>
  );
};

export default AdminDashboard;