// ---------- App State ----------
let appState = { entered: false };

// ---------- Audio Setup ----------
const ambient = new Audio("sounds/ambient-loop.mp3");
ambient.loop = true;
ambient.volume = 1; // keep original mix

const rimAudio = new Audio("sounds/rim.mp3");
rimAudio.volume = 0.3;

const kickAudio = new Audio("sounds/kick.mp3");
kickAudio.volume = 0.3;

const clickAudio = new Audio("sounds/click.mp3");
clickAudio.volume = 0.3;

// ---------- Enter Site Button ----------
const enterBtn = document.getElementById("enter-btn");
enterBtn.addEventListener("click", () => {
  if (!appState.entered) {
    appState.entered = true;

    // Hide landing, show main content
    document.getElementById("landing").style.display = "none";
    document.getElementById("main").style.display = "flex";
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

    // Start ambient
    ambient.play().catch(() => console.log("Ambient blocked"));

    // Init the rest of the scripts
    initSiteScripts();
  }
});

// ---------- Site Scripts ----------
function initSiteScripts() {
  // ---------- Scroll-triggered click sound ----------
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastScroll > 300) { // trigger max every 300ms
      const sound = clickAudio.cloneNode();
      sound.play();
      lastScroll = now;
    }
  });

  // ---------- Populate Releases ----------
  const albums = [
    { title: "PRICE", link: "https://music.empi.re/price", cover: "covers/price.jpg" },
    { title: "KSHFF", link: "https://music.empi.re/kshff", cover: "covers/kshff.jpg" },
    // ...rest of albums
  ];

  const grid = document.querySelector(".grid");
  if (grid) {
    albums.forEach((a, i) => {
      const el = document.createElement("a");
      el.href = a.link;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.setAttribute("data-title", a.title);
      el.innerHTML = `<img loading="lazy" src="${a.cover}" alt="${a.title}">`;
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "all .6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, i * 80);
      grid.appendChild(el);

      // Kick sound on hover
      el.addEventListener("mouseenter", () => {
        const sound = kickAudio.cloneNode();
        sound.play();
      });
    });
  }

  // ---------- Populate Press ----------
  const pressLinks = [
    { title: "GRAMMYS – 5 Independent Record Labels...", url: "#", source: "GRAMMYS" },
    // ...rest of press
  ];

  const press = document.querySelector(".press-cards");
  if (press) {
    pressLinks.forEach((p, i) => {
      const d = document.createElement("div");
      d.innerHTML = `<div class="press-source">${p.source}</div><a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.title.replace(p.source + " – ", "")}</a>`;
      d.style.opacity = 0;
      d.style.transform = "translateY(20px)";
      setTimeout(() => {
        d.style.transition = "all .6s ease";
        d.style.opacity = 1;
        d.style.transform = "translateY(0)";
      }, i * 120);
      press.appendChild(d);

      // Kick sound on hover
      const link = d.querySelector("a");
      link.addEventListener("mouseenter", () => {
        const sound = kickAudio.cloneNode();
        sound.play();
      });
    });
  }

  // ---------- Hero Parallax + Subtitle Fade ----------
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector(".hero-title");
    const subtitle = document.querySelector(".hero-subtitle");
    if (hero) hero.style.transform = `translateY(${scrollY * 0.2}px)`;
    if (subtitle) {
      const opacity = Math.max(1 - scrollY / 300, 0);
      subtitle.style.opacity = opacity;
      subtitle.style.pointerEvents = opacity > 0 ? "auto" : "none";
    }
  });

  // ---------- Scroll Fade-ins with Click Sound ----------
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        const sound = clickAudio.cloneNode();
        sound.play();
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".hero-content, .grid, .press-cards, .contact-section").forEach(el => observer.observe(el));

  // ---------- Hero Cursor Ripples + Tilt ----------
  const hero = document.querySelector(".hero");
  if (hero) {
    const canvas = document.createElement("canvas");
    canvas.id = "hero-canvas";
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    hero.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let ripples = [];

    function resizeCanvas() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripples.forEach((r, i) => {
        r.radius += r.speed;
        r.alpha -= 0.01;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ripples = ripples.filter(r => r.alpha > 0);
      requestAnimationFrame(animate);
    }
    animate();

    // Cursor ripple + tilt + rim sound
    window.addEventListener("mousemove", e => {
      const rect = hero.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        speed: 1.5,
        alpha: 0.4
      });

      const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 10;
      const content = hero.querySelector(".hero-content");
      if (content) content.style.transform = `perspective(800px) rotateX(${ -moveY }deg) rotateY(${ moveX }deg)`;
    });

    // Rim sound on click anywhere
    window.addEventListener("click", () => {
      const sound = rimAudio.cloneNode();
      sound.play();
    });

    // Reset tilt when mouse leaves hero
    window.addEventListener("mouseleave", () => {
      const content = hero.querySelector(".hero-content");
      if (content) content.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    });
  }
}
