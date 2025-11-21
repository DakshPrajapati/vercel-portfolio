"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/">🚀🌕</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 2px;
        }
        .nav-list {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-link {
          font-size: 0.9rem;
          color: var(--foreground);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nav-link:hover {
          color: var(--accent);
        }
      `}</style>
    </header>
  );
};

export default Header;
