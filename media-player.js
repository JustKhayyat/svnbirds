document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('media-player');
    const handle = document.getElementById('player-handle');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Draggable functionality
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

        // Touch events for mobile dragging
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
            const isPlaying = playPauseBtn.classList.toggle('playing');
            const playIcon = playPauseBtn.querySelector('.play-icon');
            const pauseIcon = playPauseBtn.querySelector('.pause-icon');
            if (isPlaying) {
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            } else {
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            }
        });
    }

    // Mute/Unmute button logic
    if (muteUnmuteBtn) {
        muteUnmuteBtn.addEventListener('click', () => {
            const isMuted = muteUnmuteBtn.classList.toggle('muted');
            const volumeUpIcon = muteUnmuteBtn.querySelector('.volume-up-icon');
            const volumeMuteIcon = muteUnmuteBtn.querySelector('.volume-mute-icon');
            if (isMuted) {
                volumeUpIcon.classList.add('hidden');
                volumeMuteIcon.classList.remove('hidden');
            } else {
                volumeUpIcon.classList.remove('hidden');
                volumeMuteIcon.classList.add('hidden');
            }
        });
    }

    // Prev/Next button logic (Placeholder)
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            console.log('Previous track clicked');
            // Add your logic to switch to the previous track
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            console.log('Next track clicked');
            // Add your logic to switch to the next track
        });
    }
});
