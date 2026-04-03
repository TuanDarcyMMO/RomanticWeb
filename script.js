// ==================== LOGIN LOGIC ====================

// Hardcoded credentials (private use)
const VALID_USERNAME = "meridiem";
const VALID_PASSWORD = "121207"; // Example birthday

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const loginBtn = document.getElementById("loginBtn");

// ==================== MUSIC PLAYBACK ====================

let isAudioPlaying = false;
let shouldRedirectAfterMusic = false;

function initializeMusic() {
  const bgMusic = document.getElementById("bgMusic");
  const musicModal = document.getElementById("musicModal");
  const skipBtn = document.getElementById("skipBtn");
  const stayBtn = document.getElementById("stayBtn");
  const progressFill = document.getElementById("progressFill");
  const currentTimeSpan = document.getElementById("currentTime");
  const durationSpan = document.getElementById("duration");

  if (!bgMusic) return;

  // Update progress bar
  bgMusic.addEventListener("timeupdate", function () {
    const percent = (bgMusic.currentTime / bgMusic.duration) * 100;
    progressFill.style.width = percent + "%";

    // Update time display
    currentTimeSpan.textContent = formatTime(bgMusic.currentTime);
    durationSpan.textContent = formatTime(bgMusic.duration);
  });

  // When music ends
  bgMusic.addEventListener("ended", function () {
    if (shouldRedirectAfterMusic) {
      redirectToVideo();
    }
  });

  // Skip button
  if (skipBtn) {
    skipBtn.addEventListener("click", function () {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      musicModal.classList.add("hidden");
      redirectToVideo();
    });
  }

  // Stay button
  if (stayBtn) {
    stayBtn.addEventListener("click", function () {
      shouldRedirectAfterMusic = true;
      stayBtn.disabled = true;
      skipBtn.disabled = true;
      stayBtn.style.opacity = "0.6";
      skipBtn.style.opacity = "0.6";
    });
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function redirectToVideo() {
  window.location.href = "video.html";
}

// Initialize music on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMusic);
} else {
  initializeMusic();
}

// ==================== SNOWFLAKE EFFECT ====================

function createSnowflakes() {
  const snowflakesContainer = document.querySelector(".snowflakes");
  const snowflakeSymbols = ["❄", "✦", "✧", "⋆"];

  // Create 20 snowflakes
  for (let i = 0; i < 20; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent =
      snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];

    // Random horizontal position
    snowflake.style.left = Math.random() * 100 + "%";

    // Random animation duration (8-15 seconds)
    const duration = Math.random() * 7 + 8;
    snowflake.style.animationDuration = duration + "s";

    // Random delay for staggered start
    const delay = Math.random() * 5;
    snowflake.style.animationDelay = delay + "s";

    // Random font size for depth
    snowflake.style.fontSize = Math.random() * 0.5 + 0.8 + "em";

    snowflakesContainer.appendChild(snowflake);
  }
}

// Initialize snowflakes when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createSnowflakes);
} else {
  createSnowflakes();
}

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate inputs
  if (validateLogin(username, password)) {
    // Disable button to prevent multiple submissions
    loginBtn.disabled = true;
    loginBtn.textContent = "Loading...";

    // Show loading animation
    showLoadingAnimation();

    // Play background music
    const bgMusic = document.getElementById("bgMusic");
    const musicModal = document.getElementById("musicModal");

    if (bgMusic && musicModal) {
      // Play music after 1.5 seconds (during loading)
      setTimeout(() => {
        bgMusic.play().catch((err) => {
          console.log("Music playback prevented:", err);
        });

        // Show music modal after 2 seconds
        setTimeout(() => {
          musicModal.classList.remove("hidden");
        }, 500);
      }, 1500);
    } else {
      // Fallback: redirect after 3 seconds if no music/modal
      setTimeout(() => {
        redirectToVideo();
      }, 3000);
    }
  } else {
    // Show error message
    errorMessage.textContent = "Sai rồi kìa nhập lại đi ";
    errorMessage.style.display = "block";

    // Clear password field
    document.getElementById("password").value = "";

    // Re-enable button
    loginBtn.disabled = false;
    loginBtn.textContent = "Bắt đầu";
  }
}

function validateLogin(username, password) {
  // Simple validation: check if username and password match
  return (
    username.toLowerCase() === VALID_USERNAME && password === VALID_PASSWORD
  );
}

function showLoadingAnimation() {
  // Create loading overlay
  const overlay = document.createElement("div");
  overlay.className = "loading-overlay";
  overlay.innerHTML = `
        <div class="loading-content">
            <div class="spinner"></div>
            <p>Loading your gift...</p>
        </div>
    `;
  document.body.appendChild(overlay);

  // Add floating hearts
  createFloatingHearts(overlay);

  // Fade out after 2.7 seconds (0.3s before redirect)
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 2700);
}

function createFloatingHearts(container) {
  // Create 5 floating hearts during loading
  const hearts = ["💖", "💕", "💗", "💓", "💞"];

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.textContent = hearts[i % hearts.length];
      heart.style.left = 20 + i * 15 + "%";
      heart.style.bottom = "-10px";
      container.appendChild(heart);

      // Remove heart after animation ends
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }, i * 400); // Stagger hearts
  }
}

// ==================== VIDEO PAGE ====================

// Click to play video
if (document.getElementById("videoPlayer")) {
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("videoPlayer");
    const playBtn = document.getElementById("playBtn");
    const thumbnail = document.getElementById("thumbnail");
    const playButtonOverlay = document.querySelector(".play-button-overlay");
    const videoWrapper = document.getElementById("videoWrapper");

    if (playBtn) {
      playBtn.addEventListener("click", function () {
        // Hide thumbnail and play button
        thumbnail.style.display = "none";
        playButtonOverlay.style.display = "none";

        // Show video
        video.style.display = "block";

        // Play video
        video.play();
      });

      // Also allow clicking on the overlay/wrapper to play
      videoWrapper.addEventListener("click", function (e) {
        if (e.target !== video) {
          playBtn.click();
        }
      });
    }
  });
}
