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
        }
        body { margin:0; }
        .arche-page {
          min-height: 100vh;
          overflow-x: hidden;
          background: var(--deep);
          color: var(--text-bronze);
          font-family: system-ui, sans-serif;
        }
        .page-shell {
          position: relative;
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 18%, rgba(34, 86, 82, 0.22), transparent 27rem),
            linear-gradient(180deg, #020f0e 0%, #041615 38%, #061c1b 68%, #020504 100%);
        }
        .hero {
          min-height: 100vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          padding:2rem;
        }
        .present-line,.acronym-line,.persona-title,.thesis-kicker,.thesis-title,.thesis-card h3 {
          font-family: 'Orbitron', sans-serif;
        }
        .present-line {
          font-size:0.72rem;
          letter-spacing:0.32em;
          text-transform:uppercase;
          color:rgba(218,181,123,0.72);
        }
        .arche-title {
          margin: 1.2rem 0 0;
          font-family: 'Audiowide', sans-serif;
          font-size: clamp(4rem, 14vw, 7rem);
          color: rgba(221, 198, 161, 0.96);
          line-height:1;
          letter-spacing:0.05em;
          text-shadow: 0 0 26px rgba(91,203,149,0.22);
        }
        .acronym-line {
          margin-top:0.4rem;
          font-size:0.58rem;
          letter-spacing:0.14em;
          text-transform:uppercase;
          color:rgba(218,181,123,0.6);
        }
      `}</style>
      <section className="page-shell">
        <section className="hero">
          <div className="present-line">Behavioral Operating System</div>
          <h1 className="arche-title">ARCHE</h1>
          <div className="acronym-line">Adaptive – Relational – Cognitive – Human – Emulator</div>
        </section>
      </section>
    </main>
  );
}
