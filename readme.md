# 💖 Romantic QR Web Project – AI Agent README

## 🎯 PROJECT GOAL

Build a simple but emotional web experience:

Flow:

1. User scans QR code
2. Opens login page
3. Inputs:
   - Username (custom name set by owner)
   - Password (birthday)

4. Show loading animation (emotional delay)
5. Redirect to video page
6. Play local video (stored in project folder)

---

## ⚠️ CORE DEVELOPMENT RULES (VERY IMPORTANT)

### 1. NEVER BREAK EXISTING FEATURES

- DO NOT rewrite entire files unless necessary
- ALWAYS extend from existing code
- KEEP current logic working before adding new features

---

### 2. ITERATIVE DEVELOPMENT ONLY

- Every update MUST:
  - Build on top of previous version
  - Not restart from scratch

- If code is bad → REFACTOR, not REBUILD

---

### 3. SINGLE SOURCE OF TRUTH

- ONLY 1 README.md file is allowed
- ALL progress must be logged here
- DO NOT create multiple documentation files

---

### 4. PROGRESS TRACKING (MANDATORY)

After EACH change, append:

```
## 🔄 Progress Log

### [TIMESTAMP]

✔ What was added:
- ...

🔧 What was modified:
- ...

🐞 Bugs fixed:
- ...

📌 Next step:
- ...
```

---

### 5. FILE STRUCTURE (STRICT)

```
/project
 ├── index.html        # Login page
 ├── video.html        # Video page
 ├── style.css         # Global styles
 ├── script.js         # Logic
 ├── assets/
 │     ├── video.mp4   # Main video
 │     ├── music.mp3   # Optional
 │     └── images/
```

---

### 6. VIDEO HANDLING (IMPORTANT)

- Video MUST be loaded from local folder:
  `/assets/video.mp4`
- DO NOT use external links unless specified
- Optimize for fast loading

---

### 7. UI/UX REQUIREMENTS

#### Login Page:

- Clean, romantic UI
- Background (image or gradient)
- Smooth input interaction
- Button click animation

#### Loading State:

- MUST exist
- Minimum 2–4 seconds delay
- Animated (text / progress / fade)

#### Video Page:

- Auto play video
- Optional message below
- Clean and emotional layout

---

### 8. CODE STYLE RULES

- Use **vanilla HTML/CSS/JS only**
- No frameworks unless explicitly requested
- Keep code readable and modular
- Separate logic (JS) and UI (HTML/CSS)

---

### 9. SECURITY (LIGHTWEIGHT)

- Hardcoded credentials are acceptable (private use)
- Do NOT over-engineer backend

---

### 10. PERFORMANCE

- Keep total load fast
- Avoid heavy libraries
- Optimize animations (CSS preferred)

---

## 🚀 DEVELOPMENT PHASES

### Phase 1 – Basic Structure

- Create HTML pages
- Setup navigation flow

### Phase 2 – Login Logic

- Validate username/password
- Redirect on success

### Phase 3 – Loading Animation

- Add delay + animation

### Phase 4 – Video Page

- Embed local video
- Add message

### Phase 5 – Polish

- Animations
- UI improvements
- Romantic effects (hearts, glow, etc.)

---

## ❌ WHAT NOT TO DO

- ❌ Do NOT delete working features
- ❌ Do NOT create multiple README files
- ❌ Do NOT restart project from scratch
- ❌ Do NOT overcomplicate logic
- ❌ Do NOT use backend unless asked

---

## 💡 OPTIONAL ENHANCEMENTS

- Floating hearts animation
- Background music
- Hidden message reveal
- "Click to continue" interactions
- Cinematic transitions

---

## 📌 CURRENT STATUS

```
Status: ✅ FULLY COMPLETE - All Phases Done
```

---

## 🔄 Progress Log

### [2026-03-19 - Phase 1 Complete]

✔ What was added:

- /assets/ directory structure created
- /assets/images/ subdirectory created
- index.html (Login page with form)
- video.html (Video player page)
- style.css (Global styles + animations)
- script.js (Login validation + loading animation)

🔧 What was modified:

- None (new files only)

🐞 Bugs fixed:

- None

📌 Next step:

- Implement Phase 2: Login logic

---

### [2026-03-19 - Phase 2 Complete]

✔ What was added:

- Login form validation logic in script.js
- Username/password hardcoded validation
- Error message display on invalid login
- Smooth form animations and transitions

🔧 What was modified:

- index.html: Added form structure
- script.js: Added validateLogin() function
- style.css: Added login card animations

🐞 Bugs fixed:

- None

📌 Next step:

- Phase 3: Add loading animation with floating hearts

---

### [2026-03-19 - Phase 3 Complete]

✔ What was added:

- Floating hearts animation in loading overlay
- createFloatingHearts() function with staggered timing
- floatUp CSS animation for hearts with rotation
- Emotional loading effect with 5 different heart emojis
- Drop shadow glow effect on hearts

🔧 What was modified:

- script.js: Enhanced showLoadingAnimation() with floating hearts
- style.css: Added floating-heart class and floatUp animation

🐞 Bugs fixed:

- None

📌 Next step:

- Phase 4: Implement video page

---

### [2026-03-19 - Phase 4 Complete]

✔ What was added:

- video.html with responsive video player
- Video wrapper with aspect ratio
- Message section with romantic text
- Video auto-play functionality in script.js
- Full responsive design for mobile and desktop

🔧 What was modified:

- video.html: Video page created with proper structure
- style.css: Added video-page classes and responsive video wrapper
- script.js: Added video auto-play logic with error handling

🐞 Bugs fixed:

- None

📌 Next step:

- Phase 5: Polish UI with cinematic effects

---

### [2026-03-19 - Phase 5 Complete - PROJECT FINISHED ✅]

✔ What was added:

- Animated background gradient shifts
- Enhanced visual effects with backdrop filters
- Gradient text on headings (love text effect)
- Improved button with glow effects
- Cinematic video page with overlay gradient
- Better shadow and glow effects throughout
- Floating hearts with rotation and drop shadows
- Improved loading spinner with glow effect
- Meta tags for better page title and theme color
- Input field improvements (focus states, hover effects)
- Button disable state during login
- Better error handling with password clearing

🔧 What was modified:

- index.html: Added meta tags, improved form with proper attributes
- video.html: Enhanced with meta tags, video controls optimization
- style.css: MAJOR POLISH - Added animated backgrounds, gradients, glows, improved animations
- script.js: Better event handling, button state management, improved error handling

🐞 Bugs fixed:

- Prevented multiple form submissions by disabling button
- Better auto-play video error handling
- Form error display now properly shown/hidden

📌 Project Status: ✅ FULLY COMPLETE AND PRODUCTION READY

---

### [2026-03-19 - UI Enhancement: Custom Logo/Avatar]

✔ What was added:

- `/assets/login/` directory created
- `avatar.svg` placeholder image for login page
- `.logo` CSS class for avatar wrapper styling
- `.logo img` styling with centered avatar appearance (120x120px, circular)
- Drop shadow glow effect on avatar image
- Floating animation inherited from previous design

🔧 What was modified:

- index.html: Replaced `<h1 class="title">💖</h1>` with `<div class="logo"><img src="assets/login/avatar.svg" alt="Avatar Logo" /></div>`
- style.css: Added `.logo` and `.logo img` classes with smooth animations and glow effects

🐞 Bugs fixed:

- None (existing login logic preserved)

📌 Next step:

- User can replace `/assets/login/avatar.svg` with their custom image (PNG, JPG, etc.)
- Image path: `/assets/login/avatar.png` or any format

───

### [2026-03-19 - Major UI Enhancement: Animations & Decorations]

✔ What was added:

- **Snowflake Effect:** 20 falling snowflakes with random timing, positions, and sizes
- **Animated Title:** "Hello Meridiem" slides from RIGHT → CENTER → LEFT (5s loop)
- **Side Decorations:** Left and right floating decorative elements (SVG art)
- **Background Image:** Romantic gradient background with overlay for readability
- **Avatar Enhancements:**
  - Increased size to 150×150px
  - Added border and improved glow effect
  - Added hover scale animation (1.08x)
  - Better shadow and visual depth
- **CSS Animations:**
  - `floatLeft` / `floatRight`: Decorative side images floating
  - `slideTitle`: Title animation (right to center to left)
  - `fall`: Snowflake falling animation
  - `logoFloat`: Enhanced avatar floating
- **New Asset Files:**
  - `/assets/login/left.svg` - Left decoration
  - `/assets/login/right.svg` - Right decoration
  - `/assets/login/bg.svg` - Background gradient

🔧 What was modified:

- index.html:
  - Added background div
  - Added side image decorations
  - Added snowflake container
  - Changed welcome title to "Hello Meridiem" with animation wrapper
- style.css:
  - Added `.login-bg` for background styling
  - Added `.side-image`, `.side-left`, `.side-right` classes
  - Added `.snowflakes` and `.snowflake` classes with fall animation
  - Added `.animated-title` with slide animation
  - Updated `.logo img` sizing and animations
  - Enhanced responsive media queries (768px breakpoint for side images)
- script.js:
  - Added `createSnowflakes()` function
  - Uses ❄, ✦, ✧, ⋆ symbols for snowflakes
  - Auto-initializes on page load

🐞 Bugs fixed:

- None (all existing login logic preserved)

📌 Features:

- ✅ Responsive design (hides side images on mobile <768px)
- ✅ Pure CSS & JS (no heavy libraries)
- ✅ Romantic atmosphere with animations
- ✅ All original functionality intact
- ✅ Hover effects on avatar for interactivity

📌 User Action Items:

- Replace `/assets/login/left.svg` with custom left decoration
- Replace `/assets/login/right.svg` with custom right decoration
- Replace `/assets/login/bg.svg` with custom background
- Modify "Hello Meridiem" text in index.html if needed

---

## 🎯 FINAL CHECKLIST

- ✅ Phase 1: Project structure created
- ✅ Phase 2: Login logic with validation
- ✅ Phase 3: Loading animation with floating hearts
- ✅ Phase 4: Video page with auto-play
- ✅ Phase 5: Full UI polish with cinematic effects
- ✅ UI Enhancement: Custom logo/avatar on login page
- ✅ Major UI Enhancement: Animations, snowflakes, side art, background

---

## 💾 PROJECT DELIVERABLES

### File Structure:

```
RomanticWeb/
├── index.html          # Login page
├── video.html          # Video page
├── style.css           # Global styles
├── script.js           # All logic
├── readme.md           # Documentation
└── assets/
    ├── video.mp4       # [User must add their video]
    └── images/
```

### Credentials (Example):

- **Username:** love
- **Password:** 2000-01-01

_(Modify VALID_USERNAME and VALID_PASSWORD in script.js)_

---

## ❤️ FINAL NOTE

This is not just a website.
This is an emotional experience.

Every animation, delay, and transition
must make the user feel something.

The project is now complete and ready for use!

---
