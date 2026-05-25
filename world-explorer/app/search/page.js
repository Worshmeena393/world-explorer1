import CountrySearch from "../components/CountrySearch";

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

export default async function SearchPage() {
  const { countries, error } = await getCountries();

  return (
    <div>
      <h1>Search Countries</h1>
      {error ? <p>{error}</p> : null}
      <CountrySearch countries={countries} />
    </div>
  );
}
