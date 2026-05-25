export default async function CountriesPage() {

  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  const countries = Array.isArray(data) ? data : [];

  return (
    <main style={styles.page}>
      
      <h1 style={styles.title}>🌍 Explore Countries</h1>
      <p style={styles.subtitle}>
        Discover flags, capitals, population and regions
      </p>

      <div style={styles.grid}>
        {countries.slice(0, 24).map((c) => (
          <div key={c.cca3} style={styles.card}>

            <img
              src={c.flags?.png}
              alt={c.name?.common}
              style={styles.flag}
            />

            <h3 style={styles.name}>{c.name?.common}</h3>

            <div style={styles.info}>
              <p>🏙 {c.capital?.[0] || "No Capital"}</p>
              <p>🌍 {c.region}</p>
              <p>👥 {c.population?.toLocaleString()}</p>
            </div>

            <a
              href={`/countries/${c.cca3}`}
              style={styles.button}
            >
              View Details →
            </a>

          </div>
        ))}
      </div>

    </main>
  );
}

const styles = {
  page: {
    padding: "30px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
  },

  title: {
    fontSize: "32px",
    textAlign: "center",
    marginBottom: "5px",
  },

  subtitle: {
    textAlign: "center",
    color: "#94a3b8",
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "18px",
  },

  card: {
    background: "#1e293b",
    borderRadius: "14px",
    padding: "12px",
    transition: "0.3s",
  },

  flag: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  name: {
    marginTop: "10px",
    fontSize: "18px",
  },

  info: {
    fontSize: "13px",
    color: "#cbd5e1",
    marginTop: "6px",
    lineHeight: "1.6",
  },

  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "6px 10px",
    background: "#3b82f6",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "13px",
  },
};