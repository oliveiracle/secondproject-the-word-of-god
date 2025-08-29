document.addEventListener("DOMContentLoaded", function() {
    const verses = {
        "angry-btn": [
            "Psalm 37:8 (NIV) - Refrain from anger and turn from wrath; do not fret—it leads only to evil.",
            "Proverbs 15:1 (ESV) - A soft answer turns away wrath, but a harsh word stirs up anger.",
            "Ephesians 4:26-27 (NIV) - In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold.",
            "James 1:19-20 (ESV) - Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.",
            "Proverbs 19:11 (NIV) - A person’s wisdom yields patience; it is to one’s glory to overlook an offense."
        ],
        "peaceful-btn": [
            "Philippians 4:7 (NIV) - And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
            "John 16:33 (ESV) - I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
            "Isaiah 26:3 (NIV) - You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
            "Psalm 29:11 (ESV) - The Lord gives strength to his people; the Lord blesses his people with peace.",
            "Colossians 3:15 (NIV) - Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful."
        ],
        "strong-btn": [
            "Isaiah 40:31 (ESV) - But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
            "Philippians 4:13 (NIV) - I can do all this through him who gives me strength.",
            "Psalm 46:1 (ESV) - God is our refuge and strength, a very present help in trouble.",
            "2 Timothy 1:7 (NIV) - For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
            "Ephesians 6:10 (ESV) - Finally, be strong in the Lord and in the strength of his might."
        ],
        "happy-btn": [
            "Psalm 16:11 (NIV) - You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.",
            "Nehemiah 8:10 (ESV) - The joy of the Lord is your strength.",
            "Psalm 126:3 (NIV) - The Lord has done great things for us, and we are filled with joy.",
            "John 15:11 (ESV) - These things I have spoken to you, that my joy may be in you, and that your joy may be full.",
            "Psalm 30:5 (NIV) - Weeping may stay for the night, but rejoicing comes in the morning."
        ],
        "sad-btn": [
            "Psalm 34:18 (NIV) - The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
            "Matthew 5:4 (ESV) - Blessed are those who mourn, for they shall be comforted.",
            "Psalm 147:3 (NIV) - He heals the brokenhearted and binds up their wounds.",
            "John 16:22 (ESV) - So also you have sorrow now, but I will see you again, and your hearts will rejoice, and no one will take your joy from you.",
            "Isaiah 61:3 (NIV) - To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair."
        ],
        "afraid-btn": [
            "Psalm 23:4 (ESV) - Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
            "Isaiah 41:10 (NIV) - So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
            "Joshua 1:9 (ESV) - Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.",
            "Psalm 56:3 (NIV) - When I am afraid, I put my trust in you.",
            "2 Timothy 1:7 (ESV) - For God gave us a spirit not of fear but of power and love and self-control."
        ]
    };

    const feelingBtn = document.getElementById("feeling-btn");
    if (!feelingBtn) {
        console.error("Elemento #feeling-btn não encontrado");
        return;
    }

    feelingBtn.addEventListener("click", function() {
        const feelingButtons = [
            document.getElementById("angry-btn"),
            document.getElementById("peaceful-btn"),
            document.getElementById("strong-btn"),
            document.getElementById("happy-btn"),
            document.getElementById("afraid-btn"),
            document.getElementById("sad-btn")
        ];
        if (feelingButtons.some(button => !button)) {
            console.error("Um ou mais botões de sentimento não encontrados");
            return;
        }
        const areButtonsVisible = feelingButtons.some(button => button.style.display === "block");
        feelingButtons.forEach(button => {
            button.style.display = areButtonsVisible ? "none" : "block";
        });
    });

    const feelingButtonIds = ["angry-btn", "peaceful-btn", "strong-btn", "happy-btn", "afraid-btn", "sad-btn"];
    feelingButtonIds.forEach(id => {
        const button = document.getElementById(id);
        if (!button) {
            console.error(`Elemento #${id} não encontrado`);
            return;
        }
        button.addEventListener("click", function() {
            const versesArea = document.getElementById("verses-area");
            if (!versesArea) {
                console.error("Elemento #verses-area não encontrado");
                return;
            }
            const verseList = verses[id] || ["No verses available."];
            const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
            versesArea.textContent = randomVerse;
            versesArea.style.display = "block";
            this.style.display = "none";
        });
    });
});