export default function AboutPage() {
  return (
    <main style={{ padding: "40px", color: "white" }}>

      {/* HERO SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg, #1e293b, #0f172a)",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
        aria-label="About World Explorer introduction"
      >
        <h1>🌍 About World Explorer</h1>

        <p style={{ maxWidth: "600px", margin: "auto", opacity: 0.8 }}>
          A modern web application built with Next.js that allows users to
          explore countries, search instantly, and view detailed global data
          using a real REST API.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features" aria-label="Application features">

        <div className="feature-card" tabIndex="0">
          <h3>⚡ Fast API</h3>
          <p>Real-time country data using REST Countries API.</p>
        </div>

        <div className="feature-card" tabIndex="0">
          <h3>🔎 Smart Search</h3>
          <p>AI-style search with instant results and suggestions.</p>
        </div>

        <div className="feature-card" tabIndex="0">
          <h3>🌍 Global Data</h3>
          <p>View population, capital, region, flags, and more.</p>
        </div>

        <div className="feature-card" tabIndex="0">
          <h3>📱 Responsive</h3>
          <p>Works perfectly on mobile, tablet, and desktop.</p>
        </div>

      </section>

      {/* TECH STACK */}
      <section
        style={{ marginTop: "40px", textAlign: "center" }}
        aria-label="Technology stack"
      >
        <h2>🛠 Tech Stack</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "15px",
          }}
        >
          {["Next.js", "React", "REST API", "CSS", "JavaScript"].map((tech) => (
            <span
              key={tech}
              style={{
                padding: "8px 14px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                fontSize: "14px",
              }}
              aria-label={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FOOTER NOTE */}
      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          opacity: 0.5,
        }}
      >
        Built with ❤️ using Next.js
      </p>

    </main>
  );
}