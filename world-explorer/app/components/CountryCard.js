import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div style={styles.card}>

      <div style={styles.flagWrapper}>
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          style={styles.flag}
        />
      </div>

      <div style={styles.content}>

        <h3 style={styles.title}>
          {country.name?.common}
        </h3>

        <p style={styles.text}>
          🏙 {country.capital?.[0] || "No capital"}
        </p>

        <p style={styles.text}>
          🌍 {country.region}
        </p>

        <p style={styles.text}>
          👥 {country.population?.toLocaleString()}
        </p>

        <Link href={`/countries/${country.cca3}`} style={styles.button}>
          View Details →
        </Link>

      </div>

    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    overflow: "hidden",
    color: "white",
    transition: "0.25s",
    backdropFilter: "blur(10px)",
  },

  flagWrapper: {
    width: "100%",
    height: "140px",
    overflow: "hidden",
  },

  flag: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    padding: "14px",
  },

  title: {
    fontSize: "18px",
    marginBottom: "8px",
  },

  text: {
    fontSize: "13px",
    opacity: 0.7,
    margin: "4px 0",
  },

  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "white",
    color: "black",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "500",
  },
};