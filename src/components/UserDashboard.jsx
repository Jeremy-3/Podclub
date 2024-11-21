import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChannel, setCurrentChannel] = useState(null);
  const [newChannelName, setNewChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const [newMessageContent, setNewMessageContent] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedMessageContent, setEditedMessageContent] = useState("");
  const [error, setError] = useState("");
  const [inviteLink, setInviteLink] = useState(""); // State for invite link
  const [inviteEmail, setInviteEmail] = useState(""); // State for invitee email
  const [editingChannelId, setEditingChannelId] = useState(null);
  const [editingChannelDescription, setEditingChannelDescription] =
    useState(""); // For editing channel description
  const navigate = useNavigate();

  // Fetch channels when component mounts
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    // Fetch user channels
    fetch("/api/user/channels", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setChannels(data.channels || []);
      })
      .catch(() => setError("Failed to load channels."));
  }, [navigate]);

  // Fetch messages when a new channel is selected
  useEffect(() => {
    if (currentChannel) {
      fetch(`/api/messages/${currentChannel.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMessages(data.messages || []);
        })
        .catch(() => setError("Failed to load messages."));
    }
  }, [currentChannel]);

  // Handle creating a new channel
  const handleCreateChannel = () => {
    const ownerId = localStorage.getItem("user_id");

    // Validate inputs
    if (!newChannelName || !channelDescription) {
      setError("Channel name and description are required.");
      return;
    }

    if (!ownerId) {
      setError("User is not logged in.");
      return;
    }

    const payload = {
      name: newChannelName.trim(),
      description: channelDescription.trim(),
      owner_id: ownerId,
    };

    // Send the request to create a new channel
    fetch("/api/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            console.error("Server Error:", data);
            throw new Error(data.message || "Failed to create channel.");
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.channel) {
          // Add the newly created channel to the list (optimistic update)
          setChannels((prevChannels) => [...prevChannels, data.channel]);

          // Clear input fields after successful creation
          setNewChannelName("");
          setChannelDescription("");
          setError(""); // Clear any errors
        } else {
          setError("Unexpected response format.");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setError(error.message);
      });
  };
  const handleUpdateChannelDescription = () => {
    if (!editingChannelDescription.trim()) {
      setError("Description cannot be empty.");
      return;
    }

    fetch(`/api/channels/${editingChannelId}/update_description`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({ description: editingChannelDescription.trim() }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message || "Failed to update description.");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.msg === "Channel updated successfully!") {
          // Update the channel description in the state
          setChannels((prevChannels) =>
            prevChannels.map((channel) =>
              channel.id === editingChannelId
                ? { ...channel, description: editingChannelDescription.trim() }
                : channel
            )
          );

          // Clear the editing state
          setEditingChannelId(null);
          setEditingChannelDescription("");
          setError(""); // Clear any errors
        } else {
          setError(data.msg || "Failed to update description.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Handle deleting a channel
  const handleDeleteChannel = (channelId) => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setError("User is not authenticated.");
      return;
    }

    fetch(`/api/channels/${channelId}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Channel deleted successfully!") {
          // Remove the deleted channel from the list (optimistic update)
          setChannels((prevChannels) =>
            prevChannels.filter((channel) => channel.id !== channelId)
          );
        } else {
          setError(data.msg || "Failed to delete channel.");
        }
      })
      .catch(() => setError("Failed to delete channel."));
  };

  // Handle sending a message to the current channel
  const handleSendMessage = (e) => {
    if (!newMessageContent) {
      e.preventDefault();
      setError("Message content cannot be empty.");
      return;
    }

    const senderId = localStorage.getItem("user_id");

    if (!senderId) {
      setError("User is not authenticated.");
      return;
    }

    // Send the message to the backend
    fetch(`/api/messages/${currentChannel.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        content: newMessageContent,
        sender_id: senderId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message && data.message.content) {
          setMessages((prevMessages) => [...prevMessages, data.message]);
          setNewMessageContent("");
        } else {
          setError("Failed to send message.");
        }
      })
      .catch(() => setError("Failed to send message."));
  };

  // Handle editing a message
  const handleEditMessage = (messageId, currentContent) => {
    setEditingMessageId(messageId);
    setEditedMessageContent(currentContent);
  };

  const handleUpdateMessage = () => {
    if (!editedMessageContent) {
      setError("Message content cannot be empty.");
      return;
    }

    // Call the PUT endpoint to update the message
    fetch(`/api/messages/${editingMessageId}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({ content: editedMessageContent }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Message updated successfully!") {
          setMessages((prevMessages) =>
            prevMessages.map((msg) =>
              msg.id === editingMessageId
                ? { ...msg, content: editedMessageContent }
                : msg
            )
          );
          setEditingMessageId(null); // Clear the editing state
          setEditedMessageContent(""); // Clear the input field
        } else {
          setError(data.msg || "Failed to update message.");
        }
      })
      .catch(() => setError("Failed to update message."));
  };

  // Handle deleting a message
  const handleDeleteMessage = (messageId) => {
    fetch(`/api/messages/${messageId}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Message deleted successfully!") {
          setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg.id !== messageId)
          );
        } else {
          setError(data.msg || "Failed to delete message.");
        }
      })
      .catch(() => setError("Failed to delete message."));
  };

   // Handle generating the invite link
  const handleGenerateInviteLink = (channelId) => {
    fetch(`/api/channels/${channelId}/invite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Add the JWT token for authorization
      },
      body: JSON.stringify({ email: "example@example.com" }), // Replace with invitee email
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to generate invite link");
        }
        return response.json();
      })
      .then((data) => {
        const generatedLink = data.invite_link; // Assuming the backend returns the link in `invite_link`
        setInviteLink(generatedLink);
        setError("Invite link generated successfully!");
      })
      .catch((err) => {
        setError(err.message || "Something went wrong!");
      });
  };

  // Handle copying the invite link
  const handleCopyInviteLink = () => {
    if (!inviteLink) {
      setError("No invite link to copy!");
      return;
    }
    navigator.clipboard.writeText(inviteLink).then(
      () => {
        setError("Invite link copied to clipboard!");
      },
      () => {
        setError("Failed to copy invite link.");
      }
    );
  };


  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-8">
      <h1 className="space-y-5 text-2xl md:text-3xl font-bold text-center text-orange-500 mb-6 pt-12 leading-normal overflow-visible">
        User Dashboard
      </h1>
      {error && (
        <div className="bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Channels Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-orange-500 mb-4">Your Channels</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={newChannelName}
              onChange={(e) => setNewChannelName(e.target.value)}
              placeholder="Channel Name"
              className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="text"
              value={channelDescription}
              onChange={(e) => setChannelDescription(e.target.value)}
              placeholder="Channel Description"
              className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <button
              onClick={handleCreateChannel}
              className="bg-orange-500 hover:bg-orange-600 p-2 rounded-md"
            >
              Create Channel
            </button>
          </div>
          <ul className="mt-4 space-y-2">
            {channels.length > 0 ? (
              channels.map((channel) => (
                <li
                  key={channel.id}
                  className="bg-gray-800 p-3 rounded-md flex justify-between items-center"
                >
                  <span>{channel.name}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentChannel(channel)}
                      className="text-orange-400 underline"
                    >
                      Open
                    </button>
                    <button
                      onClick={() => {
                        setEditingChannelId(channel.id);
                        setEditingChannelDescription(channel.description);
                      }}
                      className="text-yellow-400 underline"
                    >
                      Edit Description
                    </button>
                    <button
                      onClick={() => handleDeleteChannel(channel.id)}
                      className="text-red-400 underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No channels available.</p>
            )}
          </ul>

          {editingChannelId && (
            <div className="mt-4">
              <input
                type="text"
                value={editingChannelDescription}
                onChange={(e) => setEditingChannelDescription(e.target.value)}
                placeholder="New Description"
                className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
              <button
                onClick={handleUpdateChannelDescription}
                className="bg-green-500 hover:bg-green-600 p-2 rounded-md mt-2"
              >
                Update Description
              </button>
              <button
                onClick={() => {
                  setEditingChannelId(null);
                  setEditingChannelDescription("");
                }}
                className="bg-gray-600 hover:bg-gray-700 p-2 rounded-md mt-2 ml-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Chat Section */}
        {currentChannel && (
          <div className="col-span-2 bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-orange-500 mb-4">
              {currentChannel.name} Chat
            </h2>

            {/* Invite Section */}
            <div className="mb-4">
              <h3 className="text-orange-500 mb-2">Invite Users</h3>
              <form onSubmit={handleInviteUser} className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Invitee's Email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  required
                  className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md"
                >
                  Send Invite
                </button>
              </form>
              {inviteLink && (
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300 break-all">
                      {inviteLink}
                    </span>
                    <button
                      onClick={handleCopyInviteLink}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-md"
                    >
                      Copy Invite Link
                    </button>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm">
                    Share this link to invite others to the channel.
                  </p>
                </div>
              )}
            </div>

            <ul className="space-y-2 max-h-[300px] overflow-y-auto">
              {messages.length > 0 ? (
                messages.map((msg) => {
                  const messageDate = new Date(msg.timestamp);
                  const formattedDate = isNaN(messageDate)
                    ? "Invalid Date"
                    : messageDate.toLocaleString();

                  return (
                    <li key={msg.id} className="bg-gray-800 p-3 rounded-md">
                      <div>{msg.content}</div>
                      <div className="text-sm text-gray-400">
                        {formattedDate}
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <button
                          onClick={() => handleEditMessage(msg.id, msg.content)}
                          className="text-yellow-400"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="text-red-400"
                        >
                          Delete
                        </button>
                      </div>
                      {editingMessageId === msg.id && (
                        <div className="mt-2">
                          <input
                            type="text"
                            value={editedMessageContent}
                            onChange={(e) =>
                              setEditedMessageContent(e.target.value)
                            }
                            className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
                          />
                          <button
                            onClick={handleUpdateMessage}
                            className="bg-green-500 hover:bg-green-600 p-2 rounded-md mt-2"
                          >
                            Update
                          </button>
                        </div>
                      )}
                    </li>
                  );
                })
              ) : (
                <p className="text-gray-500">No messages yet.</p>
              )}
            </ul>

            {/* Send Message */}
            <div className="mt-6">
              <input
                type="text"
                value={newMessageContent}
                onChange={(e) => setNewMessageContent(e.target.value)}
                placeholder="Type a message..."
                className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 w-full"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-md mt-2"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
