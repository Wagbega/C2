import React from 'react';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';
import { Service } from '../types';
import ReactPlayer from 'react-player';

export default function Archive() {
  const [services, setServices] = React.useState<Service[]>([]);
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);

  // Mock data for now - replace with Supabase fetch
  React.useEffect(() => {
    setServices([
      {
        id: '1',
        title: 'The Power of Faith',
        date: '2024-03-10T09:00:00Z',
        videoUrl: 'https://example.com/video1',
        description: 'A powerful message about faith in action',
        thumbnailUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80',
        preacher: 'Pastor John Smith'
      },
      {
        id: '2',
        title: 'Walking in Love',
        date: '2024-03-03T09:00:00Z',
        videoUrl: 'https://example.com/video2',
        description: 'Understanding God\'s love in our daily lives',
        thumbnailUrl: 'https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?auto=format&fit=crop&q=80',
        preacher: 'Pastor Sarah Johnson'
      },
      {
        id: '3',
        title: 'Building Strong Foundations',
        date: '2024-02-25T09:00:00Z',
        videoUrl: 'https://example.com/video3',
        description: 'Essential principles for spiritual growth',
        thumbnailUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80',
        preacher: 'Pastor Michael Brown'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Service Archive</h1>

        {selectedService && (
          <div className="mb-8">
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <ReactPlayer
                url={selectedService.videoUrl}
                width="100%"
                height="100%"
                controls
              />
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-indigo-600 hover:text-indigo-800 mb-4"
            >
              ← Back to archive
            </button>
          </div>
        )}

        {!selectedService && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedService(service)}
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.thumbnailUrl})` }}
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{format(new Date(service.date), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span>{service.preacher}</span>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}