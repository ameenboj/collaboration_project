import "./guides.css";
import { guidesData } from "./guide-detail.jsx";

export default function ConseilsGuides({ onNavigate }) {
  const handleReadGuide = (guideId) => {
    onNavigate(`guide-${guideId}`);
  };

  return (
    <div className="guides-page">
      <div className="guides-container">
        <div className="guides-header">
          <h1>Conseils & Guides Worklink</h1>
          <p>
            Guides pratiques et conseils d'experts pour réussir en freelance
          </p>
        </div>

        <div className="guides-grid">
          {guidesData.map((guide) => (
            <div key={guide.id} className="guide-item">
              <div className="guide-item-header">
                <div className="guide-item-icon">{guide.icon}</div>
                <span className="guide-item-category">{guide.category}</span>
                <h3 className="guide-item-title">{guide.title}</h3>
              </div>

              <div className="guide-item-content">
                <p className="guide-item-description">{guide.description}</p>
              </div>

              <div className="guide-item-meta">
                <div className="guide-item-meta-box">
                  <div className="guide-item-meta-label">Niveau</div>
                  <div className="guide-item-meta-value">
                    {guide.difficulty}
                  </div>
                </div>
                <div className="guide-item-meta-box">
                  <div className="guide-item-meta-label">Lecture</div>
                  <div className="guide-item-meta-value">{guide.readTime}</div>
                </div>
              </div>

              <div className="guide-item-topics">
                {guide.topics.map((topic, index) => (
                  <span key={index} className="guide-topic">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="guide-item-footer">
                <button
                  className="guide-read-btn"
                  onClick={() => handleReadGuide(guide.id)}
                >
                  Lire le guide
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
