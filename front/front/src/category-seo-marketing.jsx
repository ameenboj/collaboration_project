import "./browse-talent.css";

export default function CategorySEOMarketing({ onNavigate }) {
  const talents = [
    {
      id: 1,
      name: "Samar Letaief",
      title: "Consultante SEO",
      skills: ["Audit", "Analytics", "On-page"],
      rating: 4.8,
      hourlyRate: "70 TND/hr",
      description: "Améliorez votre visibilité",
    },
    {
      id: 2,
      name: "Oussama Dakhli",
      title: "Media Buyer",
      skills: ["Facebook Ads", "Google Ads", "Tracking"],
      rating: 4.7,
      hourlyRate: "80 TND/hr",
      description: "Campagnes rentables",
    },
    {
      id: 3,
      name: "Ikram Maalej",
      title: "Content Marketer",
      skills: ["Calendrier", "Blog", "Email"],
      rating: 4.6,
      hourlyRate: "60 TND/hr",
      description: "Stratégies de contenu",
    },
  ];

  return (
    <div className="browse-talent-page">
      <div className="talent-container">
        <div className="talent-header">
          <h1>📊 SEO & Marketing</h1>
          <p>189 freelances — SEO, Ads, Content</p>
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
