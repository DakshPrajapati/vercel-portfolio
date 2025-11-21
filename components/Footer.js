"use client";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} Daksh. All rights reserved.</p>
                <div className="social-links">
                    {/* Social icons will go here */}
                </div>
            </div>
            <style jsx>{`
        .footer {
          padding: 2rem 0;
          text-align: center;
          color: var(--muted);
          font-size: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 4rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
