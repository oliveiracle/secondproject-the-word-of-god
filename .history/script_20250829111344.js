// Clique em "How are you feeling today?"
document.getElementById("feeling-btn").addEventListener("click", function() {
    const feelingButtons = [
        document.getElementById("angry-btn"),
        document.getElementById("peaceful-btn"),
        document.getElementById("strong-btn"),
        document.getElementById("happy-btn"),
        document.getElementById("afraid-btn"),
        document.getElementById("sad-btn")
    ];
    const areButtonsVisible = feelingButtons.some(button => button.style.display === "block");
    feelingButtons.forEach(button => {
        button.style.display = areButtonsVisible ? "none" : "block";
    });
});

// Clique em "Angry" para mostrar/esconder subbotões
document.getElementById("angry-btn").addEventListener("click", function() {
    const angrySubbuttons = [
        document.getElementById("critical-btn"),
        document.getElementById("jealous-btn"),
        document.getElementById("frustrated-btn"),
        document.getElementById("hurt-btn"),
        document.getElementById("annoyed-btn")
    ];
    const areSubbuttonsVisible = angrySubbuttons.some(button => button.style.display === "block");
    angrySubbuttons.forEach(button => {
        button.style.display = areSubbuttonsVisible ? "none" : "block";
    });
    document.getElementById("angry-subbuttons").style.display = areSubbuttonsVisible ? "none" : "block";
});

// Eventos de clique para os subbotões
document.getElementById("critical-btn").addEventListener("click", function() {
    document.getElementById("verses-area").style.display = "block";
    this.style.display = "none";
});

document.getElementById("jealous-btn").addEventListener("click", function() {
    document.getElementById("verses-area").style.display = "block";
    this.style.display = "none";
});

document.getElementById("frustrated-btn").addEventListener("click", function() {
    document.getElementById("verses-area").style.display = "block";
    this.style.display = "none";
});

document.getElementById("hurt-btn").addEventListener("click", function() {
    document.getElementById("verses-area").style.display = "block";
    this.style.display = "none";
});

document.getElementById("annoyed-btn").addEventListener("click", function() {
    document.getElementById("verses-area").style.display = "block";
    this.style.display = "none";
});