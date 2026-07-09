import { useCallback, useEffect, useState } from 'react';

const photos = [
  { src: '/photos/allhands-1.jpg', alt: 'Bridge2AI All-Hands attendees gathered at the meeting' },
  { src: '/photos/allhands-2.jpg', alt: 'Bridge2AI consortium members networking' },
  { src: '/photos/allhands-3.jpg', alt: 'Bridge2AI All-Hands session in progress' },
  { src: '/photos/allhands-4.jpg', alt: 'Bridge2AI attendees during a conference session' },
  { src: '/photos/allhands-5.jpg', alt: 'Bridge2AI team members at the All-Hands Meeting' },
];

export default function PhotoGallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((cur) => {
        if (cur === null) return cur;
        return (cur + dir + photos.length) % photos.length;
      }),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, go]);

  return (
    <div className="pg">
      <div className="pg-grid" data-reveal="stagger">
        {photos.map((p, i) => (
          <button
            key={p.src}
            className={`pg-thumb pg-thumb--${i}`}
            onClick={() => setOpen(i)}
            aria-label={`Enlarge photo ${i + 1}: ${p.alt}`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
            <span className="pg-expand" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
            </span>
            <span className="pg-caption">{p.alt}</span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="pg-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button className="pg-close" onClick={close} aria-label="Close">&times;</button>
          <button
            className="pg-nav pg-nav--prev"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous photo"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <figure className="pg-figure" onClick={(e) => e.stopPropagation()}>
            <img src={photos[open].src} alt={photos[open].alt} />
            <figcaption>{open + 1} / {photos.length}</figcaption>
          </figure>
          <button
            className="pg-nav pg-nav--next"
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next photo"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      )}

      <style>{`
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 200px;
          gap: 1.15rem;
        }
        .pg-thumb {
          position: relative;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          overflow: hidden;
          border-radius: 18px;
          background: var(--b2ai-border);
          box-shadow: 0 8px 22px rgba(46, 26, 77, 0.10);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .pg-thumb:hover {
          box-shadow: 0 18px 40px rgba(46, 26, 77, 0.2), 0 0 0 2px var(--b2ai-royal);
          transform: translateY(-4px);
        }
        .pg-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .pg-thumb:hover img { transform: scale(1.06); }
        .pg-caption {
          position: absolute;
          inset: auto 0 0 0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 2.25rem 1rem 0.85rem;
          background: linear-gradient(180deg, transparent 0%, rgba(10, 8, 20, 0.45) 45%, rgba(10, 8, 20, 0.85) 100%);
          color: #fff;
          font-size: var(--text-sm);
          font-weight: 600;
          line-height: 1.35;
          text-align: left;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .pg-thumb:hover .pg-caption,
        .pg-thumb:focus-visible .pg-caption {
          opacity: 1;
          transform: translateY(0);
        }
        .pg-expand {
          position: absolute;
          top: 0.7rem;
          right: 0.7rem;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: rgba(42, 42, 168, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .pg-thumb:hover .pg-expand,
        .pg-thumb:focus-visible .pg-expand {
          opacity: 1;
          transform: scale(1);
        }
        /* balanced 3-then-2 layout, all equal height */
        .pg-thumb--0 { grid-column: span 2; }
        .pg-thumb--1 { grid-column: span 2; }
        .pg-thumb--2 { grid-column: span 2; }
        .pg-thumb--3 { grid-column: span 3; }
        .pg-thumb--4 { grid-column: span 3; }

        .pg-lightbox {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(10, 8, 20, 0.92);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: pg-fade 0.18s ease;
        }
        @keyframes pg-fade { from { opacity: 0; } to { opacity: 1; } }
        .pg-figure {
          margin: 0;
          max-width: min(1100px, 92vw);
          max-height: 88vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .pg-figure img {
          max-width: 100%;
          max-height: 82vh;
          border-radius: 10px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
        }
        .pg-figure figcaption {
          color: rgba(255,255,255,0.75);
          font-size: var(--text-sm);
          font-variant-numeric: tabular-nums;
        }
        .pg-close {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.12);
          color: #fff;
          font-size: 1.8rem;
          line-height: 1;
          cursor: pointer;
          transition: background 0.15s;
        }
        .pg-close:hover { background: rgba(255,255,255,0.24); }
        .pg-nav {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.10);
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }
        .pg-nav:hover { background: var(--b2ai-cyan); color: #04222b; }
        .pg-nav--prev { position: absolute; left: 1rem; }
        .pg-nav--next { position: absolute; right: 1rem; }

        @media (max-width: 760px) {
          .pg-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 150px; gap: 0.75rem; }
          .pg-thumb--0 { grid-column: span 2; grid-row: span 2; }
          .pg-thumb--1, .pg-thumb--2, .pg-thumb--3, .pg-thumb--4 { grid-column: span 1; }
        }
      `}</style>
    </div>
  );
}
