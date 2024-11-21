import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 h-screen bg-black text-white">
      
      {/* Sidebar for Admin Actions */}
      <aside className="w-full md:w-1/4 bg-white text-black shadow-lg rounded-lg p-4 h-full">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Admin Actions</h2>
        
        <button className="w-full bg-orange-500 text-white rounded py-2 mb-4 hover:bg-orange-600 transition-all">
          + Add New User
        </button>

        <button className="w-full bg-orange-500 text-white rounded py-2 hover:bg-orange-600 transition-all">
          + Add New Group
        </button>
      </aside>

      {/* Main Content: Users and Groups */}
      <section className="flex flex-col md:flex-row w-full md:w-3/4 bg-white text-black shadow-lg rounded-lg p-4 h-full">
        
        {/* Users List */}
        <div className="w-full md:w-1/2 border-r border-gray-300 pr-4">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Users</h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-2 bg-gray-200 rounded-lg shadow-md">
              <span>Sarah Parker</span>
              <button className="text-red-500 font-medium hover:underline">Delete</button>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-200 rounded-lg shadow-md">
              <span>Mike Johnson</span>
              <button className="text-red-500 font-medium hover:underline">Delete</button>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-200 rounded-lg shadow-md">
              <span>Emma Brown</span>
              <button className="text-red-500 font-medium hover:underline">Delete</button>
            </li>
          </ul>
        </div>
        
        {/* Groups List */}
        <div className="w-full md:w-1/2 pl-4">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">User Groups</h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-2 bg-gray-200 rounded-lg shadow-md">
              <span>Podcast Lovers</span>
              <button className="text-red-500 font-medium hover:underline">Delete</button>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-200 rounded-lg shadow-md">
              <span>Rock Music Fans</span>
              <button className="text-red-500 font-medium hover:underline">Delete</button>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-200 rounded-lg shadow-md">
              <span>True Crime Discussions</span>
              <button className="text-red-500 font-medium hover:underline">Delete</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
