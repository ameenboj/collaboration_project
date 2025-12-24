import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    role: "freelancer",
    portfolio: "",
    bio: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Votre nom est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email invalide.";
    if (form.password.length < 8)
      e.password = "Mot de passe (min 8 caractères).";
    if (form.password !== form.confirm)
      e.confirm = "Les mots de passe ne correspondent pas.";
    if (!form.terms) e.terms = "Vous devez accepter les conditions.";
    return e;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length === 0) {
      // Simulate submit
      console.log("Register payload", form);
      setSubmitted(true);
      // keep form values for review but disable submit for a moment
      setTimeout(() => setSubmitted(false), 2500);
    }
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="brand">
          <h1>
            Work<span>link</span>
          </h1>
          <p className="subtitle">
            Rejoignez la communauté — trouvez des projets ou des talents avec
            Worklink.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div className="row two">
            <label className="field">
              <span>Nom complet</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ex: Alice Dupont"
              />
              {errors.name && <small className="err">{errors.name}</small>}
            </label>

            <label className="field">
              <span>Rôle</span>
              <select name="role" value={form.role} onChange={handleChange}>
                <option value="freelancer">Freelancer</option>
                <option value="client">Client</option>
              </select>
            </label>
          </div>

          <label className="field">
            <span>Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="hello@exemple.com"
            />
            {errors.email && <small className="err">{errors.email}</small>}
          </label>

          <div className="row two">
            <label className="field">
              <span>Mot de passe</span>
              <div className="password-wrap">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min 8 caractères"
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
              {errors.password && (
                <small className="err">{errors.password}</small>
              )}
            </label>

            <label className="field">
              <span>Confirmer</span>
              <input
                name="confirm"
                type={showPassword ? "text" : "password"}
                value={form.confirm}
                onChange={handleChange}
                placeholder="Retapez le mot de passe"
              />
              {errors.confirm && (
                <small className="err">{errors.confirm}</small>
              )}
            </label>
          </div>

          <label className="field">
            <span>Portfolio (URL)</span>
            <input
              name="portfolio"
              value={form.portfolio}
              onChange={handleChange}
              placeholder="https://"
            />
          </label>

          <label className="field">
            <span>Bio courte</span>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Une phrase sur vos compétences..."
            ></textarea>
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            <span>
              J'accepte les <a href="#">conditions</a> et la politique de
              confidentialité.
            </span>
          </label>
          {errors.terms && <small className="err">{errors.terms}</small>}

          <div className="actions">
            <button className="primary" type="submit" disabled={submitted}>
              {submitted ? "Inscription..." : "Créer un compte"}
            </button>
            <button
              type="button"
              className="ghost"
              onClick={() =>
                setForm({
                  name: "",
                  email: "",
                  password: "",
                  confirm: "",
                  role: "freelancer",
                  portfolio: "",
                  bio: "",
                  terms: false,
                })
              }
            >
              Effacer
            </button>
          </div>

          <div className="divider">ou s'inscrire avec</div>
          <div className="socials">
            <button type="button" className="social google">
              Google
            </button>
            <button type="button" className="social linkedin">
              LinkedIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
