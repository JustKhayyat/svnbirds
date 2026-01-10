// =================== SCRIPT.JS ===================

(() => {
  // =================== DATA ===================
  const allReleases = [
    { title: "Batta", link: "https://music.empi.re/batta", cover: "/covers/batta.jpg", artist: "Soulja" },
    { title: "Dayman", link: "https://www.youtube.com/watch?v=colTpB12FbQ&list=RDcolTpB12FbQ", cover: "/covers/dayman.jpg", artist: "Soulja" },
    { title: "Location", link: "https://www.youtube.com/watch?v=QTudgVCBS5Q&list=RDQTudgVCBS5Q", cover: "/covers/location.jpg", artist: "Soulja" },
    { title: "HALA", link: "https://music.empi.re/hala", cover: "/covers/hala.jpg", artist: "Khayyat, Ntitled" },
    { title: "MORPHINE", link: "https://music.empi.re/morphine", cover: "/covers/morphine.jpg", artist: "Montiyago" },
    { title: "PRICE", link: "https://www.youtube.com/watch?v=8tr-DIwfLnY&list=RD8tr-DIwfLnY", cover: "/covers/price.jpg", artist: "Montiyago, Big Moe" },
    { title: "KSHFF", link: "https://www.youtube.com/watch?v=4TK4TTx7ivg", cover: "/covers/kshff.jpg", artist: "Montiyago, Khayyat" },
    { title: "Mozart", link: "https://www.youtube.com/watch?v=pR_x9vc-Hrs&list=RDpR_x9vc-Hrs", cover: "/covers/mozart.jpg", artist: "Montiyago" },
    { title: "Shark", link: "https://music.empi.re/montiyago-shark", cover: "/covers/montiyago-shark.jpeg", artist: "Montiyago, Big Moe" },
    { title: "2020 Freestyle", link: "https://www.youtube.com/watch?v=Q4_NPZJoKzU", cover: "/covers/2020-freestyle.jpg", artist: "Soulja, Khayyat" },
    { title: "Donia", link: "https://www.youtube.com/watch?v=iu4SpeoUNZo&list=RDiu4SpeoUNZo", cover: "/covers/soulja-donia.jpg", artist: "Soulja" },
    { title: "Argeen", link: "https://www.youtube.com/watch?v=_3JeOmRsYoM&list=RD_3JeOmRsYoM", cover: "/covers/argeen.jpg", artist: "Soulja, 77" },
    { title: "The Top Freestyle", link: "https://www.youtube.com/watch?v=TRAxVuOSQGw&list=RDTRAxVuOSQGw", cover: "/covers/the-top-freestyle.jpg", artist: "Montiyago, 77" },
    { title: "Suits", link: "https://music.empi.re/suits", cover: "/covers/suits.jpg", artist: "Soulja, Montiyago, 77" },
    { title: "Ducati", link: "https://music.empi.re/ducati", cover: "/covers/ducati.jpg", artist: "Montiyago, Khayyat, 77" },
    { title: "Cima", link: "https://music.empi.re/cimamontiyago", cover: "/covers/cima-montiyago.jpg", artist: "Montiyago, Big Moe" },
    { title: "Messi", link: "https://music.empi.re/messi", cover: "/covers/messi.jpg", artist: "Soulja, Khayyat" },
    { title: "Tshreen", link: "https://music.empi.re/Tshreen", cover: "/covers/tshreen.jpg", artist: "Soulja" },
    { title: "Decor", link: "https://music.empi.re/decor", cover: "/covers/decor.jpg", artist: "Montiyago, 77" },
    { title: "Dejavu", link: "https://youtube.com/playlist?list=PLh6q1kfCoMKOwhm0iEwCdVOlnqHmlc8wQ&si=2xC1bMDVJULFnGPs", cover: "/covers/dejavu-soulja.jpg", artist: "Soulja, Khayyat" },
    { title: "Bader Khol3a", link: "https://music.empi.re/baderkhol3a", cover: "/covers/bader-khol3a.jpg", artist: "Montiyago" },
    { title: "Boba", link: "https://music.empi.re/boba", cover: "/covers/boba.jpg", artist: "Soulja, Khayyat" },
    { title: "Lk Lk", link: "https://music.empi.re/LkLk", cover: "/covers/lk-lk.jpg", artist: "Ntitled, Khayyat" },
    { title: "Fantastic", link: "https://music.empi.re/fantasticsoulja", cover: "/covers/fantastic-soulja.jpg", artist: "Soulja" },
    { title: "Caribby", link: "https://music.empi.re/Caribby", cover: "/covers/caribby.jpg", artist: "Soulja, 77" },
    { title: "Figures", link: "https://music.empi.re/figures", cover: "/covers/figures.jpg", artist: "BeyKey" },
    { title: "Langa", link: "https://music.empi.re/langa", cover: "/covers/langa.jpg", artist: "Khayyat, Tageel" },
    { title: "Qesas", link: "https://music.empi.re/qesas", cover: "/covers/qesas.jpeg", artist: "Soulja" },
    { title: "Charleston", link: "https://www.youtube.com/watch?v=IDZ2r1z96_g", cover: "/covers/charleston.jpeg", artist: "Soulja" }
  ];

  const allArtists = [
    { name: "Soulja", link: "soulja", photo: "/media/artists/artist-soulja.png", spotify: "https://open.spotify.com/artist/soulja", ig: "https://www.instagram.com/souljamusic/" },
    { name: "Montiyago", link: "montiyago", photo: "/media/artists/artist-montiyago.png?v=2", spotify: "https://open.spotify.com/artist/montiyago", ig: "https://www.instagram.com/_montiyago_/" },
    { name: "Khayyat", link: "khayyat", photo: "/media/artists/artist-khayyat.png?v=2", spotify: "https://open.spotify.com/artist/khayyat", ig: "https://www.instagram.com/justkhayyat/" },
    { name: "77", link: "seventyseven", photo: "/media/artists/artist-77.png?v=2", spotify: "https://open.spotify.com/artist/77", ig: "https://www.instagram.com/prodby77/" },
    { name: "Big Moe", link: "bigmoe", photo: "/media/artists/artist-bigmoe.png?v=2", spotify: "https://open.spotify.com/artist/bigmoe", ig: "https://www.instagram.com/bigmoe.dxb/" }
  ];

  const allPress = [
    { title: "GRAMMYS – 5 Independent Record Labels Bringing The Sounds Of The Middle East & North Africa", url: "https://www.grammy.com/news/5-middle-east-north-africa-independent-record-labels-to-know-beirut-red-diamond", source: "GRAMMYS" },
    { title: "Hard Knock Radio – Suhel Nafar on Empowering Palestinian & Arab Artists", url: "https://hardknockradio.org/suhel-nafar-speaks-on-empowering-palestinian-and-arab-music-hip-hop-artists/", source: "Hard Knock Radio" },
    { title: "SceneNoise – 77: The Egyptian Producer Bringing SWANA Together", url: "https://scenenoise.com/Features/77-The-Egyptian-Producer-Bringing-SWANA-Together-from-Malaysia", source: "SceneNoise" },
    { title: "SceneNoise – Artist Spotlight: Soulja, Sudan's Suave Rap Star", url: "https://scenenoise.com/Features/Artist-Spotlight-Soulja-Sudan-s-Suave-Rap-Superstar", source: "SceneNoise" },
    { title: "CairoScene – Labels & Collectives Taking Over XP Nite", url: "https://cairoscene.com/Noise/The-Labels-Collectives-Taking-Over-XP-Nite-in-Riyadh-Dec-7th-9th", source: "CairoScene" },
    { title: "MDLBEAST – Labels at XP Nite in Riyadh", url: "https://mdlbeast.com/xp-feed/music-industry/the-labels-collectives-taking-over-xp-nite-in-riyadh-dec-7th-9th", source: "MDLBEAST" },
    { title: "YUNG – Fresh Sounds from Sudan: 10 Releases", url: "https://thisisyungmea.com/fresh-sounds-from-sudan-10-new-releases-you-need-to-hear/", source: "YUNG" }
  ];

  // =================== ELEMENT CREATORS ===================
  const createReleaseElement = r => {
    const a = document.createElement('a');
    a.href = r.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = r.cover;
    img.alt = r.title;
    a.appendChild(img);
    return a;
  };

  const createArtistElement = a => {
    const link = document.createElement('a');
    link.href = `/${a.link}`;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openArtistPanel(a);
    });
    const img = document.createElement('img');
    img.src = a.photo;
    const name = document.createElement('h3');
    name.textContent = a.name;
    link.appendChild(img);
    link.appendChild(name);
    return link;
  };

  const createPressElement = p => {
    const card = document.createElement('div');
    const link = document.createElement('a');
    link.href = p.url; link.target = "_blank";
    const source = document.createElement('div');
    source.className = 'press-source'; source.textContent = p.source;
    const title = document.createElement('h3');
    title.textContent = p.title;
    link.appendChild(source); link.appendChild(title);
    card.appendChild(link);
    return card;
  };

  // =================== POPULATE FUNCTIONS ===================
  const populateReleases = () => {
    const container = document.getElementById('releases');
    if (!container) return;
    container.innerHTML = '';
    allReleases.forEach(r => container.appendChild(createReleaseElement(r)));
  };

  const populateArtists = () => {
    const grid = document.getElementById('artist-grid');
    if (!grid) return;
    grid.innerHTML = '';
    allArtists.forEach(a => grid.appendChild(createArtistElement(a)));
  };

  const populatePress = () => {
    const grid = document.getElementById('press-grid');
    if (!grid) return;
    grid.innerHTML = '';
    allPress.forEach(p => grid.appendChild(createPressElement(p)));
  };

  const populateArtistDiscography = () => {
    const container = document.getElementById('discography');
    if (!container) return;
    const artistName = document.body.dataset.artistName;
    if (!artistName) return;
    container.innerHTML = '';
    const releases = allReleases.filter(r => r.artist.includes(artistName));
    releases.forEach(r => container.appendChild(createReleaseElement(r)));
  };

  // =================== PANEL & UI LOGIC ===================
  const openArtistPanel = (artist) => {
    const panel = document.getElementById('artist-side-panel');
    const overlay = document.getElementById('panel-overlay');
    document.getElementById('panel-name').textContent = artist.name;
    document.getElementById('panel-image-container').innerHTML = `<img src="${artist.photo}" style="width:100%">`;
    document.getElementById('panel-profile-link').href = `/${artist.link}`;
    document.getElementById('panel-spotify').href = artist.spotify;
    document.getElementById('panel-instagram').href = artist.ig;

    const miniDisco = allReleases.filter(r => r.artist.includes(artist.name)).slice(0, 3);
    const discoContainer = document.getElementById('panel-discography');
    discoContainer.innerHTML = '';
    miniDisco.forEach(r => discoContainer.appendChild(createReleaseElement(r)));

    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const initPage = () => {
    // Check if we are on Home or Artist page
    const artistName = document.body.dataset.artistName;
    if (!artistName) {
      populateReleases();
      populateArtists();
      populatePress();
    } else {
      populateArtistDiscography();
    }

    // Active Nav Highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-btn, .nav-links a').forEach(link => {
      const linkPath = new URL(link.href, window.location.origin).pathname;
      link.classList.toggle('active-page', linkPath === currentPath);
    });

    // Copyright Year
    const yearEl = document.getElementById('current-year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  };

  // =================== NAVIGATION ===================
  const initNavigation = () => {
    const loader = document.getElementById('loading-bar');
    
    document.addEventListener('click', async e => {
      const link = e.target.closest('a');
      if (!link || link.target === "_blank" || !link.href.includes(window.location.origin) || e.defaultPrevented) return;
      
      e.preventDefault();
      if(loader) { loader.style.opacity = '1'; loader.style.width = '30%'; }
      
      try {
        const response = await fetch(link.href);
        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        document.getElementById('page-content').replaceWith(doc.getElementById('page-content'));
        document.body.dataset.artistName = doc.body.dataset.artistName || "";
        document.title = doc.title;
        window.history.pushState({}, "", link.href);
        initPage();
        window.scrollTo(0, 0);
        if(loader) { loader.style.width = '100%'; setTimeout(() => { loader.style.opacity = '0'; loader.style.width = '0%'; }, 400); }
      } catch (err) { window.location.href = link.href; }
    });
  };

  // =================== START ===================
  document.addEventListener('DOMContentLoaded', () => {
    // Side Panel Close
    const closePanel = () => {
        document.getElementById('artist-side-panel')?.classList.remove('open');
        document.getElementById('panel-overlay')?.classList.remove('open');
        document.body.style.overflow = '';
    };
    document.querySelector('.close-panel')?.addEventListener('click', closePanel);
    document.getElementById('panel-overlay')?.addEventListener('click', closePanel);

    // Player Toggle
    const playerToggle = document.getElementById('player-toggle');
    const playerFrame = document.getElementById('player-frame');
    playerToggle?.addEventListener('click', () => {
      playerFrame?.classList.toggle('collapsed');
      playerToggle.textContent = playerFrame?.classList.contains('collapsed') ? "▲" : "▼";
    });

    initPage();
    initNavigation();
  });
})();
