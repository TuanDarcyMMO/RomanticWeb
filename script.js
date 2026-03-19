// ==================== LOGIN LOGIC ====================

// Hardcoded credentials (private use)
const VALID_USERNAME = "meridiem";
const VALID_PASSWORD = "121207"; // Example birthday

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const loginBtn = document.getElementById("loginBtn");

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

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = "video.html";
    }, 3000);
  } else {
    // Show error message
    errorMessage.textContent = "Sai rồi kìa nhập lại đi ";
    errorMessage.style.display = "block";

    // Clear password field
    document.getElementById("password").value = "";

    // Re-enable button
    loginBtn.disabled = false;
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

// Auto-play video when page loads
if (document.getElementById("videoPlayer")) {
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("videoPlayer");
    // Attempt to auto-play
    video.play().catch((err) => {
      // Auto-play is prevented, user must click to play
      console.log("Note: Auto-play prevented by browser policy");
    });
  });
}
