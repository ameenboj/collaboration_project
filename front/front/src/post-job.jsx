import "./post-job.css";
import { useState } from "react";

export default function PostJob({ onNavigate }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    duration: "Short-term",
    level: "Intermediate",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job posted successfully!");
    setFormData({
      title: "",
      description: "",
      budget: "",
      duration: "Short-term",
      level: "Intermediate",
      skills: "",
    });
  };

  return (
    <div className="post-job-page">
      <div className="post-job-container">
        <div className="post-job-header">
          <h1>Post a New Job</h1>
          <p>Find the right freelancer for your project</p>
        </div>

        <form className="post-job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Build a React Website"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Job Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what you need..."
              rows="6"
              required
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget">Budget (USD) *</label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., 500"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration *</label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              >
                <option value="Short-term">Short-term</option>
                <option value="Medium-term">Medium-term</option>
                <option value="Long-term">Long-term</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="level">Experience Level *</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="skills">Required Skills *</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, MySQL"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Post Job
            </button>
            <button type="reset" className="btn-cancel">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
