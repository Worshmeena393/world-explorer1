"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 📜 scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const linkStyle = (active) => ({
    color: active ? "white" : "rgba(255,255,255,0.7)",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "10px",
    background: active ? "rgba(255,255,255,0.08)" : "transparent",
    transition: "0.3s",
  });

  return (
    <nav style={styles.nav(scrolled)}>

      {/* LOGO */}
      <div style={styles.logo}>
        🌍 World Explorer
      </div>

      {/* DESKTOP LINKS */}
      <div style={styles.desktop}>

        <Link href="/" style={linkStyle(isActive("/"))}>Home</Link>
        <Link href="/countries" style={linkStyle(isActive("/countries"))}>Countries</Link>
        <Link href="/search" style={linkStyle(isActive("/search"))}>Search</Link>
        <Link href="/about" style={linkStyle(isActive("/about"))}>About</Link>

      </div>

      {/* MOBILE BUTTON */}
      <button style={styles.menuBtn} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div style={styles.mobileMenu}>

          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/countries">Countries</Link>
          <Link onClick={() => setOpen(false)} href="/search">Search</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>

        </div>
      )}

    </nav>
  );
}

/* 🎨 APPLE STYLE NAVBAR */
const styles = {
  nav: (scrolled) => ({
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    background: scrolled
      ? "rgba(15, 23, 42, 0.85)"
      : "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    transition: "0.3s",
  }),

  logo: {
    fontWeight: "600",
    fontSize: "16px",
  },

  desktop: {
    display: "flex",
    gap: "10px",
  },

  menuBtn: {
    display: "none",
    fontSize: "20px",
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "absolute",
    top: "60px",
    right: "20px",
    background: "rgba(17,24,39,0.95)",
    padding: "12px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
  },
};