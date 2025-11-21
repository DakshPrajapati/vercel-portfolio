"use client";
import Image from "next/image";

const About = () => {
  const skills = [
    "Python",
    "GO",
    "Machine Learning",
    "Cloud",
    "JavaScript (ES6+)",
    "React / Next.js",
    "Node.js",
    "TypeScript",
    "HTML5 / CSS3",
    "Git / GitHub",
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="bio">
            I am a passionate software developer with a keen eye for design. I
            strive to create software that is not only functional but also
            beautiful and intuitive. With a background in both design and
            engineering, I bridge the gap between aesthetics and technical
            implementation.
          </p>
          <p className="bio">
            When I&apos;m not coding, you can find me exploring new games and
            movies.
          </p>
          <div className="skills">
            <h3 className="skills-title">Key Skills</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <Image
              src="/avatar.png"
              alt="Daksh"
              width={400}
              height={400}
              className="avatar-image"
              priority
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background-color: var(--accent);
        }
        .bio {
          font-size: 1.1rem;
          color: var(--muted);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .skills {
          margin-top: 2rem;
        }
        .skills-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--foreground);
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          list-style: none;
        }
        .skill-item {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: var(--foreground);
          transition: all 0.3s ease;
        }
        .skill-item:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .image-wrapper {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 0 auto;
        }
        /* Global styles for the image component since styled-jsx doesn't apply to next/image directly easily without global or wrapper */
        :global(.avatar-image) {
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        .image-wrapper:hover :global(.avatar-image) {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about-image {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
