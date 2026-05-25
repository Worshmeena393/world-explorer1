"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries = [] }) {

  const [search, setSearch] = useState("");

  const filtered = countries.filter((c) =>
    c?.name?.common?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filtered.slice(0, 20).map((country) => (
          <div key={country.cca3}>
            <img src={country.flags.png} width="100" />
            <h3>{country.name.common}</h3>

            <Link href={`/countries/${country.cca3}`}>
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}