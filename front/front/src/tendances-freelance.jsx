import "./guides.css";
import { useState } from "react";

export default function TendancesFreelance({ onNavigate }) {
  const [trends] = useState([
    {
      id: 1,
      icon: "🤖",
      title: "L'IA change le marché freelance en 2024",
      category: "Intelligence Artificielle",
      description:
        "Comment l'IA transforme les métiers freelance et quelles compétences seront en demande. Les opportunités et défis à venir.",
      topics: ["IA", "Automation", "Tendance"],
      difficulty: "Avancé",
      duration: "20 min",
      readTime: "8-10 min",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Spécialisation vs généraliste : quelle stratégie ?",
      category: "Carrière",
      description:
        "Analyse des tendances du marché : les freelances spécialisés gagnent plus. Comment choisir votre domaine de prédilection.",
      topics: ["Spécialisation", "Niche", "Marché"],
      difficulty: "Intermédiaire",
      duration: "18 min",
      readTime: "7-9 min",
    },
    {
      id: 3,
      icon: "🌍",
      title: "Le télétravail hybride : une nouvelle normalité",
      category: "Modes de travail",
      description:
        "Découvrez comment les clients recherchent de plus en plus des arrangements hybrides et comment en tirer profit.",
      topics: ["Télétravail", "Flexibilité", "Collaboration"],
      difficulty: "Débutant",
      duration: "15 min",
      readTime: "5-7 min",
    },
    {
      id: 4,
      icon: "💻",
      title: "Les métiers tech les plus demandés par les startups",
      category: "Technologie",
      description:
        "Quels profils tech sont recherchés par les startups en croissance ? Salaires et perspectives de 2024.",
      topics: ["Tech", "Startups", "Salaires"],
      difficulty: "Avancé",
      duration: "22 min",
      readTime: "9-11 min",
    },
    {
      id: 5,
      icon: "🌱",
      title: "Durabilité et freelance responsable",
      category: "Environnement",
      description:
        "La tendance des clients qui veulent travailler avec des prestataires responsables. Comment positionner votre offre.",
      topics: ["Durabilité", "RSE", "Éthique"],
      difficulty: "Intermédiaire",
      duration: "17 min",
      readTime: "6-8 min",
    },
    {
      id: 6,
      icon: "🤝",
      title: "Communautés de freelances : le futur du networking",
      category: "Réseautage",
      description:
        "Les communautés spécialisées gagnent en importance. Comment rejoindre les bonnes et en tirer avantage.",
      topics: ["Réseautage", "Communauté", "Collaboration"],
      difficulty: "Débutant",
      duration: "16 min",
      readTime: "6-8 min",
    },
  ]);

  return (
    <div className="guides-page">
      <div className="guides-container">
        <div className="guides-header">
          <h1>Tendances Freelance</h1>
          <p>Restez à jour avec les dernières tendances du marché freelance</p>
        </div>

        <div className="guides-grid">
          {trends.map((trend) => (
            <div key={trend.id} className="guide-item">
              <div className="guide-item-header">
                <div className="guide-item-icon">{trend.icon}</div>
                <span className="guide-item-category">{trend.category}</span>
                <h3 className="guide-item-title">{trend.title}</h3>
              </div>

              <div className="guide-item-content">
                <p className="guide-item-description">{trend.description}</p>
              </div>

              <div className="guide-item-meta">
                <div className="guide-item-meta-box">
                  <div className="guide-item-meta-label">Niveau</div>
                  <div className="guide-item-meta-value">
                    {trend.difficulty}
                  </div>
                </div>
                <div className="guide-item-meta-box">
                  <div className="guide-item-meta-label">Lecture</div>
                  <div className="guide-item-meta-value">{trend.readTime}</div>
                </div>
              </div>

              <div className="guide-item-topics">
                {trend.topics.map((topic, index) => (
                  <span key={index} className="guide-topic">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="guide-item-footer">
                <button className="guide-read-btn">Lire l'article</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
