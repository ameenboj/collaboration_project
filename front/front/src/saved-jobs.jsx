import "./saved-jobs.css";
import { useState } from "react";

export default function SavedJobs({ onNavigate }) {
  const [savedJobs] = useState([
    {
      id: 1,
      title: "Full Stack Development",
      company: "Tech Solutions Inc",
      budget: "$1500 - $3000",
      savedDate: "2 hours ago",
    },
    {
      id: 2,
      title: "UI/UX Designer Needed",
      company: "Creative Agency",
      budget: "$800 - $1200",
      savedDate: "1 day ago",
    },
    {
      id: 3,
      title: "Content Writer",
      company: "Digital Marketing Co",
      budget: "$300 - $600",
      savedDate: "3 days ago",
    },
  ]);

  return (
    <div className="saved-jobs-page">
      <div className="saved-container">
        <div className="saved-header">
          <h1>Saved Jobs</h1>
          <p>Your bookmarked opportunities</p>
        </div>

        {savedJobs.length > 0 ? (
          <div className="saved-list">
            {savedJobs.map((job) => (
              <div key={job.id} className="saved-job-card">
                <div className="saved-job-content">
                  <h3 className="saved-job-title">{job.title}</h3>
                  <p className="saved-job-company">{job.company}</p>
                  <p className="saved-job-budget">{job.budget}</p>
                  <span className="saved-job-date">Saved {job.savedDate}</span>
                </div>
                <div className="saved-job-actions">
                  <button className="btn-primary">View Details</button>
                  <button className="btn-secondary">Remove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-saved">
            <p>No saved jobs yet. Start browsing and save your favorites!</p>
          </div>
        )}
      </div>
    </div>
  );
}
