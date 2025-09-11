// ===================================================================================
//  1. ELEMENT SELECTORS
// ===================================================================================

const startButton = document.getElementById("feeling-btn");
const feelingsContainer = document.getElementById("feelings-container");
const feelingButtons = document.querySelectorAll(".feeling-btn");
const verseDisplay = document.getElementById("verse-display");
const randomVerseButton = document.getElementById("random-verse-btn");
const prayerButton = document.getElementById("prayer-btn");
const dailyPrayerBtn = document.getElementById('daily-prayer-btn');

// Prayer Request Popup Elements
const prayerPopup = document.getElementById("prayer-popup");
const prayerNameInput = document.getElementById("prayer-name");
const prayerTextInput = document.getElementById("prayer-text");
const closePrayerPopupBtn = document.getElementById("close-popup");

// Daily Prayer Popup Elements
const dailyPrayerPopup = document.getElementById("daily-prayer-popup");
const dailyPrayerTextDisplay = document.getElementById("prayer-text-display");
const closeDailyPrayerBtn = document.getElementById("close-daily-prayer");
const markPrayerReadBtn = document.getElementById("mark-read-btn");

// ===================================================================================
//  2. DATA: VERSES & PRAYERS
// ===================================================================================

const verses = {
  // ... (same as before, omitted for brevity)
  // Keep your verses object here
};

const dailyPrayers = [
  // ... (same as before, omitted for brevity)
  // Keep your dailyPrayers array here
];

// ===================================================================================
//  3. CORE FUNCTIONS
// ===================================================================================

/**
 * Toggles the visibility of the feelings button container.
 */
function toggleFeelingsContainer() {
  verseDisplay.style.display = "none";
  const isVisible = feelingsContainer.style.display === "flex";
  feelingsContainer.style.display = isVisible ? "none" : "flex";
}

/**
 * Selects and displays a random verse based on the chosen feeling.
 * @param {string} feeling - The feeling (e.g., 'Angry', 'Peaceful').
 */
function displayVerseForFeeling(feeling) {
  const verseArray = verses[feeling];
  if (!verseArray || verseArray.length === 0) {
    verseDisplay.innerHTML = "<p>Verses for this feeling are coming soon.</p>";
    verseDisplay.style.display = "block";
    feelingsContainer.style.display = "none";
    return;
  }
  const randomIndex = Math.floor(Math.random() * verseArray.length);
  const randomVerse = verseArray[randomIndex];
  verseDisplay.innerHTML = `<p>${randomVerse}</p>`;
  verseDisplay.style.display = "block";
  feelingsContainer.style.display = "none";
}

/**
 * Selects and displays a random verse from all categories.
 */
function displayRandomVerse() {
  feelingsContainer.style.display = "none";
  const allVerses = Object.values(verses).flat();
  const randomIndex = Math.floor(Math.random() * allVerses.length);
  const randomVerse = allVerses[randomIndex];
  verseDisplay.style.display = "block";
  verseDisplay.innerHTML = `<p>${randomVerse}</p>`;
}

/**
 * Manages the prayer request popup.
 */
const prayerRequestManager = {
  open: () => prayerPopup.style.display = "block",
  close: () => prayerPopup.style.display = "none",
  send: () => {
    const prayer = prayerTextInput.value;
    if (prayer.trim()) {
      alert("Your prayer request has been received. May God bless you!");
      prayerRequestManager.close();
      prayerNameInput.value = "";
      prayerTextInput.value = "";
    } else {
      alert("Please enter your prayer request.");
    }
  }
};

/**
 * Manages the daily prayer popup.
 */
const dailyPrayerManager = {
  getPrayer: () => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return dailyPrayers[dayOfYear % dailyPrayers.length];
  },
  open: () => {
    if (dailyPrayerPopup && dailyPrayerTextDisplay) {
      dailyPrayerTextDisplay.textContent = dailyPrayerManager.getPrayer();
      dailyPrayerPopup.style.display = "block";
    }
  },
  close: () => {
    if (dailyPrayerPopup) {
      dailyPrayerPopup.style.display = "none";
    }
  },
  markAsRead: () => {
    const today = new Date().toDateString();
    localStorage.setItem('lastPrayerReadDate', today);
    alert("Prayer marked as read! Come back tomorrow for a new prayer.");
    dailyPrayerManager.close();
  }
};

// ===================================================================================
//  4. EVENT LISTENERS
// ===================================================================================

// Main button to show/hide feelings
startButton.addEventListener("click", toggleFeelingsContainer);

// Individual feeling buttons
feelingButtons.forEach(button => {
  button.addEventListener("click", () => {
    const feeling = button.innerText.split(" ")[0];
    displayVerseForFeeling(feeling);
  });
});

// Button for a random verse
randomVerseButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayRandomVerse();
});

// Button to open the prayer request popup
prayerButton.addEventListener("click", prayerRequestManager.open);

// Prayer request popup logic
closePrayerPopupBtn.addEventListener("click", prayerRequestManager.close);
prayerPopup.querySelector("button:last-child").addEventListener("click", prayerRequestManager.send);
prayerPopup.addEventListener("click", (e) => {
  if (e.target === prayerPopup) prayerRequestManager.close();
});

// Button to open the daily prayer popup
if (dailyPrayerBtn) {
  dailyPrayerBtn.addEventListener("click", dailyPrayerManager.open);
}

// Daily prayer popup logic
if (closeDailyPrayerBtn) {
  closeDailyPrayerBtn.addEventListener("click", dailyPrayerManager.close);
}
if (markPrayerReadBtn) {
  markPrayerReadBtn.addEventListener("click", dailyPrayerManager.markAsRead);
}
if (dailyPrayerPopup) {
  dailyPrayerPopup.addEventListener("click", (e) => {
    if (e.target === dailyPrayerPopup) dailyPrayerManager.close();
  });
}
