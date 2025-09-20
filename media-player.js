/* ========== Draggable Media Player Functionality with Mobile Support ========== */
document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('media-player');
    const handle = document.getElementById('player-handle');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    const volumeUpIcon = muteUnmuteBtn.querySelector('.volume-up-icon');
    const volumeMuteIcon = muteUnmuteBtn.querySelector('.volume-mute-icon');

    // Make the player draggable on both desktop and mobile
    let isDragging = false;
    let offsetX, offsetY;

    const startDrag = (e) => {
        isDragging = true;
        player.classList.add('dragging');
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        offsetX = clientX - player.getBoundingClientRect().left;
        offsetY = clientY - player.getBoundingClientRect().top;
    };

    const drag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        let newLeft = clientX - offsetX;
        let newTop = clientY - offsetY;

        // Boundary checks to keep the player within the viewport
        const playerRect = player.getBoundingClientRect();
        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft + playerRect.width > window.innerWidth) newLeft = window.innerWidth - playerRect.width;
        if (newTop + playerRect.height > window.innerHeight) newTop = window.innerHeight - playerRect.height;
        
        player.style.left = `${newLeft}px`;
        player.style.top = `${newTop}px`;
    };

    const stopDrag = () => {
        isDragging = false;
        player.classList.remove('dragging');
    };

    // Desktop Events
    handle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);

    // Mobile Events
    handle.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevents page scrolling while dragging
        startDrag(e);
    });
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', stopDrag);

    // Audio Control
    const ambientAudio = new Audio('sounds/ambient-loop.mp3');
    ambientAudio.loop = true;
    ambientAudio.volume = 0.05;

    // A simple playlist for 'skip' functionality
    const playlist = [
        'sounds/ambient-loop.mp3',
        // Add more tracks here
    ];
    let currentTrackIndex = 0;

    const loadTrack = (index) => {
        ambientAudio.src = playlist[index];
        ambientAudio.load();
    };

    const playAudio = () => {
        ambientAudio.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    };

    const pauseAudio = () => {
        ambientAudio.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    };

    // Play/Pause button functionality
    playPauseBtn.addEventListener('click', () => {
        if (ambientAudio.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    });

    // Mute/Unmute functionality
    muteUnmuteBtn.addEventListener('click', () => {
        if (ambientAudio.muted) {
            ambientAudio.muted = false;
            volumeUpIcon.classList.remove('hidden');
            volumeMuteIcon.classList.add('hidden');
        } else {
            ambientAudio.muted = true;
            volumeUpIcon.classList.add('hidden');
            volumeMuteIcon.classList.remove('hidden');
        }
    });

    // Skip functionality
    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        playAudio();
    });

    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        playAudio();
    });
});
