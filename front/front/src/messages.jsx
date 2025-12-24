import "./messages.css";
import { useState } from "react";

export default function Messages({ onNavigate }) {
  const [messages] = useState([
    {
      id: 1,
      name: "John Smith",
      avatar: "J",
      lastMessage: "Can you start the project next week?",
      timestamp: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      name: "Sarah Connor",
      avatar: "S",
      lastMessage: "Thanks for completing the task!",
      timestamp: "5 hours ago",
      unread: false,
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "M",
      lastMessage: "I'm interested in your proposal",
      timestamp: "1 day ago",
      unread: true,
    },
    {
      id: 4,
      name: "Emily Davis",
      avatar: "E",
      lastMessage: "Great work on the design!",
      timestamp: "2 days ago",
      unread: false,
    },
  ]);

  return (
    <div className="messages-page">
      <div className="messages-container">
        <div className="messages-header">
          <h1>Messages</h1>
          <p>Your conversations with clients and freelancers</p>
        </div>

        <div className="messages-list">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-card ${msg.unread ? "unread" : ""}`}
            >
              <div className="message-avatar">{msg.avatar}</div>

              <div className="message-content">
                <h3 className="message-name">{msg.name}</h3>
                <p className="message-text">{msg.lastMessage}</p>
              </div>

              <div className="message-right">
                <span className="message-time">{msg.timestamp}</span>
                {msg.unread && <span className="unread-badge"></span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
