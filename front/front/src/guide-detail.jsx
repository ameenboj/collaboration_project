import "./guides.css";
import { useState } from "react";

const guidesData = [
  {
    id: 1,
    icon: "👤",
    title: "Comment créer un profil freelance irrésistible ?",
    category: "Profil & Portfolio",
    description:
      "Apprenez à créer un profil qui attire les clients. Photos professionnelles, description convaincante et portfolio percutant.",
    topics: ["Photos Pro", "Description", "Portfolio"],
    difficulty: "Débutant",
    duration: "15 min",
    readTime: "5-7 min",
    content: {
      whatYouNeed: [
        "Une bonne caméra ou smartphone avec appareil photo décent",
        "Un endroit bien éclairé pour les photos",
        "Un logiciel de retouche photo (Photoshop, Canva, ou gratuit comme Pixlr)",
        "Un portfolio en ligne ou des exemples de travaux",
        "Une liste de vos compétences et certifications",
      ],
      chapters: [
        {
          title: "Préparer votre photo de profil",
          content:
            "Votre photo de profil est le premier élément que voient les clients. Elle doit être professionnelle, bien éclairée et accueillante. Portez des vêtements professionnels, souriez naturellement et évitez les backgrounds trop chargés.",
        },
        {
          title: "Rédiger une description convaincante",
          content:
            "Votre description doit mettre en avant vos points forts en 2-3 lignes. Mentionnez votre domaine d'expertise, vos années d'expérience et ce qui vous rend unique. Utilisez des mots-clés pertinents pour votre domaine.",
        },
        {
          title: "Construire un portfolio percutant",
          content:
            "Présentez 3-5 de vos meilleurs travaux. Pour chaque projet, incluez une description, les technologies utilisées et le résultat obtenu. Si vous n'avez pas de travaux antérieurs, créez des projets de démonstration.",
        },
        {
          title: "Les compétences et certifications",
          content:
            "Listez vos compétences principales et secondaires. Ajoutez vos certifications professionnelles pour renforcer votre crédibilité. Les clients recherchent des spécialistes confirmés.",
        },
      ],
    },
  },
  {
    id: 2,
    icon: "💰",
    title: "Fixer vos tarifs freelance : guide complet",
    category: "Tarification",
    description:
      "Déterminez le bon prix pour vos services. Analyse du marché, calcul de rentabilité et stratégies de négociation.",
    topics: ["Tarification", "Marché", "Rentabilité"],
    difficulty: "Intermédiaire",
    duration: "20 min",
    readTime: "8-10 min",
    content: {
      whatYouNeed: [
        "Connaissance de vos coûts fixes (équipement, logiciel, internet)",
        "Estimation de votre salaire souhaité",
        "Analyse des tarifs du marché dans votre domaine",
        "Une feuille de calcul ou outil de gestion financière",
        "Données sur votre productivité (heures billables par mois)",
      ],
      chapters: [
        {
          title: "Analyser les coûts réels",
          content:
            "Calculez vos coûts fixes mensuels : équipement, logiciel, assurances, internet, formation continue. Ajoutez une marge pour les vacances et les temps d'inactivité (généralement 25-30%).",
        },
        {
          title: "Étudier le marché",
          content:
            "Recherchez les tarifs moyens dans votre secteur et votre région. Consultez les avis de sites freelance, interrogez d'autres freelances et analysez les offres concurrentes. Les tarifs varient selon l'expérience, la spécialité et la localisation.",
        },
        {
          title: "Calculer votre tarif horaire idéal",
          content:
            "Formule : (Coûts annuels + Salaire souhaité) / Heures billables par an. Exemple : (12000€ + 36000€) / 1500h = 32€/h. Ajustez en fonction du marché.",
        },
        {
          title: "Stratégies de tarification",
          content:
            "Vous pouvez proposer : tarif horaire, prix au projet, tarif par retenue (rétainer client), tarif par valeur (basé sur le ROI). Testez différentes approches et ajustez selon vos résultats.",
        },
      ],
    },
  },
  {
    id: 3,
    icon: "💬",
    title: "Communication efficace avec les clients",
    category: "Client Relations",
    description:
      "Maîtrisez la communication pour éviter les malentendus et construire des relations durables avec vos clients.",
    topics: ["Communication", "Négociation", "Relation"],
    difficulty: "Intermédiaire",
    duration: "18 min",
    readTime: "6-8 min",
    content: {
      whatYouNeed: [
        "Email professionnel et outils de communication (Slack, Teams)",
        "Template de messages pour répondre rapidement",
        "Un système de gestion de projets (Trello, Asana)",
        "Calendrier pour planifier les appels et réunions",
        "Fichier de FAQ pour les questions fréquentes",
      ],
      chapters: [
        {
          title: "Répondre rapidement et professionnellement",
          content:
            "Répondez aux messages dans les 24h maximum. Utilisez un ton professionnel mais amical. Structurez vos réponses avec introduction, contenu principal et appel à l'action.",
        },
        {
          title: "Clarifier les attentes dès le départ",
          content:
            "Posez des questions détaillées sur le projet : objectifs, délais, budget, livrables. Documentez tout par écrit. Plus vous comprenez le client, moins il y aura de malentendus.",
        },
        {
          title: "Gérer les conflits constructivement",
          content:
            "Si un problème survient, adressez-le immédiatement. Écoutez les préoccupations du client, proposez des solutions et soyez transparent sur les défis. La plupart des conflits naissent du manque de communication.",
        },
        {
          title: "Maintenir la relation après le projet",
          content:
            "Restez en contact avec les clients satisfaits. Partagez les mises à jour pertinentes de votre domaine. Les clients récurrents sont votre meilleure source de revenus stables.",
        },
      ],
    },
  },
  {
    id: 4,
    icon: "⏱️",
    title: "Gérer votre temps et vos deadlines",
    category: "Productivité",
    description:
      "Techniques éprouvées pour respecter vos délais, organiser votre travail et éviter le surmenage.",
    topics: ["Gestion Temps", "Planification", "Deadlines"],
    difficulty: "Débutant",
    duration: "16 min",
    readTime: "5-6 min",
    content: {
      whatYouNeed: [
        "Un outil de gestion de temps (Toggl, RescueTime)",
        "Un calendrier et un gestionnaire de tâches",
        "Une liste de vos tâches récurrentes",
        "Un timer ou pomodoro (application gratuite disponible)",
        "Un système d'alertes pour les deadlines",
      ],
      chapters: [
        {
          title: "Planifier vos projets par étapes",
          content:
            "Divisez chaque projet en tâches plus petites avec leurs propres deadlines. Cela rend le travail moins accablant et permet de mieux suivre la progression.",
        },
        {
          title: "Respecter la technique Pomodoro",
          content:
            "Travaillez 25 minutes intensément, puis prenez une pause de 5 minutes. Après 4 cycles, prenez une pause plus longue (15-30 min). Cette méthode augmente la productivité de 25%.",
        },
        {
          title: "Anticiper les imprévus",
          content:
            "Ajoutez toujours un buffer de 20-30% à vos estimations de temps. Les imprévus arrivent toujours. Cela vous permet de livrer en avance et d'impressionner vos clients.",
        },
        {
          title: "Évaluer et améliorer",
          content:
            "Suivez votre temps réel par projet. Comparez avec vos estimations. Après quelques projets, vous aurez une meilleure vue de votre capacité réelle et pourrez donner des devis plus précis.",
        },
      ],
    },
  },
  {
    id: 5,
    icon: "📋",
    title: "Contrats et conditions : se protéger légalement",
    category: "Légal",
    description:
      "Rédiger des contrats solides, définir clairement le scope et protéger vos droits en tant que freelance.",
    topics: ["Contrats", "Légal", "Protection"],
    difficulty: "Avancé",
    duration: "25 min",
    readTime: "10-12 min",
    content: {
      whatYouNeed: [
        "Un modèle de contrat (template gratuit ou avocat spécialisé)",
        "Connaissance de la législation locale",
        "Documentation de tous les échanges (emails, messages)",
        "Un système de numérotation des factures",
        "Une police d'assurance responsabilité civile",
      ],
      chapters: [
        {
          title: "Éléments essentiels du contrat",
          content:
            "Chaque contrat doit inclure : les parties, la description précise du projet, les délais, les tarifs et conditions de paiement, les droits d'auteur, les conditions de révision et de résiliation.",
        },
        {
          title: "Définir clairement le scope",
          content:
            "Le scope creeping (expansion des demandes) est le principal problème freelance. Listez exactement ce qui est inclus et ce qui ne l'est pas. Les modifications hors scope sont facturées en plus.",
        },
        {
          title: "Conditions de paiement sécurisées",
          content:
            "Définissez un système : acompte à la signature (30-50%), versements intermédiaires ou paiement complet à la livraison. Pour les projets longs, demandez un paiement par étape avec livrables clairs.",
        },
        {
          title: "Droits d'auteur et propriété intellectuelle",
          content:
            "Clarifiez qui possède le travail final. Habituellement, le client achète les droits exclusifs. Protégez votre portefeuille en conservant les droits de reproduire les exemples pour votre portfolio.",
        },
      ],
    },
  },
  {
    id: 6,
    icon: "📢",
    title: "Marketing personnel : faire connaître vos services",
    category: "Marketing",
    description:
      "Stratégies de marketing pour augmenter votre visibilité et attirer plus de clients régulièrement.",
    topics: ["Marketing", "Visibilité", "Prospection"],
    difficulty: "Intermédiaire",
    duration: "22 min",
    readTime: "9-11 min",
    content: {
      whatYouNeed: [
        "Présence sur les réseaux sociaux pertinents",
        "Un blog ou portfolio en ligne",
        "Liste de contacts pour prospecter",
        "Outils de marketing (email, calendrier de contenu)",
        "Temps dédié à la promotion (10-20% de votre temps)",
      ],
      chapters: [
        {
          title: "Optimiser votre présence en ligne",
          content:
            "Utilisez LinkedIn pour les services B2B professionnels, Instagram/TikTok pour les services créatifs, GitHub pour les développeurs. Avoir un profil cohérent et à jour augmente votre visibilité.",
        },
        {
          title: "Content marketing : partager votre expertise",
          content:
            "Créez du contenu qui montre votre expertise : articles de blog, vidéos tutoriels, posts sur les réseaux. Cela vous positionne comme expert et attire les clients organiquement.",
        },
        {
          title: "Prospection active",
          content:
            "Contactez directement les potentiels clients. Personnalisez vos messages en montrant que vous avez fait vos devoirs. Un suivi régulier sans être insistant génère du travail.",
        },
        {
          title: "Programmes de recommandation",
          content:
            "Demandez aux clients satisfaits de vous recommander. Offrez des incentives (réduction, bonus) pour les recommandations réussies. Le bouche-à-oreille est votre meilleur marketing.",
        },
      ],
    },
  },
];

export default function GuideDetail({ guideId, onNavigate }) {
  const guide = guidesData.find((g) => g.id === parseInt(guideId));

  if (!guide) {
    return (
      <div className="guides-page">
        <div className="guides-container">
          <button
            className="back-button"
            onClick={() => onNavigate("conseils-guides")}
          >
            ← Retour aux guides
          </button>
          <h1>Guide non trouvé</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="guide-detail-page">
      <div className="guides-container">
        <button
          className="back-button"
          onClick={() => onNavigate("conseils-guides")}
        >
          ← Retour aux guides
        </button>

        <div className="guide-detail-header">
          <div className="guide-detail-icon">{guide.icon}</div>
          <h1>{guide.title}</h1>
          <p className="guide-detail-category">{guide.category}</p>
          <div className="guide-detail-meta-row">
            <span className="guide-detail-meta-item">📖 {guide.readTime}</span>
            <span className="guide-detail-meta-item">⏱️ {guide.duration}</span>
            <span className="guide-detail-meta-item">
              📊 {guide.difficulty}
            </span>
          </div>
        </div>

        <div className="guide-detail-content">
          <section className="guide-section">
            <h2>📝 Ce que vous apprendrez</h2>
            <p className="section-intro">{guide.description}</p>
          </section>

          <section className="guide-section">
            <h2>✅ Avant de commencer, vous devez avoir</h2>
            <ul className="checklist">
              {guide.content.whatYouNeed.map((item, index) => (
                <li key={index}>
                  <span className="checkbox">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-section">
            <h2>📚 Contenu du guide</h2>
            {guide.content.chapters.map((chapter, index) => (
              <div key={index} className="chapter">
                <h3>{chapter.title}</h3>
                <p>{chapter.content}</p>
              </div>
            ))}
          </section>

          <section className="guide-section">
            <h2>🎯 Tags et compétences</h2>
            <div className="guide-tags">
              {guide.topics.map((topic, index) => (
                <span key={index} className="guide-tag">
                  {topic}
                </span>
              ))}
            </div>
          </section>

          <section className="guide-section guide-cta">
            <h2>Prêt à démarrer ?</h2>
            <p>
              Appliquez ces conseils dès aujourd'hui pour améliorer votre
              carrière freelance.
            </p>
            <button
              className="cta-button"
              onClick={() => onNavigate("conseils-guides")}
            >
              Voir d'autres guides
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export { guidesData };
