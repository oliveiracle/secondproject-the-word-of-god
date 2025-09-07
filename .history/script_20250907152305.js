// ===================================================================================
//  1. ELEMENT SELECTORS
// ===================================================================================
// Select all HTML elements once for better performance and readability.

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
const closeDailyPrayerBtn = document.getElementById("close-daily-prayer"); // Assuming you have a close button with this ID
const markPrayerReadBtn = document.getElementById("mark-read-btn"); // Assuming you have a button with this ID


// ===================================================================================
//  2. DATA: VERSES & PRAYERS
// ===================================================================================
// Centralize all text data in one place.

const verses = {
    Angry: [
        "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
        "In your anger do not sin: Do not let the sun go down while you are still angry. (Ephesians 4:26)",
        // ... (rest of the Angry verses)
    ],
    Peaceful: [
        "Peace I leave with you; my peace I give you. (John 14:27)",
        // ... (rest of the Peaceful verses)
    ],
    // ... (all other verse categories)
};

const dailyPrayers = [
    "Dear Lord, Your Word says that when we wait on You, You will renew our strength...",
    "Dear God Almighty, today I faced things that felt like too much for me...",
    // ... (all other prayers)
];


// ===================================================================================
//  3. CORE FUNCTIONS
// ===================================================================================
// Functions that perform the application's main tasks.

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
    let verseArray = [];

    // The if/else if structure decides which verse list to use.
    if (feeling === 'Angry') { verseArray = verses.Angry; }
    else if (feeling === 'Peaceful') { verseArray = verses.Peaceful; }
    // ... (add all other 'else if' statements here)
    else {
        verseDisplay.innerHTML = "<p>Verses for this feeling are coming soon.</p>";
        verseDisplay.style.display = "block";
        feelingsContainer.style.display = "none";
        return;
    }

    if (verseArray && verseArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * verseArray.length);
        const randomVerse = verseArray[randomIndex];
        verseDisplay.innerHTML = `<p>${randomVerse}</p>`;
    } else {
        verseDisplay.innerHTML = "<p>No verses found for this feeling.</p>";
    }

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
        dailyPrayerTextDisplay.textContent = dailyPrayerManager.getPrayer();
        dailyPrayerPopup.style.display = "block";
    },
    close: () => dailyPrayerPopup.style.display = "none",
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
// Connects user actions (clicks) to their corresponding functions.

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