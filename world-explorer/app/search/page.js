"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

export default function SearchPage() {

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(true);

  const boxRef = useRef(null);

  // 🌍 FETCH DATA
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,region"
        );

        const data = await res.json();
        setCountries(Array.isArray(data) ? data : []);

      } catch {
        setCountries([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // 🧠 AI NORMALIZER (CLEAN TEXT)
  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .replace(/[^a-z]/g, "");

  // 🧠 AI MATCH SCORE SYSTEM
  const scoreMatch = (name, query) => {
    const n = normalize(name);
    const q = normalize(query);

    if (n === q) return 100;        // exact match
    if (n.startsWith(q)) return 90; // prefix match
    if (n.includes(q)) return 70;   // partial match
    return 0;
  };

  // 🤖 AI SORTED RESULTS
  const results = useMemo(() => {

    if (!search.trim()) return [];

    return countries
      .map((c) => ({
        ...c,
        score: scoreMatch(c?.name?.common, search)
      }))
      .filter((c) => c.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

  }, [search, countries]);

  // 🤖 AI SUGGESTION (TOP MATCH)
  const suggestion = results.length > 0 ? results[0].name.common : null;

  // CLICK OUTSIDE
  useEffect(() => {
    const handler = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // KEYBOARD NAV
  const handleKey = (e) => {

    if (!open) return;

    if (e.key === "ArrowDown") {
      setActive((p) => (p < results.length - 1 ? p + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      setActive((p) => (p > 0 ? p - 1 : results.length - 1));
    }

    if (e.key === "Enter" && active >= 0) {
      const selected = results[active];
      if (selected) {
        window.location.href = `/countries/${selected.cca3}`;
      }
    }
  };

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>

      <h1>🌍 World Explorer Search</h1>

      {/* INPUT */}
      <div ref={boxRef} style={{ maxWidth: "600px", margin: "20px auto" }}>

        <input
          placeholder="Search countries..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKey}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "24px",
            border: "1px solid #334155",
            background: "#0f172a",
            color: "white"
          }}
        />

        {/* 🤖 AI SUGGESTION */}
        {search && suggestion && search !== suggestion && (
          <div style={{
            marginTop: "8px",
            fontSize: "14px",
            opacity: 0.7
          }}>
            🤖 Did you mean:{" "}
            <span
              onClick={() => setSearch(suggestion)}
              style={{ color: "#3b82f6", cursor: "pointer" }}
            >
              {suggestion}?
            </span>
          </div>
        )}

        {/* RESULTS */}
        {open && search && (
          <div style={{
            marginTop: "10px",
            background: "#111827",
            borderRadius: "14px",
            border: "1px solid #1f2937",
            overflow: "hidden"
          }}>

            {loading ? (
              <p style={{ padding: "10px" }}>Thinking...</p>
            ) : results.length > 0 ? (
              results.map((c, i) => (
                <Link
                  key={c.cca3}
                  href={`/countries/${c.cca3}`}
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px",
                    textAlign: "left",
                    background: i === active ? "#1f2937" : "transparent",
                    textDecoration: "none",
                    color: "white"
                  }}
                >

                  <img src={c.flags?.png} width="35" />

                  <div>
                    <div style={{ fontWeight: "bold" }}>
                      {c.name?.common}
                    </div>
                    <small style={{ opacity: 0.6 }}>
                      AI Score: {c.score}
                    </small>
                  </div>

                </Link>
              ))
            ) : (
              <div style={{ padding: "10px" }}>
               No results found — try another search
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}