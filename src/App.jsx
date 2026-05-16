import React from "react";

const LOGO_SRC = "/assets/archepersona-logo.png";

const personas = [
  ["RKe PUPPY", "approachable companion runtime"],
  ["RKe BUDDY", "casual social interaction layer"],
  ["RKe BRUNEL", "continuity-focused relational intelligence"],
  ["RKe SIRENE", "symbolic exploration environment"],
  ["RKe CHIMERA", "advanced synthesis runtime"],
];

export default function ArcheLandingPage() {
  return (
    <main className="arche-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@400;500;600;700;800&display=swap');

        :root {
          --bronze: rgba(210, 172, 116, 0.82);
          --bronze-soft: rgba(210, 172, 116, 0.43);
          --bronze-faint: rgba(210, 172, 116, 0.18);
          --text-bronze: rgba(224, 197, 154, 0.92);
          --cool-text: rgba(154, 187, 177, 0.62);
          --deep: #061313;
        }

        .arche-page {
          min-height: 100vh;
          overflow: hidden;
          background: var(--deep);
          color: var(--text-bronze);
        }

        .page-shell {
          position: relative;
          min-height: 205vh;
          padding: 2.4rem 1.25rem 0;
          background:
            radial-gradient(circle at 50% 4%, rgba(96, 157, 157, 0.34), transparent 25rem),
            radial-gradient(circle at 50% 32%, rgba(61, 115, 112, 0.18), transparent 38rem),
            linear-gradient(180deg, #143f42 0%, #103337 24%, #0b2528 49%, #061513 73%, #020504 100%);
        }

        .page-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(225, 188, 130, 0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225, 188, 130, 0.026) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.84), rgba(0,0,0,0.34) 56%, transparent 93%);
        }

        .page-shell::after {
          content: "";
          position: absolute;
          left: -12vw;
          right: -12vw;
          bottom: -3.5rem;
          height: 42rem;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 50% 44%, rgba(76, 226, 142, 0.32), transparent 33%),
            radial-gradient(ellipse at 50% 70%, rgba(5, 71, 39, 0.7), transparent 43%),
            linear-gradient(180deg, transparent, rgba(5, 36, 22, 0.7) 48%, #010302 100%);
        }

        .hero-stack {
          position: relative;
          z-index: 2;
          width: min(1180px, 100%);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .company-logo {
          width: min(760px, 86vw);
          height: auto;
          margin-top: 0.15rem;
          opacity: 0.94;
          filter: drop-shadow(0 0 18px rgba(213, 179, 130, 0.12));
        }

        .present-line {
          margin-top: 2.65rem;
          margin-bottom: 1.25rem;
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: clamp(0.54rem, 1.05vw, 0.82rem);
          font-weight: 500;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: rgba(216, 183, 127, 0.54);
          text-shadow: 0 0 14px rgba(211, 171, 111, 0.12);
        }

        .arche-title {
          margin: 0 0 -0.2em;
          font-family: 'Audiowide', 'Orbitron', system-ui, sans-serif;
          font-weight: 400;
          letter-spacing: 0.055em;
          transform: scaleX(1.04);
          transform-origin: center bottom;
          font-size: clamp(4.8rem, 15.1vw, 13rem);
          line-height: 0.78;
          color: rgba(221, 198, 161, 0.96);
          text-shadow:
            0 0 34px rgba(211, 171, 111, 0.16),
            0 22px 48px rgba(0,0,0,0.44);
          user-select: none;
        }

        .bridge-wrap {
          position: relative;
          width: min(1120px, 100%);
          margin-top: -2.35rem;
        }

        .bridge-svg {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .systems-type {
          font-family: 'Orbitron', system-ui, sans-serif;
          letter-spacing: 0.18em;
        }

        .bridge-line {
          stroke: var(--bronze);
          stroke-width: 2;
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .bridge-soft {
          stroke: var(--bronze-soft);
          stroke-width: 1.16;
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .deck-shadow {
          stroke: rgba(7, 22, 21, 0.72);
          stroke-width: 10;
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .pillar-faint {
          stroke: rgba(210, 172, 116, 0.25);
          stroke-width: 1;
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .pillar-rail {
          stroke-width: 1.55;
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .persona-section {
          position: absolute;
          z-index: 3;
          left: 50%;
          top: 24%;
          width: min(650px, 76vw);
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .persona-title {
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: clamp(0.72rem, 1.45vw, 1.02rem);
          font-weight: 700;
          letter-spacing: 0.23em;
          color: rgba(223, 190, 133, 0.86);
        }

        .persona-subtitle {
          margin-top: 0.9rem;
          max-width: 38rem;
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: clamp(0.52rem, 0.95vw, 0.68rem);
          line-height: 1.8;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          color: rgba(154, 187, 177, 0.58);
        }

        .persona-list {
          width: min(440px, 100%);
          margin-top: 3.15rem;
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .persona-card {
          padding: 1rem 1rem 0.05rem;
          font-family: 'Orbitron', system-ui, sans-serif;
          border-top: 1px solid rgba(210, 172, 116, 0.23);
          background: linear-gradient(90deg, transparent, rgba(210, 172, 116, 0.038), transparent);
        }

        .persona-name {
          font-size: clamp(0.78rem, 1.45vw, 0.96rem);
          font-weight: 700;
          letter-spacing: 0.24em;
          color: rgba(224, 197, 154, 0.92);
        }

        .persona-desc {
          margin-top: 0.78rem;
          font-size: clamp(0.56rem, 1vw, 0.68rem);
          letter-spacing: 0.11em;
          color: rgba(148, 175, 166, 0.75);
        }

        .depth-0 { opacity: 0.94; }
        .depth-1 { opacity: 0.84; }
        .depth-2 { opacity: 0.72; }
        .depth-3 { opacity: 0.58; }
        .depth-4 { opacity: 0.43; }

        .basement-glow {
          position: absolute;
          z-index: 1;
          left: 50%;
          bottom: 7.5rem;
          width: min(980px, 88vw);
          height: 10rem;
          transform: translateX(-50%);
          border-radius: 999px;
          background: rgba(58, 223, 126, 0.09);
          filter: blur(46px);
        }

        .basement-label {
          position: absolute;
          z-index: 2;
          left: 50%;
          bottom: 5.5rem;
          transform: translateX(-50%);
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: 0.54rem;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: rgba(178, 255, 210, 0.17);
          white-space: nowrap;
        }

        @media (max-width: 760px) {
          .page-shell {
            min-height: 178vh;
            padding-top: 1.6rem;
          }

          .company-logo {
            width: min(520px, 88vw);
          }

          .present-line {
            margin-top: 2rem;
            margin-bottom: 1rem;
            letter-spacing: 0.28em;
          }

          .arche-title {
            transform: scaleX(1);
            letter-spacing: 0.032em;
            font-size: clamp(3.6rem, 17vw, 6.4rem);
          }

          .bridge-wrap {
            width: 118vw;
            margin-top: -1.45rem;
          }

          .persona-section {
            top: 24.5%;
            width: min(560px, 74vw);
          }

          .persona-list {
            margin-top: 2.1rem;
            gap: 1.15rem;
          }
        }
      `}</style>

      <section className="page-shell">
        <div className="hero-stack">
          <img src={LOGO_SRC} alt="ArchePersona" className="company-logo" />
          <div className="present-line">Proudly Presents</div>
          <h1 className="arche-title">ARCHE</h1>

          <div className="bridge-wrap">
            <svg
              viewBox="0 0 1200 900"
              className="bridge-svg"
              role="img"
              aria-label="ARCHE true arch bridge system"
            >
              <defs>
                <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="pillarFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(210,172,116,0.54)" />
                  <stop offset="66%" stopColor="rgba(210,172,116,0.31)" />
                  <stop offset="100%" stopColor="rgba(72,174,112,0.015)" />
                </linearGradient>
              </defs>

              <g filter="url(#lineGlow)">
                <path className="deck-shadow" d="M112 88 H1088" />
                <path className="bridge-line" d="M120 88 H1080" />
                <path className="bridge-soft" d="M145 132 H1055" />

                <text
                  x="600"
                  y="116"
                  textAnchor="middle"
                  className="systems-type"
                  fontSize="18"
                  fill="rgba(225, 193, 145, 0.88)"
                >
                  ADAPTIVE RELATIONAL COGNITIVE HUMAN EMULATOR
                </text>

                <path className="bridge-line" d="M170 312 Q600 46 1030 312" />
                <path className="bridge-soft" d="M218 294 Q600 86 982 294" />
                <path className="bridge-soft" d="M276 270 Q600 126 924 270" />

                <g>
                  <path className="pillar-rail" d="M188 158 V850" stroke="url(#pillarFade)" />
                  <path className="pillar-rail" d="M246 158 V850" stroke="url(#pillarFade)" />
                  {Array.from({ length: 10 }).map((_, i) => {
                    const y = 190 + i * 62;
                    return (
                      <g key={`left-pillar-${i}`}>
                        <line className="pillar-faint" x1="188" y1={y} x2="246" y2={y + 38} />
                        <line className="pillar-faint" x1="246" y1={y + 38} x2="188" y2={y + 76} />
                      </g>
                    );
                  })}
                </g>

                <g>
                  <path className="pillar-rail" d="M954 158 V850" stroke="url(#pillarFade)" />
                  <path className="pillar-rail" d="M1012 158 V850" stroke="url(#pillarFade)" />
                  {Array.from({ length: 10 }).map((_, i) => {
                    const y = 190 + i * 62;
                    return (
                      <g key={`right-pillar-${i}`}>
                        <line className="pillar-faint" x1="954" y1={y} x2="1012" y2={y + 38} />
                        <line className="pillar-faint" x1="1012" y1={y + 38} x2="954" y2={y + 76} />
                      </g>
                    );
                  })}
                </g>
              </g>
            </svg>

            <section className="persona-section">
              <div className="persona-title">THE RKe PERSONA FAMILY</div>
              <div className="persona-subtitle">Runtime personalities built on the ARCHE engine</div>

              <div className="persona-list">
                {personas.map(([name, desc], index) => (
                  <div key={name} className={`persona-card depth-${index}`}>
                    <div className="persona-name">{name}</div>
                    <div className="persona-desc">// {desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="basement-glow" />
        <div className="basement-label">basement transition seam</div>
      </section>
    </main>
  );
}
