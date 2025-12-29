/** @jsxImportSource preact */
import { useState } from 'preact/hooks';

interface Props {
  email: string;
  phone: string;
  linkedin: string;
}

export default function ContactForm({ email, phone, linkedin }: Props) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setStatus('sending');
    
    // For a static site, we'll use mailto as fallback
    // In production, you'd integrate with a form service like Formspree, Netlify Forms, etc.
    const mailtoLink = `mailto:${email}?subject=Contact from Portfolio&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setStatus('sent');
  };

  return (
    <div class="contact-section">
      <div class="contact-info">
        <h3 class="contact-info__title">Get in Touch</h3>
        <p class="contact-info__text">
          I'm always interested in discussing new opportunities, research collaborations, or aerospace engineering challenges.
        </p>
        
        <div class="contact-links">
          <a href={`mailto:${email}`} class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{email}</span>
          </a>
          
          <a href={`tel:${phone.replace(/\D/g, '')}`} class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>{phone}</span>
          </a>
          
          <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      <form class="contact-form" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            class="form-input"
            value={formData.name}
            onInput={(e) => setFormData({ ...formData, name: (e.target as HTMLInputElement).value })}
            required
          />
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            class="form-input"
            value={formData.email}
            onInput={(e) => setFormData({ ...formData, email: (e.target as HTMLInputElement).value })}
            required
          />
        </div>
        
        <div class="form-group">
          <label for="message" class="form-label">Message</label>
          <textarea
            id="message"
            class="form-input form-textarea"
            rows={5}
            value={formData.message}
            onInput={(e) => setFormData({ ...formData, message: (e.target as HTMLTextAreaElement).value })}
            required
          />
        </div>
        
        <button type="submit" class="form-button" disabled={status === 'sending'}>
          {status === 'sending' ? 'Opening email client...' : 'Send Message'}
        </button>
      </form>

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
        
        .contact-form {
          background: var(--color-bg-elevated);
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
        }
        
        .form-group {
          margin-bottom: var(--space-5);
        }
        
        .form-label {
          display: block;
          font-size: var(--text-sm);
          font-weight: 500;
          margin-bottom: var(--space-2);
          color: var(--color-text);
        }
        
        .form-input {
          width: 100%;
          padding: var(--space-3) var(--space-4);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: var(--color-bg);
          color: var(--color-text);
          font-size: var(--text-base);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px var(--color-primary-light);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .form-button {
          width: 100%;
          padding: var(--space-4);
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: var(--text-base);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .form-button:hover:not(:disabled) {
          background: var(--color-primary-hover);
          transform: translateY(-1px);
        }
        
        .form-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
