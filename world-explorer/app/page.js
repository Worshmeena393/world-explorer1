import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ color: "white" }}>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "150px 20px",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
      }}>

        <h1 style={{
          fontSize: "54px",
          fontWeight: "600",
          letterSpacing: "-1px",
          marginBottom: "12px"
        }}>
          Explore the World Instantly
        </h1>

        <p style={{
          maxWidth: "600px",
          margin: "0 auto 30px",
          opacity: 0.6,
          fontSize: "18px"
        }}>
          Countries, flags, capitals, and global data in one clean experience.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap"
        }}>

          <Link href="/countries" style={btnPrimary}>
            🌍 Open Explorer
          </Link>

          <Link href="/search" style={btnSecondary}>
            🔎 Search
          </Link>

        </div>

      </section>

      {/* MINIMAL FEATURE STRIP (NO REPETITION) */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        padding: "60px 20px",
        opacity: 0.7
      }}>

        <span>🌍 250+ Countries</span>
        <span>⚡ Fast Search</span>
        <span>📊 Live Data</span>
        <span>📱 Responsive</span>

      </section>

      {/* FINAL CTA */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}>

        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Ready to explore?
        </h2>

        <p style={{ opacity: 0.6, marginBottom: "25px" }}>
          Start discovering countries in seconds.
        </p>

        <Link href="/countries" style={btnPrimary}>
          Get Started →
        </Link>

      </section>

    </main>
  );
}

/* 🍏 BUTTONS */
const btnPrimary = {
  padding: "12px 20px",
  background: "white",
  color: "black",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "500"
};

const btnSecondary = {
  padding: "12px 20px",
  background: "transparent",
  color: "white",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.2)",
  textDecoration: "none"
};