function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="features" id="features">
      <h2>Nos Fonctionnalités</h2>

      <div className="features-container">
        <FeatureCard
          icon="⚡"
          title="Rapide"
          description="Des performances optimisées pour gagner du temps."
        />

        <FeatureCard
          icon="🔒"
          title="Sécurisé"
          description="Vos données sont protégées avec les meilleures pratiques."
        />

        <FeatureCard
          icon="🚀"
          title="Simple"
          description="Une interface intuitive et facile à utiliser."
        />
      </div>
    </section>
  );
}

export default Features;