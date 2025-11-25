import { useState } from "react";
import "./navbar.css";

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (view) => {
    setOpen(false);
    if (onNavigate) onNavigate(view);
  };

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div
          className="brand"
          onClick={() => go("home")}
          role="button"
          tabIndex={0}
          aria-label="Go to Worklink home"
        >
          <div className="logo" aria-hidden>
            W
          </div>
          <div className="title">Worklink</div>
        </div>

        <nav className="nav-links" aria-label="Primary navigation">
          <button className={`nav-link`} onClick={() => go("home")}>
            Accueil
          </button>
          <button className={`nav-link`} onClick={() => go("blog")}>
            Blog
          </button>
          <button className={`nav-link`} onClick={() => go("register")}>
            S'inscrire
          </button>
          <button className={`nav-link`} onClick={() => go("login")}>
            Se connecter
          </button>
        </nav>

        <div className="cta">
          <button className="btn ghost" onClick={() => go("publier")}>
            Publier une mission
          </button>
          <button className="btn primary" onClick={() => go("register")}>
            Rejoindre
          </button>
          <button
            className="mobile-toggle btn"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#0f172a"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <button className="nav-link" onClick={() => go("home")}>
            Accueil
          </button>
          <button className="nav-link" onClick={() => go("blog")}>
            Blog
          </button>
          <button className="nav-link" onClick={() => go("publier")}>
            Publier une mission
          </button>
          <button className="nav-link" onClick={() => go("register")}>
            S'inscrire
          </button>
          <button className="nav-link" onClick={() => go("login")}>
            Se connecter
          </button>
        </div>
      )}
    </header>
  );
}
