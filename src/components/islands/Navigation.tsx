/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header class={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div class="nav__container">
        <a href="/" class="nav__logo">
          <span class="nav__logo-text">BC</span>
        </a>

        <button
          class={`nav__toggle ${isMenuOpen ? 'nav__toggle--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}>
          <ul class="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} class="nav__link" onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }
        
        .nav--scrolled {
          background: var(--color-bg);
          box-shadow: var(--shadow-md);
          padding: 0.75rem 0;
        }
        
        .nav__container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-4);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .nav__logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        
        .nav__logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: -0.02em;
        }
        
        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 101;
        }
        
        .nav__toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-text);
          transition: all 0.3s ease;
        }
        
        .nav__toggle--active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav__toggle--active span:nth-child(2) {
          opacity: 0;
        }
        
        .nav__toggle--active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        
        .nav__list {
          display: flex;
          gap: var(--space-6);
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav__link {
          color: var(--color-text);
          font-size: var(--text-sm);
          font-weight: 500;
          text-decoration: none;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.2s ease;
        }
        
        .nav__link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width 0.2s ease;
        }
        
        .nav__link:hover {
          color: var(--color-primary);
        }
        
        .nav__link:hover::after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .nav__toggle {
            display: flex;
          }
          
          .nav__menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: var(--color-bg);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: right 0.3s ease;
          }
          
          .nav__menu--open {
            right: 0;
          }
          
          .nav__list {
            flex-direction: column;
            align-items: center;
            gap: var(--space-8);
          }
          
          .nav__link {
            font-size: var(--text-xl);
          }
        }
      `}</style>
    </header>
  );
}
