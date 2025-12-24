import "./my-jobs.css";
import { useState } from "react";

export default function MyJobs({ onNavigate }) {
  const [myJobs] = useState([
    {
      id: 1,
      title: "Build a React Website",
      status: "active",
      applicants: 12,
      budget: "$500 - $1000",
      postedDate: "5 days ago",
    },
    {
      id: 2,
      title: "Mobile App Development",
      status: "closed",
      applicants: 25,
      budget: "$2000 - $4000",
      postedDate: "2 weeks ago",
    },
    {
      id: 3,
      title: "Graphic Design Project",
      status: "in-progress",
      applicants: 8,
      budget: "$300 - $500",
      postedDate: "10 days ago",
    },
  ]);

  const getStatusBadge = (status) => {
    const statusMap = {
      active: { class: "badge-active", text: "Active" },
      "in-progress": { class: "badge-inprogress", text: "In Progress" },
      closed: { class: "badge-closed", text: "Closed" },
    };
    return statusMap[status] || { class: "", text: status };
  };

  return (
    <div className="my-jobs-page">
      <div className="my-jobs-container">
        <div className="my-jobs-header">
          <h1>My Posted Jobs</h1>
          <p>Manage all your job postings</p>
        </div>

        <div className="jobs-stats">
          <div className="stat-box">
            <span className="stat-number">3</span>
            <span className="stat-label">Total Jobs</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">45</span>
            <span className="stat-label">Total Applicants</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">1</span>
            <span className="stat-label">In Progress</span>
          </div>
        </div>

        <div className="jobs-list-container">
          {myJobs.map((job) => {
            const badge = getStatusBadge(job.status);
            return (
              <div key={job.id} className="my-job-card">
                <div className="my-job-left">
                  <h3 className="my-job-title">{job.title}</h3>
                  <p className="my-job-posted">Posted {job.postedDate}</p>
                  <p className="my-job-budget">{job.budget}</p>
                </div>

                <div className="my-job-middle">
                  <div className="applicants-info">
                    <span className="applicants-count">{job.applicants}</span>
                    <span className="applicants-label">applicants</span>
                  </div>
                </div>

                <div className="my-job-right">
                  <span className={`job-status-badge ${badge.class}`}>
                    {badge.text}
                  </span>
                  <button className="job-manage-btn">Manage</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
