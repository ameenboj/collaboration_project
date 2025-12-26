import "./browse-talent.css";

export default function CategoryRedactionWeb({ onNavigate }) {
  const talents = [
    {
      id: 1,
      name: "Amina Ben Ali",
      title: "Rédactrice SEO",
      skills: ["SEO", "Blog", "Copywriting"],
      rating: 4.8,
      hourlyRate: "50 TND/hr",
      description: "Contenus optimisés pour Google",
    },
    {
      id: 2,
      name: "Hichem Jlassi",
      title: "Copywriter",
      skills: ["Landing pages", "Email", "Ads"],
      rating: 4.7,
      hourlyRate: "60 TND/hr",
      description: "Textes qui convertissent",
    },
    {
      id: 3,
      name: "Nour Baccar",
      title: "Rédaction e-commerce",
      skills: ["Fiches produits", "Storytelling", "SEO"],
      rating: 4.6,
      hourlyRate: "45 TND/hr",
      description: "Descriptions persuasives",
    },
  ];

  return (
    <div className="browse-talent-page">
      <div className="talent-container">
        <div className="talent-header">
          <h1>✍️ Rédaction Web</h1>
          <p>245 freelances — SEO, Copywriting, E-commerce</p>
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
