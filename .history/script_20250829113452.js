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