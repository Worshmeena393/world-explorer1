import Link from "next/link";

export default function Home() {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>🌍 World Explorer</h1>

        <p>
          Explore countries around the world and learn about their flags,
          capitals, populations, currencies, and languages.
        </p>

        <Link href="/countries" className="btn">
          🚀 Explore Countries
        </Link>
      </section>

      {/* FEATURE SECTION */}
      <section className="features">

        <div className="feature-card">
          <h3>🌐 200+ Countries</h3>
          <p>Browse all countries using real API data.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Search</h3>
          <p>Search any country instantly by name.</p>
        </div>

        <div className="feature-card">
          <h3>📍 Detailed Info</h3>
          <p>View capital, population, region & more.</p>
        </div>

      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Start your journey now 🌎</h2>

        <Link href="/search" className="btn-secondary">
          🔎 Try Search
        </Link>
      </section>

    </main>
  );
}