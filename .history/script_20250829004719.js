// Encontra os elementos importantes na página
const startButton = document.getElementById('start-btn');
const categoryButtons = document.getElementById('category-buttons');

// Adiciona um "escutador" que espera pelo clique
startButton.addEventListener('click', () => {
    // Quando o clique acontece, adiciona a classe "visible"
    // para acionar a animação CSS que preparámos.
    categoryButtons.classList.toggle('visible');
});