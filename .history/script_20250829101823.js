// 1. Clique em "How are you feeling today?"
document.getElementById("feeling-btn").addEventListener("click", function() {
  // mostra todos os botões de sentimento
  document.getElementById("angry-btn").style.display = "block";
  document.getElementById("peaceful-btn").style.display = "block";
  document.getElementById("strong-btn").style.display = "block";
  document.getElementById("happy-btn").style.display = "block";
  document.getElementById("peaceful-btn").style.display = "block";
  document.getElementById("strong-btn").style.display = "block";
  document.getElementById("happy-btn").style.display = "block"; // mostra Angry
  this.style.display = "none"; // esconde o botão inicial
});

// 2. Clique em "Angry"
document.getElementById("angry-btn").addEventListener("click", function() {
  document.getElementById("verses").style.display = "block"; // mostra os versículos
  this.style.display = "none"; // esconde o botão Angry
});

// 3. Clique em "Peaceful"
document.getElementById("peaceful-btn").addEventListener("click", function() {
  document.getElementById("verses").style.display = "block"; // mostra os versículos
  this.style.display = "none"; // esconde o botão Peaceful
});

// 4. Clique em "Strong"
document.getElementById("strong-btn").addEventListener("click", function() {
  document.getElementById("verses").style.display = "block"; // mostra os versículos
  this.style.display = "none"; // esconde o botão Strong
});

// 5. Clique em "Happy"
document.getElementById("happy-btn").addEventListener("click", function() {
  document.getElementById("verses").style.display = "block"; // mostra os versículos
  this.style.display = "none"; // esconde o botão Angry
});
