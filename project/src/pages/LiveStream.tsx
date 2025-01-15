import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { MessageCircle, Share2, Heart, Users, Volume2 } from 'lucide-react';

export default function LiveStream() {
  const [activeStream, setActiveStream] = useState<'A' | 'B'>('A');
  const [showChat, setShowChat] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, user: 'John D.', text: 'Wonderful service today! 🙏', time: '2m ago' },
    { id: 2, user: 'Sarah M.', text: 'Amen! The worship was beautiful.', time: '1m ago' },
  ]);

  // Mock stream URLs - replace with actual stream URLs
  const streams = {
    A: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      name: 'Main Sanctuary',
      description: 'Live feed from our main sanctuary service',
      viewers: 245
    },
    B: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      name: 'Overflow Room',
      description: 'Live feed from our overflow room service',
      viewers: 82
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: 'You',
          text: message,
          time: 'Just now'
        }
      ]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:flex-grow">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Stream Controls */}
              <div className="border-b p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {(['A', 'B'] as const).map((stream) => (
                      <button
                        key={stream}
                        onClick={() => setActiveStream(stream)}
                        className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                          activeStream === stream
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Stream {stream}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <button className="hover:text-indigo-600">
                      <Volume2 className="h-5 w-5" />
                    </button>
                    <button className="hover:text-indigo-600">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button 
                      className="hover:text-red-600"
                      onClick={() => setShowChat(!showChat)}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>LIVE</span>
                    <span className="mx-2">•</span>
                    <Users className="h-4 w-4" />
                    <span>{streams[activeStream].viewers} watching</span>
                  </div>
                </div>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-black">
                <ReactPlayer
                  url={streams[activeStream].url}
                  width="100%"
                  height="100%"
                  controls
                  playing
                />
              </div>
              
              {/* Stream Info */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{streams[activeStream].name}</h2>
                <p className="text-gray-600 mb-6">{streams[activeStream].description}</p>
                
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Service Times:</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { day: 'Sunday', time: '9:00 AM', name: 'Morning Service' },
                      { day: 'Sunday', time: '11:00 AM', name: 'Main Service' },
                      { day: 'Wednesday', time: '7:00 PM', name: 'Bible Study' },
                    ].map((service, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-indigo-600">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.day} at {service.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Chat */}
          {showChat && (
            <div className="lg:w-96">
              <div className="bg-white rounded-lg shadow-md h-[600px] flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Live Chat</h3>
                    <MessageCircle className="h-5 w-5 text-gray-600" />
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className="flex flex-col">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{msg.user}</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <p className="text-gray-600">{msg.text}</p>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <form onSubmit={handleSendMessage}>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}