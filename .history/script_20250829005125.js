 <script>
        const startButton = document.getElementById('start-btn');
        const categoryButtons = document.getElementById('category-buttons');
        const passageDisplay = document.getElementById('passage-display');

        // Objeto com passagens bíblicas de exemplo (substitua pelos versículos reais)
        const passages = {
            alegre: "Salmos 16:11 - 'Tu me farás ver os caminhos da vida; na tua presença há plenitude de alegria.'",
            raiva: "Efésios 4:26 - 'Irai-vos, e não pequeis; não se ponha o sol sobre a vossa ira.'",
            triste: "Salmos 34:18 - 'Perto está o Senhor dos que têm o coração quebrantado.'",
            depressivo: "Mateus 11:28 - 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.'"
        };

        // Função para fechar as passagens e mostrar os botões de categoria
        function resetToCategories() {
            passageDisplay.classList.remove('visible');
            setTimeout(() => {
                passageDisplay.style.display = 'none';
                categoryButtons.classList.add('visible');
            }, 500);
        }

        // Evento do botão inicial
        startButton.addEventListener('click', () => {
            categoryButtons.classList.toggle('visible');
            if (!categoryButtons.classList.contains('visible')) {
                passageDisplay.classList.remove('visible');
                setTimeout(() => {
                    passageDisplay.style.display = 'none';
                }, 500);
            }
        });

        // Evento para botões de categoria
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                passageDisplay.textContent = passages[category];
                categoryButtons.classList.remove('visible');
                setTimeout(() => {
                    passageDisplay.style.display = 'block';
                    setTimeout(() => {
                        passageDisplay.classList.add('visible');
                    }, 10);
                }, 500);

                // Adiciona um clique no texto da passagem para voltar aos botões
                passageDisplay.onclick = resetToCategories;
            });
        });
    </script