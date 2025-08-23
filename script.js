
const themeSelector = document.getElementById('theme-selector');
const music = document.getElementById('bg-music');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

themeSelector.addEventListener('change', () => {
  document.body.className = '';
  const selected = themeSelector.value;
  document.body.classList.add('theme-' + selected);
});

startBtn.addEventListener('click', () => {
  music.play();
  alert("Game is starting! (Real logic to be added next)");
});

restartBtn.addEventListener('click', () => {
  music.pause();
  music.currentTime = 0;
  location.reload();
});
