document.getElementById("feeling-btn").addEventListener("click", function() {
    const feelingButtons = [
        document.getElementById("afraid-btn"),
        document.getElementById("sad-btn"),
        document.getElementById("angry-btn"),
        document.getElementById("peaceful-btn"),
        document.getElementById("strong-btn"),
        document.getElementById("happy-btn")
    ];

    const areButtonsVisible = feelingButtons.some(button => button.style.display === "block");

    feelingButtons.forEach(button => {
        button.style.display = areButtonsVisible ? "none" : "block";
    });
});
