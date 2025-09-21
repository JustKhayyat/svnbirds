(() => {
  // =================== DATA ===================
  const allReleases = [
    { title: "PRICE", link: "https://music.empi.re/price", cover: "/covers/price.jpg", artist: "Montiyago" },
    { title: "HALA", link: "https://music.empi.re/hala", cover: "/covers/hala.jpg", artist: "Khayyat, Ntitled" },
    { title: "KSHFF", link: "https://music.empi.re/kshff", cover: "/covers/kshff.jpg", artist: "Montiyago, Khayyat" },
    { title: "Mozart", link: "https://music.empi.re/mozart", cover: "/covers/mozart.jpg", artist: "Montiyago" },
    { title: "Shark", link: "https://music.empi.re/montiyago-shark", cover: "/covers/montiyago-shark.jpeg", artist: "Montiyago, Big Moe" },
    { title: "2020 Freestyle", link: "https://www.youtube.com/watch?v=Q4_NPZJoKzU", cover: "/covers/2020-freestyle.jpg", artist: "Soulja, Khayyat" },
    { title: "Donia", link: "https://music.empi.re/donia", cover: "/covers/soulja-donia.jpg", artist: "Soulja" },
    { title: "Argeen", link: "https://music.empi.re/argeen", cover: "/covers/argeen.jpg", artist: "Soulja, 77" },
    { title: "The Top Freestyle", link: "https://music.empi.re/thetopfreestyle", cover: "/covers/the-top-freestyle.jpg", artist: "Montiyago, 77" },
    { title: "Suits", link: "https://music.empi.re/suits", cover: "/covers/suits.jpg", artist: "Soulja, Montiyago, 77" },
    { title: "Ducati", link: "https://music.empi.re/ducati", cover: "/covers/ducati.jpg", artist: "Montiyago, Khayyat, 77" },
    { title: "Cima", link: "https://music.empi.re/cimamontiyago", cover: "/covers/cima-montiyago.jpg", artist: "Montiyago, Big Moe" },
    { title: "Messi", link: "https://music.empi.re/messi", cover: "/covers/messi.jpg", artist: "Soulja, Khayyat" },
    { title: "Tshreen", link: "https://music.empi.re/Tshreen", cover: "/covers/tshreen.jpg", artist: "Soulja" },
    { title: "Decor", link: "https://music.empi.re/decor", cover: "/covers/decor.jpg", artist: "Montiyago, 77" },
    { title: "Dejavu Soulja", link: "https://music.empi.re/dejavu-soulja.jpg", cover: "/covers/dejavu-soulja.jpg", artist: "Soulja, Khayyat" },
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
    { name: "Soulja", link: "soulja", photo: "/media/artists/artist-soulja.png" },
    { name: "Montiyago", link: "montiyago", photo: "/media/artists/artist-montiyago.png" },
    { name: "Khayyat", link: "khayyat", photo: "/media/artists/artist-khayyat.png" },
    { name: "77", link: "seventyseven", photo: "/media/artists/artist-77.png" },
    { name: "Big Moe", link: "bigmoe", photo: "/media/artists/artist-bigmoe.png" }
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
    a.setAttribute('data-title', r.title);
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
    link.setAttribute('data-artist', a.name); // Add data attribute for debugging
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = a.photo;
    img.alt = a.name;
    const name = document.createElement('h3');
    name.textContent = a.name;
    link.appendChild(img);
    link.appendChild(name);
    return link;
  };

  const createPressElement = p => {
    const card = document.createElement('div');
    const link = document.createElement('a');
    link.href = p.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const source = document.createElement('div');
    source.className = 'press-source';
    source.textContent = p.source;
    const title = document.createElement('h3');
    title.textContent = p.title;
    link.appendChild(source);
    link.appendChild(title);
    card.appendChild(link);
    return card;
  };

  // =================== POPULATE SECTIONS ===================
  const populateReleases = containerId => {
    const container = document.getElementById(containerId);
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
    let loaded = 0;
    const perPage = 6;
    const loadMore = () => {
      if (loaded >= allPress.length) return;
      const batch = allPress.slice(loaded, loaded + perPage);
      batch.forEach(p => grid.appendChild(createPressElement(p)));
      loaded += perPage;
    };
    loadMore();
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) loadMore();
    });
  };

  const populateArtistDiscography = () => {
    const container = document.getElementById('discography');
    if (!container) return;
    container.innerHTML = '';
    const artistName = document.body.dataset.artistName;
    if (!artistName) return;
    const releases = allReleases.filter(r => r.artist.split(',').map(n => n.trim()).includes(artistName));
    releases.forEach(r => container.appendChild(createReleaseElement(r)));
  };

  const populateShop = () => {
    const shopContainer = document.getElementById('collection-component-1758190269461');
    if (!shopContainer) return;
    shopContainer.innerHTML = '';
    if (window.ShopifyBuy && typeof initShopify === "function") initShopify();
  };

  // =================== HERO VIDEO ===================
  let heroVideoInitialized = false;
  const initHeroVideo = () => {
    const video = document.querySelector(".hero-video");
    if (!video || heroVideoInitialized) return;
    heroVideoInitialized = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    try { video.play(); } catch {}
  };

  // =================== PLAYER TOGGLE ===================
  let playerInitialized = false;
  const initPlayerToggle = () => {
    if (playerInitialized) return;
    playerInitialized = true;
    const playerToggle = document.getElementById('player-toggle');
    const playerFrame = document.getElementById('player-frame');
    if (!playerToggle || !playerFrame) return;
    let isExpanded = true;
    const updatePlayer = () => {
      playerFrame.style.height = isExpanded ? "80px" : "30px";
      playerToggle.textContent = isExpanded ? "▲" : "▼";
    };
    playerToggle.addEventListener('click', () => {
      isExpanded = !isExpanded;
      updatePlayer();
    });
    updatePlayer();
  };

  // =================== PAGE INIT ===================
  const initPage = () => {
    const artistName = document.body.dataset.artistName;
    if (!artistName) {
      initHeroVideo();
      populateReleases('releases');
      populateArtists();
      populatePress();
      populateShop();
    } else {
      populateArtistDiscography();
    }
    initPlayerToggle();
  };

  // =================== AJAX NAVIGATION ===================
const initNavigation = () => {
  console.log("Initializing navigation...");
  
  // Use event delegation to catch clicks on dynamically created elements
  document.addEventListener('click', async e => {
    const link = e.target.closest('a');
    
    // Skip if not a link or external/mailto links
    if (!link) return;
    if (link.target === "_blank" || link.href.startsWith("mailto:") || link.href.startsWith("tel:")) return;
    if (!link.href.includes(window.location.origin)) return;
    
    console.log("Clicked link:", link.href);
    
    e.preventDefault();
    
    const url = new URL(link.href);
    console.log("Attempting to navigate to:", url.href);
    
    try {
      // Add /index.html to directory paths
      if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
        url.pathname += '/index.html';
      }
      
      const response = await fetch(url.href);
      console.log("Fetch response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const newContent = doc.getElementById('page-content');
      
      if (newContent) {
        console.log("Successfully loaded content for:", url.pathname);
        document.getElementById('page-content').replaceWith(newContent);
        document.body.dataset.artistName = doc.body.dataset.artistName || "";
        
        // Update URL without index.html for clean URLs
        const cleanPath = url.pathname.replace('/index.html', '');
        window.history.pushState({}, "", cleanPath);
        
        initPage();
        window.scrollTo(0, 0);
      } else {
        console.error("No page-content element found in response");
        window.location.href = url.href; // Fallback
      }
    } catch (error) {
      console.error("AJAX navigation failed:", error);
      console.log("Falling back to regular navigation...");
      window.location.href = url.href;
    }
  });
  
  window.addEventListener('popstate', () => {
    console.log("Popstate detected, reloading page");
    window.location.reload();
  });
};

  // =================== INITIALIZE ===================
  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded, initializing...");
    initPage();
    initNavigation();
  });

})();
