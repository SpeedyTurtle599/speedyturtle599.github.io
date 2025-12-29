/** @jsxImportSource preact */

interface Props {
  linkedin: string;
}

export default function ContactForm({ linkedin }: Props) {
  return (
    <div class="contact-section">
      <div class="contact-info">
        <h3 class="contact-info__title">Get in Touch</h3>
        <p class="contact-info__text">
          I'm always interested in discussing new opportunities, research collaborations, or aerospace engineering challenges. The best way to reach me is through LinkedIn.
        </p>
        
        <div class="contact-links">
          <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" class="contact-link contact-link--primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </div>
        <h4 class="contact-card__title">Let's Connect</h4>
        <p class="contact-card__text">
          Send me a connection request or message on LinkedIn. I typically respond within 24-48 hours.
        </p>
        <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" class="contact-card__button">
          View Profile
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

      <style>{`
        .contact-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: start;
        }
        
        @media (max-width: 768px) {
          .contact-section {
            grid-template-columns: 1fr;
          }
        }
        
        .contact-info__title {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-4);
        }
        
        .contact-info__text {
          color: var(--color-text-muted);
          margin-bottom: var(--space-6);
          line-height: 1.7;
        }
        
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        
        .contact-link {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--color-text);
          text-decoration: none;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        
        .contact-link:hover {
          background: var(--color-bg-alt);
          color: var(--color-primary);
        }
        
        .contact-link--primary {
          background: var(--color-primary);
          color: white;
          padding: var(--space-4);
          border-radius: var(--radius-lg);
          font-weight: 600;
        }
        
        .contact-link--primary:hover {
          background: var(--color-primary-hover);
          color: white;
        }
        
        .contact-card {
          background: var(--color-bg-elevated);
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          text-align: center;
        }
        
        .contact-card__icon {
          color: var(--color-primary);
          margin-bottom: var(--space-4);
        }
        
        .contact-card__title {
          font-size: var(--text-xl);
          margin-bottom: var(--space-3);
        }
        
        .contact-card__text {
          color: var(--color-text-muted);
          margin-bottom: var(--space-6);
          line-height: 1.6;
        }
        
        .contact-card__button {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5);
          background: var(--color-bg-alt);
          color: var(--color-text);
          border-radius: var(--radius-md);
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .contact-card__button:hover {
          background: var(--color-primary);
          color: white;
        }
      `}</style>
    </div>
  );
}
