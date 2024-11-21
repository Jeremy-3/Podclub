import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 h-screen bg-gray-100">
      
      {/* Sidebar for Group Management */}
      <aside className="w-full md:w-1/4 bg-white shadow rounded-lg p-4 h-full">
        <h2 className="text-xl font-semibold mb-4">My Groups</h2>
        
        <button className="w-full bg-blue-500 text-white rounded py-2 mb-4 hover:bg-blue-600">
          + Create New Group
        </button>
        
        <ul className="space-y-2">
          <li className="flex items-center justify-between p-2 bg-gray-100 rounded">
            <span>Podcast Lovers</span>
            <button className="text-blue-500">Open</button>
          </li>
          <li className="flex items-center justify-between p-2 bg-gray-100 rounded">
            <span>Rock Music Fans</span>
            <button className="text-blue-500">Open</button>
          </li>
          <li className="flex items-center justify-between p-2 bg-gray-100 rounded">
            <span>True Crime Discussions</span>
            <button className="text-blue-500">Open</button>
          </li>
        </ul>
      </aside>

      {/* Main Chat and Friend List */}
      <section className="flex flex-col md:flex-row w-full md:w-2/3 bg-white shadow rounded-lg p-4 h-full">
        
        {/* Friends List and Chats */}
        <div className="w-full md:w-1/3 border-r pr-4">
          <h2 className="text-xl font-semibold mb-4">Friends</h2>
          <ul className="space-y-2">
            <li className="flex items-center p-2 bg-gray-100 rounded cursor-pointer">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span>Sarah Parker</span>
            </li>
            <li className="flex items-center p-2 bg-gray-100 rounded cursor-pointer">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span>Mike Johnson</span>
            </li>
            <li className="flex items-center p-2 bg-gray-100 rounded cursor-pointer">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span>Emma Brown</span>
            </li>
          </ul>
        </div>
        
        {/* Chat Window */}
        <div className="w-full md:w-2/3 pl-4">
          <h2 className="text-xl font-semibold mb-4">Chat with Sarah</h2>
          <div className="flex flex-col h-full">
            <div className="flex-1 bg-gray-50 rounded p-4 overflow-y-auto">
              <div className="mb-4">
                <p className="text-sm text-gray-500">Sarah Parker • 2:45 PM</p>
                <p className="p-2 bg-blue-100 rounded mt-1">Hey! Are you coming to the listening party tonight?</p>
              </div>
              <div className="mb-4 text-right">
                <p className="text-sm text-gray-500">You • 2:46 PM</p>
                <p className="p-2 bg-gray-200 rounded mt-1">Yes! I'll be there. Can't wait!</p>
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <aside className="w-full md:w-1/4 bg-white shadow rounded-lg p-4 h-full">
        <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-100 rounded">
            Sarah joined *Rock Music Fans*
          </li>
          <li className="p-2 bg-gray-100 rounded">
            Mike shared *New Podcast Episode*
          </li>
          <li className="p-2 bg-gray-100 rounded">
            Emma commented in *True Crime Discussions*
          </li>
        </ul>
      </aside>

    </div>
  );
};

export default Dashboard;
