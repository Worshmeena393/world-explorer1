import Link from "next/link";

export default async function CountriesPage() {

  const res = await fetch("https://restcountries.com/v3.1/all");

  const data = await res.json();

  console.log("DATA LENGTH:", data.length);

  const countries = Array.isArray(data) ? data : [];

  return (
    <div>
      <h1>Countries 🌍</h1>

      <div className="grid">
        {countries.slice(0, 20).map((c) => (
          <div key={c.cca3} className="card">

            <img src={c.flags?.png} width="100" />

            <h3>{c.name?.common}</h3>

            <p>{c.capital?.[0]}</p>
            <p>{c.region}</p>

            <Link href={`/countries/${c.cca3}`}>
              View Details
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}