import React from 'react';
import { format } from 'date-fns';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';

export default function Events() {
  const [events, setEvents] = React.useState<Event[]>([]);

  // Mock data for now - replace with Supabase fetch
  React.useEffect(() => {
    setEvents([
      {
        id: '1',
        title: 'Easter Sunday Service',
        date: '2024-03-31T09:00:00Z',
        description: 'Join us for our special Easter celebration service',
        location: 'Main Sanctuary',
        imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80'
      },
      {
        id: '2',
        title: 'Youth Conference 2024',
        date: '2024-04-15T14:00:00Z',
        description: 'Annual youth conference focusing on spiritual growth',
        location: 'Fellowship Hall',
        imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80'
      },
      {
        id: '3',
        title: 'Community Outreach',
        date: '2024-04-20T10:00:00Z',
        description: 'Serving our local community through various activities',
        location: 'Community Center',
        imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{format(new Date(event.date), 'MMMM d, yyyy h:mm a')}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}