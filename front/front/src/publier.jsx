import React, { useState, useEffect, useRef } from "react";
import "./publier.css";

export default function Publier({ onNavigate = () => {} }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    skills: "",
    contact: "",
    files: null,
    visibility: "public",
  });
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(8);
  const animRef = useRef(null);

  const categories = [
    "Développement Web",
    "Design & UX",
    "Rédaction Web",
    "SEO & Marketing",
    "E-commerce",
    "Mobile App",
  ];

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setForm((s) => ({ ...s, files }));
      return;
    }
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleCategorySelect = (cat) => {
    setForm((s) => ({ ...s, category: cat }));
  };

  // smooth animation helper
  const animateProgressTo = (target) => {
    clearInterval(animRef.current);
    animRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= target) {
          clearInterval(animRef.current);
          return target;
        }
        // ease out increment
        const delta = Math.max(1, Math.ceil((target - p) / 6));
        return Math.min(target, p + delta);
      });
    }, 40);
  };

  // compute progress from filled fields
  useEffect(() => {
    const totalWeights = {
      title: 25,
      description: 35,
      category: 15,
      contact: 15,
      files: 10,
    };

    let score = 0;
    if (form.title && form.title.trim().length > 3) score += totalWeights.title;
    if (form.description && form.description.trim().length > 10)
      score += totalWeights.description;
    if (form.category) score += totalWeights.category;
    if (form.contact && form.contact.includes("@"))
      score += totalWeights.contact;
    if (form.files && form.files.length > 0) score += totalWeights.files;

    // ensure at least small baseline
    const target = Math.max(8, Math.min(100, score));
    animateProgressTo(target);

    return () => clearInterval(animRef.current);
  }, [form.title, form.description, form.category, form.contact, form.files]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) {
      alert("Merci de renseigner le titre et la description du projet.");
      return;
    }

    // animate progress to 100 then show success
    animateProgressTo(100);
    setTimeout(() => {
      console.log("Publier projet:", form);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="publier-page">
        <div className="publier-container publier-success">
          <h2>Votre projet a été publié</h2>
          <p>
            Merci — votre projet a bien été enregistré. Des freelances vont
            bientôt vous proposer des devis.
          </p>
          <div className="publier-actions">
            <button className="primary" onClick={() => onNavigate("register")}>
              Créer un compte
            </button>
            <button className="ghost" onClick={() => onNavigate("home")}>
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="publier-page">
      <div className="publier-inner">
        <aside className="publier-aside">
          <div className="progress">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
            <div className="progress-text">{progress}%</div>
          </div>

          <h3>Publier un projet gratuitement</h3>
          <p className="muted">
            Grâce à notre plateforme, recevez rapidement des propositions
            qualifiées. Décrivez votre projet, choisissez une catégorie, et
            publiez — c'est gratuit.
          </p>

          <ul className="features">
            <li>Simple : décrivez votre besoin</li>
            <li>Rapide : recevez plusieurs devis</li>
            <li>Gratuit : sans commission</li>
          </ul>
        </aside>

        <main className="publier-container">
          <h2>Publier un projet</h2>

          <form className="publier-form" onSubmit={handleSubmit}>
            <label>
              Titre du projet
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Ex: Création site e-commerce React"
                required
              />
            </label>

            <label>
              Description
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={6}
                placeholder="Décrivez le projet, les livrables et le délai attendu"
                required
              />
            </label>

            <div className="two-col">
              <div className="field">
                <label>Catégorie</label>
                <div className="chips">
                  {categories.map((c) => (
                    <button
                      type="button"
                      key={c}
                      className={`chip ${form.category === c ? "active" : ""}`}
                      onClick={() => handleCategorySelect(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <label>
                Budget estimé
                <input
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="Ex: 1200 TND"
                />
              </label>
            </div>

            <label>
              Compétences requises (séparez par des virgules)
              <input
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="React, Node.js, Figma"
              />
            </label>

            <div className="two-col">
              <label>
                Email de contact
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="votre@email.tn"
                />
              </label>

              <label>
                Visibilité
                <select
                  name="visibility"
                  value={form.visibility}
                  onChange={handleChange}
                >
                  <option value="public">Public</option>
                  <option value="private">Privé (sur invitation)</option>
                </select>
              </label>
            </div>

            <label className="file">
              Joindre des fichiers (optionnel)
              <input
                type="file"
                name="files"
                onChange={handleChange}
                multiple
              />
            </label>

            <div className="form-actions">
              <button className="primary" type="submit">
                Publier gratuitement
              </button>
              <button
                type="button"
                className="ghost"
                onClick={() => onNavigate("home")}
              >
                Annuler
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
