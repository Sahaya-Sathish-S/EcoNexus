/* ==========================================================================
   EcoNexus Futuristic UI Style Framework Architecture
   ========================================================================== */

:root {
    --bg-dark-overlay: rgba(3, 18, 12, 0.45);
    --glass-bg: rgba(6, 26, 18, 0.55);
    --glass-border: rgba(255, 255, 255, 0.08);
    --glass-border-hover: rgba(0, 255, 180, 0.25);
    
    /* Neon Color Matrix Palette */
    --clr-emerald: #00ffb7;
    --clr-light-green: #62ff8a;
    --clr-cyan: #00d4ff;
    --clr-blue: #0072ff;
    --clr-gold: #ffd700;
    --clr-white: #ffffff;
    --clr-txt-muted: rgba(216, 249, 243, 0.7);
    
    --font-primary: 'Poppins', sans-serif;
    --font-mono: 'Space Grotesk', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

html {
    scroll-behavior: smooth;
    background-color: #020805;
}

body {
    font-family: var(--font-primary);
    color: var(--clr-white);
    min-height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(var(--bg-dark-overlay), var(--bg-dark-overlay)), 
                url("static/images/background.png") no-repeat center center fixed;
    background-size: cover;
}

/* Base Ambient Lighting Setup */
.fixed-bg-overlay {
    position: fixed;
    inset: 0;
    z-index: -2;
    background: radial-gradient(circle at 10% 20%, rgba(0, 255, 183, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(0, 114, 255, 0.05) 0%, transparent 45%);
    pointer-events: none;
}

#hero-particle-canvas {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
}

/* ==========================================================================
   Hero Layout Component
   ========================================================================== */
.hero-section {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    position: relative;
}

.logo-wrap {
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-logo {
    width: 130px;
    height: auto;
    z-index: 3;
    filter: drop-shadow(0 0 25px rgba(0, 255, 183, 0.5));
    animation: floatingLogo 4s ease-in-out infinite;
}

.logo-glow {
    position: absolute;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(0,255,183,0.35) 0%, transparent 70%);
    filter: blur(15px);
    z-index: 1;
}

.animated-rings span {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(0, 255, 183, 0.15);
    border-radius: 50%;
    animation: ringSpin 8s linear infinite;
}
.animated-rings span:nth-child(2) {
    inset: 15px;
    border-color: rgba(0, 212, 255, 0.2);
    animation-duration: 12s;
    animation-direction: reverse;
}
.animated-rings span:nth-child(3) {
    inset: 30px;
    border-color: rgba(255, 255, 255, 0.1);
    animation-duration: 6s;
}

.hero-title {
    font-size: clamp(2.2rem, 6vw, 4.2rem);
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.15;
    max-width: 900px;
}

.gradient-text {
    background: linear-gradient(135deg, var(--clr-emerald), var(--clr-cyan), var(--clr-light-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
}

.hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    font-family: var(--font-mono);
    color: var(--clr-txt-muted);
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-top: 20px;
}

.scroll-indicator {
    position: absolute;
    bottom: 40px;
    width: 28px;
    height: 48px;
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 20px;
}
.mouse-wheel {
    width: 4px;
    height: 8px;
    background-color: var(--clr-emerald);
    border-radius: 2px;
    margin: 6px auto 0;
    animation: scrollWheel 2s ease infinite;
}

/* ==========================================================================
   Responsive Grid & Glass Architecture
   ========================================================================== */
.passport-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px 80px;
}

.span-full { grid-column: span 2; }
.span-half { grid-column: span 1; }

.passport-card {
    background: var(--glass-bg);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 40px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), 
                border-color 0.4s ease, 
                box-shadow 0.4s ease;
}

.passport-card:hover {
    transform: translateY(-5px);
    border-color: var(--glass-border-hover);
    box-shadow: 0 30px 60px rgba(0, 255, 183, 0.08), 0 0 40px rgba(0, 212, 255, 0.03);
}

.glass-shine {
    position: absolute;
    top: 0; left: -150%;
    width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
    transform: skewX(-25deg);
    pointer-events: none;
}
.passport-card:hover .glass-shine {
    left: 200%;
    transition: left 1.2s ease-in-out;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 12px;
}
.text-center { justify-content: center; text-align: center; }
.header-icon { color: var(--clr-emerald); }

/* ==========================================================================
   Section Components Code
   ========================================================================== */

/* Section 1: Status Grid */
.status-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
}

.status-badge {
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(255,255,255,0.03);
    padding: 14px 24px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.05);
}

.pulse-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: relative;
}
.pulse-dot::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    opacity: 0.4;
    animation: dotPulse 2s infinite;
}
.pulse-dot.green, .pulse-dot.green::after { background: var(--clr-emerald); box-shadow: 0 0 10px var(--clr-emerald); }
.pulse-dot.cyan, .pulse-dot.cyan::after { background: var(--clr-cyan); box-shadow: 0 0 10px var(--clr-cyan); }
.pulse-dot.blue, .pulse-dot.blue::after { background: var(--clr-blue); box-shadow: 0 0 10px var(--clr-blue); }

.badge-txt h4 { font-size: 0.95rem; font-weight: 600; }
.badge-txt p { font-size: 0.75rem; color: var(--clr-txt-muted); }

.score-circle-container {
    position: relative;
    width: 120px;
    height: 120px;
}
.progress-ring-svg { transform: rotate(-90deg); }
.ring-bg { fill: transparent; stroke: rgba(255,255,255,0.05); stroke-width: 8; }
.ring-fill {
    fill: transparent;
    stroke: url(#emeraldCyanGrad); /* Set dynamic or hardcoded stroke */
    stroke: var(--clr-emerald);
    stroke-width: 8;
    stroke-dasharray: 314.15;
    stroke-dashoffset: 314.15;
    stroke-linecap: round;
    transition: stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.score-val {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.score-val h3 { font-family: var(--font-mono); font-size: 1.6rem; font-weight: 700; }
.score-val p { font-size: 0.7rem; text-transform: uppercase; color: var(--clr-txt-muted); }

.qr-verify-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}
.qr-icon { font-size: 2.5rem; color: rgba(255,255,255,0.85); transition: color 0.3s; }
.passport-card:hover .qr-icon { color: var(--clr-emerald); }
.qr-verify-zone span { font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; }

/* Sections 2 & 2B: Details & Specifications Tables */
.details-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.04);
}
.detail-row span { color: var(--clr-txt-muted); font-size: 0.95rem; }
.detail-row strong { font-weight: 500; font-size: 0.95rem; }
.mono-txt { font-family: var(--font-mono); letter-spacing: 0.5px; }
.highlight-gold { color: var(--clr-gold); text-shadow: 0 0 10px rgba(255, 215, 0, 0.2); }

.badge-spec { padding: 4px 12px; border-radius: 8px; font-size: 0.85rem; font-weight: 600; }
.green-spec { background: rgba(0,255,183,0.1); color: var(--clr-emerald); }
.cyan-spec { background: rgba(0,212,255,0.1); color: var(--clr-cyan); }

.metric-visual-bar {
    display: flex;
    height: 35px;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 35px;
    background: rgba(255,255,255,0.03);
    padding: 3px;
}
.visual-segment {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 7px;
}
.visual-segment.high { background: var(--clr-emerald); color: #020805; }
.visual-segment.medium { background: var(--clr-cyan); color: #020805; margin: 0 3px; }
.visual-segment.low { background: var(--clr-blue); color: #ffffff; }

/* Section 3: Material Composition Dynamic Bars */
.composition-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 20px;
}
.comp-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
.comp-item h4 { font-size: 0.9rem; font-weight: 500; color: var(--clr-txt-muted); }
.radial-progress-box {
    position: relative;
    width: 100px;
    height: 100px;
}
.radial-progress-box svg { transform: rotate(-90deg); }
.radial-progress-box .bg { fill: transparent; stroke: rgba(255,255,255,0.04); stroke-width: 6; }
.radial-progress-box .fill {
    fill: transparent;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 263.89;
    stroke-dashoffset: 263.89;
    transition: stroke-dashoffset 2s cubic-bezier(0.1, 1, 0.1, 1);
}
.radial-progress-box .fill.c1 { stroke: var(--clr-emerald); }
.radial-progress-box .fill.c2 { stroke: var(--clr-light-green); }
.radial-progress-box .fill.c3 { stroke: var(--clr-cyan); }
.radial-progress-box .fill.c4 { stroke: var(--clr-blue); }
.radial-progress-box .fill.c5 { stroke: var(--clr-gold); }

.pct-lbl {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-mono);
    font-size: 1.1rem;
    font-weight: 600;
}

/* Section 4: Process Pathway Timeline */
.timeline-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 30px;
    margin-top: 20px;
}
.timeline-event {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.04);
    border-radius: 16px;
    padding: 25px;
    position: relative;
    transition: background 0.3s, border-color 0.3s;
}
.timeline-event:hover {
    background: rgba(0, 255, 183, 0.03);
    border-color: rgba(0, 255, 183, 0.15);
}
.step-num {
    font-family: var(--font-mono);
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1;
    background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
}
.timeline-event h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 8px; }
.timeline-event p { font-size: 0.85rem; color: var(--clr-txt-muted); line-height: 1.5; }

/* Section 5: Optimization Cards */
.use-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
}
.use-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.04);
    border-radius: 18px;
    padding: 25px 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    transition: transform 0.3s, background 0.3s;
}
.use-card:hover {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.05);
}
.icon-glow {
    width: 55px;
    height: 55px;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
}
.icon-glow.cyan-g { background: rgba(0,212,255,0.1); color: var(--clr-cyan); box-shadow: 0 0 15px rgba(0,212,255,0.2); }
.icon-glow.blue-g { background: rgba(0,114,255,0.1); color: var(--clr-blue); box-shadow: 0 0 15px rgba(0,114,255,0.2); }
.icon-glow.emerald-g { background: rgba(0,255,183,0.1); color: var(--clr-emerald); box-shadow: 0 0 15px rgba(0,255,183,0.2); }
.icon-glow.gold-g { background: rgba(255,215,0,0.1); color: var(--clr-gold); box-shadow: 0 0 15px rgba(255,215,0,0.2); }
.use-card h3 { font-size: 0.9rem; font-weight: 500; }

/* Section 6: Decomposition Graphic */
.decomp-flex {
    display: flex;
    align-items: center;
    gap: 30px;
}
.tree-graphic-area {
    flex: 0 0 140px;
}
.tree-svg {
    width: 100%;
    height: auto;
}
.tree-svg .trunk { stroke: rgba(255,255,255,0.2); stroke-width: 4; }
.tree-svg .canopy { fill: rgba(0, 255, 183, 0.1); stroke: var(--clr-emerald); stroke-width: 1.5; }
.tree-svg .canopy.glow-c2 { fill: rgba(0, 212, 255, 0.1); stroke: var(--clr-cyan); }
.tree-svg .canopy.glow-c3 { fill: rgba(98, 255, 138, 0.1); stroke: var(--clr-light-green); }

.decomp-stats { flex: 1; display: flex; flex-direction: column; gap: 15px; }
.decomp-metric h3 { font-family: var(--font-mono); font-size: 1.8rem; font-weight: 700; line-height: 1.1; }
.decomp-metric p { font-size: 0.85rem; color: var(--clr-txt-muted); }
.decomp-checklist { list-style: none; margin-top: 5px; }
.decomp-checklist li { font-size: 0.9rem; display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.text-emerald { color: var(--clr-emerald); }

/* Section 7: Impact Counters Matrix */
.counter-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}
.counter-box {
    background: rgba(255,255,255,0.01);
    border: 1px solid rgba(255,255,255,0.03);
    border-radius: 16px;
    padding: 20px;
}
.counter-num { font-family: var(--font-mono); font-size: 2.2rem; font-weight: 700; color: #ffffff; }
.counter-box .unit { font-size: 1.2rem; margin-left: 4px; color: var(--clr-emerald); font-weight: 500; }
.counter-box p { font-size: 0.85rem; color: var(--clr-txt-muted); margin-top: 4px; }

/* Section 8: AI Autonomy Dashboard & Custom Radar Matrix */
.ai-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}
.ai-metrics-list { flex: 1; display: flex; flex-direction: column; gap: 16px; }
.ai-score-hero { margin-bottom: 10px; }
.ai-score-hero h3 { font-family: var(--font-mono); font-size: 3rem; font-weight: 800; line-height: 1; }
.ai-score-hero p { font-size: 0.85rem; color: var(--clr-txt-muted); text-transform: uppercase; letter-spacing: 0.5px; }
.ai-row { display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.03); font-size: 0.9rem; }
.ai-row span { color: var(--clr-txt-muted); }
.badge-pill { font-size: 0.75rem; text-transform: uppercase; font-family: var(--font-mono); font-weight: 700; padding: 4px 12px; border-radius: 30px; letter-spacing: 0.5px; }
.green-pill { background: rgba(0,255,183,0.12); color: var(--clr-emerald); border: 1px solid rgba(0,255,183,0.2); }

.radar-chart-container { position: relative; width: 220px; height: 220px; flex: 0 0 220px; }
.radar-svg { width: 100%; height: 100%; }
.radar-web { fill: rgba(255,255,255,0.02); stroke: rgba(255,255,255,0.08); stroke-width: 1; }
.inner-web { fill: transparent; stroke: rgba(255,255,255,0.04); }
.radar-line { stroke: rgba(255,255,255,0.06); stroke-width: 1; }
.radar-data-poly { fill: rgba(0, 212, 255, 0.15); stroke: var(--clr-cyan); stroke-width: 2; transition: all 1.5s ease; }
.radar-labels { position: absolute; inset: 0; pointer-events: none; font-size: 0.65rem; text-transform: uppercase; font-family: var(--font-mono); color: var(--clr-txt-muted); }
.lbl-pos { position: absolute; transform: translate(-50%, -50%); }
.lbl-pos.t { top: 8%; left: 50%; }
.lbl-pos.tr { top: 38%; left: 92%; }
.lbl-pos.br { top: 86%; left: 78%; }
.lbl-pos.bl { top: 86%; left: 22%; }
.lbl-pos.tl = { top: 38%; left: 8%; }

/* Section 9: Smooth Review Carousel Slider Component */
.review-aggregate { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
.stars-gold { color: var(--clr-gold); font-size: 1.1rem; }
.review-aggregate h3 { font-family: var(--font-mono); font-size: 1.5rem; }
.sub-scale { font-size: 0.9rem; color: var(--clr-txt-muted); font-weight: 400; }
.review-slider-window { position: relative; width: 100%; overflow: hidden; height: 130px; }
.review-track { display: flex; position: absolute; top: 0; left: 0; width: 400%; height: 100%; transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
.review-slide { width: 25%; padding-right: 20px; }
.slide-stars { color: var(--clr-gold); font-size: 0.8rem; margin-bottom: 8px; }
.review-body { font-size: 0.95rem; line-height: 1.5; font-style: italic; color: rgba(255,255,255,0.9); }
.reviewer-meta { display: block; font-size: 0.75rem; text-transform: uppercase; font-family: var(--font-mono); color: var(--clr-txt-muted); margin-top: 10px; }

/* Section 10: Downloads Group */
.download-button-group { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; height: 100%; align-content: center; }

/* Premium Global Buttons Template UI */
.btn {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 0.9rem;
    padding: 15px 24px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.02);
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s, border-color 0.3s, transform 0.2s;
}
.btn:hover { background: rgba(255,255,255,0.06); transform: translateY(-2px); }
.btn:active { transform: translateY(0); }
.action-cyan:hover { border-color: var(--clr-cyan); color: var(--clr-cyan); }
.action-emerald:hover { border-color: var(--clr-emerald); color: var(--clr-emerald); }
.action-blue:hover { border-color: var(--clr-blue); color: var(--clr-blue); }
.action-gold:hover { border-color: var(--clr-gold); color: var(--clr-gold); }

/* Section 11: Premium Support Card Architecture */
.support-layout { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 30px; }
.support-txt h2 { font-size: 1.4rem; font-weight: 600; margin-bottom: 6px; }
.support-txt p { color: var(--clr-txt-muted); font-size: 0.95rem; }

.contact-trigger-btn {
    background: linear-gradient(135deg, var(--clr-emerald), var(--clr-cyan));
    color: #020805 !important;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    padding: 18px 36px;
    border-radius: 16px;
}
.pulse-glow {
    box-shadow: 0 0 20px rgba(0, 255, 183, 0.3);
    animation: buttonGlowPulse 2.5s infinite;
}

/* ==========================================================================
   Footer Component Layout
   ========================================================================== */
.passport-footer {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px 40px;
}
.footer-line { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent); margin-bottom: 35px; }
.footer-branding { text-align: center; margin-bottom: 30px; }
.footer-branding h2 { font-size: 1.6rem; font-weight: 700; letter-spacing: -0.5px; }
.footer-branding p { font-size: 0.85rem; color: var(--clr-txt-muted); margin-top: 4px; }
.footer-meta { display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: rgba(216, 249, 243, 0.4); font-family: var(--font-mono); }

/* ==========================================================================
   Animation Engine Infrastructure
   ========================================================================== */
.animate-hidden {
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.215, 0.610, 0.355, 1), 
                transform 1s cubic-bezier(0.215, 0.610, 0.355, 1);
    will-change: transform, opacity;
}
.reveal-up { transform: translateY(40px); }
.reveal-left { transform: translateX(-40px); }
.reveal-right { transform: translateX(40px); }
.reveal-scale { transform: scale(0.92); }

.animate-visible {
    opacity: 1;
    transform: translate(0) scale(1);
}

@keyframes floatingLogo {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
@keyframes ringSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
@keyframes scrollWheel {
    0% { opacity: 0; transform: translateY(0); }
    30% { opacity: 1; }
    70% { opacity: 0; transform: translateY(14px); }
    100% { opacity: 0; transform: translateY(0); }
}
@keyframes dotPulse {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(2.2); opacity: 0; }
}
@keyframes buttonGlowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 183, 0.3); }
    50% { box-shadow: 0 0 35px rgba(0, 212, 255, 0.6); }
}

/* ==========================================================================
   Media Breakpoint Adjustments (Responsive Core)
   ========================================================================== */
@media(max-width: 1024px) {
    .passport-grid { grid-template-columns: 1fr; gap: 25px; padding: 0 20px 60px; }
    .span-half { grid-column: span 2; }
    .timeline-container { grid-template-columns: repeat(2, 1fr); }
    .use-grid { grid-template-columns: repeat(3, 1fr); }
}

@media(max-width: 768px) {
    .status-grid { justify-content: center; text-align: center; }
    .score-circle-container { order: -1; width: 100%; display: flex; justify-content: center; }
    .timeline-container { grid-template-columns: 1fr; }
    .ai-layout { flex-direction: column; }
    .radar-chart-container { flex: 0 0 220px; }
    .decomp-flex { flex-direction: column; text-align: center; }
    .decomp-checklist li { justify-content: center; }
    .download-button-group { grid-template-columns: 1fr; }
    .footer-meta { flex-direction: column; gap: 10px; text-align: center; }
}

@media(max-width: 480px) {
    .use-grid { grid-template-columns: repeat(2, 1fr); }
    .counter-grid { grid-template-columns: 1fr; }
    .passport-card { padding: 25px 20px; }
}
