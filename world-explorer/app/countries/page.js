export default async function CountriesPage() {

  const res = await fetch("https://restcountries.com/v3.1/all");

  console.log("STATUS:", res.status);

  const data = await res.json();

  console.log("TYPE:", typeof data);
  console.log("IS ARRAY:", Array.isArray(data));
  console.log("DATA SAMPLE:", data?.slice?.(0, 1));

  if (!Array.isArray(data)) {
    return <h1>API did NOT return array ❌</h1>;
  }

  const countries = data;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Countries Working ✔</h1>

      {countries.slice(0, 10).map((c) => (
        <div key={c.cca3}>
          <img src={c.flags?.png} width="80" />
          <p>{c.name?.common}</p>
        </div>
      ))}
    </div>
  );
}