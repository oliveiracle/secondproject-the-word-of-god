// ===================================================================================
//  1. ELEMENT SELECTORS
// ===================================================================================
// Select all HTML elements once for better performance and readability.

const startButton = document.getElementById("feeling-btn"); // Main button to start
const feelingsContainer = document.getElementById("feelings-container"); // Container for feeling buttons
const feelingButtons = document.querySelectorAll(".feeling-btn"); // All feeling buttons
const verseDisplay = document.getElementById("verse-display"); // Where the verse is shown
const randomVerseButton = document.getElementById("random-verse-btn"); // Button for random verse
const prayerButton = document.getElementById("prayer-btn"); // Button to open prayer request popup
const dailyPrayerBtn = document.getElementById('daily-prayer-btn'); // Button for daily prayer

// Prayer Request Popup Elements
const prayerPopup = document.getElementById("prayer-popup"); // Prayer popup modal
const prayerNameInput = document.getElementById("prayer-name"); // Name input in prayer popup
const prayerTextInput = document.getElementById("prayer-text"); // Prayer text input
const closePrayerPopupBtn = document.getElementById("close-popup"); // Close button for prayer popup

// Daily Prayer Popup Elements
const dailyPrayerPopup = document.getElementById("daily-prayer-popup"); // Daily prayer popup modal
const dailyPrayerTextDisplay = document.getElementById("prayer-text-display"); // Where daily prayer is shown
const closeDailyPrayerBtn = document.getElementById("close-daily-prayer"); // Close button for daily prayer popup
const markPrayerReadBtn = document.getElementById("mark-read-btn"); // Button to mark prayer as read

// ===================================================================================
//  2. DATA: VERSES & PRAYERS
// ===================================================================================
// Object containing arrays of verses for each feeling

const verses = {
  // ... (all your verses, unchanged)
};

const dailyPrayers = [
    // ... (all your daily prayers, unchanged)
];

// ===================================================================================
//  4. CORE FUNCTIONS
// ===================================================================================
// Functions that perform the application's main tasks.

/**
 * Toggles the visibility of the feelings button container.
 */
function toggleFeelingsContainer() {
    verseDisplay.style.display = "none"; // Hide verse display
    const isVisible = feelingsContainer.style.display === "flex";
    feelingsContainer.style.display = isVisible ? "none" : "flex"; // Toggle container
}

/**
 * Selects and displays a random verse based on the chosen feeling.
 * @param {string} feeling - The feeling (e.g., 'Angry', 'Peaceful').
 */
function displayVerseForFeeling(feeling) {
    const verseArray = verses[feeling]; // Get array for feeling
    
    // If no verses for this feeling, show message
    if (!verseArray || verseArray.length === 0) {
        verseDisplay.innerHTML = "<p>Verses for this feeling are coming soon.</p>";
        verseDisplay.style.display = "block";
        feelingsContainer.style.display = "none";
        return;
    }

    // Pick a random verse from the array
    const randomIndex = Math.floor(Math.random() * verseArray.length);
    const randomVerse = verseArray[randomIndex];
    
    // Display the verse
    verseDisplay.innerHTML = `<p>${randomVerse}</p>`;
    verseDisplay.style.display = "block";
    feelingsContainer.style.display = "none";
}

// (The following two lines are redundant and can be removed)
// verseDisplay.style.display = "block";
// feelingsContainer.style.display = "none";

/**
 * Selects and displays a random verse from all categories.
 */
function displayRandomVerse() {
    feelingsContainer.style.display = "none"; // Hide feelings
    const allVerses = Object.values(verses).flat(); // Flatten all verses into one array
    const randomIndex = Math.floor(Math.random() * allVerses.length); // Pick random index
    const randomVerse = allVerses[randomIndex];
    verseDisplay.style.display = "block";
    verseDisplay.innerHTML = `<p>${randomVerse}</p>`;
}

/**
 * Manages the prayer request popup.
 */
const prayerRequestManager = {
    open: () => prayerPopup.style.display = "block", // Show popup
    close: () => prayerPopup.style.display = "none", // Hide popup
    send: () => {
        const prayer = prayerTextInput.value; // Get prayer text
        if (prayer.trim()) {
            alert("Your prayer request has been received. May God bless you!"); // Confirmation
            prayerRequestManager.close();
            prayerNameInput.value = ""; // Reset name
            prayerTextInput.value = ""; // Reset text
        } else {
            alert("Please enter your prayer request."); // Validation
        }
    }
};

/**
 * Manages the daily prayer popup.
 */
const dailyPrayerManager = {
    getPrayer: () => {
        // Get today's day of year to select prayer
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        return dailyPrayers[dayOfYear % dailyPrayers.length];
    },
    open: () => {
        // Show daily prayer popup with today's prayer
        if (dailyPrayerPopup && dailyPrayerTextDisplay) {
            dailyPrayerTextDisplay.textContent = dailyPrayerManager.getPrayer();
            dailyPrayerPopup.style.display = "block";
        }
    },
    close: () => {
        // Hide daily prayer popup
        if (dailyPrayerPopup) {
            dailyPrayerPopup.style.display = "none";
        }
    },
    markAsRead: () => {
        // Mark today's prayer as read in localStorage
        const today = new Date().toDateString();
        localStorage.setItem('lastPrayerReadDate', today);
        alert("Prayer marked as read! Come back tomorrow for a new prayer.");
        dailyPrayerManager.close();
    }
};

// ===================================================================================
//  5. EVENT LISTENERS
// ===================================================================================
// Connects user actions (clicks) to their corresponding functions.

// Main button to show/hide feelings
startButton.addEventListener("click", toggleFeelingsContainer);

// Individual feeling buttons
feelingButtons.forEach(button => {
    button.addEventListener("click", () => {
        const feeling = button.innerText.split(" ")[0]; // Get feeling from button text
        displayVerseForFeeling(feeling);
    });
});

// Button for a random verse
randomVerseButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents the page from jumping to the top
    displayRandomVerse();
});

// Button to open the prayer request popup
prayerButton.addEventListener("click", prayerRequestManager.open);

// Prayer request popup logic
closePrayerPopupBtn.addEventListener("click", prayerRequestManager.close);
prayerPopup.querySelector("button:last-child").addEventListener("click", prayerRequestManager.send);
prayerPopup.addEventListener("click", (e) => {
    if (e.target === prayerPopup) prayerRequestManager.close(); // Closes if background is clicked
});

// Button to open the daily prayer popup
if (dailyPrayerBtn) { // Checks if the button exists before adding an event
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
