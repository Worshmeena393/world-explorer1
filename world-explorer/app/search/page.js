import CountrySearch from "../components/CountrySearch";

export default async function SearchPage() {

  const res = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-cache",
  });

  const data = await res.json();

  const countries = Array.isArray(data) ? data : [];

  return (
    <div>
      <h1>Search Countries</h1>
      <CountrySearch countries={countries} />
    </div>
  );
}