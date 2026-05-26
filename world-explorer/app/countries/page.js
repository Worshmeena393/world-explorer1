import Link from "next/link";

export default async function CountriesPage() {

  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,region,population"
  );

  const data = await res.json();
  const countries = Array.isArray(data) ? data : [];

  return (
    <main className="page">

      <h1 className="title">🌍 Explore Countries</h1>

      <div className="grid">

        {countries.slice(0, 24).map((c) => (

          <Link key={c.cca3} href={`/countries/${c.cca3}`} className="card">

            <div className="flagWrapper">
              <img
                src={c.flags?.png || c.flags?.svg}
                alt={c.name?.common}
                className="flag"
              />
            </div>

            <div className="content">

              <h2>{c.name?.common}</h2>

              <p>📍 {c.region}</p>

              <p>🏙 {c.capital?.[0] || "No capital"}</p>

              <p>👥 {c.population?.toLocaleString()}</p>

              <span className="btn">View Details →</span>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}