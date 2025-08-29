const startButton = document.getElementById('start-btn');
const categoryButtons = document.getElementById('category-buttons');
const passageDisplay = document.getElementById('passage-display');

// Objeto com passagens bíblicas de exemplo
const passages = {
    critical: "Efésios 4:26 - 'Irai-vos, e não pequeis; não se ponha o sol sobre a vossa ira.'",
    jealous: "Tiago 3:16 - 'Pois onde há inveja e sentimento faccioso, aí há confusão e toda obra má.'",
    frustrated: "Salmos 37:8 - 'Deixa a ira, abandona o furor; não te impacientes.'",
    hurt: "Salmos 147:3 - 'Ele sara os de coração quebrantado e lhes pensa as feridas.'",
    annoyed: "Provérbios 15:1 - 'A resposta branda desvia o furor.'",
    loving: "1 Coríntios 13:4 - 'O amor é paciente, é benigno.'",
    thoughtful: "Filipenses 4:8 - 'Tudo o que é verdadeiro, pensai nisso.'",
    grateful: "1 Tessalonicenses 5:18 - 'Em tudo dai graças.'",
    trusting: "Provérbios 3:5 - 'Confia no Senhor de todo o teu coração.'",
    virtue: "2 Pedro 1:5 - 'Acrescentai à vossa fé a virtude.'",
    insecure: "Salmos 23:4 - 'Ainda que eu ande pelo vale da sombra da morte, não temerei.'",
    anxious: "Filipenses 4:6 - 'Não andeis ansiosos por coisa alguma.'",
    rejected: "João 15:18 - 'Se o mundo vos odeia, sabei que primeiro me odiou.'",
    confused: "1 Coríntios 14:33 - 'Deus não é Deus de confusão, mas de paz.'",
    helpless: "Salmos 46:1 - 'Deus é o nosso refúgio e fortaleza.'",
    worthy: "Efésios 2:10 - 'Somos feitura sua, criados para boas obras.'",
    respected: "1 Pedro 2:17 - 'Honrai a todos, amai a fraternidade.'",
    proud: "Provérbios 16:18 - 'A soberba precede a ruína.'",
    confident: "Hebreus 10:35 - 'Não abandoneis a vossa confiança.'",
    important: "Jeremias 29:11 - 'Conheço os planos que tenho para vocês.'",
    inspired: "Salmos 119:105 - 'Lâmpada para os meus pés é a tua palavra.'",
    creative: "Gênesis 1:1 - 'No princípio, criou Deus os céus e a terra.'",
    hopeful: "Romanos 15:13 - 'Que o Deus da esperança vos encha de gozo.'",
    energetic: "Isaías 40:31 - 'Os que esperam no Senhor renovarão as suas forças.'",
    joyful: "Salmos 16:11 - 'Na tua presença há plenitude de alegria.'",
    bored: "Eclesiastes 3:1 - 'Tudo tem o seu tempo determinado.'",
    lonely: "Deuteronômio 31:6 - 'Não vos deixarei, nem vos desampararei.'",
    ashamed: "Romanos 8:1 - 'Nenhuma condenação há para os que estão em Cristo.'",
    depressed: "Salmos 34:18 - 'Perto está o Senhor dos que têm o coração quebrantado.'",
    guilty: "1 João 1:9 - 'Se confessarmos os nossos pecados, ele é fiel para nos perdoar.'"
};

// Função para animar scale e fade
function animateScaleFade(element, show, callback) {
    if (show) {
        element.style.display = element.tagName === 'DIV' ? 'grid' : 'block';
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        let opacity = 0;
        let scale = 0.8;
        const animate = () => {
            opacity += 0.05;
            scale += 0.01;
            element.style.opacity = opacity;
            element.style.transform = `scale(${scale})`;
            if (opacity < 1) {
                requestAnimationFrame(animate);
            } else if (callback) {
                callback();
            }
        };
        requestAnimationFrame(animate);
    } else {
        let opacity = 1;
        let scale = 1;
        const animate = () => {
            opacity -= 0.05;
            scale -= 0.01;
            element.style.opacity = opacity;
            element.style.transform = `scale(${scale})`;
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
                if (callback) callback();
            }
        };
        requestAnimationFrame(animate);
    }
}

// Função para resetar até as categorias
function resetToCategories() {
    animateScaleFade(passageDisplay, false, () => {
        document.querySelectorAll('.subcategory-buttons').forEach(sub => {
            animateScaleFade(sub, false);
        });
        animateScaleFade(categoryButtons, true, () => {
            document.querySelectorAll('.category').forEach((cat, i) => {
                setTimeout(() => {
                    cat.style.opacity = '0';
                    cat.style.transform = 'scale(0.8)';
                    animateScaleFade(cat, true);
                }, i * 100);
            });
        });
    });
}

// Função para resetar até o botão inicial
function resetToMain() {
    animateScaleFade(passageDisplay, false, () => {
        document.querySelectorAll('.subcategory-buttons').forEach(sub => {
            animateScaleFade(sub, false);
        });
        animateScaleFade(categoryButtons, false);
    });
}

// Evento do botão inicial
startButton.addEventListener('click', () => {
    if (categoryButtons.style.display === 'grid') {
        resetToMain();
    } else {
        animateScaleFade(categoryButtons, true, () => {
            document.querySelectorAll('.category').forEach((cat, i) => {
                setTimeout(() => {
                    cat.style.opacity = '0';
                    cat.style.transform = 'scale(0.8)';
                    animateScaleFade(cat, true);
                }, i * 100);
            });
        });
    }
});

// Eventos para os títulos de categoria
document.querySelectorAll('.category-title').forEach(h3 => {
    h3.addEventListener('click', () => {
        const subcategory = h3.nextElementSibling;
        const isVisible = subcategory.style.display === 'flex';
        
        if (isVisible) {
            animateScaleFade(subcategory, false);
        } else {
            document.querySelectorAll('.subcategory-buttons').forEach(sub => {
                animateScaleFade(sub, false);
            });
            animateScaleFade(subcategory, true, () => {
                Array.from(subcategory.children).forEach((btn, i) => {
                    setTimeout(() => {
                        btn.style.opacity = '0';
                        btn.style.transform = 'scale(0.8)';
                        animateScaleFade(btn, true);
                    }, i * 100);
                });
            });
        }
    });
});

// Eventos para os botões de subcategoria
document.querySelectorAll('.sub-btn').forEach(button => {
    button.addEventListener('click', () => {
        const subcategory = button.getAttribute('data-subcategory');
        passageDisplay.textContent = passages[subcategory];
        animateScaleFade(categoryButtons, false, () => {
            animateScaleFade(passageDisplay, true);
        });
    });
});

// Evento para clicar na passagem e voltar às categorias
passageDisplay.addEventListener('click', resetToCategories);

// Animação inicial do botão start
animateScaleFade(startButton, true);