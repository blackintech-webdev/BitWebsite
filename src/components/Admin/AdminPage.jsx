import React, { useState } from 'react';
import EventForm from './EventForm';
import EventsList from './EventsList';
import './AdminPage.css';

function AdminPage() {
  const [activeTab, setActiveTab] = useState('manage'); // 'create' or 'manage'
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleEventSuccess = () => {
    // Trigger a refresh of the events list
    setRefreshTrigger(prev => prev + 1);
    // Optionally switch to manage tab after creation
    setActiveTab('manage');
  };

  return (
    <div className="admin-page">
      {/* Hero Section */}
      <section className="admin-hero">
        <div className="admin-hero-content">
          <h1>Admin Dashboard</h1>
          <p>Manage BIT events, sponsors, board members, and photos</p>
        </div>
      </section>

      {/* Main Admin Content */}
      <section className="admin-content">
        <div className="admin-container">
          {/* Tab Navigation */}
          <div className="admin-tabs">
            <button
              className={`tab-button ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => setActiveTab('create')}
            >
              <i className="fas fa-plus-circle"></i>
              Create Event
            </button>
            <button
              className={`tab-button ${activeTab === 'manage' ? 'active' : ''}`}
              onClick={() => setActiveTab('manage')}
            >
              <i className="fas fa-list"></i>
              Manage Events
            </button>
          </div>

          {/* Tab Content */}
          <div className="admin-tab-content">
            {activeTab === 'create' && (
              <div className="tab-panel active">
                <div className="panel-header">
                  <h2>Create New Event</h2>
                  <p>Fill out the form below to add a new event</p>
                </div>
                <EventForm onSuccess={handleEventSuccess} />
              </div>
            )}

            {activeTab === 'manage' && (
              <div className="tab-panel active">
                <div className="panel-header">
                  <h2>Manage Events</h2>
                  <p>View, edit, or delete existing events</p>
                </div>
                <EventsList refreshTrigger={refreshTrigger} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;