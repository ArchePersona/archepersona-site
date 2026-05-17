import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const pillars = [
  {
    title: 'Containment',
    text: 'ARCHE wraps chaotic intelligence in behavioral structure before it enters human space.'
  },
  {
    title: 'Continuity',
    text: 'Memory is not treated as trivia storage. It becomes weighted relational context that shapes behavior.'
  },
  {
    title: 'Coherence',
    text: 'State, mode, pressure, drift, and baseline attraction keep interaction stable instead of performative.'
  }
];

const mechanics = [
  'Baseline as attractor',
  'State and mode governance',
  'Memory weighting',
  'Behavioral arbitration',
  'Pressure and drift detection',
  'De-escalation dynamics',
  'Governed expression',
  'Human-compatible delivery'
];

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="nav-bar" aria-label="Site header">
          <div className="brand-mark">ArchePersona</div>
          <div className="status-pill">ARCHE Engine</div>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Behavioral middleware for unbounded intelligence.</p>
            <h1>AI is becoming too powerful to behave like a text box.</h1>
            <p className="lede">
              ARCHE gives unbounded intelligence the behavioral physics to remain coherent,
              bounded, and human-compatible.
            </p>
            <div className="hero-actions">
              <a href="#runtime" className="primary-button">Explore the runtime</a>
              <a href="#basement" className="secondary-button">Founders Basement</a>
            </div>
          </div>

          <div className="machine-card" aria-label="ARCHE runtime status panel">
            <div className="machine-topline">
              <span>ARCHE / runtime</span>
              <span className="live-dot">active thesis</span>
            </div>
            <div className="signal-stack">
              <div><strong>Baseline</strong><span>attractor</span></div>
              <div><strong>Drift</strong><span>pressure signal</span></div>
              <div><strong>Whisperers</strong><span>de-escalation trim</span></div>
              <div><strong>Core</strong><span>behavioral coordination</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-panel" id="runtime">
        <div className="section-kicker">The missing layer</div>
        <h2>Not a wrapper. Not a mascot. A behavioral runtime.</h2>
        <p>
          The next problem is not whether AI can produce intelligent output. It is whether intelligence can stay
          coherent, bounded, and human-compatible when it becomes continuous, relational, embodied, or operationally present.
        </p>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <div className="section-kicker">Behavioral physics</div>
          <h2>Healthy systems return to baseline unless the signal earns elevation.</h2>
          <p>
            ARCHE treats behavior as a governed system of forces: attraction, pressure, drift, decay,
            arbitration, and controlled expression. Elevated states can be useful. They do not get to become home.
          </p>
        </div>
        <div className="mechanics-grid">
          {mechanics.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="product-stack">
        <div className="section-kicker">Product faces</div>
        <h2>The engine is infrastructure. The personas are where people feel it.</h2>
        <div className="stack-grid">
          <article><strong>PUPPY</strong><span>Approachable companion proof.</span></article>
          <article><strong>Buddy / Gal Pal</strong><span>Relational companion variants with different social defaults.</span></article>
          <article><strong>Brunel</strong><span>Flagship governed personality and continuity layer.</span></article>
          <article><strong>SIRENE / CHIMERA</strong><span>Advanced symbolic exploration and synthesis environments.</span></article>
        </div>
      </section>

      <section className="basement" id="basement">
        <p className="terminal-line">/boot/founders-basement/status</p>
        <h2>Built to last. Built to matter. Unforgettably. Yours.</h2>
        <p>
          ArchePersona builds the behavioral middleware underneath AI systems that need continuity,
          containment, and human-compatible expression.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
