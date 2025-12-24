import "./browse-talent.css";
import { useState } from "react";

export default function BrowseTalent({ onNavigate }) {
  const [talents] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      title: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB"],
      rating: 4.8,
      hourlyRate: "$50/hr",
      description: "Experienced in building scalable web applications",
    },
    {
      id: 2,
      name: "Sarah Williams",
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      rating: 4.9,
      hourlyRate: "$45/hr",
      description: "Specializing in mobile and web design",
    },
    {
      id: 3,
      name: "Mike Chen",
      title: "Data Scientist",
      skills: ["Python", "ML", "Data Analysis"],
      rating: 4.7,
      hourlyRate: "$60/hr",
      description: "Expert in machine learning and big data",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      title: "Content Writer",
      skills: ["Blog Writing", "SEO", "Copywriting"],
      rating: 4.6,
      hourlyRate: "$25/hr",
      description: "Professional content creation and marketing",
    },
  ]);

  return (
    <div className="browse-talent-page">
      <div className="talent-container">
        <div className="talent-header">
          <h1>Browse Talent</h1>
          <p>Find the perfect freelancer for your project</p>
        </div>

        <div className="talent-grid">
          {talents.map((talent) => (
            <div key={talent.id} className="talent-card">
              <div className="talent-avatar">
                {talent.name.charAt(0)}
              </div>

              <h3 className="talent-name">{talent.name}</h3>
              <p className="talent-title">{talent.title}</p>

              <div className="talent-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-value">{talent.rating}</span>
              </div>

              <p className="talent-description">{talent.description}</p>

              <div className="talent-skills">
                {talent.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="talent-rate">
                <span className="rate-label">Hourly Rate</span>
                <span className="rate-value">{talent.hourlyRate}</span>
              </div>

              <button className="talent-contact-btn">Contact</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
