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
    'Faith': [
        "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
        "Mark 11:24 - Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.",
        "James 2:17 - In the same way, faith by itself, if it is not accompanied by action, is dead.",
        "Romans 10:17 - Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.",
        "2 Corinthians 5:7 - For we live by faith, not by sight.",
        "Ephesians 2:8 - For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.",
        "Proverbs 3:5-6 - Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        "Mark 9:23 - ‘If you can’?” said Jesus. “Everything is possible for one who believes.”",
        "1 Corinthians 16:13 - Be on your guard; stand firm in the faith; be courageous; be strong.",
        "Galatians 2:20 - I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
        "Hebrews 11:6 - And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.",
        "1 Peter 1:8-9 - Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy, for you are receiving the end result of your faith, the salvation of your souls.",
        "John 11:25 - Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die.”",
        "Romans 1:17 - For in the gospel the righteousness of God is revealed—a righteousness that is by faith from first to last, just as it is written: “The righteous will live by faith.”",
        "1 Timothy 6:12 - Fight the good fight of the faith. Take hold of the eternal life to which you were called when you made your good confession in the presence of many witnesses.",
        "Jeremiah 29:11 - For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.",
        "Romans 15:13 - May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        "Isaiah 40:31 - But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        "Hebrews 6:19 - We have this hope as an anchor for the soul, firm and secure.",
        "Psalm 31:24 - Be strong and take heart, all you who hope in the Lord.",
        "1 Peter 1:3 - Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead.",
        "Lamentations 3:25 - The Lord is good to those whose hope is in him, to the one who seeks him.",
        "Romans 12:12 - Be joyful in hope, patient in affliction, faithful in prayer.",
        "Psalm 62:5 - Yes, my soul, find rest in God; my hope comes from him.",
        "Titus 1:2 - In the hope of eternal life, which God, who does not lie, promised before the beginning of time.",
        "Psalm 71:5 - For you have been my hope, Sovereign Lord, my confidence since my youth.",
        "Romans 8:24-25 - For in this hope we were saved. But hope that is seen is no hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently.",
        "Psalm 119:114 - You are my refuge and my shield; I have put my hope in your word.",
        "Proverbs 23:18 - There is surely a future hope for you, and your hope will not be cut off.",
        "1 Corinthians 13:13 - And now these three remain: faith, hope and love. But the greatest of these is love.",
        "Verses on Love",
        "1 Corinthians 13:4-7 - Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
        "John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        "1 John 4:19 - We love because he first loved us.",
        "Romans 8:38-39 - For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
        "Proverbs 10:12 - Hatred stirs up conflict, but love covers over all wrongs.",
        "1 Peter 4:8 - Above all, love each other deeply, because love covers over a multitude of sins.",
        "John 15:13 - Greater love has no one than this: to lay down one’s life for one’s friends.",
        "Ephesians 4:2 - Be completely humble and gentle; be patient, bearing with one another in love.",
        "Colossians 3:14 - And over all these virtues put on love, which binds them all together in perfect unity.",
        "1 John 4:7-8 - Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love.",
        "Luke 6:35 - But love your enemies, do good to them, and lend to them without expecting to get anything back. Then your reward will be great.",
        "Romans 12:9 - Love must be sincere. Hate what is evil; cling to what is good.",
        "John 13:34-35 - A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.",
        "Psalm 103:13 - As a father has compassion on his children, so the Lord has compassion on those who fear him.",
        "Jeremiah 31:3 - I have loved you with an everlasting love; I have drawn you with unfailing kindness."

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