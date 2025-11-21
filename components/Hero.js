"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container hero-container">
        <h1 className="headline">
          Hello, I&apos;m <span className="highlight">Daxx</span>.
          <br />A Digital Craftsman 🛠️
        </h1>
        <p className="tagline">
          Dev with understanding of ML who can build solutions. Currently
          focused on building accessible, human-centered products.
        </p>
        <div className="cta-group">
          <Link href="#projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link href="#contact" className="btn">
            Contact Me
          </Link>
        </div>
      </div>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 0; /* Override section padding for full height centering */
        }
        .headline {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }
        .highlight {
          color: var(--accent);
        }
        .tagline {
          font-size: 1.2rem;
          color: var(--muted);
          max-width: 600px;
          margin-bottom: 2.5rem;
        }
        .cta-group {
          display: flex;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .headline {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
