export default async function CountryDetailsPage({ params }) {
  const { code } = await params;

  const countryCode = code?.toUpperCase();

  if (!countryCode) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Invalid country code</h1>
      </div>
    );
  }

  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    if (!res.ok) {
      return (
        <div style={{ padding: "40px" }}>
          <h1>Country not found</h1>
        </div>
      );
    }

    const data = await res.json();
    const country = data[0];

    return (
      <div style={styles.page}>
        <img
          src={country.flags?.png || country.flags?.svg}
          style={styles.flag}
          alt={country.name?.common}
        />

        <h1>{country.name?.common}</h1>

        <p>📍 Region: {country.region}</p>
        <p>🏙 Capital: {country.capital?.[0]}</p>
        <p>👥 Population: {country.population?.toLocaleString()}</p>
        <p>📏 Area: {country.area?.toLocaleString()} km²</p>
        <p>🕒 Timezones: {country.timezones?.join(", ")}</p>
      </div>
    );
  } catch (err) {
    return <h1>Error loading country</h1>;
  }
}

const styles = {
  page: {
    padding: "40px",
    color: "white",
  },
  flag: {
    width: "200px",
    borderRadius: "10px",
  },
};