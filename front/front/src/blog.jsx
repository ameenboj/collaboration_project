import React, { useState } from "react";
import "./blog.css";

const blogPosts = [
  {
    id: 1,
    title:
      "Comment développer sa présence locale en freelance dans les villes tunisiennes ?",
    author: "Amina Ben Ali",
    date: "17 novembre 2025",
    category: "Conseils Freelance",
    excerpt:
      "Découvrez les stratégies éprouvées pour développer votre réseau local et attirer des clients à Tunis, Sfax et autres villes. Un guide complet pour freelances tunisiens.",
    image: "/images/articles/aaa.jpg",
    readTime: "5 min",
  },
  {
    id: 2,
    title:
      "Pourquoi décrocher son premier client freelance est si difficile en Tunisie ?",
    author: "Karim Trabelsi",
    date: "15 novembre 2025",
    category: "Conseils Freelance",
    excerpt:
      "Les défis réels rencontrés par les nouveaux freelances tunisiens et comment les surmonter. Stratégies prouvées pour obtenir vos premiers projets.",
    image: "/images/articles/difficulte-premier-client-freelance-600x400.jpg",
    readTime: "7 min",
  },
  {
    id: 3,
    title:
      "Micro-entreprise en Tunisie : le statut idéal pour les freelances digitaux ?",
    author: "Yasmine Hamza",
    date: "13 novembre 2025",
    category: "Fiscalité Tunisie",
    excerpt:
      "Tout savoir sur le statut de micro-entreprise en Tunisie. Avantages, obligations légales et comment bien facturer vos clients.",
    image:
      "/images/articles/Statut-micro-entreprise-Tunisie-pour-freelance-digital-600x338.jpg",
    readTime: "8 min",
  },
  {
    id: 4,
    title: "Fiscalité freelance Tunisie : éviter les erreurs qui coûtent cher",
    author: "Ahmed Khouaja",
    date: "11 novembre 2025",
    category: "Fiscalité Tunisie",
    excerpt:
      "Guide complet sur la fiscalité en tant que freelance en Tunisie. Erreurs courantes à éviter et conseils pour optimiser votre gestion financière.",
    image:
      "/images/articles/Erreurs-fiscales-freelance-Tunisie-a-eviter-600x400.jpg",
    readTime: "10 min",
  },
  {
    id: 5,
    title:
      "Comment les freelances tunisiens peuvent-ils rivaliser avec le no-code ?",
    author: "Sofiene Mhiri",
    date: "9 novembre 2025",
    category: "Développement",
    excerpt:
      "L'émergence du no-code ne signifie pas la fin des développeurs. Découvrez comment rester compétitif et valoriser vos compétences en tant que dev freelance.",
    image: "/images/articles/Freelance-vs-no-code-tunisie-600x338.jpg",
    readTime: "6 min",
  },
  {
    id: 6,
    title: "Comment facturer à l'heure en freelance sans perdre d'argent ?",
    author: "Leila Gharbi",
    date: "7 novembre 2025",
    category: "Business",
    excerpt:
      "Déterminez le bon tarif horaire, gérez votre temps efficacement et évitez de sous-facturer. Stratégies de tarification pour freelances tunisiens.",
    image: "/images/articles/freelance-tunisie-facturer-a-lheure-600x400.jpg",
    readTime: "6 min",
  },
  {
    id: 7,
    title: "Travailler gratuitement pour débuter : bonne ou mauvaise idée ?",
    author: "Mariem Ben Salah",
    date: "5 novembre 2025",
    category: "Conseils Freelance",
    excerpt:
      "Travail gratuit, portfolio, références... Comment démarrer sans vous ruiner ? Une analyse réaliste pour les nouveaux freelances tunisiens.",
    image: "/images/articles/Travail-gratuit-freelance-debutant-600x450.jpg",
    readTime: "5 min",
  },
  {
    id: 8,
    title: "Identifier les signaux d'alarme d'un projet freelance toxique",
    author: "Riadh Beji",
    date: "3 novembre 2025",
    category: "Conseils Freelance",
    excerpt:
      "Apprenez à reconnaître les red flags avant d'accepter un projet. Protection contre les mauvais clients et les projets catastrophiques.",
    image:
      "/images/articles/signaux-toxiques-projet-freelance-tunisie-600x400.jpg",
    readTime: "7 min",
  },
];

export default function Blog({ onNavigate = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Conseils Freelance", count: 113 },
    { name: "Développement", count: 32 },
    { name: "Graphisme", count: 24 },
    { name: "SEO", count: 18 },
    { name: "Rédaction Web", count: 15 },
    { name: "Fiscalité Tunisie", count: 12 },
    { name: "Business", count: 10 },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      <header className="blog-hero">
        <div className="blog-hero-inner">
          <h1>Blog Worklink</h1>
          <p>
            Conseils, ressources et actualités pour les freelances tunisiens et
            leurs clients
          </p>
          <div className="blog-search-bar">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </header>

      <main className="blog-content">
        <section className="blog-posts">
          <div className="posts-header">
            <h2>
              {selectedCategory
                ? `Articles en "${selectedCategory}"`
                : "Tous les articles"}
            </h2>
            <span className="post-count">{filteredPosts.length} articles</span>
          </div>

          <div className="posts-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <span className="category-badge">{post.category}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <div className="blog-card-content">
                    <h2>{post.title}</h2>
                    <p className="excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      <span className="author">👤 {post.author}</span>
                      <span className="date">📅 {post.date}</span>
                    </div>
                    <button className="read-more">Lire la suite →</button>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results">
                <p>Aucun article trouvé. Essayez une autre recherche.</p>
              </div>
            )}
          </div>
        </section>

        <aside className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Catégories</h3>
            <div className="category-list">
              <button
                className={`category-btn ${!selectedCategory ? "active" : ""}`}
                onClick={() => setSelectedCategory(null)}
              >
                Tous les articles
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`category-btn ${
                    selectedCategory === cat.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name} <span className="count">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-widget popular-posts">
            <h3>Articles populaires</h3>
            <ul>
              {blogPosts.slice(0, 5).map((post) => (
                <li key={post.id}>
                  <a href={`#post-${post.id}`} className="popular-link">
                    {post.title}
                  </a>
                  <small>{post.date}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-widget newsletter">
            <h3>📬 Newsletter</h3>
            <p>
              Recevez chaque semaine nos conseils et actualités pour freelances
              en Tunisie
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="newsletter-form"
            >
              <input
                type="email"
                placeholder="Votre email"
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                S'abonner
              </button>
            </form>
            <small>✓ Sans spam, désinscription facile</small>
          </div>

          <div className="sidebar-widget cta-box">
            <h3>Vous êtes freelance ?</h3>
            <p>
              Rejoignez la communauté Worklink et trouvez vos futurs clients
            </p>
            <button
              className="cta-button"
              onClick={() => onNavigate("register")}
            >
              S'inscrire gratuitement
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
