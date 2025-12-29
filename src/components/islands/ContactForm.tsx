/** @jsxImportSource preact */

interface Props {
  linkedin: string;
}

export default function ContactForm({ linkedin }: Props) {
  return (
    <div class="contact-section">
      <div class="contact-card">
        <div class="contact-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </div>
        <p class="contact-card__text">
          I'm always interested in discussing new opportunities, research collaborations, 
          or aerospace engineering challenges. Send me a message on LinkedIn—I typically 
          respond within 24-48 hours.
        </p>
        <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" class="contact-card__button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          Connect on LinkedIn
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

      <style>{`
        .contact-section {
          display: flex;
          justify-content: center;
        }
        
        .contact-card {
          background: var(--color-bg-elevated);
          padding: var(--space-10);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          text-align: center;
          max-width: 480px;
          width: 100%;
        }
        
        .contact-card__icon {
          color: var(--color-primary);
          margin-bottom: var(--space-5);
          display: flex;
          justify-content: center;
        }
        
        .contact-card__text {
          color: var(--color-text-muted);
          margin-bottom: var(--space-8);
          line-height: 1.7;
        }
        
        .contact-card__button {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4) var(--space-6);
          background: var(--color-primary);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .contact-card__button:hover {
          background: var(--color-primary-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
          color: white;
        }
      `}</style>
    </div>
  );
}
