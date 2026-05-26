"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries = [] }) {
  const [search, setSearch] = useState("");

  // 🧠 SMART FILTER (optimized + case safe)
  const filtered = useMemo(() => {
    if (!search.trim()) return [];

    return countries
      .filter((c) =>
        c?.name?.common?.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 20);
  }, [search, countries]);

  return (
    <div style={styles.wrapper}>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      {/* RESULTS */}
      <div style={styles.results}>

        {search && filtered.length === 0 && (
          <p style={styles.noResult}>No countries found</p>
        )}

        {filtered.map((country) => (
          <Link
            key={country.cca3}
            href={`/countries/${country.cca3}`}
            style={styles.card}
          >

            <img
              src={country.flags?.png}
              alt={country.name?.common}
              style={styles.flag}
            />

            <div>
              <h3 style={styles.name}>
                {country.name?.common}
              </h3>

              <p style={styles.meta}>
                {country.capital?.[0] || "No capital"} • {country.region}
              </p>

            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}

/* 🎨 APPLE / GOOGLE STYLE SEARCH UI */
const styles = {
  wrapper: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
  },

  input: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    outline: "none",
    fontSize: "16px",
    backdropFilter: "blur(10px)",
  },

  results: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    borderRadius: "14px",
    textDecoration: "none",
    color: "white",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.2s",
  },

  flag: {
    width: "40px",
    height: "30px",
    borderRadius: "6px",
    objectFit: "cover",
  },

  name: {
    margin: 0,
    fontSize: "15px",
  },

  meta: {
    margin: 0,
    fontSize: "12px",
    opacity: 0.6,
  },

  noResult: {
    opacity: 0.6,
    marginTop: "10px",
  },
};