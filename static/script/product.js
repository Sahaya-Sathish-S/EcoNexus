/**
 * EcoNexus Digital Product Passport Core Client Engine
 * Systems: Particle Physics, Animation Orchestration, Counter Analytics, UI Controls
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize Subsystems
    initParticleEngine();
    initIntersectionObservers();
    initReviewSlider();
    initButtonRipples();
    initSupportMailer();
});

/* ==========================================================================
   1. Interactive Micro-Particle Field
   ========================================================================== */
function initParticleEngine() {
    const canvas = document.getElementById("hero-particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let w, h;
    const particles = [];
    const particleCount = 75; // Optimal structural weight performance boundary

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    
    window.addEventListener("resize", resize);
    resize();

    class CosmicParticle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.alpha = Math.random() * 0.6 + 0.1;
            this.fadeSpeed = 0.002 + Math.random() * 0.003;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha -= this.fadeSpeed;

            if (this.alpha <= 0 || this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
                this.reset();
            }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "#00ffb7";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#00ffb7";
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new CosmicParticle());
    }

    function renderLoop() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(renderLoop);
    }
    renderLoop();
}

/* ==========================================================================
   2. Intersection Observer Sequential Trigger Engine
   ========================================================================== */
function initIntersectionObservers() {
    const elementsToAnimate = document.querySelectorAll(".animate-hidden");
    
    const generalOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const coreObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible");
                
                // Secondary activation checks inside target element container boundaries
                if (entry.target.classList.contains("status-card")) {
                    animateEcoScoreRing();
                }
                if (entry.target.classList.contains("composition-card")) {
                    animateMaterialComposition();
                }
                if (entry.target.classList.contains("impact-card")) {
                    animateImpactCounters(entry.target);
                }
                if (entry.target.classList.contains("timeline-section")) {
                    animateTimelineSequence(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, generalOptions);

    elementsToAnimate.forEach(el => coreObserver.observe(el));
}

/* ==========================================================================
   3. Specialized Custom Visualizations (SVGs, Bars, Numerical Data)
   ========================================================================== */
function animateEcoScoreRing() {
    const ring = document.getElementById("eco-score-ring");
    if (!ring) return;
    const targetPct = parseInt(ring.getAttribute("data-pct"), 10);
    const radius = ring.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    
    const offset = circumference - (targetPct / 100) * circumference;
    ring.style.strokeDashoffset = offset;
}

function animateMaterialComposition() {
    const compItems = document.querySelectorAll(".comp-item");
    compItems.forEach(item => {
        const targetVal = parseInt(item.getAttribute("data-target"), 10);
        const fillCircle = item.querySelector(".fill");
        const lbl = item.querySelector(".pct-lbl");
        
        if (!fillCircle) return;
        
        // Circular perimeter length map calculation ($2 * \pi * r$) -> r=42
        const perimeter = 2 * Math.PI * 42;
        const offset = perimeter - (targetVal / 100) * perimeter;
        fillCircle.style.strokeDashoffset = offset;
        
        // Smooth Counter Interpolation Loop
        let current = 0;
        const duration = 1500;
        const frameTime = 1000 / 60;
        const steps = duration / frameTime;
        const increment = targetVal / steps;

        const countFn = () => {
            current += increment;
            if (current >= targetVal) {
                lbl.textContent = `${targetVal}%`;
            } else {
                lbl.textContent = `${Math.floor(current)}%`;
                requestAnimationFrame(countFn);
            }
        };
        countFn();
    });
}

function animateTimelineSequence(parentCard) {
    const steps = parentCard.querySelectorAll(".step-card");
    steps.forEach((step, idx) => {
        step.style.opacity = "0";
        step.style.transform = "translateY(20px)";
        step.style.transition = "all 0.6s cubic-bezier(0.215, 0.610, 0.355, 1)";
        
        setTimeout(() => {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
        }, idx * 200); // 200ms cascade pacing latency delay
    });
}

function animateImpactCounters(parentCard) {
    const counters = parentCard.querySelectorAll(".counter-num");
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute("data-val"));
        const decimals = parseInt(counter.getAttribute("data-dec"), 10);
        
        let start = 0;
        const duration = 1800; 
        const startTime = performance.now();

        function updateCounter(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // EaseOutQuad structural acceleration formula
            const easeProgress = progress * (2 - progress);
            const currentVal = start + easeProgress * (target - start);
            
            counter.textContent = currentVal.toFixed(decimals);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toFixed(decimals);
            }
        }
        requestAnimationFrame(updateCounter);
    });
}

/* ==========================================================================
   4. Infinite Carousel Review Slider Matrix
   ========================================================================== */
function initReviewSlider() {
    const track = document.getElementById("reviewTrack");
    if (!track) return;
    const slides = track.querySelectorAll(".review-slide");
    let currentIdx = 0;
    
    setInterval(() => {
        currentIdx = (currentIdx + 1) % slides.length;
        track.style.transform = `translateX(-${currentIdx * 25}%)`;
    }, 4500); // Shift every 4.5 seconds safely
}

/* ==========================================================================
   5. Interactive Button Ripple System Injection
   ========================================================================== */
function initButtonRipples() {
    const rippleButtons = document.querySelectorAll(".ripple-btn, .contact-trigger-btn");
    
    rippleButtons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rippleCircle = document.createElement("span");
            rippleCircle.style.position = "absolute";
            rippleCircle.style.width = rippleCircle.style.height = "100px";
            rippleCircle.style.background = "rgba(255, 255, 255, 0.25)";
            rippleCircle.style.borderRadius = "50%";
            rippleCircle.style.pointerEvents = "none";
            rippleCircle.style.left = `${x - 50}px`;
            rippleCircle.style.top = `${y - 50}px`;
            rippleCircle.style.transform = "scale(0)";
            rippleCircle.style.transition = "transform 0.5s ease-out, opacity 0.5s";
            rippleCircle.style.opacity = "1";
            
            this.appendChild(rippleCircle);
            
            requestAnimationFrame(() => {
                rippleCircle.style.transform = "scale(4)";
                rippleCircle.style.opacity = "0";
            });
            
            setTimeout(() => { rippleCircle.remove(); }, 600);
        });
    });
}

/* ==========================================================================
   6. Automated Platform Mailer Handshake Integration
   ========================================================================== */
function initSupportMailer() {
    const contactBtn = document.getElementById("contactBtn");
    if (!contactBtn) return;
    
    contactBtn.addEventListener("click", () => {
        const mailTarget = "mailto:sahayasathish60@gmail.com";
        const mailSubject = encodeURIComponent("EcoNexus Support");
        const mailBody = encodeURIComponent("Hello EcoNexus Team,\n\nI need support regarding product batch tracking reference identifier asset ENX-2026-001548...");
        
        setTimeout(() => {
            window.location.href = `${mailTarget}?subject=${mailSubject}&body=${mailBody}`;
        }, 250); // Small procedural delay to allow the hover/ripple state transformation to finish visually
    });
}
