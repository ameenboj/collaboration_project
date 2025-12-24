import "./browse-jobs.css";
import { useState } from "react";

export default function BrowseJobs({ onNavigate }) {
  const [jobs] = useState([
    {
      id: 1,
      title: "Build a React Website",
      company: "Tech Startup Co",
      budget: "$500 - $1000",
      description: "Need a modern responsive website built with React",
      skills: ["React", "CSS", "JavaScript"],
      level: "Intermediate",
    },
    {
      id: 2,
      title: "PHP Backend Development",
      company: "Digital Agency",
      budget: "$800 - $1500",
      description: "Develop a REST API using PHP Laravel framework",
      skills: ["PHP", "Laravel", "MySQL"],
      level: "Expert",
    },
    {
      id: 3,
      title: "Mobile App UI Design",
      company: "StartUp Labs",
      budget: "$300 - $600",
      description: "Design UI/UX for mobile applications",
      skills: ["Figma", "UI Design", "Prototyping"],
      level: "Intermediate",
    },
    {
      id: 4,
      title: "Python Data Analysis",
      company: "Analytics Corp",
      budget: "$1000 - $2000",
      description: "Analyze and visualize large datasets",
      skills: ["Python", "Data Analysis", "Pandas"],
      level: "Expert",
    },
    {
      id: 5,
      title: "WordPress Theme Customization",
      company: "Web Solutions",
      budget: "$200 - $400",
      description: "Customize existing WordPress theme",
      skills: ["WordPress", "PHP", "CSS"],
      level: "Beginner",
    },
  ]);

  return (
    <div className="browse-jobs-page">
      <div className="jobs-container">
        <div className="jobs-header">
          <h1>Browse Available Jobs</h1>
          <p>Find the perfect job opportunity for your skills</p>
        </div>

        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div className="job-title-section">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <span className="job-budget">{job.budget}</span>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="job-meta">
                <div className="job-skills">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="job-level">{job.level}</span>
              </div>

              <button className="job-apply-btn">Send Proposal</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
