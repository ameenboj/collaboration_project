import { useState } from "react";
import "./pricing.css";

export default function Pricing({ onNavigate }) {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "basic",
      name: "Basic",
      tagline: "Pour les particuliers qui débutent",
      monthlyPrice: 0,
      yearlyPrice: 0,
      recommended: false,
      features: [
        { text: "Commission de 10% sur les paiements", included: true },
        { text: "Accès aux offres d'emploi", included: true },
        { text: "Propositions illimitées", included: true },
        { text: "Chat en temps réel", included: true },
        { text: "Support par email", included: true },
        { text: "Badge profil vérifié", included: false },
        { text: "Support prioritaire", included: false },
        { text: "Statistiques avancées", included: false },
      ],
      cta: "Commencer Gratuitement",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
    {
      id: "plus",
      name: "Plus",
      tagline: "Pour les professionnels sérieux",
      monthlyPrice: 14.99,
      yearlyPrice: 149,
      recommended: true,
      features: [
        { text: "Commission de 5% sur les paiements", included: true },
        { text: "Accès prioritaire aux nouveaux projets", included: true },
        { text: "Propositions illimitées", included: true },
        { text: "Chat en temps réel", included: true },
        { text: "Badge profil vérifié", included: true },
        { text: "Support prioritaire 24/7", included: true },
        { text: "Statistiques avancées", included: true },
        { text: "Portfolio personnalisé", included: true },
      ],
      cta: "Essayer 30 jours gratuits",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tagline: "Pour les équipes et agences",
      monthlyPrice: 49.99,
      yearlyPrice: 499,
      recommended: false,
      features: [
        { text: "Commission de 3% sur les paiements", included: true },
        { text: "Accès exclusif aux projets premium", included: true },
        { text: "Propositions illimitées", included: true },
        { text: "Gestion d'équipe complète", included: true },
        { text: "Badge profil vérifié premium", included: true },
        { text: "Support dédié 24/7", included: true },
        { text: "Analyses et rapports avancés", included: true },
        { text: "API personnalisée", included: true },
      ],
      cta: "Contacter les Ventes",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
    },
  ];

  const clientPlans = [
    {
      id: "basic-client",
      name: "Basic",
      tagline: "Pour les petits projets",
      monthlyPrice: 0,
      yearlyPrice: 0,
      recommended: false,
      features: [
        { text: "Publier jusqu'à 3 projets/mois", included: true },
        { text: "Accès aux freelances vérifiés", included: true },
        { text: "Chat en temps réel", included: true },
        { text: "Paiement sécurisé", included: true },
        { text: "Support par email", included: true },
        { text: "Gestionnaire de compte dédié", included: false },
        { text: "Recrutement assisté", included: false },
        { text: "Facturation automatisée", included: false },
      ],
      cta: "Commencer Gratuitement",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    },
    {
      id: "business-client",
      name: "Business",
      tagline: "Pour les entreprises en croissance",
      monthlyPrice: 99,
      yearlyPrice: 990,
      recommended: true,
      features: [
        { text: "Projets illimités", included: true },
        { text: "Accès prioritaire aux meilleurs talents", included: true },
        { text: "Chat et visio en temps réel", included: true },
        { text: "Paiement sécurisé et flexibilité", included: true },
        { text: "Gestionnaire de compte dédié", included: true },
        { text: "Support prioritaire 24/7", included: true },
        { text: "Facturation automatisée", included: true },
        { text: "Outils de collaboration d'équipe", included: true },
      ],
      cta: "Essayer 30 jours gratuits",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    },
    {
      id: "enterprise-client",
      name: "Enterprise",
      tagline: "Solutions sur mesure",
      monthlyPrice: null,
      yearlyPrice: null,
      recommended: false,
      features: [
        { text: "Tout de Business +", included: true },
        { text: "Recrutement assisté par experts", included: true },
        { text: "Contrats personnalisés", included: true },
        { text: "Intégration API complète", included: true },
        { text: "Formation et onboarding", included: true },
        { text: "SLA garanti", included: true },
        { text: "Rapports et analytics avancés", included: true },
        { text: "Conformité et sécurité renforcées", included: true },
      ],
      cta: "Contacter les Ventes",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop",
    },
  ];

  const [userType, setUserType] = useState("freelancer");

  const currentPlans = userType === "freelancer" ? plans : clientPlans;

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1 className="pricing-hero-title">
            Des tarifs adaptés à vos besoins
          </h1>
          <p className="pricing-hero-subtitle">
            Choisissez le plan qui correspond à votre niveau d'activité
          </p>

          {/* User Type Toggle */}
          <div className="user-type-toggle">
            <button
              className={`user-type-btn ${
                userType === "freelancer" ? "active" : ""
              }`}
              onClick={() => setUserType("freelancer")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Freelance</span>
            </button>
            <button
              className={`user-type-btn ${
                userType === "client" ? "active" : ""
              }`}
              onClick={() => setUserType("client")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span>Client</span>
            </button>
          </div>

          {/* Billing Toggle */}
          <div className="billing-toggle-container">
            <span
              className={`billing-label ${
                billingCycle === "monthly" ? "active" : ""
              }`}
            >
              Mensuel
            </span>
            <button
              className="billing-toggle"
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              aria-label="Toggle billing cycle"
            >
              <span
                className={`toggle-slider ${
                  billingCycle === "yearly" ? "yearly" : ""
                }`}
              ></span>
            </button>
            <span
              className={`billing-label ${
                billingCycle === "yearly" ? "active" : ""
              }`}
            >
              Annuel
              <span className="save-badge">Économisez 17%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards-section">
        <div className="pricing-cards-container">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${
                plan.recommended ? "recommended" : ""
              }`}
            >
              {plan.recommended && (
                <div className="recommended-badge">Recommandé</div>
              )}

              {/* Plan Image */}
              <div className="plan-image">
                <img src={plan.image} alt={plan.name} />
              </div>

              {/* Plan Header */}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>

              {/* Plan Price */}
              <div className="plan-price">
                {plan.monthlyPrice === null ? (
                  <div className="price-custom">
                    <span className="price-amount">Sur mesure</span>
                  </div>
                ) : (
                  <>
                    <span className="price-currency">€</span>
                    <span className="price-amount">
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : (plan.yearlyPrice / 12).toFixed(2)}
                    </span>
                    <span className="price-period">/mois</span>
                  </>
                )}
                {billingCycle === "yearly" &&
                  plan.yearlyPrice > 0 &&
                  plan.monthlyPrice > 0 && (
                    <p className="price-yearly-note">
                      Facturé {plan.yearlyPrice}€/an
                    </p>
                  )}
              </div>

              {/* CTA Button */}
              <button
                className={`plan-cta ${
                  plan.recommended ? "primary" : "secondary"
                }`}
                onClick={() => onNavigate("register")}
              >
                {plan.cta}
              </button>

              {/* Features List */}
              <div className="plan-features">
                <p className="features-title">Ce qui est inclus :</p>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`feature-item ${
                        feature.included ? "included" : "not-included"
                      }`}
                    >
                      {feature.included ? (
                        <svg
                          className="check-icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="cross-icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 18L18 6M6 6l12 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="faq-container">
          <h2 className="faq-title">Questions Fréquentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">
                Puis-je changer de plan à tout moment ?
              </h3>
              <p className="faq-answer">
                Oui, vous pouvez changer de plan à tout moment. Si vous passez à
                un plan supérieur, les changements prennent effet immédiatement.
                Si vous rétrogradez, les modifications prendront effet à la fin
                de votre période de facturation actuelle.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Comment fonctionne la période d'essai ?
              </h3>
              <p className="faq-answer">
                Tous les plans payants offrent 30 jours d'essai gratuit. Vous ne
                serez pas facturé pendant cette période et vous pouvez annuler à
                tout moment sans frais.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Quels moyens de paiement acceptez-vous ?
              </h3>
              <p className="faq-answer">
                Nous acceptons toutes les cartes de crédit majeures (Visa,
                MasterCard, American Express), PayPal, et les virements
                bancaires pour les plans Enterprise.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Y a-t-il des frais cachés ?</h3>
              <p className="faq-answer">
                Non, tous nos tarifs sont transparents. Le seul coût
                supplémentaire est la commission sur les paiements reçus, qui
                varie selon votre plan.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Puis-je obtenir un remboursement ?
              </h3>
              <p className="faq-answer">
                Oui, nous offrons une garantie de remboursement de 14 jours sur
                tous les plans payants si vous n'êtes pas satisfait de nos
                services.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Le plan Enterprise est-il personnalisable ?
              </h3>
              <p className="faq-answer">
                Absolument ! Le plan Enterprise est entièrement personnalisable
                selon vos besoins. Contactez notre équipe commerciale pour
                discuter de vos exigences spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section">
        <div className="pricing-cta-content">
          <h2 className="cta-title">Prêt à commencer ?</h2>
          <p className="cta-subtitle">
            Rejoignez des milliers de freelances et d'entreprises qui font
            confiance à Worklink
          </p>
          <div className="cta-buttons">
            <button
              className="cta-primary-btn"
              onClick={() => onNavigate("register")}
            >
              Créer un compte gratuit
            </button>
            <button
              className="cta-secondary-btn"
              onClick={() => onNavigate("home")}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
