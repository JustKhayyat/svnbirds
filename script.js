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
  const ambientAudio = new Audio('/sounds/ambient-loop.mp3');
  const clickAudio = new Audio('/sounds/click.mp3');

  // Ambient sound setup to bypass browser autoplay restrictions
  ambientAudio.loop = true;
  ambientAudio.volume = 0.05; // Adjusted to a lower volume
  ambientAudio.preload = 'auto'; // Add preload for faster load

  function playAmbientAudio() {
    ambientAudio.play().then(() => {
      // Audio is playing, remove the one-time event listener
      document.body.removeEventListener('mousedown', playAmbientAudio);
      document.body.removeEventListener('touchstart', playAmbientAudio);
    }).catch(error => {
      console.log("Audio autoplay was prevented. Error:", error);
    });
  }

  // Start the ambient sound on the first user interaction
  document.body.addEventListener('mousedown', playAmbientAudio, { once: true });
  document.body.addEventListener('touchstart', playAmbientAudio, { once: true });

  // Play click sound on any mouse click
  document.addEventListener('click', () => {
    // Reset the audio to the beginning for each click
    clickAudio.currentTime = 0;
    clickAudio.play().catch(e => console.log("Click sound play failed:", e));
  });

  /* ========== Data for all releases and artists ========== */
  const allReleases = [
    { title: "PRICE", link: "https://music.empi.re/price", cover: "/covers/price.jpg", artist: "Khayyat" },
    { title: "KSHFF", link: "https://music.empi.re/kshff", cover: "/covers/kshff.jpg", artist: "Montiyago" },
    { title: "Mozart", link: "https://music.empi.re/mozart", cover: "/covers/mozart.jpg", artist: "Khayyat" },
    { title: "Shark", link: "https://music.empi.re/shark", cover: "/covers/montiyago-shark.jpeg", artist: "Montiyago" },
    { title: "2020 Freestyle", link: "https://www.youtube.com/watch?v=Q4_NPZJoKzU", cover: "/covers/2020-freestyle.jpg", artist: "Big Moe" },
    { title: "Donia", link: "https://music.empi.re/donia", cover: "/covers/soulja-donia.jpg", artist: "Soulja" },
    { title: "Argeen", link: "https://music.empi.re/argeen", cover: "/covers/argeen.jpg", artist: "Big Moe" },
    { title: "The Top Freestyle", link: "https://music.empi.re/thetopfreestyle", cover: "/covers/the-top-freestyle.jpg", artist: "Soulja" },
    { title: "Suits", link: "https://music.empi.re/suits", cover: "/covers/suits.jpg", artist: "Khayyat" },
    { title: "Ducati", link: "https://music.empi.re/ducati", cover: "/covers/ducati.jpg", artist: "77" },
    { title: "Ntitled", link: "https://music.empi.re/ntitled", cover: "/covers/ntitled.jpg", artist: "Montiyago" },
    { title: "Cima Montiyago", link: "https://music.empi.re/cimamontiyago", cover: "/covers/cima-montiyago.jpg", artist: "Montiyago" },
    { title: "Messi", link: "https://music.empi.re/messi", cover: "/covers/messi.jpg", artist: "Big Moe" },
    { title: "Tshreen", link: "https://music.empi.re/Tshreen", cover: "/covers/tshreen.jpg", artist: "Montiyago" },
    { title: "Decor", link: "https://music.empi.re/decor", cover: "/covers/decor.jpg", artist: "Montiyago" },
    { title: "Dejavu Soulja", link: "https://music.empi.re/dejavusoulja", cover: "/covers/dejavu-soulja.jpg", artist: "Soulja" },
    { title: "Bader Khol3A", link: "https://music.empi.re/baderkhol3a", cover: "/covers/bader-khol3a.jpg", artist: "Khayyat" },
    { title: "Boba", link: "https://music.empi.re/boba", cover: "/covers/boba.jpg", artist: "Big Moe" },
    { title: "Lk Lk", link: "https://music.empi.re/LkLk", cover: "/covers/lk-lk.jpg", artist: "Big Moe" },
    { title: "Fantastic Soulja", link: "https://music.empi.re/fantasticsoulja", cover: "/covers/fantastic-soulja.jpg", artist: "Soulja" },
    { title: "Caribby", link: "https://music.empi.re/Caribby", cover: "/covers/caribby.jpg", artist: "77" },
    { title: "Figures", link: "https://music.empi.re/figures", cover: "/covers/figures.jpg", artist: "77" },
    { title: "Langa", link: "https://music.empi.re/langa", cover: "/covers/langa.jpg", artist: "77" }
  ];

  const allArtists = [
    { name: "Soulja", link: "soulja/", photo: "/media/artists/artist-soulja.png" },
    { name: "Montiyago", link: "montiyago/", photo: "/media/artists/artist-montiyago.png" },
    { name: "Khayyat", link: "khayyat/", photo: "/media/artists/artist-khayyat.png" },
    { name: "77", link: "77/", photo: "/media/artists/artist-77.png" },
    { name: "Big Moe", link: "bigmoe/", photo: "/media/artists/artist-bigmoe.png" }
  ];

  const allPress = [
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


  /* ========== Populate Main Page Sections ========== */
  const populateReleases = () => {
    const releasesGrid = document.getElementById('releases');
    if (!releasesGrid) return;
    allReleases.forEach(release => {
      releasesGrid.appendChild(createReleaseElement(release));
    });
  };

  const populateArtists = () => {
    const artistsGrid = document.getElementById('artist-grid');
    if (!artistsGrid) return;
    allArtists.forEach(artist => {
      artistsGrid.appendChild(createArtistElement(artist));
    });
  };

  const populatePress = () => {
    const pressGrid = document.getElementById('press-grid');
    if (!pressGrid) return;
    const pressPerPage = 6;
    let pressLoaded = 0;

    const loadMorePress = () => {
      if (pressLoaded < allPress.length) {
        const nextBatch = allPress.slice(pressLoaded, pressLoaded + pressPerPage);
        nextBatch.forEach(press => {
          pressGrid.appendChild(createPressElement(press));
        });
        pressLoaded += pressPerPage;
      }
    };

    loadMorePress();
    window.addEventListener('scroll', () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;
      if (scrollPosition >= documentHeight - 500) {
        loadMorePress();
      }
    });
  };

  /* ========== Populate Artist Discography (New function for artist pages) ========== */
  const populateArtistDiscography = () => {
    const discographyGrid = document.getElementById('discography');
    if (!discographyGrid) return;

    // Get artist name from a unique element on the page, like a body class or ID
    const artistName = document.body.dataset.artistName;

    // Filter releases by the current artist
    const artistReleases = allReleases.filter(release => release.artist === artistName);

    // Populate the discography grid with the filtered releases
    artistReleases.forEach(release => {
      discographyGrid.appendChild(createReleaseElement(release));
    });
  };

  /* ========== Helper Functions to create HTML elements ========== */
  const createReleaseElement = (release) => {
    const releaseLink = document.createElement('a');
    releaseLink.href = release.link;
    releaseLink.setAttribute('data-title', release.title);
    
    const releaseImage = document.createElement('img');
    releaseImage.loading = 'lazy'; 
    releaseImage.src = release.cover;
    releaseImage.alt = release.title;

    releaseLink.appendChild(releaseImage);
    return releaseLink;
  };

  const createArtistElement = (artist) => {
    const artistLink = document.createElement('a');
    artistLink.href = artist.link;
    
    const artistImage = document.createElement('img');
    artistImage.loading = 'lazy';
    artistImage.src = artist.photo;
    artistImage.alt = artist.name;

    const artistName = document.createElement('h3');
    artistName.textContent = artist.name;

    artistLink.appendChild(artistImage);
    artistLink.appendChild(artistName);
    return artistLink;
  };

  const createPressElement = (press) => {
    const pressCard = document.createElement('div');
    const pressLink = document.createElement('a');
    
    pressLink.href = press.url;
    pressLink.target = '_blank';
    pressLink.rel = 'noopener noreferrer';

    const pressSource = document.createElement('div');
    pressSource.className = 'press-source';
    pressSource.textContent = press.source;

    const pressTitle = document.createElement('h3');
    pressTitle.textContent = press.title;

    pressLink.appendChild(pressSource);
    pressLink.appendChild(pressTitle);
    pressCard.appendChild(pressLink);
    return pressCard;
  };

  /* ========== Check for current page and populate accordingly ========== */
  if (document.getElementById('discography')) {
    // This is an artist page
    populateArtistDiscography();
  } else {
    // This is the main index page
    populateReleases();
    populateArtists();
    populatePress();
  }


  /* ========== Hero Ripple and Tilt Effect (Main page only) ========== */
  const hero = document.querySelector(".hero");
  if (hero) {
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = 1;
    hero.prepend(canvas);

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
        if (r.alpha > 0) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
      ripples = ripples.filter(r => r.alpha > 0);
      requestAnimationFrame(animate);
    }
    animate();

    const handleInteraction = (e) => {
      const rect = hero.getBoundingClientRect();
      let clientX, clientY;

      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      ripples.push({
        x: clientX - rect.left,
        y: clientY - rect.top,
        radius: 0,
        speed: 1.5,
        alpha: 0.4
      });

      // 3D Tilt Effect
      const moveX = (clientX / window.innerWidth - 0.5) * 10;
      const moveY = (clientY / window.innerHeight - 0.5) * 10;
      const content = hero.querySelector(".hero-content");
      if (content) {
        content.style.transform = `perspective(800px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
      }
    };

    window.addEventListener("mousemove", handleInteraction);
    hero.addEventListener("touchstart", handleInteraction);

    hero.addEventListener("mouseleave", () => {
      const content = hero.querySelector(".hero-content");
      if (content) {
        content.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
      }
    });

    hero.addEventListener("touchend", () => {
      const content = hero.querySelector(".hero-content");
      if (content) {
        content.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
      }
    });
  }

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
  }
};
