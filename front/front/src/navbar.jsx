import { useState } from "react";
import "./navbar.css";

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
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="4" fill="#14A800" />
              <path
                d="M6 14C6 13.4477 6.44772 13 7 13C7.55228 13 8 13.4477 8 14V18C8 19.1046 8.89543 20 10 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H10C7.79086 22 6 20.2091 6 18V14Z"
                fill="white"
              />
              <path
                d="M14 6C13.4477 6 13 6.44772 13 7C13 7.55228 13.4477 8 14 8H18C19.1046 8 20 8.89543 20 10V14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14V10C22 7.79086 20.2091 6 18 6H14Z"
                fill="white"
              />
            </svg>
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
