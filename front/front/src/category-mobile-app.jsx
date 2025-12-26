import "./browse-talent.css";

export default function CategoryMobileApp({ onNavigate }) {
  const talents = [
    {
      id: 1,
      name: "Sarra Kallel",
      title: "React Native Developer",
      skills: ["React Native", "Firebase", "UX"],
      rating: 4.8,
      hourlyRate: "90 TND/hr",
      description: "Apps iOS & Android",
    },
    {
      id: 2,
      name: "Anis Kefi",
      title: "Flutter Developer",
      skills: ["Flutter", "Dart", "REST"],
      rating: 4.7,
      hourlyRate: "85 TND/hr",
      description: "Performances et fluidité",
    },
    {
      id: 3,
      name: "Rim Khalfallah",
      title: "Mobile UI/UX",
      skills: ["Figma", "Prototypes", "Design Mobile"],
      rating: 4.6,
      hourlyRate: "70 TND/hr",
      description: "Expériences mobiles soignées",
    },
  ];

  return (
    <div className="browse-talent-page">
      <div className="talent-container">
        <div className="talent-header">
          <h1>📱 Mobile App</h1>
          <p>267 freelances — React Native, Flutter, Design</p>
        </div>
        <div className="talent-grid">
          {talents.map((t) => (
            <div key={t.id} className="talent-card">
              <div className="talent-avatar">{t.name.charAt(0)}</div>
              <h3 className="talent-name">{t.name}</h3>
              <p className="talent-title">{t.title}</p>
              <div className="talent-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-value">{t.rating}</span>
              </div>
              <p className="talent-description">{t.description}</p>
              <div className="talent-skills">
                {t.skills.map((s, i) => (
                  <span key={i} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
              <div className="talent-rate">
                <span className="rate-label">Tarif horaire</span>
                <span className="rate-value">{t.hourlyRate}</span>
              </div>
              <button className="talent-contact-btn">Contacter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
