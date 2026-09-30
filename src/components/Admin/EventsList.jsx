import React, { useState, useEffect } from 'react';
import useEventAPI from './useEventAPI';
import EventForm from './EventForm';
import './EventsList.css';

function EventsList({ refreshTrigger }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [sortBy, setSortBy] = useState('upcoming'); // 'upcoming' or 'past'
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const { getAllEvents, deleteEvent, deleteLoading, deleteError } = useEventAPI();

  // Load events on mount and when refresh trigger changes
  useEffect(() => {
    loadEvents();
  }, [refreshTrigger]);

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllEvents();
      setEvents(data || []);
    } catch (err) {
      setError(err.message || 'Failed to load events');
      console.error('Error loading events:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get filtered events based on search and sort
  const getFilteredEvents = () => {
    const now = new Date();
    let filtered = [...events];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.location && event.location.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort by time
    if (sortBy === 'upcoming') {
      filtered = filtered.filter(e => new Date(e.date_time) >= now);
      filtered.sort((a, b) => new Date(a.date_time) - new Date(b.date_time));
    } else {
      filtered = filtered.filter(e => new Date(e.date_time) < now);
      filtered.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
    }

    return filtered;
  };

  const handleDeleteClick = (eventId) => {
    setDeleteConfirm(eventId);
  };

  const handleConfirmDelete = async (eventId) => {
    try {
      await deleteEvent(eventId);
      setEvents(events.filter(e => e.id !== eventId));
      setDeleteConfirm(null);
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  const handleEditSuccess = () => {
    setEditingId(null);
    loadEvents();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const filteredEvents = getFilteredEvents();

  // Show editing form
  if (editingId) {
    const eventToEdit = events.find(e => e.id === editingId);
    return (
      <div className="events-list-container">
        <div className="edit-form-header">
          <button
            onClick={() => setEditingId(null)}
            className="btn-back"
          >
            <i className="fas fa-arrow-left"></i>
            Back to List
          </button>
          <h3>Edit Event</h3>
        </div>
        <EventForm
          initialData={eventToEdit}
          isEditing={true}
          onSuccess={handleEditSuccess}
        />
      </div>
    );
  }

  return (
    <div className="events-list-container">
      {/* Search & Filter Bar */}
      <div className="events-controls">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search events by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="sort-buttons">
          <button
            className={`sort-btn ${sortBy === 'upcoming' ? 'active' : ''}`}
            onClick={() => setSortBy('upcoming')}
          >
            <i className="fas fa-calendar-check"></i>
            Upcoming
          </button>
          <button
            className={`sort-btn ${sortBy === 'past' ? 'active' : ''}`}
            onClick={() => setSortBy('past')}
          >
            <i className="fas fa-history"></i>
            Past
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading events...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="error-state">
          <i className="fas fa-exclamation-triangle"></i>
          <p>{error}</p>
          <button onClick={loadEvents} className="btn-retry">
            <i className="fas fa-redo"></i>
            Retry
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredEvents.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-inbox"></i>
          <p>
            {events.length === 0
              ? 'No events yet. Create your first one!'
              : 'No events match your search.'}
          </p>
        </div>
      )}

      {/* Events Grid - Card Layout */}
      {!loading && !error && filteredEvents.length > 0 && (
        <div className="events-table-wrapper">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              {/* Event Name with Image */}
              <div className="event-name">
                {event.image && (
                  <img src={event.image} alt={event.name} className="event-thumbnail" />
                )}
                <span>{event.name}</span>
              </div>

              {/* Scrollable Content Area */}
              <div className="event-card-content">
                {/* Event DateTime */}
                <div className="event-datetime">
                  <i className="fas fa-clock"></i>
                  <span>{formatDate(event.date_time)}</span>
                </div>

                {/* Event Location */}
                <div className="event-location">
                  {event.location ? (
                    <>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{event.location}</span>
                    </>
                  ) : (
                    <span className="no-data">No location specified</span>
                  )}
                </div>

                {/* Event Description */}
                {event.description && (
                  <div className="event-description">
                    {event.description}
                  </div>
                )}
              </div>

              {/* Action Buttons - Always Visible */}
              <div className="event-actions">
                <button
                  onClick={() => setEditingId(event.id)}
                  className="btn-action btn-edit"
                  title="Edit event"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => handleDeleteClick(event.id)}
                  className="btn-action btn-delete"
                  title="Delete event"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>

              {/* Delete Confirmation Modal */}
              {deleteConfirm === event.id && (
                <div className="delete-confirmation">
                  <div className="confirmation-content">
                    <p>Are you sure you want to delete this event?</p>
                    <div className="confirmation-actions">
                      <button
                        onClick={() => handleConfirmDelete(event.id)}
                        disabled={deleteLoading}
                        className="btn-confirm"
                      >
                        {deleteLoading ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                            Deleting...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-check"></i>
                            Yes, Delete
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="btn-cancel"
                      >
                        <i className="fas fa-times"></i>
                        Cancel
                      </button>
                    </div>
                    {deleteError && (
                      <p className="delete-error">{deleteError}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Summary */}
      {!loading && !error && events.length > 0 && (
        <div className="events-summary">
          Showing {filteredEvents.length} of {events.length} events
        </div>
      )}
    </div>
  );
}

export default EventsList;