// ===================================================================================
//  1. GET HTML ELEMENTS
// ===================================================================================
const startButton = document.getElementById('feeling-btn'); // How are you feeling button // 
const feelingsContainer = document.getElementById('feelings-container'); // Container for feeling buttons
const feelingButtons = document.querySelectorAll('.feeling-btn');// All feeling buttons
const verseDisplay = document.getElementById('verse-display');// Where the verses will be shown
const randomVerseButton = document.getElementById('random-verse-btn');// Button to get a random verse
const prayerButton = document.getElementById('prayer-btn'); //Request a prayer button
// ===================================================================================
//  2. PRAYER REQUEST POPUP
// ===================================================================================
function Popup() {
    document.getElementById("prayer-popup").style.display = "block";
  }

  function ClosePopup() {
    document.getElementById("prayer-popup").style.display = "none";
  }

  function SendPrayer() {
    let name = document.getElementById("prayer-name").value;
    let prayer = document.getElementById("prayer-text").value;

    if(name && prayer) {
      alert("Thank you " + name + "! Your prayer request was sent:\n" + prayer);
      ClosePopup();
    } else {
      alert("Please fill in your name and prayer request.");
    }
  }

  
// ===================================================================================
//  3. VERSE LIBRARY (CORRECTLY STRUCTURED)
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
    'Discouraged': [
        "So do not fear, for I am with you; do not be dismayed, for I am your God. (Isaiah 41:10)",
        "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. (Isaiah 43:2)",
        "Cast all your anxiety on him because he cares for you. (1 Peter 5:7)",
        "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
        "I can do all this through him who gives me strength. (Philippians 4:13)"
    ],
    'Forgiving': [
        "For if you forgive other people when they sin against you, your heavenly Father will also forgive you. (Matthew 6:14)",
        "And forgive us our debts, as we also have forgiven our debtors. (Matthew 6:12)",
        "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you. (Ephesians 4:32)",
        "Forgive as the Lord forgave you. (Colossians 3:13)",
        "But if you do not forgive others their sins, your Father will not forgive your sins. (Matthew 6:15)"
    ],
    'Confused': [
        "For God is not the author of confusion, but of peace. (1 Corinthians 14:33)",
        "Trust in the Lord with all your heart and lean not on your own understanding. (Proverbs 3:5)",
        "The Lord will fight for you; you need only to be still. (Exodus 14:14)",
        "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault. (James 1:5)",
        "He guides the humble in what is right and teaches them his way. (Psalm 25:9)"
    ],
    'Content': [
        "I have learned to be content whatever the circumstances. (Philippians 4:11)",
        "Keep your lives free from the love of money and be content with what you have. (Hebrews 13:5)",
        "But godliness with contentment is great gain. (1 Timothy 6:6)",
        "The Lord is my shepherd, I lack nothing. (Psalm 23:1)",
        "A heart at peace gives life to the body, but envy rots the bones. (Proverbs 14:30)"
    ],
    'Proud': [
        "When pride comes, then comes disgrace, but with humility comes wisdom. (Proverbs 11:2)",
        "God opposes the proud but shows favor to the humble. (James 4:6)",
        "Pride goes before destruction, a haughty spirit before a fall. (Proverbs 16:18)",
        "Humble yourselves before the Lord, and he will lift you up. (James 4:10)",
        "Let another praise you, and not your own mouth; a stranger, and not your own lips. (Proverbs 27:2)"
    ],
    'Tired': [
        "Come to me, all you who are weary and burdened, and I will give you rest. (Matthew 11:28)",
        "He gives strength to the weary and increases the power of the weak. (Isaiah 40:29)",
        "My flesh and my heart may fail, but God is the strength of my heart and my portion forever. (Psalm 73:26)",
        "The Lord is my strength and my shield; my heart trusts in him, and he helps me. (Psalm 28:7)",
        "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety. (Psalm 4:8)"
    ],
    'Jealous': [
        "For you shall worship no other god, for the Lord, whose name is Jealous, is a jealous God. (Exodus 34:14)",
        "A heart at peace gives life to the body, but envy rots the bones. (Proverbs 14:30)",
        "Do not let your hearts be troubled. You believe in God; believe also in me. (John 14:1)",
        "Resentment kills a fool, and envy slays the simple. (Job 5:2)",
        "Love is patient, love is kind. It does not envy. (1 Corinthians 13:4)"
    ],
    'Loved': [
        "We love because he first loved us. (1 John 4:19)",
        "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you. (Zephaniah 3:17)",
        "I have loved you with an everlasting love; I have drawn you with unfailing kindness. (Jeremiah 31:3)",
        "As a father has compassion on his children, so the Lord has compassion on those who fear him. (Psalm 103:13)",
        "Nothing will be able to separate us from the love of God that is in Christ Jesus our Lord. (Romans 8:38-39)"
    ],
    'Weak': [
        "He gives strength to the weary and increases the power of the weak. (Isaiah 40:29)",
        "My flesh and my heart may fail, but God is the strength of my heart and my portion forever. (Psalm 73:26)",
        "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' (2 Corinthians 12:9)",
        "The Lord is my strength and my shield; my heart trusts in him, and he helps me. (Psalm 28:7)",
        "I can do all this through him who gives me strength. (Philippians 4:13)"
    ],
    'Guilty': [
        "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. (1 John 1:9)",
        "Therefore, there is now no condemnation for those who are in Christ Jesus. (Romans 8:1)",
        "Create in me a pure heart, O God, and renew a steadfast spirit within me. (Psalm 51:10)",
        "As far as the east is from the west, so far has he removed our transgressions from us. (Psalm 103:12)",
        "For all have sinned and fall short of the glory of God. (Romans 3:23)"
    ],
    'Hopeful': [
        "May the God of hope fill you with all joy and peace as you trust in him. (Romans 15:13)",
        "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. (Jeremiah 29:11)",
        "Be strong and take heart, all you who hope in the Lord. (Psalm 31:24)",
        "The Lord is good to those whose hope is in him, to the one who seeks him. (Lamentations 3:25)",
        "But those who hope in the Lord will renew their strength. (Isaiah 40:31)"
    ],
    'Anxious': [
        "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. (Philippians 4:6)",
        "Cast all your anxiety on him because he cares for you. (1 Peter 5:7)",
        "When anxiety was great within me, your consolation brought me joy. (Psalm 94:19)",
        "The Lord is my helper; I will not be afraid. What can mere mortals do to me? (Hebrews 13:6)",
        "Peace I leave with you; my peace I give you. (John 14:27)"
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
    'Betrayed': [
        "Even my close friend, someone I trusted, one who shared my bread, has turned against me. (Psalm 41:9)",
        "But you, Lord, do not be far from me. You are my strength; come quickly to help me. (Psalm 22:19)",
        "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
        "When you are betrayed, remember that the Lord is your refuge and strength. (Psalm 46:1)",
        "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken. (Psalm 55:22)"
    ]

};

// ===================================================================================
//  4. CLICK LOGIC (BASIC VERSION)
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