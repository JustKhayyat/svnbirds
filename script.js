/* ========== On Load / Main Functionality ========== */
window.onload = () => {
  /* ========== Hero Video & Audio ========== */
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

  // Click sound
  const clickAudio = new Audio('/sounds/click.mp3');
  document.addEventListener('click', () => {
    clickAudio.currentTime = 0;
    clickAudio.play().catch(e => console.log("Click sound play failed:", e));
  });

  /* ========== Data for all releases and artists ========== */
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
    { title: "YUNG – Fresh Sounds from Sudan: 10 Releases", url: "https://thisisyungmea.com/fresh-sounds-from-sudan-10-new-releases-you-need-to-hear/", source: "YUNG" },
    { title: "OkayAfrica – Rise of Sudanese Rap", url: "https://www.okayafrica.com/sudanese-rap-racism-music-industry/", source: "OkayAfrica" },
    { title: "SceneNoise – Montiyago Drops 'Kalam Kteer'", url: "https://m.scenenoise.com/New-Music/Sudanese-Rapper-Montiyago-Releases-Debut-Single-Kalam-Ktee", source: "SceneNoise" },
    { title: "MILLE WORLD – Introducing Rapper Montiyago", url: "https://www.milleworld.com/introducing-genre-bending-sudanese-rapper-montiyago/", source: "MILLE WORLD" },
    { title: "SceneNoise – Arab Songs on Ramy S3", url: "https://scenenoise.com/Features/Here-are-All-the-Arab-Songs-You-Can-Hear-on-Season-Three-of-Ramy", source: "SceneNoise" },
    { title: "SceneNoise – Dafencii & Soulja Unite for Godzilla x Kong", url: "https://scenenoise.com/News/Dafencii-Soulja-Unite-for-Godzilla-x-Kong-The-New-Empire-Anthem", source: "SceneNoise" }
  ];

  /* ========== Populate Main Page Sections ========== */
  function createReleaseElement(release) {
    const link = document.createElement('a');
    link.href = release.link;
    link.setAttribute('data-title', release.title);

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = release.cover;
    img.alt = release.title;

    link.appendChild(img);
    return link;
  }

  function createArtistElement(artist) {
    const link = document.createElement('a');
    link.href = artist.link;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = artist.photo;
    img.alt = artist.name;

    const name = document.createElement('h3');
    name.textContent = artist.name;

    link.appendChild(img);
    link.appendChild(name);
    return link;
  }

  function createPressElement(press) {
    const card = document.createElement('div');
    const link = document.createElement('a');
    link.href = press.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const source = document.createElement('div');
    source.className = 'press-source';
    source.textContent = press.source;

    const title = document.createElement('h3');
    title.textContent = press.title;

    link.appendChild(source);
    link.appendChild(title);
    card.appendChild(link);
    return card;
  }

  function populateReleases() {
    const grid = document.getElementById('releases');
    if (!grid) return;
    allReleases.forEach(r => grid.appendChild(createReleaseElement(r)));
  }

  function populateArtists() {
    const grid = document.getElementById('artist-grid');
    if (!grid) return;
    allArtists.forEach(a => grid.appendChild(createArtistElement(a)));
  }

  function populatePress() {
    const grid = document.getElementById('press-grid');
    if (!grid) return;
    let loaded = 0;
    const perPage = 6;

    function loadMore() {
      if (loaded < allPress.length) {
        const batch = allPress.slice(loaded, loaded + perPage);
        batch.forEach(p => grid.appendChild(createPressElement(p)));
        loaded += perPage;
      }
    }

    loadMore();
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMore();
      }
    });
  }

  function populateArtistDiscography() {
    const grid = document.getElementById('discography');
    if (!grid) return;
    const name = document.body.dataset.artistName;
    const releases = allReleases.filter(r =>
      r.artist && r.artist.split(',').map(n => n.trim()).includes(name)
    );
    releases.forEach(r => grid.appendChild(createReleaseElement(r)));
  }

  if (document.getElementById('discography')) {
    populateArtistDiscography();
  } else {
    populateReleases();
    populateArtists();
    populatePress();
  }

  /* ========== Desktop Mouse Drag to Scroll Releases ========== */
  const releasesContainer = document.querySelector('.releases-container');
  if (releasesContainer) {
    let isDragging = false, startX, scrollLeft;
    releasesContainer.addEventListener('mousedown', e => {
      isDragging = true;
      startX = e.pageX - releasesContainer.offsetLeft;
      scrollLeft = releasesContainer.scrollLeft;
      e.preventDefault();
    });
    releasesContainer.addEventListener('mouseleave', () => isDragging = false);
    releasesContainer.addEventListener('mouseup', () => isDragging = false);
    releasesContainer.addEventListener('mousemove', e => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - releasesContainer.offsetLeft;
      releasesContainer.scrollLeft = scrollLeft - (x - startX) * 2;
    });
  }

  /* ========== AJAX Navigation to Keep Media Player Persistent ========== */
  function initAjaxNavigation() {
    const contentContainer = document.body;

    function isInternalLink(link) {
      return (
        link.hostname === window.location.hostname &&
        !link.hasAttribute("target") &&
        !link.href.includes("#")
      );
    }

    document.addEventListener("click", e => {
      const link = e.target.closest("a");
      if (!link || !isInternalLink(link)) return;

      e.preventDefault();
      const url = link.getAttribute("href");

      fetch(url)
        .then(res => res.text())
        .then(html => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          const newBody = doc.body;
          const playerFrame = document.getElementById("player-frame");

          contentContainer.innerHTML = newBody.innerHTML;
          if (playerFrame) document.body.appendChild(playerFrame);

          window.history.pushState({}, "", url);
          window.onload();
        })
        .catch(err => console.error("Navigation error:", err));
    });

    window.addEventListener("popstate", () => {
      fetch(window.location.href)
        .then(res => res.text())
        .then(html => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          const newBody = doc.body;
          const playerFrame = document.getElementById("player-frame");

          contentContainer.innerHTML = newBody.innerHTML;
          if (playerFrame) document.body.appendChild(playerFrame);

          window.onload();
        });
    });
  }

  initAjaxNavigation();
};
