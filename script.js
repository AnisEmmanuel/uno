// Game Setup
const themeSelector = document.getElementById('theme-selector');
const music = document.getElementById('bg-music');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

// Theme Change
themeSelector.addEventListener('change', () => {
  document.body.className = '';
  const selected = themeSelector.value;
  if (selected !== 'default') {
    document.body.classList.add('theme-' + selected);
  }
});

// Start Game
startBtn.addEventListener('click', () => {
  music.play();
  // TODO: Initialize game
});

// Restart Game
restartBtn.addEventListener('click', () => {
  location.reload();
});

// TODO: Implement game logic, player setup, turn timer, AI behavior, etc.
