const API_URL = import.meta.env.VITE_API_URL;

export const fetchPaginatedPastEvents = async (limit = 5, offset = 0) => {
  try {
    const response = await fetch(`${API_URL}/events/get-past-events?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || data.length === 0) return [];

    console.log("RAW FRONTEND DATA:", data);

    return data.map((event) => {
      const eventDate = new Date(event.date_time);
      return {
        id: event.id,
        title: event.name, 
        date: formatDateString(eventDate),
        time: formatTimeString(eventDate),
        location: event.location || '',
        description: event.description || '',
        image: event.image || '/images/events/placeholder.jpg'
      };
    });
  } catch (error) {
    console.error('Error fetching paginated past events:', error);
    return [];
  }
};

export const fetchUpcomingEvents = async (limit = 5) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/events/get-upcoming-events?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || data.length === 0) return [];

    return data.map((event) => {
      const eventDate = new Date(event.date_time);
      return {
        id: event.id,
        title: event.name, 
        date: formatDateString(eventDate),
        time: formatTimeString(eventDate),
        location: event.location || '',
        description: event.description || '',
        image: event.image || '/images/events/placeholder.jpg'
      };
    });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
};
/**
 * Format date_time to readable date string (e.g., "May 14, 2026")
 */
function formatDateString(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Format date_time to readable time string (e.g., "2:30 PM")
 */
function formatTimeString(date) {
  const options = { hour: 'numeric', minute: '2-digit', hour12: true };
  return date.toLocaleTimeString('en-US', options);
}
