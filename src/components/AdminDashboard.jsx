import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("access_token"); // Assuming JWT token is stored in localStorage

  // Fetch all the data for the dashboard
  useEffect(() => {
    if (!token) {
      setError("You must be logged in to view the dashboard.");
      return;
    }

    // Fetch Users
    fetch("/api/admin/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => setError("Failed to load users."));

    // Fetch Reports
    fetch("/api/admin/reports", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setReports(data.reports))
      .catch((err) => setError("Failed to load reports."));

    // Fetch Channels
    fetch("/api/admin/channels", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setChannels(data.channels))
      .catch((err) => setError("Failed to load channels."));
  }, [token]);

  // Ban a user
  const handleBan = (userId) => {
    fetch(`/api/admin/ban/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, is_banned: true } : user
          )
        );
      })
      .catch((err) => setError("Failed to ban user."));
  };

  // Unban a user
  const handleUnban = (userId) => {
    fetch(`/api/admin/unban/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, is_banned: false } : user
          )
        );
      })
      .catch((err) => setError("Failed to unban user."));
  };

  // Ban or unban from reports
  const handleBanFromReport = (userId) => {
    fetch(`/api/admin/ban/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setReports(
          reports.map((report) =>
            report.reported_user_id === userId
              ? { ...report, user_banned: true }
              : report
          )
        );
      })
      .catch((err) => setError("Failed to ban user from report."));
  };

  const handleUnbanFromReport = (userId) => {
    fetch(`/api/admin/unban/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setReports(
          reports.map((report) =>
            report.reported_user_id === userId
              ? { ...report, user_banned: false }
              : report
          )
        );
      })
      .catch((err) => setError("Failed to unban user from report."));
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6 pt-12 overflow-visible">
        Admin Dashboard
      </h1>

      {error && (
        <p className="text-red-500 bg-red-200 p-4 rounded-lg text-center mb-6">
          {error}
        </p>
      )}

      {/* Users Section */}
      <section className="mb-8">
        <h2 className="text-xl text-orange-500 mb-4">Users</h2>
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="w-full table-auto text-sm text-gray-300">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="bg-gray-900 hover:bg-gray-700">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    {user.is_banned ? "Banned" : "Active"}
                  </td>
                  <td className="p-3">
                    {user.is_banned ? (
                      <button
                        onClick={() => handleUnban(user.id)}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
                      >
                        Unban
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBan(user.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                      >
                        Ban
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Reports Section */}
      <section className="mb-8">
        <h2 className="text-xl text-orange-500 mb-4">Reports</h2>
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="w-full table-auto text-sm text-gray-300">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-3 text-left">Reporter</th>
                <th className="p-3 text-left">Reported User</th>
                <th className="p-3 text-left">Reason</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="bg-gray-900 hover:bg-gray-700">
                  <td className="p-3">{report.reporter_id}</td>
                  <td className="p-3">{report.reported_user_id}</td>
                  <td className="p-3">{report.reason}</td>
                  <td className="p-3">
                    {report.user_banned ? (
                      <button
                        onClick={() => handleUnbanFromReport(report.reported_user_id)}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
                      >
                        Unban
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBanFromReport(report.reported_user_id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                      >
                        Ban
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Channels Section */}
      <section>
        <h2 className="text-xl text-orange-500 mb-4">Channels</h2>
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="w-full table-auto text-sm text-gray-300">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-3 text-left">Channel Name</th>
                <th className="p-3 text-left">Owner</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel) => (
                <tr key={channel.id} className="bg-gray-900 hover:bg-gray-700">
                  <td className="p-3">{channel.name}</td>
                  <td className="p-3">{channel.owner_id}</td>
                  <td className="p-3">{channel.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
