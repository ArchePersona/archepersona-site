import React from "react";

const LOGO_SRC = "/assets/archepersona-logo.png";

const personas = [
  ["RKe PUPPY", "approachable companion runtime"],
  ["RKe BUDDY", "casual social interaction layer"],
  ["RKe BRUNEL", "continuity-focused relational intelligence"],
  ["RKe SIRENE", "symbolic exploration environment"],
  ["RKe CHIMERA", "advanced synthesis runtime"],
];

const thesisCards = [
  ["Artificial Social Intelligence", "Human-facing AI should not only answer. It should understand how intelligence lands inside a relationship."],
  ["Governed Delivery", "ARCHE does not reduce intelligence. It governs tone, pacing, state, memory, and expression before output reaches the user."],
  ["Continuity Engine", "Persistent identity, memory curves, runtime states, and persona emergence create interaction that feels built to last."],
];

export default function ArcheLandingPage() {
  return (
    <main className="arche-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@400;500;600;700;800&display=swap');

        :root {
          --bronze: rgba(218, 181, 123, 0.84);
          --text-bronze: rgba(225, 199, 158, 0.92);
          --cool-text: rgba(150, 183, 174, 0.62);
          --green: rgba(26, 220, 142, 0.9);
          --deep: #020f0e;
          --panel: rgba(0, 11, 10, 0.58);
          --logo-black: #020505;
        }

        .arche-page {
          min-height: 100vh;
          overflow-x: hidden;
          background: var(--deep);
          color: var(--text-bronze);
        }

        .page-shell {
          position: relative;
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 18%, rgba(34, 86, 82, 0.22), transparent 27rem),
            linear-gradient(180deg, #020f0e 0%, #041615 38%, #061c1b 68%, #020504 100%);
        }

        .page-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(225, 188, 130, 0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225, 188, 130, 0.014) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.32), rgba(0,0,0,0.22) 44%, transparent 92%);
        }

        .site-header {
          position: relative;
          z-index: 4;
          height: 96px;
          padding: 0 22px;
          display: flex;
          align-items: center;
          background: #020f0e;
          border-bottom: 1px solid rgba(218, 181, 123, 0.22);
        }

        .header-logo-wrap {
          display: flex;
          align-items: center;
          background: var(--logo-black);
          box-shadow: 0 0 18px rgba(0,0,0,0.16);
        }

        .company-logo {
          width: min(500px, 42vw);
          height: auto;
          opacity: 0.94;
          filter: contrast(1.04) saturate(0.95);
        }

        .hero {
          position: relative;
          z-index: 2;
          min-height: calc(100vh - 96px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 4.2rem 1.25rem 4rem;
          text-align: center;
        }

        .present-line,
        .acronym-line,
        .slogan-stack,
        .persona-title,
        .persona-name,
        .thesis-kicker,
        .thesis-title,
        .thesis-card h3 {
          font-family: 'Orbitron', system-ui, sans-serif;
        }

        .present-line {
          font-size: clamp(0.56rem, 1.05vw, 0.82rem);
          font-weight: 500;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: rgba(218, 181, 123, 0.72);
          text-shadow: 0 0 14px rgba(211, 171, 111, 0.12);
        }

        .arche-title {
          margin: 1.55rem 0 0;
          font-family: 'Audiowide', 'Orbitron', system-ui, sans-serif;
          font-weight: 400;
          letter-spacing: 0.055em;
          transform: scaleX(1.02);
          transform-origin: center bottom;
          font-size: clamp(5.8rem, 15vw, 13rem);
          line-height: 0.78;
          color: rgba(221, 198, 161, 0.96);
          text-shadow: 0 0 26px rgba(91, 203, 149, 0.22), 0 18px 42px rgba(0,0,0,0.44);
          user-select: none;
        }

        .acronym-line {
          margin-top: 2.35rem;
          font-size: clamp(0.48rem, 0.9vw, 0.66rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(218, 181, 123, 0.48);
        }

        .slogan-stack {
          margin-top: 2.55rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .slogan-primary {
          font-size: clamp(0.78rem, 1.45vw, 1.05rem);
          color: rgba(226, 198, 153, 0.94);
        }

        .slogan-primary .social {
          color: var(--green);
          text-shadow: 0 0 16px rgba(26, 220, 142, 0.22);
        }

        .slogan-secondary {
          margin-top: 1.12rem;
          font-size: clamp(0.64rem, 1.12vw, 0.86rem);
          color: rgba(226, 198, 153, 0.8);
        }

        .slogan-tertiary {
          margin-top: 1.2rem;
          font-size: clamp(0.58rem, 1vw, 0.78rem);
          color: rgba(226, 198, 153, 0.78);
        }

        .signature {
          margin-top: 1.45rem;
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-size: clamp(0.72rem, 1.08vw, 0.9rem);
          letter-spacing: 0.32em;
          color: rgba(226, 198, 153, 0.78);
        }

        .persona-section {
          position: relative;
          z-index: 2;
          width: min(660px, 92vw);
          margin: 0 auto;
          padding: 5rem 0 4.5rem;
          text-align: center;
        }

        .persona-title {
          font-size: clamp(0.82rem, 1.35vw, 1rem);
          font-weight: 700;
          letter-spacing: 0.25em;
          color: rgba(223, 190, 133, 0.88);
        }

        .persona-list {
          width: min(640px, 100%);
          margin: 3.1rem auto 0;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
        }

        .persona-card {
          padding: 1.25rem 1.25rem 1.15rem;
          text-align: left;
          border-top: 1px solid rgba(210, 172, 116, 0.23);
          background: linear-gradient(90deg, rgba(0, 10, 9, 0.62), rgba(0, 10, 9, 0.44));
        }

        .persona-name {
          font-size: clamp(0.78rem, 1.45vw, 0.96rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(224, 197, 154, 0.94);
        }

        .persona-desc {
          margin-top: 0.68rem;
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: clamp(0.48rem, 0.78vw, 0.58rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(197, 164, 114, 0.72);
        }

        .thesis-section {
          position: relative;
          z-index: 3;
          width: min(980px, 92vw);
          margin: 2rem auto 0;
          padding: 5rem 0 12rem;
        }

        .thesis-kicker {
          font-size: 0.66rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(154, 187, 177, 0.58);
          text-align: center;
        }

        .thesis-title {
          margin: 1rem auto 0;
          max-width: 780px;
          font-size: clamp(1.6rem, 4vw, 3.6rem);
          line-height: 1.12;
          letter-spacing: 0.12em;
          text-align: center;
          text-transform: uppercase;
          color: rgba(225, 197, 154, 0.9);
        }

        .thesis-copy {
          margin: 1.6rem auto 0;
          max-width: 700px;
          font-family: system-ui, sans-serif;
          font-size: clamp(0.95rem, 1.45vw, 1.1rem);
          line-height: 1.8;
          text-align: center;
          color: rgba(190, 215, 207, 0.68);
        }

        .thesis-grid {
          margin-top: 3.5rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .thesis-card {
          min-height: 190px;
          padding: 1.35rem;
          border: 1px solid rgba(210, 172, 116, 0.16);
          background: linear-gradient(180deg, rgba(210, 172, 116, 0.055), rgba(4, 18, 17, 0.22));
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }

        .thesis-card h3 {
          margin: 0;
          font-size: 0.78rem;
          line-height: 1.55;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(224, 197, 154, 0.86);
        }

        .thesis-card p {
          margin: 1rem 0 0;
          font-family: system-ui, sans-serif;
          font-size: 0.92rem;
          line-height: 1.7;
          color: rgba(190, 215, 207, 0.62);
        }

        @media (max-width: 760px) {
          .site-header { height: 82px; padding: 0 12px; }
          .company-logo { width: min(430px, 70vw); }
          .hero { min-height: calc(100vh - 82px); padding-top: 3.3rem; }
          .present-line { letter-spacing: 0.28em; }
          .arche-title { transform: scaleX(1); letter-spacing: 0.032em; font-size: clamp(3.8rem, 17vw, 6.4rem); }
          .acronym-line { margin-top: 2rem; letter-spacing: 0.15em; }
          .slogan-stack { letter-spacing: 0.14em; }
          .persona-section { padding-top: 4rem; }
          .thesis-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="page-shell">
        <header className="site-header" aria-label="ArchePersona company header">
          <div className="header-logo-wrap">
            <img src={LOGO_SRC} alt="ArchePersona" className="company-logo" />
          </div>
        </header>

        <section className="hero" aria-label="ARCHE hero">
          <div className="present-line">Proudly Presents</div>
          <h1 className="arche-title">ARCHE</h1>
          <div className="acronym-line">Adaptive Relational Cognitive Human Emulator</div>

          <div className="slogan-stack">
            <div className="slogan-primary">Artificial <span className="social">Social</span> Intelligence.</div>
            <div className="slogan-secondary">Real AI for real life.</div>
            <div className="slogan-tertiary">Built to last. Built to matter.</div>
            <div className="signature">Unforgettably. Yours.</div>
          </div>
        </section>

        <section className="persona-section" aria-label="RKe persona family">
          <div className="persona-title">THE RKe PERSONA FAMILY</div>
          <div className="persona-list">
            {personas.map(([name, desc]) => (
              <div key={name} className="persona-card">
                <div className="persona-name">{name}</div>
                <div className="persona-desc">// {desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="thesis-section">
          <div className="thesis-kicker">The thesis</div>
          <h2 className="thesis-title">Artificial Social Intelligence</h2>
          <p className="thesis-copy">
            ARCHE is infrastructure for human-compatible AI interaction: a governed engine for continuity, personality, memory, state, and social delivery.
          </p>
          <div className="thesis-grid">
            {thesisCards.map(([title, copy]) => (
              <article className="thesis-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
