document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('media-player');
    const handle = document.getElementById('player-handle');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const trackNameElement = document.getElementById('track-name');
    const audio = new Audio(); // Create a new audio element

    // The playlist you provided
    const playlist = [
        { src: 'sounds/ambient-loop.mp3', name: 'Ambience By Khayyat' },
        { src: 'sounds/future.mp3', name: 'Future By Khayyat' },
        { src: 'sounds/thoughts.mp3', name: 'Thoughts By Khayyat' },
        { src: 'sounds/night.mp3', name: 'Night By Khayyat' },
        { src: 'sounds/replicant.mp3', name: 'Replicant By Khayyat' },
        { src: 'sounds/starry.mp3', name: 'Starry By Khayyat' },
    ];
    let currentTrackIndex = 0;

    // Function to load and play a track
    const loadTrack = (index) => {
        const track = playlist[index];
        audio.src = track.src;
        audio.load();
        trackNameElement.textContent = track.name;
        audio.play();
        playPauseBtn.classList.add('playing');
        playPauseBtn.querySelector('.play-icon').classList.add('hidden');
        playPauseBtn.querySelector('.pause-icon').classList.remove('hidden');
    };

    // Initial load of the first track
    loadTrack(currentTrackIndex);

    // Draggable functionality
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    if (player && handle) {
        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            player.classList.add('dragging');
            offsetX = e.clientX - player.getBoundingClientRect().left;
            offsetY = e.clientY - player.getBoundingClientRect().top;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            
            player.style.left = `${newX}px`;
            player.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            player.classList.remove('dragging');
        });

        handle.addEventListener('touchstart', (e) => {
            isDragging = true;
            player.classList.add('dragging');
            const touch = e.touches[0];
            offsetX = touch.clientX - player.getBoundingClientRect().left;
            offsetY = touch.clientY - player.getBoundingClientRect().top;
            e.preventDefault();
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            const newX = touch.clientX - offsetX;
            const newY = touch.clientY - offsetY;

            player.style.left = `${newX}px`;
            player.style.top = `${newY}px`;
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
            player.classList.remove('dragging');
        });
    }

    // Play/Pause button logic
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.classList.add('playing');
                playPauseBtn.querySelector('.play-icon').classList.add('hidden');
                playPauseBtn.querySelector('.pause-icon').classList.remove('hidden');
            } else {
                audio.pause();
                playPauseBtn.classList.remove('playing');
                playPauseBtn.querySelector('.play-icon').classList.remove('hidden');
                playPauseBtn.querySelector('.pause-icon').classList.add('hidden');
            }
        });
    }

    // Mute/Unmute button logic
    if (muteUnmuteBtn) {
        muteUnmuteBtn.addEventListener('click', () => {
            audio.muted = !audio.muted;
            if (audio.muted) {
                muteUnmuteBtn.classList.add('muted');
                muteUnmuteBtn.querySelector('.volume-up-icon').classList.add('hidden');
                muteUnmuteBtn.querySelector('.volume-mute-icon').classList.remove('hidden');
            } else {
                muteUnmuteBtn.classList.remove('muted');
                muteUnmuteBtn.querySelector('.volume-up-icon').classList.remove('hidden');
                muteUnmuteBtn.querySelector('.volume-mute-icon').classList.add('hidden');
            }
        });
    }

    // Previous button logic
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
            loadTrack(currentTrackIndex);
        });
    }

    // Next button logic
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(currentTrackIndex);
        });
    }
});
