/*=========================================
        EcoNexus Loading Screen
        Part 1
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const progressFill = document.getElementById("progressFill");
    const percentage = document.getElementById("percentage");
    const loadingText = document.getElementById("loadingText");
    const modules = document.querySelectorAll(".module");
    const moduleChecks = document.querySelectorAll(".module-check");

    let progress = 0;

    const loadingMessages = [

        "Initializing EcoNexus Platform...",
        "Loading AI Packaging Engine...",
        "Preparing Manufacturing Workspace...",
        "Connecting Sustainability Services...",
        "Generating Smart Dashboard...",
        "Optimizing Business Intelligence...",
        "Loading Digital Product Passport...",
        "Verifying Secure Environment...",
        "Synchronizing User Preferences...",
        "Launching EcoNexus..."

    ];

    let currentMessage = 0;
    let currentModule = 0;

    /*==================================
            Loading Animation
    ==================================*/

    const loader = setInterval(() => {

        progress += Math.random() * 4;

        if (progress > 100)
            progress = 100;

        progressFill.style.width = progress + "%";

        percentage.textContent = Math.floor(progress) + "%";

        /*==============================
              Change Loading Message
        ==============================*/

        if (
            currentMessage < loadingMessages.length - 1 &&
            progress >= (currentMessage + 1) * 10
        ) {

            currentMessage++;

            loadingText.style.opacity = "0";

            setTimeout(() => {

                loadingText.textContent =
                    loadingMessages[currentMessage];

                loadingText.style.opacity = "1";

            }, 300);

        }

        /*==============================
             Activate Modules
        ==============================*/

        if (
            currentModule < modules.length &&
            progress >= (currentModule + 1) * 25
        ) {

            modules[currentModule].style.background =
                "rgba(0,255,180,.18)";

            modules[currentModule].style.borderColor =
                "#00ffb7";

            modules[currentModule].style.boxShadow =
                "0 0 20px rgba(0,255,180,.35)";

            moduleChecks[currentModule].style.opacity = "1";

            moduleChecks[currentModule].style.transform =
                "scale(1.25)";

            setTimeout(() => {

                moduleChecks[currentModule].style.transform =
                    "scale(1)";

            }, 300);

            currentModule++;

        }

        /*==============================
               Finish Loading
        ==============================*/

        if (progress >= 100) {

            clearInterval(loader);

            loadingText.textContent =
                "Welcome to EcoNexus";

            setTimeout(() => {

                document.body.style.opacity = "0";

                document.body.style.transition =
                    "opacity 1s ease";

            }, 700);

            setTimeout(() => {

                window.location.href = "/home";

            }, 1700);

        }

    }, 120);

});
/*=========================================
      EcoNexus Particle Engine
      Part 2A-1
=========================================*/

// Create canvas
const particleCanvas = document.createElement("canvas");
particleCanvas.id = "particleCanvas";

particleCanvas.style.position = "fixed";
particleCanvas.style.top = "0";
particleCanvas.style.left = "0";
particleCanvas.style.width = "100%";
particleCanvas.style.height = "100%";
particleCanvas.style.pointerEvents = "none";
particleCanvas.style.zIndex = "1";

document.body.prepend(particleCanvas);

const ctx = particleCanvas.getContext("2d");

// Canvas Size
let canvasWidth;
let canvasHeight;

function resizeCanvas() {

    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;

    particleCanvas.width = canvasWidth;
    particleCanvas.height = canvasHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

/*=========================================
        Mouse Position
=========================================*/

const mouse = {

    x: canvasWidth / 2,
    y: canvasHeight / 2

};

window.addEventListener("mousemove", (event) => {

    mouse.x = event.clientX;
    mouse.y = event.clientY;

});

/*=========================================
          Particle Class
=========================================*/

class Particle {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;

        this.radius = Math.random() * 3 + 1;

        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;

        this.alpha = Math.random();

        this.alphaSpeed = 0.004 + Math.random() * 0.006;

        const colors = [

            "#00ffb7",
            "#00d4ff",
            "#6dff8c",
            "#ffffff"

        ];

        this.color =
            colors[Math.floor(Math.random() * colors.length)];

    }

}

/*=========================================
        Create Particles
=========================================*/

const particles = [];

const PARTICLE_COUNT = 180;

for (let i = 0; i < PARTICLE_COUNT; i++) {

    particles.push(new Particle());

}

/*=========================================
      EcoNexus Particle Engine
      Part 2A-2
=========================================*/

function drawParticle(particle){

    ctx.save();

    ctx.globalAlpha = particle.alpha;

    ctx.beginPath();

    ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = particle.color;

    ctx.shadowColor = particle.color;
    ctx.shadowBlur = 18;

    ctx.fill();

    ctx.restore();

}

function updateParticle(particle){

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    particle.alpha += particle.alphaSpeed;

    if(particle.alpha >= 1 || particle.alpha <= 0.2){

        particle.alphaSpeed *= -1;

    }

    // Wrap around screen

    if(particle.x < -20)
        particle.x = canvasWidth + 20;

    if(particle.x > canvasWidth + 20)
        particle.x = -20;

    if(particle.y < -20)
        particle.y = canvasHeight + 20;

    if(particle.y > canvasHeight + 20)
        particle.y = -20;

}

/*=========================================
      Connect Nearby Particles
=========================================*/

function connectParticles(){

    for(let a=0;a<particles.length;a++){

        for(let b=a+1;b<particles.length;b++){

            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;

            const distance = Math.sqrt(dx*dx + dy*dy);

            if(distance < 120){

                ctx.beginPath();

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.strokeStyle =
                    "rgba(0,255,180," +
                    (0.22-(distance/600)).toFixed(3)
                    +")";

                ctx.lineWidth = 1;

                ctx.stroke();

            }

        }

    }

}

/*=========================================
        Mouse Interaction
=========================================*/

function mouseGlow(){

    particles.forEach(particle=>{

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < 140){

            particle.x -= dx * 0.004;
            particle.y -= dy * 0.004;

        }

    });

}

/*=========================================
        Main Animation Loop
=========================================*/

function animateParticles(){

    ctx.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );

    particles.forEach(particle=>{

        updateParticle(particle);

        drawParticle(particle);

    });

    connectParticles();

    mouseGlow();

    requestAnimationFrame(
        animateParticles
    );

}

/*=========================================
        Start Engine
=========================================*/

animateParticles();