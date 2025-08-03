window.onload = () => {
  const popup = document.getElementById('welcome-popup');
  popup.classList.remove('hidden');

  // Auto-close after 5 seconds
  setTimeout(() => {
    popup.classList.add('hidden');
  }, 5000);
};

function closePopup() {
  document.getElementById('welcome-popup').classList.add('hidden');
}
// Show popup on load
window.onload = () => {
  document.getElementById('welcome-popup').classList.remove('hidden');

  // XP Bar animation
  const xpFill = document.getElementById('xp-fill');
  setTimeout(() => {
    xpFill.style.width = '95%'; // XP fill to 95%
  }, 1000);
};

function closePopup() {
  document.getElementById('welcome-popup').classList.add('hidden');
}
// Show welcome popup and init XP
window.onload = () => {
  document.getElementById('welcome-popup').classList.remove('hidden');
  updateLevel();
  handleScrollXP();
};

// Popup close
function closePopup() {
  document.getElementById('welcome-popup').classList.add('hidden');
}

// LEVEL SYSTEM
function updateLevel() {
  let currentLevel = parseInt(localStorage.getItem('level')) || 1;
  currentLevel++;
  localStorage.setItem('level', currentLevel);
  document.querySelector('.level').textContent = `🧙 Level ${currentLevel}`;
}

// XP SYSTEM ON SCROLL
function handleScrollXP() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    document.getElementById('xp-fill').style.width = `${Math.min(scrolled, 100)}%`;
  });
}
function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) sound.play();
}

function updateLevel() {
  let currentLevel = parseInt(localStorage.getItem('level')) || 1;
  currentLevel++;
  localStorage.setItem('level', currentLevel);
  document.querySelector('.level').textContent = `🧙 Level ${currentLevel}`;
  playSound('level-up-sound');
  showLevelUpPopup(currentLevel);
}

function handleScrollXP() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    const fill = document.getElementById('xp-fill');
    const xpText = document.getElementById('xp-text');

    fill.style.width = `${Math.min(scrolled, 100)}%`;
    xpText.textContent = `${Math.floor(scrolled)}%`;

    playSound('xp-sound');
  });
}

document.querySelectorAll('.pixel-btn').forEach(btn => {
  btn.addEventListener('mouseover', () => playSound('click-sound'));
});
function showLevelUpPopup(level) {
  const popup = document.getElementById('level-up-popup');
  popup.classList.remove('hidden');
  popup.textContent = `🎉 Level ${level} Reached!`;
  setTimeout(() => popup.classList.add('hidden'), 2000);
}
let level = 1;
let xp = 0;
let quests = 0;

window.addEventListener("scroll", () => {
  xp += 2;
  if (xp >= 100) {
    level++;
    xp = 0;
  }
  document.getElementById("xp").textContent = xp;
  document.getElementById("level").textContent = level;
});

function createPixel() {
  const pixel = document.createElement("div");
  pixel.className = "pixel";
  pixel.style.left = Math.random() * window.innerWidth + "px";
  pixel.style.top = "100vh";
  document.body.appendChild(pixel);
  setTimeout(() => pixel.remove(), 6000);
}

setInterval(createPixel, 300);

// Click character to trigger game (assign this later to your sprite)
function openGame() {
  document.getElementById("miniGame").style.display = "block";
}

function closeGame() {
  document.getElementById("miniGame").style.display = "none";
}
let uploadCount = localStorage.getItem("uploadCount") || 0;
document.getElementById("uploadCount").innerText = uploadCount;

// Call this function when user successfully uploads a project
function onProjectUpload() {
  uploadCount++;
  document.getElementById("uploadCount").innerText = uploadCount;
  localStorage.setItem("uploadCount", uploadCount);

  // Optional: increase XP/Quests here too
  completeQuest(); // already defined
  const popup = document.getElementById("questPopup");
popup.classList.add("show");
setTimeout(() => popup.classList.remove("show"), 2000);

}
