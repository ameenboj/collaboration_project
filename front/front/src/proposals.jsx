import "./proposals.css";
import { useState } from "react";

export default function Proposals({ onNavigate }) {
  const [proposals] = useState([
    {
      id: 1,
      jobTitle: "Build a React Website",
      company: "Tech Startup Co",
      bidAmount: "$750",
      status: "pending",
      submittedDate: "Dec 20, 2024",
    },
    {
      id: 2,
      jobTitle: "PHP Backend Development",
      company: "Digital Agency",
      bidAmount: "$1200",
      status: "accepted",
      submittedDate: "Dec 18, 2024",
    },
    {
      id: 3,
      jobTitle: "Mobile App UI Design",
      company: "StartUp Labs",
      bidAmount: "$450",
      status: "rejected",
      submittedDate: "Dec 15, 2024",
    },
  ]);

  const getStatusClass = (status) => {
    return `status-${status}`;
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="proposals-page">
      <div className="proposals-container">
        <div className="proposals-header">
          <h1>My Proposals</h1>
          <p>Track all your job proposals and bids</p>
        </div>

        <div className="proposals-list">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="proposal-card">
              <div className="proposal-left">
                <h3 className="proposal-job-title">{proposal.jobTitle}</h3>
                <p className="proposal-company">{proposal.company}</p>
                <p className="proposal-submitted">
                  Submitted: {proposal.submittedDate}
                </p>
              </div>

              <div className="proposal-middle">
                <p className="proposal-bid">{proposal.bidAmount}</p>
              </div>

              <div className="proposal-right">
                <span
                  className={`proposal-status ${getStatusClass(
                    proposal.status
                  )}`}
                >
                  {getStatusText(proposal.status)}
                </span>
                <button className="proposal-action-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
