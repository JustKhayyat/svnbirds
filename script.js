/* ========== On Load / Main Functionality ========== */
window.onload = () => {
  /* ========== Hero Video & Audio ========== */
  // Autoplay fix for all browsers
  const video = document.querySelector(".hero-video");
  if (video) {
    video.muted = true;
    video.loop = true;
    video.playsinline = true;
    try {
      video.play();
    } catch (error) {
      console.log("Autoplay was prevented by the browser. Error:", error);
    }
  }

  // Set up ambient and click sounds
  const clickAudio = new Audio('/sounds/click.mp3');

  // Play click sound on any mouse click
  document.addEventListener('click', () => {
    clickAudio.currentTime = 0; // Rewind to the start
    clickAudio.play().catch(e => console.log("Click sound error:", e));
  });

  /* ========== Hero Hover/Tilt Effect ========== */
  const hero = document.getElementById("hero");
  if (hero) {
    const heroContent = hero.querySelector(".hero-content");

    const handleTilt = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const tiltX = (y - rect.height / 2) / 10;
      const tiltY = (x - rect.width / 2) / 10;
      heroContent.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    hero.addEventListener("mousemove", handleTilt);
    hero.addEventListener("mouseleave", () => {
      heroContent.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    });

    // Touch events for mobile
    hero.addEventListener("touchmove", (e) => {
      e.preventDefault();
      handleTilt(e.touches[0]);
    });
    hero.addEventListener("touchend", () => {
      heroContent.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    });
  }

  /* ========== Ripple Effect ========== */
  const body = document.body;
  const rippleOverlay = document.createElement("div");
  rippleOverlay.classList.add("ripple-overlay");
  body.appendChild(rippleOverlay);

  document.addEventListener('mousedown', (e) => {
    const dot = document.createElement('div');
    dot.classList.add('ripple-dot');
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    rippleOverlay.appendChild(dot);
    setTimeout(() => dot.remove(), 2000); // Remove after animation
  });

  document.addEventListener('touchstart', (e) => {
    const dot = document.createElement('div');
    dot.classList.add('ripple-dot');
    dot.style.left = `${e.touches[0].clientX}px`;
    dot.style.top = `${e.touches[0].clientY}px`;
    rippleOverlay.appendChild(dot);
    setTimeout(() => dot.remove(), 2000); // Remove after animation
  });

  /* ========== Dynamic Content Population ========== */
  const allArtists = ["Soulja", "Montiyago", "Khayyat", "77", "Big Moe"];
  
  const allReleases = [
    {
      title: "Qesas",
      artist: "Soulja",
      type: "Single",
      year: 2024,
      image: "/media/releases/qesas.png",
      url: "https://music.svnbirds.com/Qesas",
    },
    {
      title: "A'mal",
      artist: "Soulja",
      type: "EP",
      year: 2023,
      image: "/media/releases/amal-ep.png",
      url: "https://music.svnbirds.com/A'mal",
    },
    {
      title: "Lel",
      artist: "Soulja",
      type: "Single",
      year: 2022,
      image: "/media/releases/lel.png",
      url: "https://music.svnbirds.com/Lel",
    },
    {
      title: "Doppler",
      artist: "Montiyago",
      type: "EP",
      year: 2023,
      image: "/media/releases/doppler.png",
      url: "https://music.svnbirds.com/Doppler",
    },
    {
      title: "Bader Khol3a",
      artist: "Montiyago",
      type: "Single",
      year: 2022,
      image: "/media/releases/bader-khol3a.png",
      url: "https://music.svnbirds.com/BaderKhol3a",
    },
  ];

  const allPress = [
    {
      source: "Rolling Stone",
      quote: "77 is a mastermind behind the scenes, creating sonic landscapes that define the new wave of Arabic hip-hop.",
      image: "/media/press/rolling-stone.png",
      url: "https://example.com/rolling-stone-77"
    },
  ];


  function createReleaseCard(release) {
    const card = document.createElement('a');
    card.href = release.url;
    card.classList.add('release-card');
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    const image = document.createElement('img');
    image.src = release.image;
    image.alt = release.title;
    image.classList.add('release-image');

    const info = document.createElement('div');
    info.classList.add('release-info');

    const title = document.createElement('div');
    title.classList.add('release-title');
    title.textContent = release.title;

    const artist = document.createElement('div');
    artist.classList.add('release-artist');
    artist.textContent = release.artist;

    info.appendChild(title);
    info.appendChild(artist);
    card.appendChild(image);
    card.appendChild(info);
    
    return card;
  }

  function populateReleases(releases) {
    const releasesContainer = document.getElementById('releases');
    if (releasesContainer) {
      releases.forEach(release => {
        releasesContainer.appendChild(createReleaseCard(release));
      });
    }
  }

  function createArtistCard(artist) {
    const card = document.createElement('a');
    card.href = `/${artist.toLowerCase()}/index.html`;
    card.classList.add('artist-card');

    const image = document.createElement('img');
    image.src = `/media/artists/artist-${artist.toLowerCase().replace(' ', '-')}.png`;
    image.alt = artist;
    
    const name = document.createElement('div');
    name.classList.add('artist-name');
    name.textContent = artist;

    card.appendChild(image);
    card.appendChild(name);
    
    return card;
  }

  function populateArtists() {
    const artistGrid = document.getElementById('artist-grid');
    if (artistGrid) {
      allArtists.forEach(artist => {
        artistGrid.appendChild(createArtistCard(artist));
      });
    }
  }

  function createPressCard(press) {
    const card = document.createElement('a');
    card.href = press.url;
    card.classList.add('press-card');
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    const logo = document.createElement('img');
    logo.src = press.image;
    logo.alt = `${press.source} logo`;
    logo.classList.add('press-logo');

    const quote = document.createElement('p');
    quote.classList.add('press-quote');
    quote.textContent = press.quote;

    const author = document.createElement('p');
    author.classList.add('press-author');
    author.textContent = `- ${press.source}`;

    card.appendChild(logo);
    card.appendChild(quote);
    card.appendChild(author);

    return card;
  }

  function populatePress() {
    const pressGrid = document.getElementById('press-grid');
    if (pressGrid) {
      allPress.forEach(press => {
        pressGrid.appendChild(createPressCard(press));
      });
    }
  }

  /* ========== Artist Page Functionality ========== */
  function populateArtistDiscography() {
    const artistBody = document.querySelector('body[data-artist-name]');
    if (artistBody) {
      const artistName = artistBody.getAttribute('data-artist-name');
      const artistReleases = allReleases.filter(release => release.artist === artistName);
      populateReleases(artistReleases);
    }
  }

  // Initial population based on the page type
  const isArtistPage = document.querySelector('body[data-artist-name]');
  if (isArtistPage) {
    populateArtistDiscography();
  } else {
    populateReleases(allReleases);
    populateArtists();
    populatePress();
  }
};

/* ========== Desktop Mouse Drag to Scroll Releases (Main page only) ========== */
const releasesContainer = document.querySelector('.releases-container');
let isDragging = false;
let startX;
let scrollLeft;

if (releasesContainer) {
    releasesContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        releasesContainer.classList.add('active');
        startX = e.pageX - releasesContainer.offsetLeft;
        scrollLeft = releasesContainer.scrollLeft;
        e.preventDefault(); 
    });

    releasesContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        releasesContainer.classList.remove('active');
    });

    releasesContainer.addEventListener('mouseup', () => {
        isDragging = false;
        releasesContainer.classList.remove('active');
    });

    releasesContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - releasesContainer.offsetLeft;
        const walk = (x - startX) * 2;
        releasesContainer.scrollLeft = scrollLeft - walk;
    });

    // Mobile touch events
    releasesContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        releasesContainer.classList.add('active');
        startX = e.touches[0].pageX - releasesContainer.offsetLeft;
        scrollLeft = releasesContainer.scrollLeft;
    });

    releasesContainer.addEventListener('touchend', () => {
        isDragging = false;
        releasesContainer.classList.remove('active');
    });

    releasesContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - releasesContainer.offsetLeft;
        const walk = (x - startX) * 2;
        releasesContainer.scrollLeft = scrollLeft - walk;
    });
}
