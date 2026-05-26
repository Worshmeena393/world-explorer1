import Link from "next/link";

export default async function CountriesPage() {

  // This page can be statically rendered and cached.
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,region,population",
    { cache: "force-cache" }
  );

  const data = await res.json();
  const countries = Array.isArray(data) ? data : [];

  return (
    <main style={styles.page}>

      <h1 style={styles.title}>🌍 Explore Countries</h1>

      <p style={styles.subtitle}>
        Discover flags, capitals, regions, and population data
      </p>

      <div style={styles.grid}>

        {countries.slice(0, 24).map((c) => (
          <Link key={c.cca3} href={`/countries/${c.cca3}`} style={styles.card}>

            {/* FLAG */}
            <div style={styles.flagWrapper}>
              <img
                src={c.flags?.png || c.flags?.svg}
                alt={c.name?.common}
                style={styles.flag}
              />
            </div>

            {/* CONTENT */}
            <div style={styles.content}>

              <h2 style={styles.name}>{c.name?.common}</h2>

              <p style={styles.text}>📍 {c.region}</p>

              <p style={styles.text}>
                🏙 {c.capital?.[0] || "No capital"}
              </p>

              <p style={styles.text}>
                👥 {c.population?.toLocaleString()}
              </p>

              <span style={styles.button}>View Details →</span>

            </div>

          </Link>
        ))}

      </div>

    </main>
  );
}

/* 🎨 STYLES (APPLE CLEAN UI) */
const styles = {
  page: {
    padding: "80px 20px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subtitle: {
    opacity: 0.6,
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "18px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "15px",
    textDecoration: "none",
    color: "white",
    transition: "0.25s",
    backdropFilter: "blur(10px)",
  },

  flagWrapper: {
    width: "100%",
    height: "140px",
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "12px",
  },

  flag: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    textAlign: "left",
  },

  name: {
    fontSize: "18px",
    marginBottom: "6px",
  },

  text: {
    opacity: 0.7,
    fontSize: "14px",
    margin: "3px 0",
  },

  button: {
    display: "inline-block",
    marginTop: "10px",
    fontSize: "13px",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "white",
    color: "black",
    fontWeight: "500",
  },
};