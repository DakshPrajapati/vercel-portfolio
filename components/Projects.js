"use client";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "GO - movie app",
      description:
        "A web app made using GO with microservices and integrated ML systems using Python",
      tech: ["Python", "GO", "React"],
      link: "https://github.com/DakshPrajapati/MovieAPP---GO",
    },
    {
      title: "Traffic Monitoring",
      description:
        "Made real time traffic system using YOLO in Python. Can be used to detect vehicle movement",
      tech: ["Python"],
      link: "https://github.com/DakshPrajapati/trafficMonitoring",
    },
    {
      title: "GPT from scratch",
      description:
        "Built GPT from scratch on top of data of Chris Nolan movie data. Trained on local machine ",
      tech: ["Python", "PyTorch", "GPT"],
      link: "https://github.com/DakshPrajapati/GPT-fromScratch-",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={project.link} className="project-link">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
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
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background-color: var(--secondary);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-color: var(--accent);
        }
        .project-image {
          height: 200px;
          background-color: #2a2a2a;
          position: relative;
          overflow: hidden;
        }
        .placeholder-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .placeholder-overlay {
          opacity: 1;
        }
        .placeholder-overlay span {
          color: var(--accent);
          font-weight: 500;
          border: 1px solid var(--accent);
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }
        .project-description {
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-tag {
          font-size: 0.8rem;
          color: var(--accent);
          background-color: rgba(100, 255, 218, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
        }
        .project-link {
          display: inline-block;
          color: var(--foreground);
          font-weight: 500;
          font-size: 0.9rem;
        }
        .project-link:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Projects;
