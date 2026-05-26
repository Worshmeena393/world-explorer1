import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div style={cardStyle}>

      <img
        src={country.flags?.png}
        alt={country.name?.common}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{country.name?.common}</h3>

      <p>🏙 Capital: {country.capital?.[0] || "No capital"}</p>
      <p>🌍 Region: {country.region}</p>
      <p>👥 Population: {country.population?.toLocaleString()}</p>

      <Link href={`/countries/${country.cca3}`} style={btn}>
        View Details
      </Link>

    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  padding: "15px",
  borderRadius: "12px",
  color: "white",
  boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
};

const btn = {
  display: "inline-block",
  marginTop: "10px",
  padding: "8px 12px",
  background: "white",
  color: "black",
  borderRadius: "8px",
  textDecoration: "none"
};