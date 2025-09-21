document.addEventListener('DOMContentLoaded', () => {
  const playPauseBtn = document.getElementById('play-pause-btn');
  const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const trackNameElement = document.getElementById('track-name');
  const statusElement = document.getElementById('player-status');
  const audio = new Audio();

  // Playlist
  const playlist = [
    { src: '/sounds/ambient-loop.mp3', name: 'Ambience By Khayyat' },
    { src: '/sounds/future.mp3', name: 'Future By Khayyat' },
    { src: '/sounds/thoughts.mp3', name: 'Thoughts By Khayyat' },
    { src: '/sounds/night.mp3', name: 'Night By Khayyat' },
    { src: '/sounds/replicant.mp3', name: 'Replicant By Khayyat' },
    { src: '/sounds/starry.mp3', name: 'Starry By Khayyat' },
  ];
  let currentTrackIndex = 0;

  // --- Helpers ---
  const loadTrack = (index) => {
    const track = playlist[index];
    audio.src = track.src;
    audio.load();
    trackNameElement.textContent = track.name;
    if (statusElement) statusElement.textContent = 'Paused';
  };

  const playTrack = () => {
    audio.play().catch(() => {
      // autoplay blocked until user interacts
    });
    if (playPauseBtn) {
      playPauseBtn.classList.add('playing');
      playPauseBtn.querySelector('.play-icon')?.classList.add('hidden');
      playPauseBtn.querySelector('.pause-icon')?.classList.remove('hidden');
    }
    if (statusElement) statusElement.textContent = 'Now Playing';
  };

  const pauseTrack = () => {
    audio.pause();
    if (playPauseBtn) {
      playPauseBtn.classList.remove('playing');
      playPauseBtn.querySelector('.play-icon')?.classList.remove('hidden');
      playPauseBtn.querySelector('.pause-icon')?.classList.add('hidden');
    }
    if (statusElement) statusElement.textContent = 'Paused';
  };

  // Initial load of the first track (start paused)
  loadTrack(currentTrackIndex);
  pauseTrack();

  // --- Auto-advance when track ends ---
  audio.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playTrack();
  });

  // --- Button logic ---
  playPauseBtn?.addEventListener('click', () => {
    if (audio.paused) {
      playTrack();
    } else {
      pauseTrack();
    }
  });

  muteUnmuteBtn?.addEventListener('click', () => {
    audio.muted = !audio.muted;
    const up = muteUnmuteBtn.querySelector('.volume-up-icon');
    const mute = muteUnmuteBtn.querySelector('.volume-mute-icon');
    if (audio.muted) {
      up?.classList.add('hidden');
      mute?.classList.remove('hidden');
    } else {
      mute?.classList.add('hidden');
      up?.classList.remove('hidden');
    }
  });

  prevBtn?.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    playTrack();
  });

  nextBtn?.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playTrack();
  });
});
