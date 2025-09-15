// ---------- App State ----------
let appState = { entered: false };

// ---------- Enter Site ----------
function enterSite() {
  appState.entered = true;
  const landing = document.getElementById("landing");
  const main = document.getElementById("main");
  if (landing) landing.style.display = "none";
  if (main) main.style.display = "flex";
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- On Load ----------
window.onload = () => {
  // Preloader
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";

    const landing = document.getElementById("landing");
    if (!appState.entered && landing) {
      landing.style.display = "flex";
    }
  }, 1000);

  // Force hero video to play
  const heroVideo = document.getElementById("hero-video");
  if (heroVideo) {
    heroVideo.style.opacity = 0; // start transparent
    heroVideo.play().then(() => {
      // Fade in smoothly once it starts
      heroVideo.style.transition = "opacity 1s ease";
      heroVideo.style.opacity = 0.25; // match your CSS
    }).catch(err => {
      // Autoplay failed, retry after delay
      setTimeout(() => {
        heroVideo.play().then(() => {
          heroVideo.style.transition = "opacity 1s ease";
          heroVideo.style.opacity = 0.25;
        }).catch(() => console.warn("Hero video autoplay failed."));
      }, 1000);
    });
  }
};


  // Populate releases
  const albums = [
    { title: "PRICE", link: "https://music.empi.re/price", cover: "covers/price.jpg" },
    { title: "KSHFF", link: "https://music.empi.re/kshff", cover: "covers/kshff.jpg" },
    { title: "Mozart", link: "https://music.empi.re/mozart", cover: "covers/mozart.jpg" },
    { title: "Shark", link: "https://music.empi.re/shark", cover: "covers/montiyago-shark.jpeg" },
    { title: "2020 Freestyle", link: "https://www.youtube.com/watch?v=Q4_NPZJoKzU", cover: "covers/2020-freestyle.jpg" },
    { title: "Donia", link: "https://music.empi.re/donia", cover: "covers/soulja-donia.jpg" },
    { title: "Argeen", link: "https://music.empi.re/argeen", cover: "covers/argeen.jpg" },
    { title: "The Top Freestyle", link: "https://music.empi.re/thetopfreestyle", cover: "covers/the-top-freestyle.jpg" },
    { title: "Suits", link: "https://music.empi.re/suits", cover: "covers/suits.jpg" },
    { title: "Ducati", link: "https://music.empi.re/ducati", cover: "covers/ducati.jpg" },
    { title: "Ntitled", link: "https://music.empi.re/ntitled", cover: "covers/ntitled.jpg" },
    { title: "Cima Montiyago", link: "https://music.empi.re/cimamontiyago", cover: "covers/cima-montiyago.jpg" },
    { title: "Messi", link: "https://music.empi.re/messi", cover: "covers/messi.jpg" },
    { title: "Tshreen", link: "https://music.empi.re/Tshreen", cover: "covers/tshreen.jpg" },
    { title: "Decor", link: "https://music.empi.re/decor", cover: "covers/decor.jpg" },
    { title: "Dejavu Soulja", link: "https://music.empi.re/dejavusoulja", cover: "covers/dejavu-soulja.jpg" },
    { title: "Bader Khol3A", link: "https://music.empi.re/baderkhol3a", cover: "covers/bader-khol3a.jpg" },
    { title: "Boba", link: "https://music.empi.re/boba", cover: "covers/boba.jpg" },
    { title: "Lk Lk", link: "https://music.empi.re/LkLk", cover: "covers/lk-lk.jpg" },
    { title: "Fantastic Soulja", link: "https://music.empi.re/fantasticsoulja", cover: "covers/fantastic-soulja.jpg" },
    { title: "Caribby", link: "https://music.empi.re/Caribby", cover: "covers/caribby.jpg" },
    { title: "Figures", link: "https://music.empi.re/figures", cover: "covers/figures.jpg" },
    { title: "Langa", link: "https://music.empi.re/langa", cover: "covers/langa.jpg" }
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
    });
  }

  // Populate press
  const pressLinks = [
    { title: "GRAMMYS – 5 Independent Record Labels Bringing The Sounds Of The Middle East & North Africa", url: "https://www.grammy.com/news/5-middle-east-north-africa-independent-record-labels-to-know-beirut-red-diamond", source: "GRAMMYS" },
    { title: "Hard Knock Radio – Suhel Nafar on Empowering Palestinian & Arab Artists", url: "https://hardknockradio.org/suhel-nafar-speaks-on-empowering-palestinian-and-arab-music-hip-hop-artists/", source: "Hard Knock Radio" },
    { title: "SceneNoise – 77: The Egyptian Producer Bringing SWANA Together", url: "https://scenenoise.com/Features/77-The-Egyptian-Producer-Bringing-SWANA-Together-from-Malaysia", source: "SceneNoise" },
    { title: "SceneNoise – Artist Spotlight: Soulja, Sudan's Suave Rap Star", url: "https://scenenoise.com/Features/Artist-Spotlight-Soulja-Sudan-s-Suave-Rap-Superstar", source: "SceneNoise" },
    { title: "CairoScene – Labels & Collectives Taking Over XP Nite", url: "https://cairoscene.com/Noise/The-Labels-Collectives-Taking-Over-XP-Nite-in-Riyadh-Dec-7th-9th", source: "CairoScene" },
    { title: "MDLBEAST – Labels at XP Nite in Riyadh", url: "https://mdlbeast.com/xp-feed/music-industry/the-labels-collectives-taking-over-xp-nite-in-riyadh-dec-7th-9th", source: "MDLBEAST" },
    { title: "YUNG – Fresh Sounds from Sudan: 10 Releases", url: "https://thisisyungmea.com/fresh-sounds-from-sudan-10-new-releases-you-need-to-hear/", source: "YUNG" },
    { title: "OkayAfrica – Rise of Sudanese Rap", url: "https://www.okayafrica.com/sudanese-rap-racism-music-industry/", source: "OkayAfrica" },
    { title: "SceneNoise – Montiyago Drops 'Kalam Kteer'", url: "https://m.scenenoise.com/New-Music/Sudanese-Rapper-Montiyago-Releases-Debut-Single-Kalam-Ktee", source: "SceneNoise" },
    { title: "MILLE WORLD – Introducing Rapper Montiyago", url: "https://www.milleworld.com/introducing-genre-bending-sudanese-rapper-montiyago/", source: "MILLE WORLD" },
    { title: "SceneNoise – Arab Songs on Ramy S3", url: "https://scenenoise.com/Features/Here-are-All-the-Arab-Songs-You-Can-Hear-on-Season-Three-of-Ramy", source: "SceneNoise" },
    { title: "SceneNoise – Dafencii & Soulja Unite for Godzilla x Kong", url: "https://scenenoise.com/News/Dafencii-Soulja-Unite-for-Godzilla-x-Kong-The-New-Empire-Anthem", source: "SceneNoise" }
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
    });
  }

  // Hero parallax + subtitle fade
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

  // Scroll fade-ins
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("fade-in");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".hero-content, .grid, .press-cards, .contact-section").forEach(el => observer.observe(el));
};
