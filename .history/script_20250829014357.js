// Pega todos os botões de sentimento (feeling-btn)
const feelingButtons = document.querySelectorAll('.feeling-btn');
// Pega a área onde o versículo será exibido
const verseDisplay = document.getElementById('verse-display');

// Objeto que guarda os versículos para cada sentimento
const verses = {
    // Adicione todos os seus sentimentos e seus versículos aqui
    'Angry': "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
    'Critical': "Do not judge, or you too will be judged. (Matthew 7:1)",
    'Jealous': "Love is patient, love is kind. It does not envy... (1 Corinthians 13:4)",
    'Frustrated': "Cast all  your anxiety on him because he cares for you. (1 Peter 5:7)",
    'Hurt': "He heals the brokenhearted and binds up their wounds. (Psalm 147:3)",
    'Annoyed': "Let your gentleness be evident to all. The Lord is near. (Philippians 4:5)"
};

// Adiciona um 'escutador' de clique para cada botão de sentimento
feelingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega o nome do botão clicado (ex: "Critical")
        const feeling = button.innerText;

        // Procura o versículo correspondente no objeto 'verses'
        const verse = verses[feeling];

        // Se o versículo existir, atualiza o conteúdo da div
        if (verse) {
            verseDisplay.innerText = verse;
        } else {
            verseDisplay.innerText = "Versículo não encontrado. Por favor, adicione-o!";
        }
    });
});