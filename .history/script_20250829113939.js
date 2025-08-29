// Pega o botão inicial e o contêiner dos botões de sentimento
const startButton = document.getElementById('feeling-btn');
const feelingsContainer = document.getElementById('feelings-container');

// Pega todos os botões de sentimento
const feelingButtons = document.querySelectorAll('.feeling-btn');
// Pega a área onde o versículo será exibido
const verseDisplay = document.getElementById('verse-display');

// Objeto que guarda os versículos para cada sentimento
const verses = {
    'Angry': "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
    'Peaceful': "Peace I leave with you; my peace I give you. (John 14:27)",
    'Strong': "I can do all this through him who gives me strength. (Philippians 4:13)",
    'Happy': "Rejoice in the Lord always. I will say it again: Rejoice! (Philippians 4:4)",
    'Sad': "He heals the brokenhearted and binds up their wounds. (Psalm 147:3)",
    'Afraid': "For God has not given us a spirit of fear, but of power and of love and of a sound mind. (2 Timothy 1:7)"
};

// Adiciona um 'escutador' de clique para o botão inicial
startButton.addEventListener('click', () => {
    // Quando clicado, adiciona/remove a classe 'visible' para mostrar/esconder a div de botões
    feelingsContainer.classList.toggle('visible');
});

// Adiciona um 'escutador' de clique para cada botão de sentimento
feelingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega o nome do botão (ex: "Angry 😡") e remove o emoji
        const feeling = button.innerText.split(' ')[0];

        // Procura o versículo correspondente
        const verse = verses[feeling];

        // Se o versículo existir, atualiza o conteúdo da div
        if (verse) {
            verseDisplay.innerText = verse;
        } else {
            verseDisplay.innerText = "Versículo não encontrado. Por favor, adicione-o!";
        }
    });
});