import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        color: "white",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >

      {/* HERO SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "160px 20px",
          background:
            "radial-gradient(circle at top, #1e293b 0%, #0f172a 70%)",
        }}
      >

        <h1
          style={{
            fontSize: "56px",
            fontWeight: "700",
            letterSpacing: "-1.5px",
            lineHeight: "1.1",
            marginBottom: "16px",
          }}
        >
          Explore the World Instantly
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto 35px",
            opacity: 0.7,
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Discover countries, capitals, flags, populations, and global
          insights in one modern experience.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >

          <Link href="/countries" style={btnPrimary}>
            🌍 Open Explorer
          </Link>

          <Link href="/search" style={btnSecondary}>
            🔎 Search Countries
          </Link>

        </div>

      </section>

      {/* FEATURE STRIP */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          padding: "70px 20px",
          opacity: 0.75,
          fontSize: "15px",
          letterSpacing: "0.3px",
        }}
      >

        <span>🌍 250+ Countries</span>
        <span>⚡ Instant Search</span>
        <span>📊 Live Country Data</span>
        <span>📱 Fully Responsive</span>

      </section>

      {/* CTA SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "110px 20px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "12px",
          }}
        >
          Ready to start exploring?
        </h2>

        <p
          style={{
            opacity: 0.65,
            marginBottom: "30px",
            fontSize: "17px",
          }}
        >
          Browse the world with fast and real-time country information.
        </p>

        <Link href="/countries" style={btnPrimary}>
          Get Started →
        </Link>

      </section>

    </main>
  );
}

/* PRIMARY BUTTON */
const btnPrimary = {
  padding: "13px 24px",
  background: "white",
  color: "black",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.25s",
  boxShadow: "0 8px 25px rgba(255,255,255,0.12)",
};

/* SECONDARY BUTTON */
const btnSecondary = {
  padding: "13px 24px",
  background: "rgba(255,255,255,0.03)",
  color: "white",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.15)",
  textDecoration: "none",
  fontWeight: "500",
  backdropFilter: "blur(10px)",
  transition: "0.25s",
};