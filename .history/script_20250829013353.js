// Pega todos os botões de categoria e os grupos de subcategorias
const categoryButtons = document.querySelectorAll('.category-btn');
const subcategoryGroups = document.querySelectorAll('.subcategory-group');

// Pega a área onde o versículo será exibido
const verseDisplay = document.getElementById('verse-display');

// Objeto que guarda os versículos para cada sentimento
const verses = {
    // Versículos para a categoria Angry
    'Critical': "Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely... (Philippians 4:8)",
    'Jealous': "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. (1 Corinthians 13:4)",
    'Frustrated': "Come to me, all you who are weary and burdened, and I will give you rest. (Matthew 11:28)",
    'Hurt': "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
    'Annoyed': "Be completely humble and gentle; be patient, bearing with one another in love. (Ephesians 4:2)",

    // Versículos para a categoria Peaceful
    'Loving': "A new command I give you: Love one another. As I have loved you, so you must love one another. (John 13:34)",
    'Thoughtful': "The plans of the diligent lead to profit as surely as haste leads to poverty. (Proverbs 21:5)",
    'Grateful': "Give thanks to the Lord, for he is good; his love endures forever. (Psalm 107:1)",
    // Adicione aqui todos os outros versículos...
    'Bored': "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. (Philippians 4:6)",
    'Lonely': "God sets the lonely in families. (Psalm 68:6)",
    'Ashamed': "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God. (2 Corinthians 5:21)",
    'Depressed': "I waited patiently for the Lord; he turned to me and heard my cry. (Psalm 40:1)",
    'Guilty': "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. (1 John 1:9)",
};


// 1. Lógica para MOSTRAR/ESCONDER os grupos de subcategorias
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Esconde todos os grupos
        subcategoryGroups.forEach(group => {
            group.classList.remove('active');
        });

        // Mostra apenas o grupo que corresponde ao botão clicado
        const targetGroupId = button.id.replace('-btn', '-group');
        const targetGroup = document.getElementById(targetGroupId);
        if (targetGroup) {
            targetGroup.classList.add('active');
        }
    });
});

// 2. Lógica para EXIBIR o versículo quando um botão de sentimento é clicado
const feelingButtons = document.querySelectorAll('.feeling-btn');
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