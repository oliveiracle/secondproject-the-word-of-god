// ===================================================================================
//  1. GET HTML ELEMENTS
// ===================================================================================
const startButton = document.getElementById('feeling-btn'); // How are you feeling button // 
const feelingsContainer = document.getElementById('feelings-container'); // Container for feeling buttons
const feelingButtons = document.querySelectorAll('.feeling-btn');// All feeling buttons
const verseDisplay = document.getElementById('verse-display');// Where the verses will be shown
const randomVerseButton = document.getElementById('random-verse-btn');// Button to get a random verse

// ===================================================================================
//  2. VERSE LIBRARY (CORRECTLY STRUCTURED)
// ===================================================================================
// List of verses categorized by feelings
const verses = {
    'Angry': [
        "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
        "In your anger do not sin: Do not let the sun go down while you are still angry. (Ephesians 4:26)",
        "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel. (Proverbs 15:18)",
        "The discretion of a man makes him slow to anger, and his glory is to overlook a transgression. (Proverbs 19:11)",
        "Do not be quickly provoked in your spirit, for anger resides in the lap of fools. (Ecclesiastes 7:9)"
    ],
    'Peaceful': [
        "Peace I leave with you; my peace I give you. (John 14:27)",
        "He will keep in perfect peace those whose minds are steadfast, because they trust in him. (Isaiah 26:3)",
        "The Lord gives strength to his people; the Lord blesses his people with peace. (Psalm 29:11)",
        "You will go out in joy and be led forth in peace. (Isaiah 55:12)",
        "Let the peace of Christ rule in your hearts. (Colossians 3:15)"
    ],
    'Strong': [
        "I can do all this through him who gives me strength. (Philippians 4:13)",
        "Be strong and courageous. Do not be afraid... for the Lord your God goes with you. (Deuteronomy 31:6)",
        "The Lord is my strength and my shield; my heart trusts in him, and he helps me. (Psalm 28:7)",
        "The joy of the Lord is your strength. (Nehemiah 8:10)",
        "The Lord is my light and my salvation—whom shall I fear? (Psalm 27:1)"
    ],
    'Happy': [
        "Rejoice in the Lord always. I will say it again: Rejoice! (Philippians 4:4)",
        "The Lord has done great things for us, and we are filled with joy. (Psalm 126:3)",
        "A cheerful heart is good medicine. (Proverbs 17:22)",
        "For where your treasure is, there your heart will be also. (Matthew 6:21)",
        "The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. (Galatians 5:22)"
    ],
    'Sad': [
        "He heals the brokenhearted and binds up their wounds. (Psalm 147:3)",
        "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
        "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures... he refreshes my soul. (Psalm 23:1-3)",
        "Weeping may stay for the night, but rejoicing comes in the morning. (Psalm 30:5)",
        "Come to me, all you who are weary and burdened, and I will give you rest. (Matthew 11:28)"
    ],
    'Afraid': [
        "For God has not given us a spirit of fear, but of power and of love and of a sound mind. (2 Timothy 1:7)",
        "When I am afraid, I will trust in you. (Psalm 56:3)",
        "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged... (Joshua 1:9)",
        "The Lord is with me; I will not be afraid. What can mere mortals do to me? (Psalm 118:6)",
        "The Lord is my light and my salvation—whom shall I fear? (Psalm 27:1)"
    ],
    // NOTA: Adicionei alguns exemplos. Você pode adicionar as outras categorias aqui, seguindo o mesmo formato.
    'Lonely': [
        "Be strong and courageous. Do not be afraid... for the Lord your God goes with you; he will never leave you nor forsake you. (Deuteronomy 31:6)",
        "The Lord is a refuge for the oppressed, a stronghold in times of trouble. (Psalm 9:9)",
        "Turn to me and be gracious to me, for I am lonely and afflicted. (Psalm 25:16)",
        "I will not leave you as orphans; I will come to you. (John 14:18)",
        "And surely I am with you always, to the very end of the age. (Matthew 28:20)"
    ],
    'Grateful': [
        "Give thanks in all circumstances; for this is God’s will for you in Christ Jesus. (1 Thessalonians 5:18)",
        "Give thanks to the Lord, for he is good; his love endures forever. (Psalm 107:1)",
        "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. (Psalm 100:4)",
        "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him. (Colossians 3:17)",
        "Every good and perfect gift is from above, coming down from the Father of the heavenly lights. (James 1:17)"
    ],

};

// ===================================================================================
//  3. CLICK LOGIC (BASIC VERSION)
// ===================================================================================

// --- What happens when the MAIN BUTTON is clicked ---
startButton.addEventListener('click', () => {
    
    // First, always hide the verse display to clean up the screen.
    verseDisplay.style.display = 'none';

    // Now, let's check if the feeling buttons are currently visible.
    const isVisible = feelingsContainer.style.display === 'flex';

    if (isVisible) {
        // If the buttons ARE visible, this click should hide them.
        feelingsContainer.style.display = 'none';
    } else {
        // If the buttons ARE HIDDEN, this click should show them.
        feelingsContainer.style.display = 'flex';
    }
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