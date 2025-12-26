import "./browse-talent.css";

export default function CategoryEcommerce({ onNavigate }) {
  const talents = [
    {
      id: 1,
      name: "Bilel Ben Romdhane",
      title: "WooCommerce Expert",
      skills: ["WooCommerce", "PHP", "Payments"],
      rating: 4.7,
      hourlyRate: "70 TND/hr",
      description: "Boutiques en ligne performantes",
    },
    {
      id: 2,
      name: "Nour Ben Saad",
      title: "Shopify Specialist",
      skills: ["Shopify", "Liquid", "Apps"],
      rating: 4.8,
      hourlyRate: "80 TND/hr",
      description: "Thèmes et apps Shopify",
    },
    {
      id: 3,
      name: "Farah Mabrouk",
      title: "E-commerce Manager",
      skills: ["Catalog", "Analytics", "SEO"],
      rating: 4.6,
      hourlyRate: "65 TND/hr",
      description: "Gestion et optimisation",
    },
  ];

  return (
    <div className="browse-talent-page">
      <div className="talent-container">
        <div className="talent-header">
          <h1>🛍️ E-commerce</h1>
          <p>156 freelances — Shopify, WooCommerce, Paiement</p>
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
