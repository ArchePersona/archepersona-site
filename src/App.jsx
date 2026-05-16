import React from "react";

const LOGO_SRC = "/assets/archepersona-logo.png";

export default function ArcheLandingPage() {
  const personas = [
    ["RKe PUPPY", "approachable companion runtime"],
    ["RKe BUDDY", "casual social interaction layer"],
    ["RKe BRUNEL", "continuity-focused relational intelligence"],
    ["RKe SIRENE", "symbolic exploration environment"],
    ["RKe CHIMERA", "advanced synthesis runtime"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#061313] text-[#d7c1a3]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Electrolize&family=Michroma&family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        :root {
          --bronze: rgba(202, 164, 110, 0.78);
          --bronze-soft: rgba(202, 164, 110, 0.44);
          --bronze-faint: rgba(202, 164, 110, 0.22);
          --green-glow: rgba(68, 174, 112, 0.35);
        }

        .page-shell {
          position: relative;
          min-height: 190vh;
          background:
            radial-gradient(circle at 50% 0%, rgba(92, 154, 154, 0.28), transparent 27rem),
            linear-gradient(180deg, #123b3e 0%, #102f34 25%, #0b2427 52%, #061312 78%, #020504 100%);
        }

        .page-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(222, 184, 126, 0.034) 1px, transparent 1px),
            linear-gradient(90deg, rgba(222, 184, 126, 0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.32) 54%, transparent 92%);
        }

        .page-shell::after {
          content: "";
          position: absolute;
          left: -10vw;
          right: -10vw;
          bottom: -4rem;
          height: 38rem;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 50% 50%, rgba(74, 215, 137, 0.31), transparent 34%),
            linear-gradient(180deg, transparent, rgba(6, 44, 27, 0.66) 48%, #010302 100%);
          filter: blur(0.3px);
        }

        .company-logo {
          display: block;
          width: min(760px, 86vw);
          height: auto;
          margin-top: 0.8rem;
          margin-bottom: 0.35rem;
          opacity: 0.92;
          filter: drop-shadow(0 0 18px rgba(213, 179, 130, 0.12));
        }

        .present-line {
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: clamp(0.55rem, 1.15vw, 0.9rem);
          font-weight: 500;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: rgba(216, 183, 127, 0.58);
          text-shadow: 0 0 14px rgba(211, 171, 111, 0.14);
        }

        .arche-title {
          font-family: 'Audiowide', 'Orbitron', system-ui, sans-serif;
          font-weight: 400;
          letter-spacing: 0.055em;
          transform: scaleX(1.04);
          transform-origin: center bottom;
          font-size: clamp(4.7rem, 15.2vw, 13.2rem);
          line-height: 0.78;
          color: rgba(219, 196, 160, 0.95);
          text-shadow:
            0 0 32px rgba(211, 171, 111, 0.16),
            0 18px 44px rgba(0,0,0,0.4);
        }

        .arche-tight {
          margin-bottom: -0.2em;
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
          stroke-width: 1.2;
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .pillar-faint {
          stroke: rgba(202, 164, 110, 0.25);
          stroke-width: 1;
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .persona-card {
          font-family: 'Orbitron', system-ui, sans-serif;
          border-top: 1px solid rgba(202, 164, 110, 0.22);
          background: linear-gradient(90deg, transparent, rgba(202, 164, 110, 0.035), transparent);
        }

        .depth-0 { opacity: 0.92; }
        .depth-1 { opacity: 0.82; }
        .depth-2 { opacity: 0.70; }
        .depth-3 { opacity: 0.58; }
        .depth-4 { opacity: 0.43; }

        @media (max-width: 760px) {
          .page-shell { min-height: 168vh; }
          .company-logo { width: min(520px, 88vw); margin-top: 1rem; margin-bottom: 0.25rem; }
          .arche-title { transform: scaleX(1); letter-spacing: 0.035em; }
        }
      `}</style>

      <section className="page-shell">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pt-8 sm:pt-10">
          <img src={LOGO_SRC} alt="ArchePersona" className="company-logo" />

          <div className="mt-9 text-center sm:mt-10">
            <div className="present-line mb-4 sm:mb-5">Proudly Presents</div>
            <h1 className="arche-title arche-tight select-none">ARCHE</h1>
          </div>

          <div className="relative -mt-6 w-full max-w-6xl sm:-mt-8">
            <svg
              viewBox="0 0 1200 860"
              className="relative z-10 block h-auto w-full overflow-visible"
              role="img"
              aria-label="ARCHE true arch bridge system"
            >
              <defs>
                <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="pillarFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(202,164,110,0.56)" />
                  <stop offset="68%" stopColor="rgba(202,164,110,0.34)" />
                  <stop offset="100%" stopColor="rgba(72,174,112,0.02)" />
                </linearGradient>
              </defs>

              <g filter="url(#lineGlow)">
                <path className="bridge-line" d="M120 90 H1080" />
                <path className="bridge-soft" d="M145 132 H1055" />

                <text
                  x="600"
                  y="116"
                  textAnchor="middle"
                  className="systems-type"
                  fontSize="18"
                  fill="rgba(222, 190, 142, 0.86)"
                >
                  ADAPTIVE RELATIONAL COGNITIVE HUMAN EMULATOR
                </text>

                <path className="bridge-line" d="M170 284 Q600 18 1030 284" />
                <path className="bridge-soft" d="M218 268 Q600 60 982 268" />
                <path className="bridge-soft" d="M276 248 Q600 102 924 248" />

                <g>
                  <path d="M188 136 V830" stroke="url(#pillarFade)" strokeWidth="1.6" fill="none" />
                  <path d="M246 136 V830" stroke="url(#pillarFade)" strokeWidth="1.6" fill="none" />
                  {Array.from({ length: 12 }).map((_, i) => {
                    const y = 152 + i * 54;
                    return (
                      <g key={`left-pillar-${i}`}>
                        <line className="pillar-faint" x1="188" y1={y} x2="246" y2={y + 34} />
                        <line className="pillar-faint" x1="246" y1={y + 34} x2="188" y2={y + 68} />
                      </g>
                    );
                  })}
                </g>

                <g>
                  <path d="M954 136 V830" stroke="url(#pillarFade)" strokeWidth="1.6" fill="none" />
                  <path d="M1012 136 V830" stroke="url(#pillarFade)" strokeWidth="1.6" fill="none" />
                  {Array.from({ length: 12 }).map((_, i) => {
                    const y = 152 + i * 54;
                    return (
                      <g key={`right-pillar-${i}`}>
                        <line className="pillar-faint" x1="954" y1={y} x2="1012" y2={y + 34} />
                        <line className="pillar-faint" x1="1012" y1={y + 34} x2="954" y2={y + 68} />
                      </g>
                    );
                  })}
                </g>
              </g>
            </svg>

            <section className="absolute left-1/2 top-[23%] z-20 flex w-[min(650px,76vw)] -translate-x-1/2 flex-col items-center text-center">
              <div className="systems-type text-[0.68rem] font-semibold uppercase text-[#d8b77f]/80 sm:text-sm">
                THE RKe PERSONA FAMILY
              </div>
              <div className="systems-type mt-3 max-w-[36rem] text-[0.52rem] uppercase leading-relaxed tracking-[0.16em] text-[#a8c1b8]/58 sm:text-[0.66rem]">
                Runtime personalities built on the ARCHE engine
              </div>

              <div className="mt-10 flex w-full max-w-[430px] flex-col gap-7 sm:mt-12 sm:gap-8">
                {personas.map(([name, desc], index) => (
                  <div key={name} className={`persona-card depth-${index} px-4 pt-4 text-center`}>
                    <div className="text-[0.78rem] font-semibold tracking-[0.24em] text-[#dcc39a] sm:text-[0.9rem]">
                      {name}
                    </div>
                    <div className="mt-2 text-[0.56rem] tracking-[0.12em] text-[#94afa5]/80 sm:text-[0.68rem]">
                      // {desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 z-10 h-28 w-[86vw] max-w-5xl -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="systems-type absolute bottom-20 left-1/2 z-20 -translate-x-1/2 text-center text-[0.55rem] uppercase tracking-[0.32em] text-emerald-200/20">
          basement transition seam
        </div>
      </section>
    </main>
  );
}
