import { useState } from "react";
import "./navbar.css";
import AnimatedLogo from "./components/AnimatedLogo";

export default function Navbar({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [findWorkOpen, setFindWorkOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);

  const go = (view) => {
    setMobileOpen(false);
    setFindWorkOpen(false);
    setHireOpen(false);
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
              <span>Find Work</span>
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
                  Browse Jobs
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("saved-jobs")}
                >
                  Saved Jobs
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("proposals")}
                >
                  My Proposals
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
              <span>Hire Talent</span>
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
                  Post a Job
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => go("browse-talent")}
                >
                  Browse Talent
                </button>
                <button className="dropdown-item" onClick={() => go("my-jobs")}>
                  My Jobs
                </button>
              </div>
            )}
          </div>

          <button className="nav-link" onClick={() => go("messages")}>
            Messages
          </button>

          <button className="nav-link" onClick={() => go("blog")}>
            Blog
          </button>
        </nav>

        {/* Right side - Auth buttons */}
        <div className="nav-auth">
          <button className="nav-link login-btn" onClick={() => go("login")}>
            Log In
          </button>
          <button className="btn-signup" onClick={() => go("register")}>
            Sign Up
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
            Find Work
          </button>
          <button className="mobile-nav-item" onClick={() => go("hire-talent")}>
            Hire Talent
          </button>
          <button className="mobile-nav-item" onClick={() => go("messages")}>
            Messages
          </button>
          <button className="mobile-nav-item" onClick={() => go("blog")}>
            Blog
          </button>
          <div className="mobile-nav-divider"></div>
          <button
            className="mobile-nav-item mobile-login"
            onClick={() => go("login")}
          >
            Log In
          </button>
          <button
            className="mobile-nav-item mobile-signup"
            onClick={() => go("register")}
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
