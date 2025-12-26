import "./footer.css";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-topband">
          <div>
            <h3>Construisez votre futur sur Worklink</h3>
            <p>
              Publiez des missions ou trouvez des talents en quelques minutes
            </p>
          </div>
          <div className="footer-top-actions">
            <button
              className="footer-btn primary"
              onClick={() => onNavigate("publier")}
            >
              Publier une mission
            </button>
            <button
              className="footer-btn secondary"
              onClick={() => onNavigate("register")}
            >
              S'inscrire comme freelance
            </button>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Worklink</h4>
            <p>
              La plateforme freelance tunisienne — rapide, fiable et premium.
            </p>
            <p>📍 Tunis, Tunisie</p>
            <p>✉️ support@worklink.tn</p>
            <p>☎️ +216 71 000 000</p>
          </div>

          <div className="footer-col">
            <h4>Catégories</h4>
            <div className="footer-links">
              <a
                className="footer-link"
                onClick={() => onNavigate("category-dev-web")}
              >
                💻 Développement Web
              </a>
              <a
                className="footer-link"
                onClick={() => onNavigate("category-design-ux")}
              >
                🎨 Design & UX
              </a>
              <a
                className="footer-link"
                onClick={() => onNavigate("category-redaction-web")}
              >
                ✍️ Rédaction Web
              </a>
              <a
                className="footer-link"
                onClick={() => onNavigate("category-seo-marketing")}
              >
                📊 SEO & Marketing
              </a>
              <a
                className="footer-link"
                onClick={() => onNavigate("category-ecommerce")}
              >
                🛍️ E-commerce
              </a>
              <a
                className="footer-link"
                onClick={() => onNavigate("category-mobile-app")}
              >
                📱 Mobile App
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Ressources</h4>
            <div className="footer-links">
              <a className="footer-link" onClick={() => onNavigate("blog")}>
                📰 Blog Worklink
              </a>
              <a
                className="footer-link"
                onClick={() => onNavigate("conseils-guides")}
              >
                📚 Conseils & Guides
              </a>
              <a
                className="footer-link"
                onClick={() => onNavigate("tendances-freelance")}
              >
                📈 Tendances Freelance
              </a>
              <a className="footer-link" onClick={() => onNavigate("register")}>
                ❓ FAQ
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <div className="footer-newsletter">
              <input
                className="footer-input"
                type="email"
                placeholder="Votre email"
              />
              <button className="footer-news-btn">S'abonner</button>
            </div>
            <div className="footer-links" style={{ marginTop: 12 }}>
              <a className="footer-link" onClick={() => onNavigate("register")}>
                📞 Contact
              </a>
              <a className="footer-link" onClick={() => onNavigate("register")}>
                🔒 Confidentialité
              </a>
              <a className="footer-link" onClick={() => onNavigate("register")}>
                📜 Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Worklink — Tous droits réservés</span>
          <div className="footer-social">
            <a href="#" aria-label="Twitter">
              🐦
            </a>
            <a href="#" aria-label="LinkedIn">
              💼
            </a>
            <a href="#" aria-label="Facebook">
              📘
            </a>
            <a href="#" aria-label="Instagram">
              📸
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
