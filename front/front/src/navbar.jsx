import { useState } from "react";
import "./navbar.css";
import AnimatedLogo from "./components/AnimatedLogo";

export default function Navbar({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [findWorkOpen, setFindWorkOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const go = (view) => {
    setMobileOpen(false);
    setFindWorkOpen(false);
    setHireOpen(false);
    setNewsOpen(false);
    if (onNavigate) onNavigate(view);
  };

  return (
    <header className="upwork-nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-section">
          <div
            className="upwork-logo"
            onClick={() => go("home")}
            role="button"
            tabIndex={0}
            aria-label="Worklink home"
          >
            <AnimatedLogo size="small" animated={true} />
            <span className="logo-text">Worklink</span>
          </div>
        </div>

        {/* Middle Navigation */}
        <nav className="nav-links-container">
          <div className="dropdown-container">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => {
                setFindWorkOpen(!findWorkOpen);
                setHireOpen(false);
              }}
            >
              <span>Trouver du Travail</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {findWorkOpen && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => go("browse-jobs")}
                >
                  Parcourir les Emplois
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("saved-jobs")}
                >
                  Emplois Enregistrés
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("proposals")}
                >
                  Mes Propositions
                </button>
              </div>
            )}
          </div>

          <div className="dropdown-container">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => {
                setHireOpen(!hireOpen);
                setFindWorkOpen(false);
              }}
            >
              <span>Embaucher des Talents</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {hireOpen && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => go("post-job")}
                >
                  Publier une Mission
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("browse-talent")}
                >
                  Parcourir les Talents
                </button>
                <button className="dropdown-item" onClick={() => go("my-jobs")}>
                  Mes Emplois
                </button>
              </div>
            )}
          </div>

          <div className="dropdown-container">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => {
                setNewsOpen(!newsOpen);
                setFindWorkOpen(false);
                setHireOpen(false);
              }}
            >
              <span>Actualités & Ressources</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {newsOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => go("blog")}>
                  Blog Worklink
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("conseils-guides")}
                >
                  Conseils & Guides
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("tendances-freelance")}
                >
                  Tendances Freelance
                </button>
              </div>
            )}
          </div>

          <button className="nav-link" onClick={() => go("pricing")}>
            <span>Tarifs</span>
          </button>
        </nav>

        {/* Right side - Auth buttons */}
        <div className="nav-auth">
          <button className="nav-link login-btn" onClick={() => go("login")}>
            Se Connecter
          </button>
          <button className="btn-signup" onClick={() => go("register")}>
            S'inscrire
          </button>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-nav-menu">
          <button className="mobile-nav-item" onClick={() => go("find-work")}>
            Trouver du Travail
          </button>
          <button className="mobile-nav-item" onClick={() => go("hire-talent")}>
            Embaucher des Talents
          </button>
          <button className="mobile-nav-item" onClick={() => go("blog")}>
            Blog Worklink
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => go("conseils-guides")}
          >
            Conseils & Guides
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => go("tendances-freelance")}
          >
            Tendances Freelance
          </button>
          <div className="mobile-nav-divider"></div>
          <button
            className="mobile-nav-item mobile-login"
            onClick={() => go("login")}
          >
            Se Connecter
          </button>
          <button
            className="mobile-nav-item mobile-signup"
            onClick={() => go("register")}
          >
            S'inscrire
          </button>
        </div>
      )}
    </header>
  );
}
