import "./browse-talent.css";

export default function CategoryDevWeb({ onNavigate }) {
  const talents = [
    {
      id: 1,
      name: "Adel Ben Amor",
      title: "Développeur React / Node.js",
      skills: ["React", "Node.js", "MongoDB"],
      rating: 4.8,
      hourlyRate: "80 TND/hr",
      description: "Apps web modernes et performantes",
    },
    {
      id: 2,
      name: "Nadia Trabelsi",
      title: "Développeuse Laravel / MySQL",
      skills: ["Laravel", "PHP", "MySQL"],
      rating: 4.7,
      hourlyRate: "70 TND/hr",
      description: "APIs robustes et sécurisées",
    },
    {
      id: 3,
      name: "Yassine Khouaja",
      title: "WordPress Expert",
      skills: ["WordPress", "WooCommerce", "CSS"],
      rating: 4.6,
      hourlyRate: "60 TND/hr",
      description: "Sites vitrines et e-commerce",
    },
  ];

  return (
    <div className="browse-talent-page">
      <div className="talent-container">
        <div className="talent-header">
          <h1>💻 Développement Web</h1>
          <p>432 freelances — Frontend, Backend, CMS, intégration</p>
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
