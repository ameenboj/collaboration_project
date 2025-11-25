import React, { useState } from "react";
import "./home.css";

// Use absolute paths for public images
const images = {
  categories: {
    development: "/images/categories/development.jpg",
    design: "/images/categories/design.jpg",
    writing: "/images/categories/writing.jpg",
    marketing: "/images/categories/marketing.jpg",
    devops: "/images/categories/devops.jpg",
    translation: "/images/categories/translation.jpg",
  },
  logos: {
    techstart: "/images/logos/techstart.png",
    ecoshop: "/images/logos/ecoshop.png",
    reactpreview: "/images/logos/Reactpreview.png",
    previewDownload: "/images/logos/8918ca118284761.608682313adcf.jpg",
    redactionSeo: "/images/logos/Redaction_web_SEO-1024x576.webp",
  },
  trust: "/images/categories/1710924489273.jpeg",
};

const features = [
  {
    icon: "✨",
    title: "Simplicité",
    description:
      "Publiez votre projet en quelques mots et recevez des propositions rapidement.",
  },
  {
    icon: "⚡",
    title: "Rapidité",
    description:
      "Des dizaines de devis de freelances en quelques minutes seulement.",
  },
  {
    icon: "💰",
    title: "Gratuit pour les clients",
    description:
      "Publiez des projets et recrutez sans frais. Aucune commission cachée.",
  },
];

const categories = [
  { name: "Développement Web", icon: "💻", count: 432 },
  { name: "Design & UX", icon: "🎨", count: 318 },
  { name: "Rédaction Web", icon: "✍️", count: 245 },
  { name: "SEO & Marketing", icon: "📊", count: 189 },
  { name: "E-commerce", icon: "🛍️", count: 156 },
  { name: "Mobile App", icon: "📱", count: 267 },
];

const recentProjects = [
  {
    id: 1,
    title: "Création d'un site web pour startup tech",
    description: "Site vitrine moderne avec CMS intégré et optimisation SEO.",
    budget: "2,500 TND",
    category: "Développement Web",
    proposals: 4,
    posted: "il y a 2 heures",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Design logo et identité visuelle",
    description:
      "Création d'un logo professionnel et charte graphique pour entreprise.",
    budget: "800 TND",
    category: "Design",
    proposals: 8,
    posted: "il y a 4 heures",
    skills: ["Logo", "Branding", "Figma"],
  },
  {
    id: 3,
    title: "Rédaction contenu e-commerce - 20 fiches produits",
    description: "Rédaction SEO de fiches produits pour boutique en ligne.",
    budget: "500 TND",
    category: "Rédaction Web",
    proposals: 3,
    posted: "il y a 6 heures",
    skills: ["SEO", "Rédaction", "E-commerce"],
  },
  {
    id: 4,
    title: "Optimisation SEO site existant",
    description:
      "Audit SEO complet et implémentation des optimisations prioritaires.",
    budget: "1,200 TND",
    category: "SEO & Marketing",
    proposals: 5,
    posted: "il y a 8 heures",
    skills: ["SEO", "Analytics", "Audit"],
  },
  {
    id: 5,
    title: "Application mobile React Native",
    description: "Développement d'une app mobile pour gestion de tâches.",
    budget: "3,500 TND",
    category: "Mobile App",
    proposals: 6,
    posted: "il y a 1 jour",
    skills: ["React Native", "Firebase", "UX"],
  },
  {
    id: 6,
    title: "Plateforme e-commerce complète",
    description:
      "Création site e-commerce avec paiement en ligne et gestion d'inventaire.",
    budget: "5,000 TND",
    category: "E-commerce",
    proposals: 7,
    posted: "il y a 1 jour",
    skills: ["WooCommerce", "PHP", "MySQL"],
  },
];

export default function Home({ onNavigate = () => {} }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onNavigate("register");
  };

  return (
    <div className="home-page">
      {/* ============= HERO SECTION ============= */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Worklink — La plateforme freelance tunisienne
            </h1>
            <p className="hero-subtitle">
              Trouvez les meilleurs freelances pour vos projets ou décrochez des
              missions intéressantes
            </p>

            {/* Search Bar */}
            <form className="hero-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Cherchez par compétence (React, Design, SEO, etc.)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="cta-btn secondary search-btn">
                Rechercher
              </button>
            </form>

            {/* CTA Buttons */}
            <div className="hero-ctas">
              <button
                className="cta-btn primary"
                onClick={() => onNavigate("publier")}
              >
                Publier une mission
              </button>
              <button
                className="cta-btn secondary"
                onClick={() => onNavigate("register")}
              >
                S'inscrire comme freelance
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1,247</span>
                <span className="stat-label">Freelances inscrits</span>
              </div>
              <div className="stat">
                <span className="stat-number">3,542</span>
                <span className="stat-label">Projets publiés</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction client</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-box">
              <div className="box-header">💡 Vos projets</div>
              <div className="box-item">✓ Site Web</div>
              <div className="box-item">✓ App Mobile</div>
              <div className="box-item">✓ Design</div>
              <div className="box-item">✓ Rédaction</div>
            </div>
          </div>
        </div>
      </header>

      {/* ============= FEATURES SECTION ============= */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Pourquoi choisir Worklink ?</h2>
          <div className="features-container">
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============= CATEGORIES SECTION ============= */}
      <section className="categories-section">
        <div className="section-container">
          <h2 className="section-title">Parcourez nos catégories</h2>
          <div className="categories-grid">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="category-card"
                onClick={() => onNavigate("register")}
              >
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.count} freelances</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= RECENT PROJECTS SECTION ============= */}
      <section className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Projets publiés récemment</h2>
            <button
              className="view-all-btn"
              onClick={() => onNavigate("register")}
            >
              Voir tous les projets →
            </button>
          </div>

          <div className="projects-list">
            {recentProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                  <div className="project-badge">{project.posted}</div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-budget">{project.budget}</div>
                  <div className="project-proposals">
                    💬 {project.proposals} propositions
                  </div>
                  <button
                    className="project-btn"
                    onClick={() => onNavigate("register")}
                  >
                    Faire une offre
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= WHY SECTIONS ============= */}
      <section className="why-section why-freelancers">
        <div className="section-container">
          <h2 className="section-title">
            Pourquoi devenir freelance chez Worklink ?
          </h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>🎯 Missions variées</h3>
              <p>
                Accédez à une multitude de projets intéressants dans votre
                domaine d'expertise.
              </p>
            </div>
            <div className="why-card">
              <h3>💵 Tarification équitable</h3>
              <p>
                Vous fixez vos tarifs. Aucune commission excessive. Vous gardez
                votre argent.
              </p>
            </div>
            <div className="why-card">
              <h3>🌐 Flexibilité</h3>
              <p>
                Travaillez selon votre emploi du temps et choisissez les projets
                qui vous plaisent.
              </p>
            </div>
            <div className="why-card">
              <h3>👥 Communauté</h3>
              <p>
                Rejoignez une communauté active de freelances tunisiens et
                internationaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section why-clients">
        <div className="section-container">
          <h2 className="section-title">
            Pourquoi publier vos projets chez Worklink ?
          </h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>📋 Facile & rapide</h3>
              <p>
                Publiez votre projet en 5 minutes et recevez les premières
                propositions très rapidement.
              </p>
            </div>
            <div className="why-card">
              <h3>💰 Tarifs compétitifs</h3>
              <p>
                Accédez à des talents qualifiés à des prix justes, sans frais
                additionnels.
              </p>
            </div>
            <div className="why-card">
              <h3>🛡️ Sécurité & confiance</h3>
              <p>
                Système de paiement sécurisé et evaluations vérifiées des
                freelances.
              </p>
            </div>
            <div className="why-card">
              <h3>🚀 Résultats probants</h3>
              <p>
                Accédez aux meilleurs talents tunisiens et même internationaux
                pour vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FINAL CTA SECTION ============= */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Prêt à commencer ?</h2>
          <p>
            Rejoignez des milliers de freelances et clients satisfaits chez
            Worklink
          </p>
          <div className="final-cta-buttons">
            <button
              className="cta-btn primary large"
              onClick={() => onNavigate("register")}
            >
              Créer un compte
            </button>
            <button
              className="cta-btn secondary large"
              onClick={() => onNavigate("login")}
            >
              Se connecter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
