import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🌍 World Explorer</h2>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/countries">Countries</Link>
        <Link href="/search">Search</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}