// Get references to DOM elements
const startButton = document.getElementById('feeling-btn');
const feelingsContainer = document.getElementById('feelings-container');
const feelingButtons = document.querySelectorAll('.feeling-btn');
const verseDisplay = document.getElementById('verse-display');

// Bible verses categorized by feeling
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
        "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy. (1 Peter 1:8)",
        "A cheerful heart is good medicine. (Proverbs 17:22)",
        "For where your treasure is, there your heart will be also. (Matthew 6:21)"
    ],
    'Sad': [
        "He heals the brokenhearted and binds up their wounds. (Psalm 147:3)",
        "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
        "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. (Psalm 23:1-3)",
        "Weeping may stay for the night, but rejoicing comes in the morning. (Psalm 30:5)",
        "Come to me, all you who are weary and burdened, and I will give you rest. (Matthew 11:28)"
    ],
    'Afraid': [
        "For God has not given us a spirit of fear, but of power and of love and of a sound mind. (2 Timothy 1:7)",
        "When I am afraid, I will trust in you. (Psalm 56:3)",
        "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. (Philippians 4:6)",
        "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. (Joshua 1:9)",
        "The Lord is with me; I will not be afraid. What can mere mortals do to me? (Psalm 118:6)"
    ]
};

// Show/hide feelings container and reset verse display
startButton.addEventListener('click', () => {
    feelingsContainer.classList.toggle('visible');
    verseDisplay.innerHTML = '';
    verseDisplay.style.display = 'none';
});

// Animate start button on click
startButton.addEventListener('click', () => {
    startButton.style.transform = 'scale(1.2)';
    startButton.style.transition = 'transform 6s';
});

// Animate feelings container on click
feelingsContainer.addEventListener('click', () => {
    feelingsContainer.style.transform = 'scale(1.2)';
    feelingsContainer.style.transition = 'transform 6s';
});

// Handle feeling button clicks and display verses
feelingButtons.forEach(button => {
    button.addEventListener('click', () => {
        verseDisplay.style.display = 'block';
        const feeling = button.innerText.split(' ')[0];
        const verseArray = verses[feeling];
        verseDisplay.innerHTML = '';
        if (verseArray) {
            verseArray.forEach((verse, index) => {
                const verseParagraph = document.createElement('p');
                verseParagraph.classList.add('verse-item');
                verseDisplay.appendChild(verseParagraph);
                typeVerse(verse, verseParagraph, index);
            });
        } else {
            verseDisplay.innerText = "Versículos não encontrados.";
        }
    });
});

let userLetterDelay = 60;
const speedControl = document.getElementById('typing-speed');
// Allow user to control typing speed
if (speedControl) {
    speedControl.addEventListener('input', (e) => {
        userLetterDelay = parseInt(e.target.value, 10);
    });
}

// Type out each verse letter by letter with delay
function typeVerse(text, element, delayIndex) {
    const initialDelay = delayIndex * 4500;
    const letterDelay = userLetterDelay;
    setTimeout(() => {
        let i = 0;
        element.style.opacity = 1;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, letterDelay);
    }, initialDelay);
}
