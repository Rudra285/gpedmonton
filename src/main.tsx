import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Photos from './pages/PhotoGallery';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Resources from './pages/Resources';
import ScrollTop from './components/ScrollTop';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import EventRegistrationForm from "./components/EventRegistrationForm";
import CancelRegistration from "./components/CancelRegistration";
import ProtectedRoute from "./components/ProtectedRoute";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/register/:eventName" element={<EventRegistrationForm />} />
          <Route path="/events/register/:id/cancel" element={<CancelRegistration />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* add other routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
