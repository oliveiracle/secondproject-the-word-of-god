// 1. Clique em "How are you feeling today?"
document.getElementById("feeling-btn").addEventListener("click", function() {
  document.getElementById("angry-btn").style.display = "block"; // mostra Angry
  this.style.display = "none"; // esconde o botão inicial
});

// 2. Clique em "Angry"
document.getElementById("angry-btn").addEventListener("click", function() {
  document.getElementById("verses").style.display = "block"; // mostra os versículos
  this.style.display = "none"; // esconde o botão Angry
});

// 2. Clique em "Angry"
document.getElementById("peaceful-btn").addEventListener("click", function() {
  document.getElementById("verses").style.display = "block"; // mostra os versículos
  this.style.display = "none"; // esconde o botão Angry
});