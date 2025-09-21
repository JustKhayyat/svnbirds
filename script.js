(() => {
  // =================== DATA ===================
  const allReleases = [
    { title: "PRICE", link: "https://music.empi.re/price", cover: "/covers/price.jpg", artist: "Montiyago" },
    { title: "HALA", link: "https://music.empi.re/hala", cover: "/covers/hala.jpg", artist: "Khayyat, Ntitled" },
    { title: "KSHFF", link: "https://music.empi.re/kshff", cover: "/covers/kshff.jpg", artist: "Montiyago, Khayyat" },
    { title: "Mozart", link: "https://music.empi.re/mozart", cover: "/covers/mozart.jpg", artist: "Montiyago" },
    { title: "Shark", link: "https://music.empi.re/shark", cover: "/covers/montiyago-shark.jpeg", artist: "Montiyago, Big Moe" },
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
    link.href = a.link;
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
    allReleases.forEach(r => container.appendChild(createReleaseElement(r)));
  };

  const populateArtists = () => {
    const grid = document.getElementById('artist-grid');
    if (!grid) return;
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
    const artistName = document.body.dataset.artistName;
    if (!artistName) return;
    const releases = allReleases.filter(r => r.artist.split(',').map(n => n.trim()).includes(artistName));
    releases.forEach(r => container.appendChild(createReleaseElement(r)));
  };

  // =================== HERO VIDEO ===================
  const initHeroVideo = () => {
    const video = document.querySelector(".hero-video");
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    try { video.play(); } catch { /* autoplay blocked */ }
  };

  // =================== PLAYER TOGGLE ===================
  const initPlayerToggle = () => {
    const playerToggle = document.getElementById('player-toggle');
    const playerFrame = document.getElementById('player-frame');
    let isExpanded = true;

    const updatePlayer = () => {
      playerFrame.style.height = isExpanded ? '80px' : '30px';
      playerToggle.textContent = isExpanded ? '▲' : '▼';
    };

    playerToggle.addEventListener('click', () => {
      isExpanded = !isExpanded;
      updatePlayer();
    });

    updatePlayer();
  };

  // =================== PAGE INIT ===================
  const initPage = () => {
    initHeroVideo();
    initPlayerToggle();

    const artistName = document.body.dataset.artistName;
    if (artistName) {
      populateArtistDiscography();
    } else {
      populateReleases('releases');
      populateArtists();
      populatePress();
    }
  };

  document.addEventListener('DOMContentLoaded', initPage);

  // =================== AJAX NAVIGATION ===================
  const initAjaxNavigation = () => {
    const contentContainer = document.getElementById('page-content');
    if (!contentContainer) return;

    const fadeDuration = 300;
    const isInternalLink = link =>
      link.hostname === window.location.hostname &&
      !link.hasAttribute("target") &&
      !link.href.includes("#");

    const fadeOut = el => new Promise(resolve => {
      el.style.transition = `opacity ${fadeDuration}ms`;
      el.style.opacity = 0;
      setTimeout(resolve, fadeDuration);
    });

    const fadeIn = el => new Promise(resolve => {
      el.style.transition = `opacity ${fadeDuration}ms`;
      el.style.opacity = 1;
      setTimeout(resolve, fadeDuration);
    });

    const loadPage = async (url) => {
      try {
        await fadeOut(contentContainer);
        const res = await fetch(url);
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const newContent = doc.querySelector('#page-content');
        if (!newContent) throw new Error("No #page-content found");

        [...doc.body.attributes].forEach(attr => document.body.setAttribute(attr.name, attr.value));
        contentContainer.innerHTML = newContent.innerHTML;

        window.history.pushState({}, "", url);
        initPage();
        await fadeIn(contentContainer);
      } catch (err) {
        console.error("Navigation error:", err);
        window.location.href = url;
      }
    };

    document.addEventListener('click', e => {
      const link = e.target.closest("a");
      if (!link || !isInternalLink(link)) return;
      e.preventDefault();
      loadPage(link.href);
    });

    window.addEventListener('popstate', () => loadPage(window.location.href));
  };

  initAjaxNavigation();

})();
