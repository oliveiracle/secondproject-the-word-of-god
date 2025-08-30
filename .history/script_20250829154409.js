// ===================================================================================
//  1. GET HTML ELEMENTS
// ===================================================================================
const startButton = document.getElementById('feeling-btn');
const feelingsContainer = document.getElementById('feelings-container');
const feelingButtons = document.querySelectorAll('.feeling-btn');
const verseDisplay = document.getElementById('verse-display');
const backButton = document.getElementById('back-btn'); // Nosso novo botão

// ===================================================================================
//  2. VERSE LIBRARY (COMPLETE)
// ===================================================================================
// (A sua biblioteca de versículos completa vai aqui...)
const verses = {
    // ...
};

// ===================================================================================
//  3. CLICK LOGIC (BASIC VERSION)
// ===================================================================================

// --- What happens when the MAIN BUTTON is clicked ---
startButton.addEventListener('click', () => {
    feelingsContainer.style.display = 'flex';
    verseDisplay.style.display = 'none';
});

// --- What happens when one of the FEELING BUTTONS is clicked ---
for (let i = 0; i < feelingButtons.length; i++) {
    const button = feelingButtons[i];
    button.addEventListener('click', () => {
        const feeling = button.innerText.split(' ')[0];
        const verseArray = verses[feeling];
        verseDisplay.style.display = 'block';
        feelingsContainer.style.display = 'none';

        if (verseArray) {
            // Limpa o conteúdo anterior, MAS MANTÉM O BOTÃO VOLTAR
            verseDisplay.innerHTML = '<button id="back-btn" class="feeling-btn">← Choose Another Feeling</button>';
            
            const formattedVerses = verseArray.join('<br><br>');
            // Insere os versículos ANTES do botão "Voltar"
            backButton.insertAdjacentHTML('beforebegin', formattedVerses + '<br><br>');
        } else {
            verseDisplay.innerText = "No verses found for this feeling.";
        }
    });
}

// --- What happens when the BACK BUTTON is clicked ---
backButton.addEventListener('click', () => {
    verseDisplay.style.display = 'none';
    feelingsContainer.style.display = 'flex';
});