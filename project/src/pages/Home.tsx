import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Calendar, Archive, ArrowRight, MapPin, Clock, Bell, Heart } from 'lucide-react';

export default function Home() {
  const [showDonateModal, setShowDonateModal] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80"
          >
            <source src="https://example.com/church-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Welcome to Grace Church</h1>
            <p className="text-xl mb-8 text-gray-200">Join our vibrant community in worship, fellowship, and spiritual growth</p>
            <div className="flex space-x-4">
              <Link
                to="/live"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                Watch Live Stream
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => setShowDonateModal(true)}
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Service Countdown */}
      <div className="bg-indigo-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <Clock className="h-5 w-5" />
            <span>Next Service: Sunday at 9:00 AM (Starts in 2 days, 3 hours)</span>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full text-sm transition-colors">
              <Bell className="h-4 w-4 inline mr-1" />
              Set Reminder
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Link
            to="/live"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Video className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Live Stream</h2>
            <p className="text-gray-600">Join our services live from anywhere in the world.</p>
          </Link>

          <Link
            to="/events"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Calendar className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
            <p className="text-gray-600">Stay updated with our church events and activities.</p>
          </Link>

          <Link
            to="/archive"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Archive className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Service Archive</h2>
            <p className="text-gray-600">Access our past services and sermons.</p>
          </Link>
        </div>
      </div>

      {/* Weekly Schedule with Map */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Weekly Schedule</h2>
              <div className="space-y-4">
                {[
                  { day: 'Sunday', time: '9:00 AM', name: 'Morning Service' },
                  { day: 'Sunday', time: '11:00 AM', name: 'Main Service' },
                  { day: 'Wednesday', time: '7:00 PM', name: 'Bible Study' },
                ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-xl text-indigo-600">{service.name}</h3>
                        <p className="text-gray-600">{service.day} at {service.time}</p>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <Bell className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Location</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                  {/* Replace with actual map component */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <MapPin className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-2">Grace Church</h3>
                <p className="text-gray-600 mb-4">123 Faith Street, Cityville, ST 12345</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  Get Directions
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Support Our Ministry</h2>
            <p className="text-gray-600 mb-6">Your generous donation helps us continue our mission and serve our community.</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {['$10', '$25', '$50', '$100', '$250', '$500'].map((amount) => (
                <button
                  key={amount}
                  className="py-2 px-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-600 transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>
            <button
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mb-4"
            >
              Continue to Payment
            </button>
            <button
              onClick={() => setShowDonateModal(false)}
              className="w-full py-3 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}