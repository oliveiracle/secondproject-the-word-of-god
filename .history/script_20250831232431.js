// ===================================================================================
//  1. GET HTML ELEMENTS
// ===================================================================================
const startButton = document.getElementById('feeling-btn');
const feelingsContainer = document.getElementById('feelings-container');
const feelingButtons = document.querySelectorAll('.feeling-btn');
const verseDisplay = document.getElementById('verse-display');
// Corrected the variable name to match the corrected HTML ID
const randomVerseButton = document.getElementById('random-verse-btn');

// ===================================================================================
//  2. VERSE LIBRARY (Your full library goes here)
// ===================================================================================
const verses = {
    // Your full list of verses...
    'Angry': ["A soft answer turns away wrath... (Proverbs 15:1)"],
    'Peaceful': ["Peace I leave with you... (John 14:27)"],
    ''
    
};


// ===================================================================================
//  3. CLICK LOGIC (BASIC VERSION)
// ===================================================================================

// --- What happens when the MAIN BUTTON is clicked ---
startButton.addEventListener('click', () => {
    feelingsContainer.style.display = 'flex';
    verseDisplay.style.display = 'none';
});


// --- What happens when one of the FEELING BUTTONS is clicked ---
for (let i = 0; i < feelingButtons.length; i++) {
    const button = feelingButtons[i];
    button.addEventListener('click', () => {
        const feeling = button.innerText.split(' ')[0];
        const verseArray = verses[feeling];
        verseDisplay.style.display = 'block';
        feelingsContainer.style.display = 'none';

        if (verseArray) {
            const formattedVerses = verseArray.join('<br><br>');
            verseDisplay.innerHTML = formattedVerses;
        } else {
            verseDisplay.innerText = "No verses found for this feeling.";
        }
    });
}

// --- What happens when the RANDOM VERSE button is clicked ---
// *** THIS BLOCK WAS MOVED OUT OF THE FOR-LOOP TO ITS CORRECT PLACE ***
randomVerseButton.addEventListener('click', () => {
    // 1. Hide the feeling buttons container, in case it was open
    feelingsContainer.style.display = 'none';

    // 2. Create one big list of all available verses
    const allVerses = Object.values(verses).flat();

    // 3. Pick a random index from that big list
    const randomIndex = Math.floor(Math.random() * allVerses.length);
    const randomVerse = allVerses[randomIndex];

    // 4. Show the verse display and put the random verse inside it
    verseDisplay.style.display = 'block';
    verseDisplay.innerHTML = randomVerse;
});