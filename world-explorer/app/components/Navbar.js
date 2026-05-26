"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {

  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <nav className={`apple-nav ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <div className="logo">🌍 World Explorer</div>

      {/* DESKTOP LINKS */}
      <div className="nav-links desktop">

        <Link className={isActive("/") ? "active" : ""} href="/">Home</Link>
        <Link className={isActive("/countries") ? "active" : ""} href="/countries">Countries</Link>
        <Link className={isActive("/search") ? "active" : ""} href="/search">Search</Link>
        <Link className={isActive("/about") ? "active" : ""} href="/about">About</Link>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">

          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/countries">Countries</Link>
          <Link onClick={() => setOpen(false)} href="/search">Search</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>

        </div>
      )}

    </nav>
  );
}