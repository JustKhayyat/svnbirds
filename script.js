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

/* ========== Infinite Scroll for Releases ========== */

// This is your dummy release data. Replace this with your actual release information.
const allReleases = [
    { title: 'Title One', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Two', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Three', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Four', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Five', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Six', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Seven', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Eight', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Nine', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Ten', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Eleven', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Twelve', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Thirteen', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Fourteen', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Fifteen', image: 'https://placehold.co/600x600/png' },
    { title: 'Title Sixteen', image: 'https://placehold.co/600x600/png' },
];

const releasesGrid = document.getElementById('releases');
const releasesPerPage = 8;
let releasesLoaded = 0;

const createReleaseElement = (release) => {
    const releaseLink = document.createElement('a');
    releaseLink.href = '#'; // Replace with a link to the release page
    releaseLink.setAttribute('data-title', release.title);
    
    const releaseImage = document.createElement('img');
    releaseImage.src = release.image;
    releaseImage.alt = release.title;

    releaseLink.appendChild(releaseImage);
    return releaseLink;
};

const loadMoreReleases = () => {
    // Only load more if there are releases left to load
    if (releasesLoaded < allReleases.length) {
        const nextBatch = allReleases.slice(releasesLoaded, releasesLoaded + releasesPerPage);
        nextBatch.forEach(release => {
            releasesGrid.appendChild(createReleaseElement(release));
        });
        releasesLoaded += releasesPerPage;
    }
};

// Initial load
loadMoreReleases();

// Infinite scroll logic
window.addEventListener('scroll', () => {
    // Check if user has scrolled near the bottom of the page
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;
    if (scrollPosition >= documentHeight - 500) {
        loadMoreReleases();
    }
});
