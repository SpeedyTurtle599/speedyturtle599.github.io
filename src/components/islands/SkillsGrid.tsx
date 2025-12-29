/** @jsxImportSource preact */
import { useState } from 'preact/hooks';

interface Skill {
  label: string;
  details: string;
}

interface Props {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div class="skills-grid">
      {skills.map((skill, index) => (
        <div
          key={skill.label}
          class={`skill-card ${activeIndex === index ? 'skill-card--active' : ''}`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveIndex(activeIndex === index ? null : index);
            }
          }}
          tabIndex={0}
          role="button"
          aria-expanded={activeIndex === index}
        >
          <h3 class="skill-card__title">{skill.label}</h3>
          <div class="skill-card__details-wrapper">
            <p class="skill-card__details">{skill.details}</p>
            <div class="skill-card__fade"></div>
          </div>
          <span class="skill-card__expand-hint">
            {activeIndex === index ? 'Show less' : 'Show more'}
          </span>
          <span class="skill-card__indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
      ))}
      
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }
        
        .skill-card {
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .skill-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
        }
        
        .skill-card--active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
        }
        
        .skill-card__title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--space-2);
          padding-right: var(--space-8);
        }
        
        .skill-card__details-wrapper {
          position: relative;
        }
        
        .skill-card__details {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.6;
          max-height: 3.2em;
          overflow: hidden;
          transition: max-height 0.3s ease;
          margin: 0;
        }
        
        .skill-card__fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1.6em;
          background: linear-gradient(transparent, var(--color-bg-elevated));
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        
        .skill-card--active .skill-card__details {
          max-height: 500px;
        }
        
        .skill-card--active .skill-card__fade {
          opacity: 0;
        }
        
        .skill-card--active .skill-card__details-wrapper .skill-card__fade {
          background: linear-gradient(transparent, var(--color-primary-light));
        }
        
        .skill-card__expand-hint {
          display: block;
          font-size: var(--text-xs);
          color: var(--color-primary);
          font-weight: 500;
          margin-top: var(--space-3);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .skill-card__indicator {
          position: absolute;
          top: var(--space-5);
          right: var(--space-5);
          color: var(--color-text-muted);
          transition: transform 0.3s ease;
        }
        
        .skill-card--active .skill-card__indicator {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
