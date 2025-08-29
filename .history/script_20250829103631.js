// Clique em "How are you feeling today?"
document.getElementById("feeling-btn").addEventListener("click", function() {
  // Seleciona todos os botões de sentimento
  const feelingButtons = [
    document.getElementById("afraid-btn"),
    document.getElementById("sad-btn"),
    document.getElementById("angry-btn"),
    document.getElementById("peaceful-btn"),
    document.getElementById("strong-btn"),
    document.getElementById("happy-btn")
    
  ];

  // Verifica se os botões de sentimento estão visíveis
  const areButtonsVisible = feelingButtons.some(button => button.style.display === "block");

  // Alterna a visibilidade dos botões de sentimento
  feelingButtons.forEach(button => {
    button.style.display = areButtonsVisible ? "none" : "block";
  });

  // O botão "feeling-btn" NÃO é escondido, permanece visível
});