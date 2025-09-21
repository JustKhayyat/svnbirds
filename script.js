(() => {
  // =================== DATA ===================
  const allReleases = [/* your current releases data */];
  const allArtists = [/* your current artists data */];
  const allPress = [/* your current press data */];

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
    try { video.play(); } catch { }
  };

  // =================== DESKTOP DRAG SCROLL ===================
  const initDragScroll = () => {
    const releasesContainer = document.querySelector('.releases-container');
    if (!releasesContainer) return;
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
  };

  // =================== PERSISTENT PLAYER COLLAPSE/EXPAND ===================
  const initPlayerToggle = () => {
    const wrapper = document.getElementById('player-wrapper');
    const toggleBtn = document.querySelector('#player-toggle button');
    if (!wrapper || !toggleBtn) return;

    // Default to expanded
    wrapper.classList.add('expanded');

    toggleBtn.addEventListener('click', () => {
      if (wrapper.classList.contains('expanded')) {
        wrapper.classList.remove('expanded');
        wrapper.classList.add('collapsed');
        toggleBtn.textContent = '▲';
      } else {
        wrapper.classList.remove('collapsed');
        wrapper.classList.add('expanded');
        toggleBtn.textContent = '▼';
      }
    });
  };

  // =================== PAGE INIT ===================
  const initPage = () => {
    initHeroVideo();
    initDragScroll();

    const artistName = document.body.dataset.artistName;
    if (artistName) {
      populateArtistDiscography();
    } else {
      populateReleases('releases');
      populateArtists();
      populatePress();
    }

    // Init persistent player toggle
    initPlayerToggle();
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

    const loadPage = async url => {
      try {
        await fadeOut(contentContainer);
        const res = await fetch(url);
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const newContent = doc.querySelector('#page-content');
        if (!newContent) throw new Error("No #page-content found in response");
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
