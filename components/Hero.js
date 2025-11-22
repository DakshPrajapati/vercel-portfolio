"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container hero-container">
        {/* Glassmorphic box for text */}
        <div className="text-box">
          <h1 className="headline">
            Hello, I&apos;m <span className="highlight">Dax</span>.
            <br />A Digital Craftsman 👾
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
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 0;
          /* I removed the background color here so your animations will show */
        }

        .text-box {
          /* GLASSMORPHISM STYLES */
          background: rgba(0, 0, 0, 0.86); /* Semi-transparent black */
          backdrop-filter: blur(46px); /* The blur effect */
          -webkit-backdrop-filter: blur(46px); /* Safari support */
          border: 1px solid rgba(255, 255, 255, 0); /* Subtle glass edge */
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0); /* Depth shadow */

          padding: 2.5rem;
          border-radius: 1rem;
        }

        .headline {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
          color: #ffffff;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Helps text pop against glass */
        }

        .highlight {
          color: var(--accent);
        }

        .tagline {
          font-size: 1.2rem;
          color: #ffffff;
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
          .text-box {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
