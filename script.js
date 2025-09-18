/* ========== Hero Animation ========== */
const hero = document.querySelector('.hero-content');
const heroVideo = document.querySelector('.hero-video');

document.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    hero.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.02)`;
    heroVideo.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px) scale(1.05)`;
});

/* ========== Populate Releases (Horizontal Scroll) ========== */

const allReleases = [
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

const releasesGrid = document.getElementById('releases');
const createReleaseElement = (release) => {
    const releaseLink = document.createElement('a');
    releaseLink.href = release.link;
    releaseLink.setAttribute('data-title', release.title);
    
    const releaseImage = document.createElement('img');
    releaseImage.src = release.cover;
    releaseImage.alt = release.title;

    releaseLink.appendChild(releaseImage);
    return releaseLink;
};

// Populate all releases at once for horizontal scroll
allReleases.forEach(release => {
    releasesGrid.appendChild(createReleaseElement(release));
});

/* ========== Infinite Scroll for Press ========== */

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

const pressGrid = document.getElementById('press-grid');
const pressPerPage = 6;
let pressLoaded = 0;

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
