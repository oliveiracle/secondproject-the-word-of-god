document.addEventListener("DOMContentLoaded", function() {
    const mainFeelingBtn = document.getElementById("feeling-btn");
    const versesArea = document.getElementById("verses-area");
    
    // Objeto para armazenar os versículos para cada sentimento
    const verses = {
        "Critical": "Do not judge, or you too will be judged. (Matthew 7:1)",
        "Jealous": "Love is patient, love is kind. It does not envy... (1 Corinthians 13:4)",
        "Frustrated": "Cast all your anxiety on him because he cares for you. (1 Peter 5:7)",
        "Hurt": "He heals the brokenhearted and binds up their wounds. (Psalm 147:3)",
        "Annoyed": "Let your gentleness be evident to all. The Lord is near. (Philippians 4:5)"
    };

    // Objeto que mapeia categorias para os botões de sentimento
    const angryButtons = [
        document.getElementById("critical-btn"),
        document.getElementById("jealous-btn"),
        document.getElementById("frustrated-btn"),
        document.getElementById("hurt-btn"),
        document.getElementById("annoyed-btn")
    ];

    // Clique em "How are you feeling today?"
    if (mainFeelingBtn) {
        mainFeelingBtn.addEventListener("click", function() {
            // Lógica para mostrar os botões de categoria principais (Angry, Peaceful, etc.)
            const categoryButtons = [
                document.getElementById("angry-btn"),
                document.getElementById("peaceful-btn"),
                // ... adicione outros botões de categoria aqui
            ];
            categoryButtons.forEach(button => {
                if (button) button.style.display = "block";
            });
            // Oculta o botão principal
            this.style.display = "none";
        });
    }

    // Clique no botão "Angry"
    const angryBtn = document.getElementById("angry-btn");
    if (angryBtn) {
        angryBtn.addEventListener("click", function() {
            // Oculta o botão "Angry" e mostra os 5 botões de sentimento
            this.style.display = "none";
            angryButtons.forEach(button => {
                if (button) button.style.display = "block";
            });
            // Oculta a área de versículos se ela estiver visível
            if (versesArea) {
                versesArea.style.display = "none";
            }
        });
    }

    // Clique nos botões de sentimento (Critical, Jealous, etc.)
    angryButtons.forEach(button => {
        if (button) {
            button.addEventListener("click", function() {
                const feelingName = this.textContent.trim();
                const verse = verses[feelingName];
                if (versesArea) {
                    versesArea.style.display = "block";
                    versesArea.textContent = verse || "Versículo não encontrado.";
                }
            });
        }
    });
});