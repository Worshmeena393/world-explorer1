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

  // 🧠 CLEAN TEXT
  const normalize = (str) =>
    (str || "").toLowerCase().replace(/[^a-z]/g, "");

  // 🧠 SMART SCORE SYSTEM
  const scoreMatch = (name, query) => {
    const n = normalize(name);
    const q = normalize(query);

    if (!q) return 0;
    if (n === q) return 100;
    if (n.startsWith(q)) return 90;
    if (n.includes(q)) return 70;
    return 0;
  };

  // 🤖 FILTERED RESULTS
  const results = useMemo(() => {
    if (!search.trim()) return [];

    return countries
      .map((c) => ({
        ...c,
        score: scoreMatch(c?.name?.common, search),
      }))
      .filter((c) => c.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [search, countries]);

  const suggestion = results[0]?.name?.common || null;

  // CLICK OUTSIDE CLOSE
  useEffect(() => {
    const handler = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
        setActive(-1);
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

    if (e.key === "Enter") {
      const selected = results[active];
      if (selected) {
        window.location.href = `/countries/${selected.cca3}`;
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        🌍 Explore Countries
      </h1>

      <p style={{ opacity: 0.6, marginBottom: "30px" }}>
        Fast search powered by smart relevance
      </p>

      {/* SEARCH BOX */}
      <div
        ref={boxRef}
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          position: "relative",
        }}
      >
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
            padding: "14px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "white",
            outline: "none",
            fontSize: "16px",
          }}
        />

        {/* SUGGESTION */}
        {search && suggestion && search !== suggestion && (
          <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
            🤖 Did you mean{" "}
            <span
              onClick={() => setSearch(suggestion)}
              style={{ color: "#60a5fa", cursor: "pointer" }}
            >
              {suggestion}?
            </span>
          </div>
        )}

        {/* DROPDOWN */}
        {open && search && (
          <div
            style={{
              marginTop: "15px",
              background: "rgba(17,24,39,0.95)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
            }}
          >
            {loading ? (
              <p style={{ padding: "15px" }}>Loading countries...</p>
            ) : results.length > 0 ? (
              results.map((c, i) => (
                <Link
                  key={c.cca3}
                  href={`/countries/${c.cca3}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    textAlign: "left",
                    background:
                      i === active
                        ? "rgba(255,255,255,0.08)"
                        : "transparent",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <img
                    src={c.flags?.png}
                    width="38"
                    style={{ borderRadius: "6px" }}
                  />

                  <div>
                    <div style={{ fontWeight: "600" }}>
                      {c.name?.common}
                    </div>
                    <small style={{ opacity: 0.6 }}>
                      Score: {c.score}
                    </small>
                  </div>
                </Link>
              ))
            ) : (
              <div style={{ padding: "15px", opacity: 0.7 }}>
                No countries found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}