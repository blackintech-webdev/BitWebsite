import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import AdminLogin from "./AdminLogin";
import EventForm from "./EventForm";
import EventsList from "./EventsList";
import "./AdminPage.css";

function AdminPage() {
  const [activeTab, setActiveTab] = useState("create"); // 'create' or 'manage'
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);

  const { user, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading) setHasInitialized(true);
  }, [loading]);

  // Show spinner only while the initial auth check runs
  if (loading && !hasInitialized) {
    return (
      <div className="admin-page-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            color: "#FFD700",
          }}
        >
          <i
            className="fas fa-spinner fa-spin"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!user) {
    return <AdminLogin />;
  }

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Trigger refresh in EventsList after successful create
  const handleEventCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
    // Optional: switch to manage tab to see new event
    setActiveTab("manage");
  };

  return (
    <div className="admin-page-container">
      {/* Hero Section */}
      <div className="admin-hero">
        <div className="admin-hero-content">
          <h1>Admin Dashboard</h1>
          <p>Manage Events, Sponsors, Board Members & Photos</p>
        </div>

        {/* User Info & Logout */}
        <div className="user-info">
          <span className="user-email">{user.email}</span>
          <button onClick={handleLogout} className="btn-logout">
            <i className="fas fa-sign-out-alt"></i>
            Sign Out
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="admin-tabs">
        <button
          className={`tab-btn ${activeTab === "create" ? "active" : ""}`}
          onClick={() => setActiveTab("create")}
        >
          <i className="fas fa-plus-circle"></i>
          Create Event
        </button>
        <button
          className={`tab-btn ${activeTab === "manage" ? "active" : ""}`}
          onClick={() => setActiveTab("manage")}
        >
          <i className="fas fa-list"></i>
          Manage Events
        </button>
      </div>

      {/* Tab Content */}
      <div className="admin-content">
        {activeTab === "create" && (
          <div className="tab-pane active">
            <div className="pane-header">
              <h2>Create New Event</h2>
              <p>Fill out the form below to add a new event</p>
            </div>
            <EventForm onSuccess={handleEventCreated} />
          </div>
        )}

        {activeTab === "manage" && (
          <div className="tab-pane active">
            <div className="pane-header">
              <h2>Manage Events</h2>
              <p>View, edit, or delete existing events</p>
            </div>
            <EventsList refreshTrigger={refreshTrigger} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
