// Pega todos os botões de sentimento (feeling-btn)
const feelingButtons = document.querySelectorAll('.feeling-btn');

// Objeto que guarda os versículos para cada sentimento
const verses = {
    'Angry': "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
    'Critical': "Do not judge, or you too will be judged. (Matthew 7:1)",
    'Jealous': "Love is patient, love is kind. It does not envy... (1 Corinthians 13:4)",
    // Adicione todos os seus versículos aqui, exatamente como no arquivo verse.html
};

// Adiciona um 'escutador' de clique para cada botão de sentimento
feelingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega o nome do botão clicado (ex: "Critical")
        const feeling = button.innerText;

        // Verifica se o versículo existe para o sentimento
        if (verses[feeling]) {
            // Se existir, redireciona o navegador para a nova página
            // e adiciona o nome do sentimento na URL
            window.location.href = `verse.html?feeling=${feeling}`;
        } else {
            alert("Versículo não encontrado. Por favor, adicione-o!");
        }
    });
});