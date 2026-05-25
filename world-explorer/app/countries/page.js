import Link from "next/link";

async function getCountries() {
  const url = "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,region";

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return { countries: [], error: `API error: ${res.status}` };
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      return { countries: [], error: "API returned an unexpected response format." };
    }

    return { countries: data, error: null };
  } catch {
    return { countries: [], error: "Could not connect to the countries API." };
  }
}

export default async function CountriesPage() {
  const { countries, error } = await getCountries();

  return (
    <div>
      <h1>Countries</h1>
      {error ? <p>{error}</p> : null}

      <div className="grid">
        {countries.slice(0, 20).map((c) => (
          <div key={c.cca3} className="card">
            <img src={c.flags?.png} width="100" alt={`${c.name?.common} flag`} />
            <h3>{c.name?.common}</h3>
            <p>{c.capital?.[0] || "No capital data"}</p>
            <p>{c.region || "No region data"}</p>
            <Link href={`/countries/${c.cca3}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
