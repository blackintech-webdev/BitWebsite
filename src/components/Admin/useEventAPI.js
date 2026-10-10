import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const useEventAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const { getToken, session } = useAuth();

  // Get auth token from Supabase session
  const getAuthToken = async () => {
    try {
      if (!session) {
        console.warn('No session available');
        return null;
      }
      
      const token = session.access_token;
      console.log('Token from session:', !!token);
      return token;
    } catch (err) {
      console.error('Failed to get auth token:', err);
      return null;
    }
  };

  // Helper function for API calls
  const apiCall = async (endpoint, options = {}) => {
    try {
      const token = await getAuthToken();
      const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
        console.log('Auth header set with token');
      } else {
        console.warn('No auth token available');
      }

      const url = `${API_URL}${endpoint}`;
      console.log('API Call:', url);

      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.detail ||
          errorData.message ||
          `API error: ${response.status}`
        );
      }

      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  // Get all events (for admin listing) - no auth required
  const getAllEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/events`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (err) {
      const message = err.message || 'Failed to fetch events';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get upcoming events - no auth required
  const getUpcomingEvents = async (limit = 5) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `${API_URL}/events/get-upcoming-events?limit=${limit}`
      );
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (err) {
      const message = err.message || 'Failed to fetch upcoming events';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get past events - no auth required
  const getPastEvents = async (limit = 4, offset = 0) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `${API_URL}/events/get-past-events?limit=${limit}&offset=${offset}`
      );
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (err) {
      const message = err.message || 'Failed to fetch past events';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get single event - no auth required
  const getEvent = async (eventId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/events/${eventId}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (err) {
      const message = err.message || 'Failed to fetch event';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Create event (auth required)
  const createEvent = async (eventData) => {
    try {
      setLoading(true);
      setError(null);

      const token = await getAuthToken();
      if (!token) {
        throw new Error('Not authenticated. Please log in to create events.');
      }

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      // Convert datetime to ISO format
      const payload = {
        ...eventData,
        date_time: new Date(eventData.date_time).toISOString(),
      };

      console.log('Creating event with auth header');

      const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Create event error:', errorData);
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      const message = err.message || 'Failed to create event';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update event (auth required)
  const updateEvent = async (eventId, eventData) => {
    try {
      setLoading(true);
      setError(null);

      const token = await getAuthToken();
      if (!token) {
        throw new Error('Not authenticated. Please log in to update events.');
      }

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const payload = { ...eventData };

      // Convert datetime to ISO format if present
      if (payload.date_time) {
        payload.date_time = new Date(payload.date_time).toISOString();
      }

      const response = await fetch(`${API_URL}/events/${eventId}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      const message = err.message || 'Failed to update event';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete event (auth required)
  const deleteEvent = async (eventId) => {
    try {
      setDeleteLoading(true);
      setDeleteError(null);

      const token = await getAuthToken();
      if (!token) {
        throw new Error('Not authenticated. Please log in to delete events.');
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(`${API_URL}/events/${eventId}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (err) {
      const message = err.message || 'Failed to delete event';
      setDeleteError(message);
      throw err;
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    // State
    loading,
    error,
    deleteLoading,
    deleteError,

    // Methods
    getAllEvents,
    getUpcomingEvents,
    getPastEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};

export default useEventAPI;