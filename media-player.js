document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('media-player');
    const handle = document.getElementById('player-handle'); // kept for compatibility but not required
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const trackNameElement = document.getElementById('track-name');
    const audio = new Audio(); // Create a new audio element

    // Playlist
    const playlist = [
        { src: 'sounds/ambient-loop.mp3', name: 'Ambience By Khayyat' },
        { src: 'sounds/future.mp3', name: 'Future By Khayyat' },
        { src: 'sounds/thoughts.mp3', name: 'Thoughts By Khayyat' },
        { src: 'sounds/night.mp3', name: 'Night By Khayyat' },
        { src: 'sounds/replicant.mp3', name: 'Replicant By Khayyat' },
        { src: 'sounds/starry.mp3', name: 'Starry By Khayyat' },
    ];
    let currentTrackIndex = 0;

    // --- Helpers ---
    const loadTrack = (index) => {
        const track = playlist[index];
        audio.src = track.src;
        audio.load();
        trackNameElement.textContent = track.name;
    };

    const playTrack = () => {
        audio.play().catch(e => {
            // autoplay may be blocked; user must press play
        });
        playPauseBtn.classList.add('playing');
        if (playPauseBtn.querySelector('.play-icon')) playPauseBtn.querySelector('.play-icon').classList.add('hidden');
        if (playPauseBtn.querySelector('.pause-icon')) playPauseBtn.querySelector('.pause-icon').classList.remove('hidden');
    };

    const pauseTrack = () => {
        audio.pause();
        playPauseBtn.classList.remove('playing');
        if (playPauseBtn.querySelector('.play-icon')) playPauseBtn.querySelector('.play-icon').classList.remove('hidden');
        if (playPauseBtn.querySelector('.pause-icon')) playPauseBtn.querySelector('.pause-icon').classList.add('hidden');
    };

    // Initial load of the first track, but keep paused
    loadTrack(currentTrackIndex);
    pauseTrack();

    // --- Draggable functionality (anywhere on the player EXCEPT controls) ---
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const isInteractiveTarget = (target) => {
        return target.closest && (
            target.closest('#player-controls') ||
            target.closest('button') ||
            target.closest('a') ||
            target.closest('input') ||
            target.closest('label')
        );
    };

    if (player) {
        player.addEventListener('mousedown', (e) => {
            if (isInteractiveTarget(e.target)) return;
            isDragging = true;
            player.classList.add('dragging');
            offsetX = e.clientX - player.getBoundingClientRect().left;
            offsetY = e.clientY - player.getBoundingClientRect().top;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;
            newX = Math.max(0, Math.min(newX, window.innerWidth - player.offsetWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - player.offsetHeight));
            player.style.left = `${newX}px`;
            player.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            player.classList.remove('dragging');
        });

        player.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);
            if (isInteractiveTarget(target)) return;
            isDragging = true;
            player.classList.add('dragging');
            offsetX = touch.clientX - player.getBoundingClientRect().left;
            offsetY = touch.clientY - player.getBoundingClientRect().top;
            e.preventDefault();
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            let newX = touch.clientX - offsetX;
            let newY = touch.clientY - offsetY;
            newX = Math.max(0, Math.min(newX, window.innerWidth - player.offsetWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - player.offsetHeight));
            player.style.left = `${newX}px`;
            player.style.top = `${newY}px`;
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
            player.classList.remove('dragging');
        });
    }

    // --- Button logic ---
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                playTrack();
            } else {
                pauseTrack();
            }
        });
    }

    if (muteUnmuteBtn) {
        muteUnmuteBtn.addEventListener('click', () => {
            audio.muted = !audio.muted;
            if (audio.muted) {
                muteUnmuteBtn.classList.add('muted');
                const up = muteUnmuteBtn.querySelector('.volume-up-icon');
                const mute = muteUnmuteBtn.querySelector('.volume-mute-icon');
                if (up) up.classList.add('hidden');
                if (mute) mute.classList.remove('hidden');
            } else {
                muteUnmuteBtn.classList.remove('muted');
                const up = muteUnmuteBtn.querySelector('.volume-up-icon');
                const mute = muteUnmuteBtn.querySelector('.volume-mute-icon');
                if (mute) mute.classList.add('hidden');
                if (up) up.classList.remove('hidden');
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
            loadTrack(currentTrackIndex);
            playTrack();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(currentTrackIndex);
            playTrack();
        });
    }
});
