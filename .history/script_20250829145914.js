// ===================================================================================
//  1. ENCONTRAR OS ELEMENTOS HTML
// ===================================================================================
const startButton = document.getElementById('feeling-btn');
const feelingsContainer = document.getElementById('feelings-container');
const feelingButtons = document.querySelectorAll('.feeling-btn');
const verseDisplay = document.getElementById('verse-display');

// ===================================================================================
//  2. BIBLIOTECA DE VERSÍCULOS
// ===================================================================================
const verses = {
    'Angry': [
        "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
        "In your anger do not sin: Do not let the sun go down while you are still angry. (Ephesians 4:26)",
        "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel. (Proverbs 15:18)",
        "The discretion of a man makes him slow to anger, and his glory is to overlook a transgression. (Proverbs 19:11)",
        "Do not be quickly provoked in your spirit, for anger resides in the lap of fools. (Ecclesiastes 7:9)"
    ],
    'Peaceful': [
        "Peace I leave with you; my peace I give you. (John 14:27)",
        "He will keep in perfect peace those whose minds are steadfast, because they trust in him. (Isaiah 26:3)",
        "The Lord gives strength to his people; the Lord blesses his people with peace. (Psalm 29:11)",
        "You will go out in joy and be led forth in peace. (Isaiah 55:12)",
        "Let the peace of Christ rule in your hearts. (Colossians 3:15)"
    ],
    // (Cole aqui o resto da sua biblioteca de versículos completa)
    // ...
};

// ===================================================================================
//  3. LÓGICA DOS CLIQUES (VERSÃO BÁSICA)
// ===================================================================================

// --- O que acontece quando o BOTÃO PRINCIPAL é clicado ---
startButton.addEventListener('click', () => {
    // Mostra o container com os botões de sentimento.
    // Para esconder, o utilizador pode clicar num sentimento, o que esconde os outros.
    feelingsContainer.style.display = 'flex';
    
    // Esconde a caixa de versículos, caso estivesse aberta.
    verseDisplay.style.display = 'none';
});


// --- O que acontece quando um dos BOTÕES DE SENTIMENTO é clicado ---

// Usamos um loop 'for' clássico, que é um dos primeiros conceitos que se aprende.
for (let i = 0; i < feelingButtons.length; i++) {
    const button = feelingButtons[i];

    button.addEventListener('click', () => {
        // 1. Pega o nome do sentimento a partir do texto do botão.
        const feeling = button.innerText.split(' ')[0];

        // 2. Procura na nossa biblioteca pela lista de versículos correspondente.
        const verseArray = verses[feeling];

        // 3. Mostra a caixa de versículos (verseDisplay).
        verseDisplay.style.display = 'block';

        // 4. Esconde o container dos botões de sentimento para uma tela mais limpa.
        feelingsContainer.style.display = 'none';

        // 5. Verifica se encontrámos uma lista de versículos.
        if (verseArray) {
            // Junta todos os versículos da lista num único bloco de texto,
            // separados por duas quebras de linha (<br><br>).
            const formattedVerses = verseArray.join('<br><br>');

            // Coloca todo o bloco de texto de uma só vez dentro da caixa de exibição.
            verseDisplay.innerHTML = formattedVerses;

        } else {
            // Se não encontrarmos versículos, mostra uma mensagem de erro.
            verseDisplay.innerText = "No verses found for this feeling.";
        }
    });
}