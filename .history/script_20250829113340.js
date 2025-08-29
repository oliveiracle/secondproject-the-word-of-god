document.addEventListener("DOMContentLoaded", function() {
    const feelingBtn = document.getElementById("feeling-btn");
    if (!feelingBtn) {
        console.error("Elemento #feeling-btn não encontrado");
        return;
    }

    // Clique em "How are you feeling today?"
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

    document.addEventListener("DOMContentLoaded", function() {
    const verses = {
        "angry-btn": [
            "Psalm 37:8 (NIV) - Refrain from anger and turn from wrath; do not fret—it leads only to evil.",
            "Proverbs 15:1 (ESV) - A soft answer turns away wrath, but a harsh word stirs up anger.",
            "Ephesians 4:26-27 (NIV) - In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold.",
            "James 1:19-20 (ESV) - Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.",
            "Proverbs 19:11 (NIV) - A person’s wisdom yields patience; it is to one’s glory to overlook an offense."
        ],

    // Eventos de clique para os botões de sentimento
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
            versesArea.style.display = "block";
            this.style.display = "none";
        });
    });
});