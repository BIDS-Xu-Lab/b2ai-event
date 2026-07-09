import { useState } from 'react';
import { testimonials } from '../data/testimonials';

function initials(name: string): string {
  const parts = name.replace(/,.*$/, '').trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const second = parts[1]?.[0] ?? '';
  return (first + second).toUpperCase();
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const n = testimonials.length;
  const go = (dir: number) => setActive((cur) => (cur + dir + n) % n);
  const t = testimonials[active];

  return (
    <div className="tc">
      <div className="tc-quoteblock" key={active}>
        <span className="tc-quotemark" aria-hidden="true">&ldquo;</span>
        <blockquote className="tc-quote">{t.quote}</blockquote>
        <figcaption className="tc-attr">
          <span className="tc-avatar" aria-hidden="true">{initials(t.name)}</span>
          <span className="tc-who">
            <span className="tc-name">{t.name}</span>
            <span className="tc-aff">{t.affiliation}</span>
          </span>
        </figcaption>
      </div>

      <div className="tc-controls">
        <button className="tc-arrow" onClick={() => go(-1)} aria-label="Previous testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div className="tc-dots" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              className={`tc-dot ${i === active ? 'is-active' : ''}`}
              aria-label={`Testimonial ${i + 1}`}
              aria-selected={i === active}
              role="tab"
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button className="tc-arrow" onClick={() => go(1)} aria-label="Next testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      <style>{`
        .tc {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .tc-quoteblock {
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: tc-fade 0.45s ease;
        }
        @keyframes tc-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tc-quoteblock { animation: none; }
        }
        .tc-quotemark {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 5rem;
          line-height: 0.7;
          height: 2.4rem;
          background: linear-gradient(120deg, #2A2AA8 0%, #00B4D8 45%, #A8397E 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .tc-quote {
          font-size: clamp(1.05rem, 1.4vw, 1.3rem);
          line-height: 1.55;
          font-weight: 500;
          color: var(--b2ai-text);
          margin: 0.75rem auto 1.25rem;
          max-width: 70ch;
          text-wrap: pretty;
        }
        .tc-attr {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
        }
        .tc-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-base);
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #2A2AA8 0%, #6D3AB0 55%, #A8397E 100%);
          box-shadow: 0 6px 16px rgba(74, 42, 140, 0.3);
        }
        .tc-who { display: flex; flex-direction: column; text-align: left; gap: 1px; }
        .tc-name { font-weight: 700; color: var(--b2ai-ink); font-size: var(--text-base); }
        .tc-aff { font-size: 0.9375rem; color: var(--b2ai-text-muted); }

        .tc-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-top: 1.25rem;
        }
        .tc-arrow {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid var(--b2ai-border-strong);
          background: #fff;
          color: var(--b2ai-royal);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s;
          box-shadow: 0 2px 8px rgba(46, 26, 77, 0.06);
        }
        .tc-arrow:hover {
          background: var(--b2ai-royal);
          border-color: var(--b2ai-royal);
          color: #fff;
          transform: translateY(-1px);
        }
        .tc-dots { display: flex; gap: 0.5rem; }
        .tc-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          background: var(--b2ai-border-strong);
          cursor: pointer;
          padding: 0;
          transition: all 0.2s;
        }
        .tc-dot.is-active {
          width: 28px;
          border-radius: 5px;
          background: linear-gradient(120deg, #2A2AA8, #A8397E);
        }

        @media (max-width: 560px) {
          .tc-quoteblock { min-height: 0; }
          .tc-quote { font-size: var(--text-md); }
        }
      `}</style>
    </div>
  );
}
