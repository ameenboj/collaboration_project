import React, { useState } from "react";
import "./register.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Veuillez renseigner email et mot de passe.");
      return;
    }
    setLoading(true);
    // simulate auth
    setTimeout(() => {
      setLoading(false);
      console.log("Login payload", form);
      // fake success for demo
      alert("Connexion réussie (démo)");
    }, 900);
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="brand">
          <h1>
            Work<span>link</span>
          </h1>
          <p className="subtitle">Bienvenue — connectez-vous à votre compte.</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="hello@exemple.com"
            />
          </label>

          <label className="field">
            <span>Mot de passe</span>
            <div className="password-wrap">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Votre mot de passe"
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPassword((s) => !s)}
                aria-label="Afficher le mot de passe"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            <span>Se souvenir de moi</span>
          </label>

          {error && <small className="err">{error}</small>}

          <div className="actions">
            <button className="primary" type="submit" disabled={loading}>
              {loading ? "Connexion..." : "Se connecter"}
            </button>
            <button
              type="button"
              className="ghost"
              onClick={() =>
                setForm({ email: "", password: "", remember: false })
              }
            >
              Effacer
            </button>
          </div>

          <div className="divider">ou se connecter avec</div>
          <div className="socials">
            <button type="button" className="social google">
              Google
            </button>
            <button type="button" className="social linkedin">
              LinkedIn
            </button>
          </div>

          <p style={{ marginTop: 18, color: "var(--muted)" }}>
            Pas encore de compte?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              Inscrivez-vous
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
