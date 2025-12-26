import "./browse-talent.css";

export default function CategoryDesignUX({ onNavigate }) {
  const talents = [
    {
      id: 1,
      name: "Syrine Jemai",
      title: "UI/UX Designer",
      skills: ["Figma", "Prototypage", "Design système"],
      rating: 4.9,
      hourlyRate: "75 TND/hr",
      description: "Interfaces élégantes et intuitives",
    },
    {
      id: 2,
      name: "Mehdi Guesmi",
      title: "Brand Designer",
      skills: ["Logo", "Branding", "Illustration"],
      rating: 4.8,
      hourlyRate: "70 TND/hr",
      description: "Identités visuelles mémorables",
    },
    {
      id: 3,
      name: "Ons Riahi",
      title: "Product Designer",
      skills: ["Wireframes", "User flows", "Tests utilisateurs"],
      rating: 4.7,
      hourlyRate: "80 TND/hr",
      description: "Expériences centrées utilisateur",
    },
  ];

  return (
    <div className="browse-talent-page">
      <div className="talent-container">
        <div className="talent-header">
          <h1>🎨 Design & UX</h1>
          <p>318 freelances — UI, Branding, Product Design</p>
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
