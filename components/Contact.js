"use client";
const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:contactdakshp@gmail.com" className="info-link">
                contactdakshp@gmail.com
              </a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <a href="tel:+12269616729" className="info-link">
                +1 226 961 6729
              </a>
            </div>
          </div>
          <div className="social-links">
            {/* Social icons would go here, using text links for now */}
            <a
              href="https://github.com/DakshPrajapati/"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daxprajapati/"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--foreground);
        }
        .contact-text {
          color: var(--muted);
          font-size: 1.1rem;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .contact-form {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-label {
          font-size: 0.9rem;
          color: var(--foreground);
        }
        .form-input {
          background-color: var(--secondary);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 0.8rem;
          color: var(--foreground);
          font-family: inherit;
          transition: border-color 0.3s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        .form-textarea {
          resize: vertical;
        }
        .submit-btn {
          align-self: flex-start;
          width: 100%;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          margin-top: 1rem;
        }
        .info-item {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          font-size: 1.1rem;
        }
        .info-label {
          color: var(--muted);
        }
        .info-link {
          color: var(--foreground);
          transition: color 0.3s ease;
        }
        .info-link:hover {
          color: var(--accent);
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
        .social-link {
          color: var(--muted);
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        .social-link:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Contact;
